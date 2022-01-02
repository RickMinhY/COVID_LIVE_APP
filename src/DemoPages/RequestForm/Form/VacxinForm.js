import React, { Component, Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {
    Col,
    Card,
    CardBody,
    CardTitle,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Container,
    Row,
} from "reactstrap";
import DatePicker from "react-datepicker";
import moment from "moment";
import { submitVacxinAction } from "../../../redux/action/submitFormAction";
import Loader from "react-loader-advanced";
import { Loader as LoaderAnim } from "react-loaders";

export default function VacxinForm() {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.SubmitFormReducer);
    const [formData, setformData] = useState({
        Date: moment(new Date()).format("DD/MM/YYYY"),
        Location: "Sở y tế TP. Hồ Chí Minh",
        Name: "",
        DateOfBirth: "",
        CitizenId: "",
        Sex: 1,
        Company: "",
        Department: "",
        Phone: "",
        Address: "",
        DoseNo: 1,
        VacXinName: "Astrazeneca"
    })

    function Submit() {
        console.log(formData);
        dispatch(submitVacxinAction(formData))
    }
    return (
        <Fragment>
            <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
                transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                <Container fluid>
                    <Card className="main-card mb-3">
                        <Loader message={<div><h1 className="font-weight-bold text-info">Đang tải dữ liệu...<LoaderAnim color="black" type="line-scale" /></h1></div>} show={isLoading} priority={5} backgroundStyle={{ backgroundColor: 'white', opacity: 0.7 }}>
                            <CardBody>
                                <Row>
                                    <Col md={12} className='text-center'>
                                        <h3>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h3>
                                        <h4 className="font-italic">Độc lập - Tự do - Hạnh phúc</h4>
                                        <h2><strong>GIẤY XÁC NHẬN ĐÃ TIÊM VẮC XIN COVID-19</strong></h2>
                                    </Col>
                                </Row>
                                <Form>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={2}>
                                            Họ và tên:
                                        </Label>
                                        <Col sm={10}>
                                            <Input type='text' bsSize={"sm"}
                                                value={formData.Name}
                                                onChange={(e) => { setformData({ ...formData, Name: e.target.value }) }} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={2}>
                                            Sinh ngày:
                                        </Label>
                                        <Col sm={4}>
                                            <DatePicker className="form-control-sm form-control"
                                                value={formData.DateOfBirth}
                                                onChange={(date) => { setformData({ ...formData, DateOfBirth: moment(date).format("DD/MM/YYYY") }) }} />
                                        </Col>
                                        <Label for="exampleEmail" sm={2}>
                                            Giới tính:
                                        </Label>
                                        <Col sm={4}>
                                            <Input type="select" bsSize={"sm"} value={formData.Sex} onChange={(e) => { setformData({ ...formData, Sex: e.target.value }) }}>
                                                <option value={0}>Nam</option>
                                                <option value={1}>Nữ</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={2}>
                                            Số CMND:
                                        </Label>
                                        <Col sm={10}>
                                            <Input type='text' bsSize={"sm"} value={formData.CitizenId}
                                                onChange={(e) => { setformData({ ...formData, CitizenId: e.target.value }) }} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={2}>
                                            Đơn vị công tác:
                                        </Label>
                                        <Col sm={4}>
                                            <Input type='text' bsSize={"sm"} value={formData.Company}
                                                onChange={(e) => { setformData({ ...formData, Company: e.target.value }) }} />
                                        </Col>
                                        <Label for="exampleEmail" sm={2}>
                                            Khoa/Phòng:
                                        </Label>
                                        <Col sm={4}>
                                            <Input type='text' bsSize={"sm"} value={formData.Department}
                                                onChange={(e) => { setformData({ ...formData, Department: e.target.value }) }} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={2}>
                                            Số điện thoại:
                                        </Label>
                                        <Col sm={10}>
                                            <Input type='text' bsSize={"sm"} value={formData.Phone}
                                                onChange={(e) => { setformData({ ...formData, Phone: e.target.value }) }} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={2}>
                                            Địa chỉ:
                                        </Label>
                                        <Col sm={10}>
                                            <Input type='text' bsSize={"sm"} value={formData.Address}
                                                onChange={(e) => { setformData({ ...formData, Address: e.target.value }) }} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={12}>
                                            Đã được tiêm vắc xin phòng bệnh COVID-19:
                                        </Label>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={2}>
                                            Mũi:
                                        </Label>
                                        <Col sm={4}>
                                            <Input type="select" bsSize={"sm"} value={formData.DoseNo} onChange={(e) => { setformData({ ...formData, DoseNo: e.target.value }) }}>
                                                <option value={1}>Mũi 1</option>
                                                <option value={2}>Mũi 2</option>
                                            </Input>
                                        </Col>
                                        <Label for="exampleEmail" sm={2}>
                                            Ngày tiêm:
                                        </Label>
                                        <Col sm={4}>
                                            <DatePicker className="form-control-sm form-control"
                                                value={formData.Date}
                                                onChange={(date) => { setformData({ ...formData, Date: moment(date).format("DD/MM/YYYY") }) }} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={2}>
                                            Hãng/ nhà sản xuất:
                                        </Label>
                                        <Col sm={10}>
                                            <Input type="select" bsSize={"sm"} value={formData.VacXinName} onChange={(e) => { setformData({ ...formData, VacXinName: e.target.value }) }}>
                                                <option value={"Astrzeneca"}>Astrzeneca</option>
                                                <option value={"Pfizer"}>Pfizer</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup check row className='text-right'>
                                        <Col sm={{ size: 10, offset: 2 }}>
                                            <Button onClick={() => { Submit() }}>Gửi</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Loader>
                    </Card>
                </Container>
            </CSSTransitionGroup>
        </Fragment>
    )
}
