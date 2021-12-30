import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import AnalyticsDashboard1 from "../COVID/Examples/Variation1";

export default function COVIDDashBoard() {
    return (
        <Fragment>
            <AnalyticsDashboard1 />
      </Fragment>
    )
}

