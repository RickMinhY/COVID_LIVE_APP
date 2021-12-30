import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// DASHBOARDS

import AnalyticsDashboard from "./Analytics/";
import SalesDashboard from "./Sales/";
import CommerceDashboard from "./Commerce/";
import CRMDashboard from "./CRM/";
import MinimalDashboard1 from "./Minimal/Variation1";
import MinimalDashboard2 from "./Minimal/Variation2";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";
import COVIDDashBoard from "./COVID";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";

const Dashboards = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main" style={{backgroundColor:"#fff"}}>
      {/* <AppSidebar /> */}
        <div className="app-main__inner">
          <Route path={`${match.url}/`} component={COVIDDashBoard}/>
        </div>
        {/* <AppFooter /> */}
    </div>
  </Fragment>
);

export default Dashboards;
