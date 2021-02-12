import React, {useState} from 'react';
import {Box, Typography, 
    makeStyles, Grid, 
    FilledInput, IconButton,
    Select, MenuItem, Dialog,
     DialogTitle, DialogContent, 
     DialogActions, Button, CircularProgress} from '@material-ui/core'
import {Close as CloseIcon } from '@material-ui/icons';

export default props=> (
    <Dialog fullWidth>
        <DialogTitle  >
                <Box display="flex" justifyContent="space-between"
                alignItems="center">
                Post Job
                <IconButton >
                    <CloseIcon/>
                </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                
            </DialogContent>
            <DialogActions>
                    
                </DialogActions>
    </Dialog>
)