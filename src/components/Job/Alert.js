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
   
}))

export default (props) =>{
    const classes = useStyles();
    return(
        <Dialog open={props.newAlertModel} fullWidth>
            <DialogTitle className={classes.title} >
                <Box display="flex" justifyContent="space-between"
                alignItems="center">
                Create Alert
                <IconButton onClick={props.closeAlert}>
                    <CloseIcon/>
                </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FilledInput 
                        placeholder="Enter email address" disableUnderline fullWidth/>
                    </Grid>
                    </Grid>
            
                    <Box mt={2}>
                    <Typography>Difficulty in checking emails frequently? We will text you.</Typography>
                    </Box>
                    <Grid item xs={12}>
                        <FilledInput
                        placeholder="Enter phone number" disableUnderline fullWidth/>

                    </Grid>
                    
                
            </DialogContent>
            <DialogActions>
                <Box> 
                    <Button variant="contained" 
                    disableElevation color="primary"
                    onClick={props.closeAlert}
                    >Create Alert
                        
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}