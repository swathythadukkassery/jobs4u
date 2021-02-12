import React, {useState, useEffect} from "react";
import jobData from './dummyData'
import { Box, ThemeProvider, Grid, CircularProgress } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";
import JobModel from "./components/Job/JobModel";
import { firestore } from "./firebase/config";
import Page2 from "./components/Page2/Page2";
import Page1 from "./components/Page1/Page1";
export default () => {
  
  return <ThemeProvider theme = {theme}>
    <Page1/>

     </ThemeProvider>
};
