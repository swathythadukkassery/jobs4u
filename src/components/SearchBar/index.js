import React from 'react';
import {Box, Select, MenuItem, Button, makeStyles, FilledInput, Grid} from '@material-ui/core'

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
    const classes = useStyles();
    const skills = [
        "Python",
        "JS",
        "React",
        "Azure",
        "Firebase",
        "English"
    ];
    return (
        <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
            

            <Select disableUnderline variant = "filled" defaultValue="Full Time">
                <MenuItem value="Full Time">Full Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            <Select disableUnderline variant = "filled" defaultValue="Remote">
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-Office">In-Office</MenuItem>
            </Select>
            <Select disableUnderline variant = "filled" defaultValue="Women Back To Work">
                <MenuItem value="Women Back To Work">Women Back To Work</MenuItem>
                <MenuItem value="IT&Technology">IT&Technology</MenuItem>
                <MenuItem value="Sales&Retail">Sales&Retail</MenuItem>
                <MenuItem value="Cook">Cook</MenuItem>
                <MenuItem value="Driver">Driver</MenuItem>
                <MenuItem value="Technician">Technician</MenuItem>
            </Select>
            <Button variant="contained" color="primary">Search</Button>
            
        </Box>

    )
}