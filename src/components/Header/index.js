//head section of the webpage
import {Link } from "react-router-dom";
import React from 'react';
import {Box, Grid, Typography, Button} from '@material-ui/core'
import Page1 from "../Page1/Page1"

export default props => {
    return(
        
    <Box py={10} bgcolor="secondary.main" color="white" >

        
    <Grid container justify="center">
        
        <Grid item xs={10}>
        <Box display="flex" justifyContent="space-between">
        <Box display="flex">
            <Typography variant="h4" >Jobs
            </Typography>
            <Typography variant="h4" color="primary">4
            </Typography>
            <Typography variant="h4">U
            </Typography>
            
            </Box>
            <Box display="flex" justifyContent="space-between">
            <Button onClick={props.openAlert} variant="contained" color="primary">Create Alert</Button>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={props.openModel} variant="contained" color="primary">Post a Job</Button>
            &nbsp;&nbsp;&nbsp;
            <Link to="/Page1" style={{ textDecoration: 'none' }}>
        <Button variant="contained" >Home</Button>
        </Link>
            </Box>
            
        </Box>
        </Grid>
    </Grid>
    
</Box>
    )
}