import React, {useState} from 'react';
import {Box, Typography, 
    makeStyles, Grid, 
    FilledInput, IconButton,
    Select, MenuItem, Dialog,
     DialogTitle, DialogContent, 
     DialogActions, Button, CircularProgress} from '@material-ui/core'
import {Close as CloseIcon } from '@material-ui/icons';


const useStyles = makeStyles((theme)=>({
    title:{
        color: theme.palette.secondary.main,
        font:600,
    },
    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5 px",
        borderRadius: "5px",
        transition: ".3s",
        cursor: "pointer",
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color: "theme.palette.secondary.main",
        cursor :'pointer',
        '&:hover':{
            backgroundColor: theme.palette.secondary.main,
            color: "#fff",
        }

    },
    included :{
        backgroundColor: theme.palette.secondary.main,
            color: "#fff",
    }
}))

const initState = {title: "",
type: "[Full Time]",
companyName: "[Women]",
companyURL : "",
location : "[Remote]",
link : "",
description : "",
skills: [],}

export default (props) =>{
    const [loading, setLoading] = useState(false)
    const [jobDetails, setJobDetails] = useState(initState);

    const handleChange = e => {
        e.persist();
        setJobDetails(oldState =>({ ...oldState, [e.target.name] : [e.target.value]}))
    }

    const addRemoveSkill = skill=> 
        jobDetails.skills.includes(skill)
        ? setJobDetails(oldState=>(
            {...oldState, 
                skills : oldState.skills.filter(s => s !=skill )
            }))
        : setJobDetails(oldState =>({...oldState, skills : oldState.skills.concat(skill)}));
    
    const handleSubmit = async () =>
    {
        for (const field in jobDetails){
           if(typeof jobDetails[field]== 'string' && !jobDetails[field]) return;
        }
        setLoading(true);
        await props.postJob(jobDetails);
        closeModel();
    }

    const closeModel = () =>{
        setJobDetails(initState)
        setLoading(false)
        props.closeModel();
    }
  
    const classes = useStyles();
    const skills = [
        "English",
        "TeamWork",
        "ProblemSolving",
        "BasicMaths",
        "WebDev",
        "Communication",
    ];

    return(
        <Dialog open={props.newJobModel} fullWidth>
            <DialogTitle className={classes.title} >
                <Box display="flex" justifyContent="space-between"
                alignItems="center">
                Post Job
                <IconButton onClick={closeModel}>
                    <CloseIcon/>
                </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput 
                        onChange={handleChange}
                        autoComplete='off'
                        name = "title"
                        value = {jobDetails.title}
                        placeholder="Job Title*" disableUnderline fullWidth/>

                    </Grid>
                    <Grid item xs={6}>
                    <Select 
                    onChange={handleChange}
                    name = "type"
                    value = {jobDetails.type}
                    fullWidth disableUnderline variant = "filled" defaultValue="Full Time">
                        <MenuItem value="Full Time">Full Time</MenuItem>
                        <MenuItem value="Part Time">Part Time</MenuItem>
                        <MenuItem value="Contract">Contract</MenuItem>
            </Select>

                    </Grid>
                    <Grid item xs={6}>
                        <Select 
                        onChange={handleChange}
                        name = "companyName"
                        value = {jobDetails.companyName}
                        fullWidth
                        disableUnderline variant = "filled">
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="IT&Technology">IT&Technology</MenuItem>
                <MenuItem value="Sales&Retail">Sales&Retail</MenuItem>
                <MenuItem value="Cook">Cook</MenuItem>
                <MenuItem value="Driver">Driver</MenuItem>
                <MenuItem value="Technician">Technician</MenuItem>
                
            </Select>

                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange}
                        name = "companyURL"
                        autoComplete='off'
                        value = {jobDetails.companyURL}
                        placeholder="Company Name*" disableUnderline fullWidth/>

                    </Grid>
                    <Grid item xs={6}>
                    <Select
                    onChange={handleChange}
                    name = "location"
                    value = {jobDetails.location}
                    fullWidth disableUnderline variant = "filled">
                        <MenuItem value="Remote">Remote</MenuItem>
                        <MenuItem value="In-Office">In-Office</MenuItem>
                    </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange}
                        name = "link"
                        autoComplete='off'
                        value = {jobDetails.link}
                        placeholder="Job Link*" disableUnderline fullWidth/>

                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput
                        onChange={handleChange}
                        name = "description"
                        autoComplete='off'
                        value = {jobDetails.description}
                        placeholder="Job description*" 
                        disableUnderline
                         fullWidth
                         multiline
                         rows={4}/>

                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Skills</Typography>
                    <Box display="flex">
                        {skills.map(skill => 
                        <Box onClick={() => addRemoveSkill(skill)} 
                        className={`${classes.skillChip} 
                        ${jobDetails.skills.includes(skill) && classes.included}`} 
                        key={skill}> {skill} </Box>)}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box color="red" 
                display="flex" 
                width="100%" 
                justifyContent="space-between"
                alignItems="center">
                    <Typography variant="caption" >*required field</Typography>
                    <Button onClick={handleSubmit} variant="contained" 
                    disableElevation color="primary"
                    disabled={loading}
                    >
                        {loading? (<CircularProgress color="secondary.main" size={22}/>)
                        : ("Post Job"
                        )}
                        
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}