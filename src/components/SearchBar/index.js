import React, { useState } from 'react';
import {Box, Select, MenuItem, Button, makeStyles, FilledInput, Grid, CircularProgress} from '@material-ui/core'

const useStyles = makeStyles({
    wrapper:{
        backgroundColor: "white",
        display: "flex",
        boxShadow: "0px 1px 5px rgba(1, 1, 1, 1)",
        borderRadius: "5px",
     
        "& > *" :{
            
            flex: 1,
            height: "45px",
            margin : '8px',
        },
        
    },
})

export default props=> {
    const [loading, setLoading] = useState(false)
    const [jobSearch, setJobSearch] = useState({
        type: 'Full Time',
        location: 'Remote',
        companyName: 'Women',

    });
    const handleChange = (e) => {
        e.persist();
        setJobSearch(oldState =>(
            { ...oldState, [e.target.name] : [e.target.value]}));
    };
    
    const search = async ()=>{
        setLoading(true);
        await props.fetchJobsCustom(jobSearch);
        setLoading(false);
    }

    const classes = useStyles();
    
    return (
        <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
            

            <Select onChange={handleChange} value={jobSearch.type} name="type" disableUnderline variant = "filled" >
                <MenuItem value="Full Time">Full Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            <Select onChange={handleChange} value={jobSearch.location} name="location" disableUnderline variant = "filled" >
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-Office">In-Office</MenuItem>
            </Select>
            <Select onChange={handleChange} value={jobSearch.companyName} name="companyName" disableUnderline variant = "filled" >
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="IT&Technology">IT&Technology</MenuItem>
                <MenuItem value="Sales&Retail">Sales&Retail</MenuItem>
                <MenuItem value="Cook">Cook</MenuItem>
                <MenuItem value="Driver">Driver</MenuItem>
                <MenuItem value="Technician">Technician</MenuItem>
            </Select>
            <Button disabled={loading} 
            variant="contained" color="primary"
            disableElevation
            onClick={search}>
            {loading? (<CircularProgress color="secondary" size={22}/>)
                        : ("Search"
                        )}</Button>
            
        </Box>

    )
}