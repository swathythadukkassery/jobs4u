import React, {useState, useEffect} from "react";
import jobData from '../../dummyData'
import { Box, ThemeProvider, Grid, CircularProgress, Button } from "@material-ui/core";
import theme from "../../theme/theme";
import Header from "../Header";
import SearchBar from "../SearchBar";
import JobCard from "../Job/JobCard";
import JobModel from "../Job/JobModel";
import { firestore, app } from "../../firebase/config";
import Alert from "../Job/Alert"
import {Close as CloseIcon} from '@material-ui/icons';
import ViewJob from "../Job/ViewJob";

export default props => {
  const [customSearch, setCustomSearch] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newJobModel, setNewJobModel] = useState(false)
  const [newAlertModel, setNewAlertModel] = useState(false)

  const fetchJobs = async() => {
    setCustomSearch(false)
    setLoading(true);
    
    const req = await firestore.collection("jobs").orderBy("postedOn", "desc").get();
    const tempJobs = req.docs.map((job) => ({...job.data(), id : job.id, postedOn: job.data().postedOn.toDate() }));
    console.log(tempJobs)
    setJobs(tempJobs);
    setLoading(false);
  };

  const fetchJobsCustom = async (jobSearch) =>{
    setCustomSearch(true);
    setLoading(true);
    const req = await firestore.collection("jobs")
    .orderBy("postedOn", "desc")
    .where("location", "==", jobSearch.location)
    .where("type", "==", jobSearch.type)
    .where("companyName", "==", jobSearch.companyName)
    .get();
    const tempJobs = req.docs.map((job) => ({...job.data(), id : job.id, postedOn: job.data().postedOn.toDate() }));
    setJobs(tempJobs);
    setLoading(false);
  }

  const postJob = async (jobDetails) => {
    await firestore.collection('jobs').add({
      ...jobDetails, 
      postedOn: app.firestore.FieldValue.serverTimestamp()
    })
    fetchJobs();
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return <ThemeProvider theme = {theme}>
    <Header openAlert={() => setNewAlertModel(true)} openModel={() => setNewJobModel(true)} />
    <JobModel closeModel={() => setNewJobModel(false)} newJobModel={newJobModel} postJob={postJob}/>
    <Alert closeAlert={() => setNewAlertModel(false)} newAlertModel={newAlertModel}/>
    <ViewJob />
    <Box mb={4}>
    <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar fetchJobsCustom={fetchJobsCustom}/>

        {
          loading ? 
          (<Box display="flex" justifyContent="center"> <CircularProgress/></Box>)
          :
          (
          <>
          {customSearch && (  
            <Box my={2} display="flex" justifyContent="flex-end">
            <Button onClick={fetchJobs}>
              <CloseIcon size={20}/>
              Custom Search
              </Button>
               </Box>
          )}
          {jobs.map((job) => (
            <JobCard key={job.id} {...job}/>
          ))
          }
            </>
            )}

         
        </Grid>
    </Grid>
    <Box mt={2} mb={2} display="flex" justifyContent="center">
    <Button variant="contained" color="secondary"
            disableElevation>
      Support
    </Button>
    </Box>
    </Box>
     </ThemeProvider>
};
