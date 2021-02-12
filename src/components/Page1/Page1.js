import React, {useState, useEffect} from "react";
import logo_size from "./ww.jpg";
import cook from "./cook.jpg";
import construction from "./sw.jpg";
import sw from "./construction.jpg";
import tech from "./delivery.jpg";
import call from "./call.jpg";
import theme from "./../../theme/theme";
import Page2 from "../Page2/Page2";
import {Link } from "react-router-dom";
import {Box, Typography, 
    makeStyles, Grid, Button, 
    Container} from '@material-ui/core'
import Header from "../Header";
import page2 from "../Page2/Page2";
import { render } from "@testing-library/react";



const useStyles = makeStyles((theme)=>({
    img:{
        cursor :'pointer',
        '&:hover':{
            color: "#fff",
        }
    },
    btn:{
        "&:hover":{
            backgroundColor: "#808080",
            opacity:0.7,
            },
    }
}))

export default props => {
    const classes = useStyles();
        return(
       <Box>
    <Box py={10} bgcolor="#05386B" color="white" >
    
    <Grid container justify="center">
        
        <Grid item xs={10}>
        <Box display="flex" justifyContent="center">
        
            <Typography variant="h2" >Jobs
            </Typography>
            <Typography variant="h2" color="primary">4
            </Typography>
            <Typography variant="h2">U
            </Typography>
        </Box>
        <Box>
            </Box>
    </Grid> 
    </Grid>
        
    </Box>
    <Box bgcolor="#5CDB95"  >
        <Box  container textAlign="center">
        <Typography variant="h4" >Top Roles Hired in 2021</Typography>
        </Box>
    <Box  mt={2} ml={2} mr={2} display="flex" justifyContent="space-between">
        
        <Grid container spacing={2}>
        
        <Grid container item xs={4} >
        <Link to="/jobs4u/Page2" style={{ textDecoration: 'none' }}>
        <Button className={classes.btn} variant="contained" >Women Back To Work</Button>
        </Link>
            <img src={logo_size} height={300} width={400} className={classes.img}/>
        
        </Grid>
        <Grid item xs={4} >
        <Link to="/jobs4u/Page2" style={{ textDecoration: 'none' }}>
            <Button className={classes.btn} variant="contained" >FireFighter</Button>
            </Link>
           <img src={cook} height={300} width={400} className={classes.img}/>
           
        </Grid>
        <Grid item xs={4} >
        <Link to="/jobs4u/Page2" style={{ textDecoration: 'none' }}>
        <Button className={classes.btn} variant="contained" >IT&Technology</Button>
        </Link>
           <img src={construction} height={300} width={400} className={classes.img}/>
           
        </Grid>
        <Grid item  xs={4}>
        <Link to="/jobs4u/Page2" style={{ textDecoration: 'none' }}>
        <Button className={classes.btn} 
        onClick={props.loading} 
        variant="contained" >Delivery and Driver</Button>
        </Link>
           <img src={tech} height={300} width={400} className={classes.img}/>
           
        </Grid>
        <Grid item xs={4} >
        <Link to="/jobs4u/Page2" style={{ textDecoration: 'none' }}>
        <Button className={classes.btn} variant="contained" >Construction</Button>
        </Link>
           <img src={sw} height={300} width={400} className={classes.img}/>
           
        </Grid>
        <Grid item xs={4} >
        <Link to="/jobs4u/Page2" style={{ textDecoration: 'none' }}>
        <Button className={classes.btn} variant="contained" >Call Center</Button>
        </Link>
           <img src={call} height={300} width={400} className={classes.img}/>
           
        </Grid>
        </Grid>
    </Box>
    </Box>

    </Box>

    );
}