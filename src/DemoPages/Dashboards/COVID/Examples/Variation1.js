import React, { Component, Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

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

import CountUp from "react-countup";

import { color } from "d3-color";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { interpolateRgb } from "d3-interpolate";
import { Progress } from "react-sweet-progress";

import Select from "react-select";
import Circle from "react-circle";
import { getSummaryData } from "../../../../redux/action/summaryAction";
import moment from "moment";


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


export default function AnalyticsDashboard1() {
  const dispatch = useDispatch();
  const { summaryData } = useSelector((state) => state.DashboardReducers);
  const [state, setstate] = useState({
    dropdownOpen: false,
    value: 70,
  })

  const [vacxinData, setvacxinData] = useState({
    "_id": "61cf4d93c7391086a18b01dc",
    "Country_Region": "Vietnam",
    "Date": "2021-12-30",
    "Doses_admin": "148198862",
    "People_partially_vaccinated": "77358030",
    "People_fully_vaccinated": "56385381",
    "Report_Date_String": "2021-12-31",
    "UID": "704",
    "Province_State": ""
  })
  
  const radius = 107;
  const interpolate = interpolateRgb("#545cd8", "#30b1ff");
  const fillColor = interpolate(state.value / 100);
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
  
  

  
  useEffect(() => {
    dispatch(getSummaryData())
  }, [])


  console.log(summaryData)
  return (
    <Fragment>
      <Container fluid>
        <Row className="mb-3">
          <Col md={8} className="">
            <Card className="mb-5 border border-info" style={{ height: "100%" }}>
              <CardBody>
                <CardTitle>
                  <Flag country={"VN"} className="mr-2" /> Thông tin tổng quan
                </CardTitle>
                <Row className="no-gutters">
                  <Col sm="6" md="4" xl="4">
                    <div className="card no-shadow rm-border bg-transparent widget-chart text-left mt-3">
                      <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg opacity-10 bg-danger" />
                        <i className="lnr-laptop-phone text-white opacity-9" />
                      </div>
                      <div className="widget-chart-content">
                        <div className="widget-subheading">Tổng số ca nhiễm</div>
                        <div className="widget-numbers text-danger">
                          <CountUp start={0} end={summaryData.TotalCases ? Number(summaryData.TotalCases) : 0} separator="," useEasing={false} suffix="" duration="2" />
                        </div>
                      </div>
                    </div>
                    <div className="divider m-0 d-md-none d-sm-block" />
                  </Col>

                  <Col sm="6" md="4" xl="4">
                    <div className="card no-shadow rm-border bg-transparent widget-chart text-left mt-3">
                      <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg opacity-10 bg-success" />
                        <i className="lnr-laptop-phone text-white opacity-9" />
                      </div>
                      <div className="widget-chart-content">
                        <div className="widget-subheading">Ca phục hồi</div>
                        <div className="widget-numbers text-success">
                          <CountUp start={0} end={summaryData.TotalRecovered ? Number(summaryData.TotalRecovered) : 0} separator="," useEasing={false} suffix="" duration="2" />
                        </div>
                      </div>
                    </div>
                    <div className="divider m-0 d-md-none d-sm-block" />
                  </Col>

                  <Col sm="6" md="4" xl="4">
                    <div className="card no-shadow rm-border bg-transparent widget-chart text-left mt-3">
                      <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg opacity-10 bg-secondary" />
                        <i className="lnr-laptop-phone text-white opacity-9" />
                      </div>
                      <div className="widget-chart-content">
                        <div className="widget-subheading">Tổng số ca tử vong</div>
                        <div className="widget-numbers text-secondary">
                          <CountUp start={0} end={summaryData.TotalDeaths ? Number(summaryData.TotalDeaths) : 0} separator="," useEasing={false} suffix="" duration="2" />
                        </div>
                      </div>
                    </div>
                    <div className="divider m-0 d-md-none d-sm-block" />
                  </Col>

                </Row>

              </CardBody>
            </Card>
          </Col>

          <Col md={2} className="">
            <Card className="mb-3 border border-info" style={{ height: "100%" }}>
              <CardBody>
                <CardTitle>Tỷ lệ phục hồi</CardTitle>
                <Row className="mt-5">
                  <Col md={12}>
                    <h1>
                      <LiquidFillGauge style={{ margin: "0 auto" }} width={radius} height={radius}
                        value={summaryData.Recovery_Proporation ? Number(summaryData.Recovery_Proporation) : 0} percent="" textSize={1} textOffsetX={0} textOffsetY={0}
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
                    </h1>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col md={2} className="">
            <Card className="mb-3 border border-info" style={{ height: "100%" }}>
              <CardBody>
                <CardTitle>Tỷ lệ tử vong</CardTitle>
                <Row className="text-center">
                  <Col style={{ marginTop: "25px" }}>
                    <Circle
                      animate={true} // Boolean: Animated/Static progress
                      animationDuration="1s" // String: Length of animation
                      responsive={false} // Boolean: Make SVG adapt to parent size
                      size="120" // String: Defines the size of the circle.
                      lineWidth="25" // String: Defines the thickness of the circle's stroke.
                      progress={summaryData.Case_Fatality_Rate ? Number(summaryData.Case_Fatality_Rate) : 0} // String: Update to change the progress and percentage.
                      progressColor="#d92550" // String: Color of "progress" portion of circle.
                      bgColor="#ecedf0" // String: Color of "empty" portion of circle.
                      textColor="#d92550" // String: Color of percentage text color.
                      textStyle={{
                        font: "bold 3rem Helvetica, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
                      }}
                      percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                      roundedStroke={true} // Boolean: Rounded/Flat line ends
                      showPercentage={true} // Boolean: Show/hide percentage.
                      showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                    />
                  </Col>
                </Row>
              </CardBody>
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
                            <div className="widget-heading">Ca mắc mới trong ngày</div>
                            <div className="widget-subheading">
                              {moment().format("DD/MM/YYYY")}
                            </div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-danger">
                              {summaryData.NewCases ? summaryData.NewCases.toLocaleString() : 0}
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
                            <div className="widget-heading">Ca nhiễm hiện tại</div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-warning">
                              {summaryData.ActiveCases ? summaryData.ActiveCases.toLocaleString() : 0}
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
                            <div className="widget-heading">Ca hồi phục trong ngày</div>
                            <div className="widget-subheading">
                              {moment().format("DD/MM/YYYY")}
                            </div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-success">
                            {summaryData.NewRecovered ? summaryData.NewRecovered.toLocaleString() : 0}
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
                            <div className="widget-heading">Số ca nặng</div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-primary">
                              {summaryData.Serious_Critical ? summaryData.Serious_Critical.toLocaleString() : 0}
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
                            <div className="widget-heading">Tử vong trong ngày</div>
                            <div className="widget-subheading">
                            {moment().format("DD/MM/YYYY")}
                            </div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-secondary">
                            {summaryData.NewDeaths ? summaryData.NewDeaths.toLocaleString() : 0}
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
                            <div className="widget-heading">Tổng số mẫu test</div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-info">
                              {summaryData.TotalTests ? Number(summaryData.TotalTests).toLocaleString() : 0}
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

        <Row>
        <Col md="12" >
        <Card>
            <CardBody>
            <CardTitle className="mb-0">
              Thông tin Vắc-xin
            </CardTitle>
            </CardBody>
          </Card>
          </Col>
          
        <Col lg="12" xl="6" className="mt-2">
              <Card className="main-card mb-3">
                <div className="grid-menu grid-menu-4col">
                  <Row className="no-gutters">
                    <Col sm="6">
                      <div className="widget-chart widget-chart-hover">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-primary" />
                          <i className="lnr-cog text-primary" />
                        </div>
                        <div className="widget-numbers">{moment(vacxinData.Date).format("DD/MM/YYYY")}</div>
                        <div className="widget-subheading">Ngày ghi nhận</div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="widget-chart widget-chart-hover">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-info" />
                          <i className="lnr-graduation-hat text-info" />
                        </div>
                        <div className="widget-numbers">{vacxinData.Doses_admin ? Number(vacxinData.Doses_admin).toLocaleString() : 0}</div>
                        <div className="widget-subheading">Tổng số mũi tiêm</div>
                        {/* <div className="widget-description text-info">
                          <FontAwesomeIcon icon={faArrowRight} />
                          <span className="pl-1">175.5%</span>
                        </div> */}
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="widget-chart widget-chart-hover">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-danger" />
                          <i className="lnr-laptop-phone text-danger" />
                        </div>
                        <div className="widget-numbers">{vacxinData.People_partially_vaccinated ? Number(vacxinData.People_partially_vaccinated).toLocaleString() : 0}</div>
                        <div className="widget-subheading">
                          Số người đã tiêm 1 mũi
                        </div>
                        {/* <div className="widget-description text-primary">
                          <span className="pr-1">54.1%</span>
                          <FontAwesomeIcon icon={faAngleUp} />
                        </div> */}
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="widget-chart widget-chart-hover br-br">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-success" />
                          <i className="lnr-screen" />
                        </div>
                        <div className="widget-numbers">{vacxinData.People_fully_vaccinated ? Number(vacxinData.People_fully_vaccinated).toLocaleString() : 0}</div>
                        <div className="widget-subheading">
                          Số người đã tiêm đủ 2 mũi
                        </div>
                        {/* <div className="widget-description text-warning">
                          <span className="pr-1">175.5%</span>
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </div> */}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
        </Row>
        
      </Container>
    </Fragment>
  )
}


// export default class AnalyticsDashboard1 extends Component {
//   constructor() {
//     super();

//     this.state = {
//       data: makeData(),
//       dropdownOpen: false,
//       value: 70,
//     };
//     this.toggle = this.toggle.bind(this);
//   }

//   state = {
//     selectedOption: null,
//   };

//   handleChange = (selectedOption) => {
//     this.setState({ selectedOption });
//   };

//   toggle() {
//     this.setState((prevState) => ({
//       dropdownOpen: !prevState.dropdownOpen,
//     }));
//   }


//   render() {


//     return (
      
//     );
//   }
// }
