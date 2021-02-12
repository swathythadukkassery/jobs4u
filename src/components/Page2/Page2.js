import React, {useState, useEffect} from "react";
import jobData from '../../dummyData'
import { Box, ThemeProvider, Grid, CircularProgress } from "@material-ui/core";
import theme from "../../theme/theme";
import Header from "../Header";
import SearchBar from "../SearchBar";
import JobCard from "../Job/JobCard";
import JobModel from "../Job/JobModel";
import { firestore, app } from "../../firebase/config";
import Alert from "../Job/Alert"
export default props => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newJobModel, setNewJobModel] = useState(false)
  const [newAlertModel, setNewAlertModel] = useState(false)

  const fetchJobs = async() => {
    const req = await firestore.collection("jobs").orderBy("postedOn", "desc").get();
    const tempJobs = req.docs.map((job) => ({...job.data(), id : job.id, postedOn: job.data().postedOn.toDate() }));
    console.log(tempJobs)
    setJobs(tempJobs);
    setLoading(false);
  }
  const postJob = async jobDetails => {
    await firestore.collection('jobs').add({
      ...jobDetails, 
      postedOn: app.firestore.FieldValue.serverTimestamp()
    })
  }
  useEffect(() => {
    fetchJobs();
  }, []);
  return <ThemeProvider theme = {theme}>
    <Header openAlert={() => setNewAlertModel(true)} openModel={() => setNewJobModel(true)} />
    <JobModel closeModel={() => setNewJobModel(false)} newJobModel={newJobModel} postJob={postJob}/>
    <Alert closeAlert={() => setNewAlertModel(false)} newAlertModel={newAlertModel}/>
    <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar/>

        {
          loading ? 
          <Box display="flex" justifyContent="center"> <CircularProgress/></Box>
          :
          jobs.map((job) => (
            <JobCard key={job.id} {...job}/>))
        }

          
         
        </Grid>
    </Grid>
     </ThemeProvider>
};
