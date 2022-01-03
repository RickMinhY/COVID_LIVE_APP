import React, { Fragment } from "react";
import { Route } from "react-router-dom";


import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";
// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";
import VacxinPasspostView from "./VacxinPasspostView";


const VacxinPassport = ({ match }) => (
    <Fragment>
        {/* <ThemeOptions /> */}
        <AppHeader />
        <div className="app-main" style={{ backgroundColor: "#fff" }}>
            {/* <AppSidebar /> */}
            <div className="app-main__inner">
                <Route path={`${match.url}/`} component={VacxinPasspostView} />
            </div>
            {/* <AppFooter /> */}
        </div>
    </Fragment>
);

export default VacxinPassport;
