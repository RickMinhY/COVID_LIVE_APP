import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Dashboards = lazy(() => import("../../DemoPages/Dashboards"));
const RequestForm = lazy(() => import("../../DemoPages/RequestForm"));
const VacxinPassport = lazy(() => import("../../DemoPages/VacxinPassport"));

const AppMain = () => {
    return (
        <Fragment>

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-pulse-rise" />
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Forms examples
                            <small>Because this is a demonstration we load at once all the Forms examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/RequestForm" component={RequestForm} />
            </Suspense>


            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-grid-cy" />
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all the Dashboards examples
                            <small>Because this is a demonstration, we load at once all the Dashboards examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/dashboards" component={Dashboards} />
            </Suspense>

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-pulse-rise" />
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Forms examples
                            <small>Because this is a demonstration we load at once all the Forms examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/VacxinPassport" component={VacxinPassport} />
            </Suspense>


            <Route exact path="/" render={() => (
                <Redirect to="/dashboards/" />
            )} />
            <ToastContainer />
        </Fragment>
    )
};

export default AppMain;
