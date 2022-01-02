import React, { Fragment } from "react";
import { Route } from "react-router-dom";


import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";
import VacxinForm from "./Form/VacxinForm";
import HealthDeclaration from "./Form/HealthDeclaration";
// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";

const RequestForm = ({ match }) => (
  <Fragment>
    {/* <ThemeOptions /> */}
    <AppHeader />
    <div className="app-main" style={{ backgroundColor: "#fff" }}>
      {/* <AppSidebar /> */}
      <div className="app-main__inner">
        <Route path={`${match.url}/Vacxin`} component={VacxinForm} />
        <Route path={`${match.url}/HealthDeclaration`} component={HealthDeclaration} />
      </div>
      {/* <AppFooter /> */}
    </div>
  </Fragment>
);

export default RequestForm;
