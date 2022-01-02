import React, { Fragment } from "react";
import cx from "classnames";

import { connect } from "react-redux";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

class Header extends React.Component {
  render() {
    let {
      headerBackgroundColor,
      enableMobileMenuSmall,
      enableHeaderShadow,
    } = this.props;
    return (
      <Fragment>
        <CSSTransitionGroup component="div"
          className={cx("app-header", headerBackgroundColor, {
            "header-shadow": enableHeaderShadow,
          })}
          transitionName="HeaderAnimation" transitionAppear={true} transitionAppearTimeout={1500}
          transitionEnter={false} transitionLeave={false}>
          {/* <HeaderLogo /> */}
          <div className={cx("app-header__content", {
            "header-mobile-open": enableMobileMenuSmall,
          })}>
            <a href="/">
              <h4 className="font-weight-bold" style={{ color: "#ffdf0e" }}>
                CỔNG THÔNG TIN COVID-19 VIỆT NAM
              </h4>
            </a>

            <div className="app-header-right">
              <Nav>
                <NavLink active href="#/RequestForm/HealthDeclaration" className="text-light">
                  Tờ khai Y tế
                </NavLink>
                <NavLink href="#/RequestForm/Vacxin" className="text-light">
                  Tờ khai Vắc-xin
                </NavLink>
              </Nav>
            </div>
          </div>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
