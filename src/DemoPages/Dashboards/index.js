import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import AppHeader from "../../Layout/AppHeader/";
import COVIDDashBoard from "./COVID";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";

const Dashboards = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main" style={{backgroundColor:"#fff"}}>
        <div className="app-main__inner">
          <Route path={`${match.url}/`} component={COVIDDashBoard}/>
        </div>
    </div>
  </Fragment>
);

export default Dashboards;
