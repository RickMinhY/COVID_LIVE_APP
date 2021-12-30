import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Button,
  CardHeader,
  Container,
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter,
  CustomInput,
  Input,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  UncontrolledButtonDropdown,
  CardTitle,
} from "reactstrap";
import Flag from 'react-flagkit';
import LiquidFillGauge from "react-liquid-gauge";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CountUp from "react-countup";

import ReactTable from "react-table";

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../../assets/utils/images/avatars/2.jpg";

// import Ionicon from 'react-ionicons';
import { IoIosAnalytics } from "react-icons/io";

import PerfectScrollbar from "react-perfect-scrollbar";

import Slider from "react-slick";

import { makeData } from "../../../Tables/DataTables/Examples/utils";

import { ResponsiveContainer, AreaChart, Area } from "recharts";

import { Sparklines, SparklinesCurve } from "react-sparklines";
import { color } from "d3-color";
import {
  faAngleUp,
  faAngleDown,
  faCalendarAlt,
  faEllipsisH,
  faCheck,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { interpolateRgb } from "d3-interpolate";
import { Progress } from "react-sweet-progress";

import Select from "react-select";

const options = [
  { value: "1", label: "Today" },
  { value: "2", label: "Last Week" },
  { value: "3", label: "Last 30 Days" },
  { value: "4", label: "Last 3 Months" },
  { value: "5", label: "Last Year" },
];

const data55 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data552 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
];

const data553 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];


function boxMullerRandom() {
  let phase = true,
    x1,
    x2,
    w;

  return (function () {
    if (phase) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(10);
const sampleData2 = randomData(15);
const sampleData3 = randomData(8);
const sampleData4 = randomData(12);

export default class AnalyticsDashboard1 extends Component {
  constructor() {
    super();

    this.state = {
      data: makeData(),
      dropdownOpen: false,
      value: 60,
    };
    this.toggle = this.toggle.bind(this);
  }

  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }


  render() {
    const { selectedOption } = this.state;
    const { data } = this.state;

    const settings = {
      className: "",
      centerMode: false,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      dots: true,
    };

    const radius = 107;
    const interpolate = interpolateRgb("#6495ed", "#dc143c");
    const fillColor = interpolate(this.state.value / 100);
    const gradientStops = [
      {
        key: "0%",
        stopColor: color(fillColor).darker(0.5).toString(),
        stopOpacity: 1,
        offset: "0%",
      },
      {
        key: "50%",
        stopColor: fillColor,
        stopOpacity: 0.75,
        offset: "50%",
      },
      {
        key: "100%",
        stopColor: color(fillColor).brighter(0.5).toString(),
        stopOpacity: 0.5,
        offset: "100%",
      },
    ];

    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col md={8} className="">
              <Card className="mb-3 border border-info">
                <CardBody>
                  <CardTitle>
                    <Flag country={"VN"} className="mr-2" /> Thông tin tổng quan
                  </CardTitle>
                  <Row className="no-gutters">
                    <Col sm="6" md="4" xl="4">
                      <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg opacity-10 bg-danger" />
                          <i className="lnr-laptop-phone text-white opacity-9" />
                        </div>
                        <div className="widget-chart-content">
                          <div className="widget-subheading">Tổng số ca nhiễm</div>
                          <div className="widget-numbers text-danger">
                            <CountUp start={0} end={1694874} separator="," useEasing={false} suffix="" duration="5" />
                          </div>
                          <div className="widget-description opacity-8 text-danger">
                            <div className="d-inline text-danger pr-1">
                              <FontAwesomeIcon icon={faAngleUp} />
                              <span className="pl-1">54.1%</span>
                            </div>
                            less earnings
                          </div>
                        </div>
                      </div>
                      <div className="divider m-0 d-md-none d-sm-block" />
                    </Col>

                    <Col sm="6" md="4" xl="4">
                      <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg opacity-10 bg-success" />
                          <i className="lnr-laptop-phone text-white opacity-9" />
                        </div>
                        <div className="widget-chart-content">
                          <div className="widget-subheading">Ca phục hồi</div>
                          <div className="widget-numbers text-success">
                            <CountUp start={0} end={1694874} separator="," useEasing={false} suffix="" duration="5" />
                          </div>
                          <div className="widget-description opacity-8 text-success">
                            <div className="d-inline text-success pr-1">
                              <FontAwesomeIcon icon={faAngleUp} />
                              <span className="pl-1">54.1%</span>
                            </div>
                            less earnings
                          </div>
                        </div>
                      </div>
                      <div className="divider m-0 d-md-none d-sm-block" />
                    </Col>

                    <Col sm="6" md="4" xl="4">
                      <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg opacity-10 bg-secondary" />
                          <i className="lnr-laptop-phone text-white opacity-9" />
                        </div>
                        <div className="widget-chart-content">
                          <div className="widget-subheading">Tổng số ca tử vong</div>
                          <div className="widget-numbers text-secondary">
                            <CountUp start={0} end={1694874} separator="," useEasing={false} suffix="" duration="5" />
                          </div>
                          <div className="widget-description opacity-8 text-secondary">
                            <div className="d-inline text-secondary pr-1">
                              <FontAwesomeIcon icon={faAngleUp} />
                              <span className="pl-1">54.1%</span>
                            </div>
                            less earnings
                          </div>
                        </div>
                      </div>
                      <div className="divider m-0 d-md-none d-sm-block" />
                    </Col>

                  </Row>

                </CardBody>
                {/* <CardHeader className="card-header-tab z-index-6">
                  <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i className="header-icon lnr-charts icon-gradient bg-happy-green"> {" "} </i>
                    <Flag country={"VN"} className="mr-2" /> Thông tin tổng quan
                  </div>
                </CardHeader> */}


              </Card>
            </Col>

            <Col md={2} className="">
              <Card className="mb-3 border border-info">
                <CardBody>
                  <div className="progress-circle-wrapper">
                    <Progress type="circle" percent={1.8} width="100%" status="error"
                      theme={{
                        error: {
                          trailColor: "rgba(0,0,0,0.1)",
                          color: "var(--danger)",
                        },
                      }} />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={2} className="">
              <Card className="mb-3 border border-info">
                <CardBody>
                  <h5>
                    <LiquidFillGauge style={{ margin: "0 auto" }} width={radius} height={radius}
                      value={this.state.value} percent="" textSize={1} textOffsetX={0} textOffsetY={0}
                      textRenderer={(props) => {
                        const value = Math.round(props.value);
                        const radius = Math.min(
                          props.height / 2,
                          props.width / 2
                        );
                        const textPixels = (props.textSize * radius) / 2;
                        const valueStyle = {
                          fontSize: textPixels,
                        };
                        const percentStyle = {
                          fontSize: textPixels * 0.6,
                        };

                        return (
                          <tspan>
                            <tspan className="value" style={valueStyle}>
                              {value}
                            </tspan>
                            <tspan style={percentStyle}>
                              {50}
                            </tspan>
                          </tspan>
                        );
                      }}
                      riseAnimation waveAnimation waveFrequency={5} waveAmplitude={3} gradient
                      gradientStops={gradientStops}
                      circleStyle={{
                        fill: fillColor,
                      }}
                      waveStyle={{
                        fill: fillColor,
                      }}
                      textStyle={{
                        fill: color("#989fa4").toString(),
                      }}
                      waveTextStyle={{
                        fill: color("#fff").toString(),
                      }}
                    />
                  </h5>
                </CardBody>
              </Card>
            </Col>

            <Row>
              <Col sm="12" lg="6">
                <Card className="mb-3">
                  <CardHeader className="card-header-tab">
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                      <i className="header-icon lnr-cloud-download icon-gradient bg-happy-itmeo"> {" "} </i>
                      Technical Support
                    </div>

                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                      <UncontrolledButtonDropdown>
                        <DropdownToggle className="btn-icon btn-icon-only" color="link">
                          <i className="pe-7s-menu btn-icon-wrapper" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link">
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-inbox"> </i>
                            <span>Menus</span>
                          </DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-file-empty"> </i>
                            <span>Settings</span>
                          </DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-book"> </i>
                            <span>Actions</span>
                          </DropdownItem>
                          <DropdownItem divider />
                          <div className="p-3 text-right">
                            <Button className="mr-2 btn-shadow btn-sm" color="link">
                              View Details
                            </Button>
                            <Button className="mr-2 btn-shadow btn-sm" color="primary">
                              Action
                            </Button>
                          </div>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>
                  </CardHeader>
                  <CardBody className="p-0">
                    <div className="p-1 slick-slider-sm mx-auto">
                      <Slider {...settings}>
                        <div>
                          <div className="widget-chart widget-chart2 text-left p-0">
                            <div className="widget-chat-wrapper-outer">
                              <div className="widget-chart-content widget-chart-content-lg">
                                <div className="widget-chart-flex">
                                  <div className="widget-title opacity-5 text-muted text-uppercase">
                                    New accounts since 2018
                                  </div>
                                </div>
                                <div className="widget-numbers">
                                  <div className="widget-chart-flex">
                                    <div>
                                      <span className="opacity-10 text-success pr-2">
                                        <FontAwesomeIcon icon={faAngleUp} />
                                      </span>
                                      <CountUp start={0} end={78} separator="" decimals={0}
                                        decimal="" prefix="" duration="15" />
                                      <small className="opacity-5 pl-1">%</small>
                                    </div>
                                    <div className="widget-title ml-2 font-size-lg font-weight-normal text-muted">
                                      <span className="text-success pl-2">
                                        +14
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                <ResponsiveContainer height={140} width="100%">
                                  <AreaChart data={data55}
                                    margin={{
                                      top: -15,
                                      right: 0,
                                      left: 0,
                                      bottom: 0,
                                    }}>
                                    <Area type="monotoneX" dataKey="uv" stroke="var(--success)"
                                      strokeWidth="4" fill="var(--success)" fillOpacity=".2" />
                                  </AreaChart>
                                </ResponsiveContainer>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="widget-chart widget-chart2 text-left p-0">
                            <div className="widget-chat-wrapper-outer">
                              <div className="widget-chart-content widget-chart-content-lg">
                                <div className="widget-chart-flex">
                                  <div className="widget-title opacity-5 text-muted text-uppercase">
                                    Helpdesk Tickets
                                  </div>
                                </div>
                                <div className="widget-numbers">
                                  <div className="widget-chart-flex">
                                    <div>
                                      <span className="text-warning">34</span>
                                    </div>
                                    <div className="widget-title ml-2 font-size-lg font-weight-normal text-dark">
                                      <span className="opacity-5 text-muted pl-2 pr-1">
                                        5%
                                      </span>
                                      increase
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                <ResponsiveContainer height={140} width="100%">
                                  <AreaChart data={data552}
                                    margin={{
                                      top: -15,
                                      right: 0,
                                      left: 0,
                                      bottom: 0,
                                    }}>
                                    <Area type="monotoneX" dataKey="uv" stroke="var(--warning)"
                                      strokeWidth="4" fill="var(--warning)" fillOpacity=".2" />
                                  </AreaChart>
                                </ResponsiveContainer>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="widget-chart widget-chart2 text-left p-0">
                            <div className="widget-chat-wrapper-outer">
                              <div className="widget-chart-content widget-chart-content-lg">
                                <div className="widget-chart-flex">
                                  <div className="widget-title opacity-5 text-muted text-uppercase">
                                    Last Year Total Sales
                                  </div>
                                </div>
                                <div className="widget-numbers">
                                  <div className="widget-chart-flex">
                                    <div>
                                      <small className="opacity-3 pr-1">$</small>
                                      <span>629</span>
                                      <span className="text-primary pl-3">
                                        <FontAwesomeIcon icon={faAngleDown} />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                <ResponsiveContainer height={140} width="100%">
                                  <AreaChart data={data553}
                                    margin={{
                                      top: -15,
                                      right: 0,
                                      left: 0,
                                      bottom: 0,
                                    }}>
                                    <Area type="monotoneX" dataKey="uv" stroke="var(--primary)"
                                      strokeWidth="4" fill="var(--primary)" fillOpacity=".2" />
                                  </AreaChart>
                                </ResponsiveContainer>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                    <h6 className="text-muted text-uppercase font-size-md opacity-5 pl-3 pr-3 pb-1 font-weight-normal">
                      Sales Progress
                    </h6>
                    <ListGroup flush>
                      <ListGroupItem className="p-3 bg-transparent">
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-heading">Total Orders</div>
                                <div className="widget-subheading">
                                  Last year expenses
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="widget-numbers text-success">
                                  <small>$</small>
                                  1896
                                </div>
                              </div>
                            </div>
                            <div className="widget-progress-wrapper">
                              <Progress className="progress-bar-sm progress-bar-animated-alt" color="primary" value="43" />
                              <div className="progress-sub-label">
                                <div className="sub-label-left">YoY Growth</div>
                                <div className="sub-label-right">100%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" lg="6">
                <Card className="card-hover-shadow-2x mb-3">
                  <CardHeader className="card-header-tab">
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                      <i className="header-icon lnr-lighter icon-gradient bg-amy-crisp"> {" "} </i>
                      Timeline Example
                    </div>
                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                      <UncontrolledButtonDropdown>
                        <DropdownToggle className="btn-icon btn-icon-only" color="link">
                          <i className="pe-7s-menu btn-icon-wrapper" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link">
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-inbox"> </i>
                            <span>Menus</span>
                          </DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-file-empty"> </i>
                            <span>Settings</span>
                          </DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-book"> </i>
                            <span>Actions</span>
                          </DropdownItem>
                          <DropdownItem divider />
                          <div className="p-3 text-right">
                            <Button className="mr-2 btn-shadow btn-sm" color="link">
                              View Details
                            </Button>
                            <Button className="mr-2 btn-shadow btn-sm" color="primary">
                              Action
                            </Button>
                          </div>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>
                  </CardHeader>
                  <div className="scroll-area-lg">
                    <PerfectScrollbar>
                      <div className="p-4">
                        <VerticalTimeline layout="1-column">
                          <VerticalTimelineElement className="vertical-timeline-item"
                            icon={
                              <i className="badge badge-dot badge-dot-xl badge-success"> {" "} </i>
                            }
                            date="10:30 PM">
                            <h4 className="timeline-title">All Hands Meeting</h4>
                            <p>
                              Lorem ipsum dolor sic amet, today at{" "}
                              <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                                12:00 PM
                              </a>
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement className="vertical-timeline-item"
                            icon={
                              <i className="badge badge-dot badge-dot-xl badge-warning"> {" "} </i>
                            }
                            date="12:25 PM">
                            <p>
                              Another meeting today, at{" "}
                              <b className="text-danger">12:00 PM</b>
                            </p>
                            <p>
                              Yet another one, at{" "}
                              <span className="text-success">15:00 PM</span>
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement className="vertical-timeline-item"
                            icon={
                              <i className="badge badge-dot badge-dot-xl badge-danger"> {" "} </i>
                            }
                            date="15:00 PM">
                            <h4 className="timeline-title">
                              Build the production release
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amit,consectetur eiusmdd
                              tempor incididunt ut labore et dolore magna elit
                              enim at minim veniam quis nostrud
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement className="vertical-timeline-item"
                            icon={
                              <i className="badge badge-dot badge-dot-xl badge-primary"> {" "} </i>
                            }
                            date="15:00 PM">
                            <h4 className="timeline-title text-success">
                              Something not important
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amit,consectetur elit enim at
                              minim veniam quis nostrud
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement className="vertical-timeline-item"
                            icon={
                              <i className="badge badge-dot badge-dot-xl badge-success"> {" "} </i>
                            }
                            date="10:30 PM">
                            <h4 className="timeline-title">All Hands Meeting</h4>
                            <p>
                              Lorem ipsum dolor sic amet, today at{" "}
                              <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                                12:00 PM
                              </a>
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement className="vertical-timeline-item"
                            icon={
                              <i className="badge badge-dot badge-dot-xl badge-warning"> {" "} </i>
                            }
                            date="12:25 PM">
                            <p>
                              Another meeting today, at{" "}
                              <b className="text-danger">12:00 PM</b>
                            </p>
                            <p>
                              Yet another one, at{" "}
                              <span className="text-success">15:00 PM</span>
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement className="vertical-timeline-item"
                            icon={
                              <i className="badge badge-dot badge-dot-xl badge-danger"> {" "} </i>
                            }
                            date="15:00 PM">
                            <h4 className="timeline-title">
                              Build the production release
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amit,consectetur eiusmdd
                              tempor incididunt ut labore et dolore magna elit
                              enim at minim veniam quis nostrud
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement className="vertical-timeline-item"
                            icon={
                              <i className="badge badge-dot badge-dot-xl badge-primary"> {" "} </i>
                            }
                            date="15:00 PM">
                            <h4 className="timeline-title text-success">
                              Something not important
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amit,consectetur elit enim at
                              minim veniam quis nostrud
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement className="vertical-timeline-item"
                            icon={
                              <i className="badge badge-dot badge-dot-xl badge-success"> {" "} </i>
                            }
                            date="10:30 PM">
                            <h4 className="timeline-title">All Hands Meeting</h4>
                            <p>
                              Lorem ipsum dolor sic amet, today at{" "}
                              <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                                12:00 PM
                              </a>
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement className="vertical-timeline-item"
                            icon={
                              <i className="badge badge-dot badge-dot-xl badge-warning"> {" "} </i>
                            }
                            date="12:25 PM">
                            <p>
                              Another meeting today, at{" "}
                              <b className="text-danger">12:00 PM</b>
                            </p>
                            <p>
                              Yet another one, at{" "}
                              <span className="text-success">15:00 PM</span>
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement className="vertical-timeline-item"
                            icon={
                              <i className="badge badge-dot badge-dot-xl badge-danger"> {" "} </i>
                            }
                            date="15:00 PM">
                            <h4 className="timeline-title">
                              Build the production release
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amit,consectetur eiusmdd
                              tempor incididunt ut labore et dolore magna elit
                              enim at minim veniam quis nostrud
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement className="vertical-timeline-item"
                            icon={
                              <i className="badge badge-dot badge-dot-xl badge-primary"> {" "} </i>
                            }
                            date="15:00 PM">
                            <h4 className="timeline-title text-success">
                              Something not important
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amit,consectetur elit enim at
                              minim veniam quis nostrud
                            </p>
                          </VerticalTimelineElement>
                        </VerticalTimeline>
                      </div>
                    </PerfectScrollbar>
                  </div>
                  <CardFooter className="d-block text-center">
                    <Button className="btn-shadow btn-wide btn-pill" color="focus">
                      <div className="badge badge-dot badge-dot-lg badge-warning badge-pulse">
                        Badge
                      </div>
                      View All Messages
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="6" xl="3">
                <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-success border-success">
                  <div className="widget-chat-wrapper-outer">
                    <div className="widget-chart-content pt-3 pl-3 pb-1">
                      <div className="widget-chart-flex">
                        <div className="widget-numbers">
                          <div className="widget-chart-flex">
                            <div className="fsize-4">
                              <small className="opacity-5">$</small>
                              <CountUp start={0} end={874} separator="" decimals={0} decimal="" prefix="" duration="10" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6 className="widget-subheading mb-0 opacity-5">
                        sales last month
                      </h6>
                    </div>
                    <Row className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto">
                      <Col md="9">
                        <Sparklines data={sampleData}>
                          <SparklinesCurve
                            style={{
                              strokeWidth: 3,
                              stroke: "var(--success)",
                              fill: "none",
                            }} />
                        </Sparklines>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col md="6" xl="3">
                <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-primary border-primary">
                  <div className="widget-chat-wrapper-outer">
                    <div className="widget-chart-content pt-3 pl-3 pb-1">
                      <div className="widget-chart-flex">
                        <div className="widget-numbers">
                          <div className="widget-chart-flex">
                            <div className="fsize-4">
                              <small className="opacity-5">$</small>
                              <CountUp start={0} end={1283} separator="" decimals={0} decimal="" prefix="" duration="10" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6 className="widget-subheading mb-0 opacity-5">
                        sales Income
                      </h6>
                    </div>
                    <Row className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto">
                      <Col md="9">
                        <Sparklines data={sampleData2}>
                          <SparklinesCurve
                            style={{
                              strokeWidth: 3,
                              stroke: "var(--primary)",
                              fill: "none",
                            }} />
                        </Sparklines>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col md="6" xl="3">
                <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-warning border-warning">
                  <div className="widget-chat-wrapper-outer">
                    <div className="widget-chart-content pt-3 pl-3 pb-1">
                      <div className="widget-chart-flex">
                        <div className="widget-numbers">
                          <div className="widget-chart-flex">
                            <div className="fsize-4">
                              <small className="opacity-5">$</small>
                              <CountUp start={0} end={1286} separator="" decimals={0} decimal="" prefix="" duration="10" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6 className="widget-subheading mb-0 opacity-5">
                        last month sales
                      </h6>
                    </div>
                    <Row className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto">
                      <Col md="9">
                        <Sparklines data={sampleData3}>
                          <SparklinesCurve
                            style={{
                              strokeWidth: 3,
                              stroke: "var(--warning)",
                              fill: "none",
                            }} />
                        </Sparklines>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col md="6" xl="3">
                <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger">
                  <div className="widget-chat-wrapper-outer">
                    <div className="widget-chart-content pt-3 pl-3 pb-1">
                      <div className="widget-chart-flex">
                        <div className="widget-numbers">
                          <div className="widget-chart-flex">
                            <div className="fsize-4">
                              <small className="opacity-5">$</small>
                              <CountUp start={0} end={564} separator="" decimals={0} decimal="" prefix="" duration="10" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6 className="widget-subheading mb-0 opacity-5">
                        total revenue
                      </h6>
                    </div>
                    <Row className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto">
                      <Col md="9">
                        <Sparklines data={sampleData4}>
                          <SparklinesCurve
                            style={{
                              strokeWidth: 3,
                              stroke: "var(--danger)",
                              fill: "none",
                            }} />
                        </Sparklines>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <Card className="mb-3">
              <CardHeader className="card-header-tab">
                <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                  <i className="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"> {" "} </i>
                  Easy Dynamic Tables
                </div>
                <div className="btn-actions-pane-right actions-icon-btn">
                  <UncontrolledButtonDropdown>
                    <DropdownToggle className="btn-icon btn-icon-only" color="link">
                      <i className="pe-7s-menu btn-icon-wrapper" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link">
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem>
                        <i className="dropdown-icon lnr-inbox"> </i>
                        <span>Menus</span>
                      </DropdownItem>
                      <DropdownItem>
                        <i className="dropdown-icon lnr-file-empty"> </i>
                        <span>Settings</span>
                      </DropdownItem>
                      <DropdownItem>
                        <i className="dropdown-icon lnr-book"> </i>
                        <span>Actions</span>
                      </DropdownItem>
                      <DropdownItem divider />
                      <div className="p-3 text-right">
                        <Button className="mr-2 btn-shadow btn-sm" color="link">
                          View Details
                        </Button>
                        <Button className="mr-2 btn-shadow btn-sm" color="primary">
                          Action
                        </Button>
                      </div>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
              </CardHeader>
              <CardBody>
                <ReactTable data={data}
                  columns={[
                    {
                      Header: "Name",
                      columns: [
                        {
                          Header: "First Name",
                          accessor: "firstName",
                        },
                        {
                          Header: "Last Name",
                          id: "lastName",
                          accessor: (d) => d.lastName,
                        },
                      ],
                    },
                    {
                      Header: "Info",
                      columns: [
                        {
                          Header: "Age",
                          accessor: "age",
                        },
                      ],
                    },
                  ]}
                  defaultPageSize={20}
                  style={{
                    height: "428px", // This will force the table body to overflow and scroll, since there is not enough room
                  }}
                  className="-striped -highlight -fixed" />
              </CardBody>
            </Card>
            <Row>
              <Col sm="12" lg="6">
                <Card className="card-hover-shadow-2x mb-3">
                  <CardHeader className="card-header-tab">
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                      <i className="header-icon lnr-database icon-gradient bg-malibu-beach"> {" "} </i>
                      Tasks List
                    </div>

                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                      <UncontrolledButtonDropdown>
                        <DropdownToggle className="btn-icon btn-icon-only" color="link">
                          <i className="pe-7s-menu btn-icon-wrapper" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link">
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-inbox"> </i>
                            <span>Menus</span>
                          </DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-file-empty"> </i>
                            <span>Settings</span>
                          </DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-book"> </i>
                            <span>Actions</span>
                          </DropdownItem>
                          <DropdownItem divider />
                          <div className="p-3 text-right">
                            <Button className="mr-2 btn-shadow btn-sm" color="link">
                              View Details
                            </Button>
                            <Button className="mr-2 btn-shadow btn-sm" color="primary">
                              Action
                            </Button>
                          </div>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>
                  </CardHeader>
                  <div className="scroll-area-lg">
                    <PerfectScrollbar>
                      <div className="p-2">
                        <ListGroup className="todo-list-wrapper" flush>
                          <ListGroupItem>
                            <div className="todo-indicator bg-warning" />
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-2">
                                  <CustomInput type="checkbox" id="exampleCustomCheckbox12" label="&nbsp;" />
                                </div>
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    Wash the car
                                    <div className="badge badge-danger ml-2">
                                      Rejected
                                    </div>
                                  </div>
                                  <div className="widget-subheading">
                                    <i>Written by Bob</i>
                                  </div>
                                </div>
                                <div className="widget-content-right widget-content-actions">
                                  <Button className="border-0 btn-transition" outline color="success">
                                    <FontAwesomeIcon icon={faCheck} />
                                  </Button>
                                  <Button className="border-0 btn-transition" outline color="danger">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="todo-indicator bg-focus" />
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-2">
                                  <CustomInput type="checkbox" id="exampleCustomCheckbox1" label="&nbsp;" />
                                </div>
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    Task with hover dropdown menu
                                  </div>
                                  <div className="widget-subheading">
                                    <div>
                                      By Johnny
                                      <div className="badge badge-pill badge-info ml-2">
                                        NEW
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-content-right widget-content-actions">
                                  <Dropdown className="d-inline-block rm-pointers" onMouseOver={this.onMouseEnter}
                                    onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle color="link" className="border-0 btn-transition">
                                      <FontAwesomeIcon icon={faEllipsisH} />
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                      <DropdownItem header>Header</DropdownItem>
                                      <DropdownItem disabled>Action</DropdownItem>
                                    </DropdownMenu>
                                  </Dropdown>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="todo-indicator bg-primary" />
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-2">
                                  <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="&nbsp;" />
                                </div>
                                <div className="widget-content-left flex2">
                                  <div className="widget-heading">
                                    Task with Badge
                                  </div>
                                  <div className="widget-subheading">
                                    Show on hover actions!
                                  </div>
                                </div>
                                <div className="widget-content-right widget-content-actions">
                                  <Button className="border-0 btn-transition" outline color="success">
                                    <FontAwesomeIcon icon={faCheck} />
                                  </Button>
                                </div>
                                <div className="widget-content-right ml-3">
                                  <div className="badge badge-pill badge-success">
                                    New
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="todo-indicator bg-info" />
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-2">
                                  <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="&nbsp;" />
                                </div>
                                <div className="widget-content-left mr-3">
                                  <div className="widget-content-left">
                                    <img width={42} className="rounded" src={avatar2} alt="" />
                                  </div>
                                </div>
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    Go grocery shopping
                                  </div>
                                  <div className="widget-subheading">
                                    A short description here
                                  </div>
                                </div>
                                <div className="widget-content-right widget-content-actions">
                                  <Button className="border-0 btn-transition" outline color="success">
                                    <FontAwesomeIcon icon={faCheck} />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="todo-indicator bg-success" />
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-2">
                                  <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="&nbsp;" />
                                </div>
                                <div className="widget-content-left flex2">
                                  <div className="widget-heading">
                                    Development Task
                                  </div>
                                  <div className="widget-subheading">
                                    Finish React ToDo List App
                                  </div>
                                </div>
                                <div className="widget-content-right">
                                  <Button className="border-0 btn-transition" outline color="success">
                                    <FontAwesomeIcon icon={faCheck} />
                                  </Button>
                                  <Button className="border-0 btn-transition" outline color="danger">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="todo-indicator bg-warning" />
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-2">
                                  <CustomInput type="checkbox" id="exampleCustomCheckbox12" label="&nbsp;" />
                                </div>
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    Wash the car
                                    <div className="badge badge-danger ml-2">
                                      Rejected
                                    </div>
                                  </div>
                                  <div className="widget-subheading">
                                    <i>Written by Bob</i>
                                  </div>
                                </div>
                                <div className="widget-content-right widget-content-actions">
                                  <Button className="border-0 btn-transition" outline color="success">
                                    <FontAwesomeIcon icon={faCheck} />
                                  </Button>
                                  <Button className="border-0 btn-transition" outline color="danger">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="todo-indicator bg-focus" />
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-2">
                                  <CustomInput type="checkbox" id="exampleCustomCheckbox1" label="&nbsp;" />
                                </div>
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    Task with hover dropdown menu
                                  </div>
                                  <div className="widget-subheading">
                                    <div>
                                      By Johnny
                                      <div className="badge badge-pill badge-info ml-2">
                                        NEW
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-content-right widget-content-actions">
                                  <Dropdown className="d-inline-block rm-pointers" onMouseOver={this.onMouseEnter}
                                    onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle color="link" className="border-0 btn-transition">
                                      <FontAwesomeIcon icon={faEllipsisH} />
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                      <DropdownItem header>Header</DropdownItem>
                                      <DropdownItem disabled>Action</DropdownItem>
                                    </DropdownMenu>
                                  </Dropdown>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="todo-indicator bg-primary" />
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-2">
                                  <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="&nbsp;" />
                                </div>
                                <div className="widget-content-left flex2">
                                  <div className="widget-heading">
                                    Badge on the right task
                                  </div>
                                  <div className="widget-subheading">
                                    This task has show on hover actions!
                                  </div>
                                </div>
                                <div className="widget-content-right widget-content-actions">
                                  <Button className="border-0 btn-transition" outline color="success">
                                    <FontAwesomeIcon icon={faCheck} />
                                  </Button>
                                </div>
                                <div className="widget-content-right ml-3">
                                  <div className="badge badge-pill badge-dark">
                                    NEW
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="todo-indicator bg-info" />
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-2">
                                  <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="&nbsp;" />
                                </div>
                                <div className="widget-content-left mr-3">
                                  <div className="widget-content-left">
                                    <img width={42} className="rounded" src={avatar2} alt="" />
                                  </div>
                                </div>
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    Purchase apples
                                  </div>
                                  <div className="widget-subheading">
                                    Description here...
                                  </div>
                                </div>
                                <div className="widget-content-right widget-content-actions">
                                  <Button className="border-0 btn-transition" outline color="danger">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                        </ListGroup>
                      </div>
                    </PerfectScrollbar>
                  </div>
                  <CardFooter className="d-block text-right">
                    <Button size="sm" className="mr-2" color="link">
                      Cancel
                    </Button>
                    <Button color="primary">Add Task</Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col sm="12" lg="6">
                <Card className="card-hover-shadow-2x mb-3">
                  <CardHeader className="card-header-tab">
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                      <i className="header-icon lnr-printer icon-gradient bg-ripe-malin"> {" "} </i>
                      Chat Box
                    </div>
                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                      <UncontrolledButtonDropdown>
                        <DropdownToggle className="btn-icon btn-icon-only" color="link">
                          <i className="pe-7s-menu btn-icon-wrapper" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link">
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-inbox"> </i>
                            <span>Menus</span>
                          </DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-file-empty"> </i>
                            <span>Settings</span>
                          </DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-book"> </i>
                            <span>Actions</span>
                          </DropdownItem>
                          <DropdownItem divider />
                          <div className="p-3 text-right">
                            <Button className="mr-2 btn-shadow btn-sm" color="link">
                              View Details
                            </Button>
                            <Button className="mr-2 btn-shadow btn-sm" color="primary">
                              Action
                            </Button>
                          </div>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>
                  </CardHeader>
                  <div className="scroll-area-lg">
                    <PerfectScrollbar>
                      <div className="p-2">
                        <div className="chat-wrapper p-1">
                          <div className="chat-box-wrapper">
                            <div>
                              <div className="avatar-icon-wrapper mr-1">
                                <div className="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg" />
                                <div className="avatar-icon avatar-icon-lg rounded">
                                  <img src={avatar1} alt="" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="chat-box">
                                But I must explain to you how all this mistaken
                                idea of denouncing pleasure and praising pain was
                                born and I will give you a complete account of the
                                system.
                              </div>
                              <small className="opacity-6">
                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                                11:01 AM | Yesterday
                              </small>
                            </div>
                          </div>
                          <div className="float-right">
                            <div className="chat-box-wrapper chat-box-wrapper-right">
                              <div>
                                <div className="chat-box">
                                  Expound the actual teachings of the great
                                  explorer of the truth, the master-builder of
                                  human happiness.
                                </div>
                                <small className="opacity-6">
                                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                                  11:01 AM | Yesterday
                                </small>
                              </div>
                              <div>
                                <div className="avatar-icon-wrapper ml-1">
                                  <div className="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon avatar-icon-lg rounded">
                                    <img src={avatar1} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat-box-wrapper">
                            <div>
                              <div className="avatar-icon-wrapper mr-1">
                                <div className="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg" />
                                <div className="avatar-icon avatar-icon-lg rounded">
                                  <img src={avatar1} alt="" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="chat-box bg-primary text-white">
                                But I must explain to you how all this mistaken
                                idea of denouncing pleasure and praising pain was
                                born and I will give you a complete account of the
                                system.
                              </div>
                              <small className="opacity-8 text-danger">
                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                                11:01 AM | Yesterday
                              </small>
                            </div>
                          </div>
                          <div className="float-right">
                            <div className="chat-box-wrapper chat-box-wrapper-right">
                              <div>
                                <div className="chat-box">
                                  Denouncing pleasure and praising pain was born
                                  and I will give you a complete account.
                                </div>
                                <small className="opacity-6">
                                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                                  11:01 AM | Yesterday
                                </small>
                              </div>
                              <div>
                                <div className="avatar-icon-wrapper ml-1">
                                  <div className="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon avatar-icon-lg rounded">
                                    <img src={avatar2} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="float-right">
                            <div className="chat-box-wrapper chat-box-wrapper-right">
                              <div>
                                <div className="chat-box">
                                  The master-builder of human happiness.
                                </div>
                                <small className="opacity-6">
                                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                                  11:01 AM | Yesterday
                                </small>
                              </div>
                              <div>
                                <div className="avatar-icon-wrapper ml-1">
                                  <div className="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon avatar-icon-lg rounded">
                                    <img src={avatar2} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PerfectScrollbar>
                  </div>
                  <CardFooter>
                    <Input bsSize="sm" type="text" placeholder="Write here and hit enter to send..." />
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <div className="card no-shadow bg-transparent no-border rm-borders mb-3">
              <Card>
                <Row className="no-gutters">
                  <Col md="12" lg="4">
                    <ListGroup flush>
                      <ListGroupItem className="bg-transparent">
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-heading">Total Orders</div>
                                <div className="widget-subheading">
                                  Last year expenses
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="widget-numbers text-success">
                                  1896
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem className="bg-transparent">
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-heading">Clients</div>
                                <div className="widget-subheading">
                                  Total Clients Profit
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="widget-numbers text-primary">
                                  $12.6k
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col md="12" lg="4">
                    <ListGroup flush>
                      <ListGroupItem className="bg-transparent">
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-heading">Followers</div>
                                <div className="widget-subheading">
                                  People Interested
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="widget-numbers text-danger">
                                  45,9%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem className="bg-transparent">
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Products Sold
                                </div>
                                <div className="widget-subheading">
                                  Total revenue streams
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="widget-numbers text-warning">
                                  $3M
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col md="12" lg="4">
                    <ListGroup flush>
                      <ListGroupItem className="bg-transparent">
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-heading">Total Orders</div>
                                <div className="widget-subheading">
                                  Last year expenses
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="widget-numbers text-success">
                                  1896
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem className="bg-transparent">
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-heading">Clients</div>
                                <div className="widget-subheading">
                                  Total Clients Profit
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="widget-numbers text-primary">
                                  $12.6k
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </Card>
            </div>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
