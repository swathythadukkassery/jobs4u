import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter , Switch} from 'react-router-dom'
import "./index.css";
import App from "./App";
import Page1 from "./components/Page1/Page1";
import Page2 from "./components/Page2/Page2";
ReactDOM.render(
    <BrowserRouter>
       <Switch>
        <Route exact path="/jobs4u/" component={App} />
        <Route path="/jobs4u/Page1" component={Page1} />
        <Route path="/jobs4u/Page2" component={Page2} />
      </Switch>
      </BrowserRouter>
    , document.getElementById("root"));
