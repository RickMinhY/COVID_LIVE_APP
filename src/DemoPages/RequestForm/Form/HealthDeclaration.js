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
    Table,
    CustomInput,
} from "reactstrap";
import DatePicker from "react-datepicker";
import moment from 'moment';

export default function HealthDeclaration() {
    const dispatch = useDispatch();
    const [formData, setformData] = useState({
        Date:moment(new Date()).format("DD/MM/YYYY"),
        Location: "Sở y tế TP. Hồ Chí Minh",
        Name: "",
        DateOfBirth: "",
        IDNo:"",
        IDDate:"",
        Sex:1,
        Company:"",
        Department:"",
        Phone:"",
        Address:"",
        Fever:false,
        Cough:false,
        SoreThroat:false,
        LossOfSmell: false
    })

    function Submit(){
        console.log(formData);
    }
    return (
        <Fragment>
            <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
                transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                <Container fluid>
                    <Card className="main-card mb-3">
                        <CardBody>
                            <Row>
                                <Col md={12} className='text-center mb-3'>
                                    <h3><strong>TỜ KHAI Y TẾ ĐỐI VỚI NGƯỜI</strong></h3>
                                    <h6><strong>Đây là tài liệu quan trọng, thông tin của Anh/Chị sẽ giúp cơ quan y tế liên lạc khi cần thiết để phòng chống dịch bệnh truyền nhiễm.</strong></h6>
                                </Col>
                            </Row>
                            <Form>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>
                                        Ngày khai báo
                                    </Label>
                                    <Label for="exampleEmail" sm={4}>
                                        <strong>{moment(formData.Date).format("DD/MM/YYYY")}</strong>
                                    </Label>
                                    <Label for="exampleEmail" sm={2}>
                                        Nơi khai báo
                                    </Label>
                                    <Label for="exampleEmail" sm={4}>
                                        <strong className='text-danger'>{formData.Location}</strong>
                                    </Label>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>
                                        Họ và tên:
                                    </Label>
                                    <Col sm={10}>
                                        <Input type='text' bsSize={"sm"} 
                                        value={formData.Name} 
                                        onChange={(e) => {setformData({...formData, Name: e.target.value})}} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>
                                        Sinh ngày:
                                    </Label>
                                    <Col sm={4}>
                                        <DatePicker className="form-control-sm form-control"
                                         value={formData.DateOfBirth} 
                                         onChange={(date) => {setformData({...formData, DateOfBirth: moment(date).format("DD/MM/YYYY")})}} />
                                    </Col>
                                    <Label for="exampleEmail" sm={2}>
                                        Giới tính:
                                    </Label>
                                    <Col sm={4}>
                                        <Input type="select" bsSize={"sm"} value={formData.Sex} onChange={(e) => {setformData({...formData, Sex: e.target.value})}}>
                                            <option value={0}>Nam</option>
                                            <option value={1}>Nữ</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>
                                        Số CMND:
                                    </Label>
                                    <Col sm={4}>
                                        <Input type='text' bsSize={"sm"} value={formData.IDNo} 
                                        onChange={(e) => {setformData({...formData, IDNo: e.target.value})}} />
                                    </Col>
                                    <Label for="exampleEmail" sm={2}>
                                        Ngày cấp:
                                    </Label>
                                    <Col sm={4}>
                                        <DatePicker className="form-control-sm form-control" value={formData.IDDate} 
                                         onChange={(date) => {setformData({...formData, IDDate: moment(date).format("DD/MM/YYYY")})}} />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>
                                        Đơn vị công tác:
                                    </Label>
                                    <Col sm={4}>
                                        <Input type='text' bsSize={"sm"}  value={formData.Company} 
                                        onChange={(e) => {setformData({...formData, Company: e.target.value})}} />
                                    </Col>
                                    <Label for="exampleEmail" sm={2}>
                                        Khoa/Phòng:
                                    </Label>
                                    <Col sm={4}>
                                        <Input type='text' bsSize={"sm"} value={formData.Department} 
                                        onChange={(e) => {setformData({...formData, Department: e.target.value})}} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>
                                        Số điện thoại:
                                    </Label>
                                    <Col sm={10}>
                                        <Input type='text' bsSize={"sm"} value={formData.Phone} 
                                        onChange={(e) => {setformData({...formData, Phone: e.target.value})}} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>
                                        Địa chỉ:
                                    </Label>
                                    <Col sm={10}>
                                        <Input type='text' bsSize={"sm"} value={formData.Address} 
                                        onChange={(e) => {setformData({...formData, Address: e.target.value})}} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={12}>
                                        Ông/bà hiện có những triệu chứng hay biểu hiện nào sau đây không?:
                                    </Label>
                                </FormGroup>
                                <Row>
                                    <Col>
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>Dấu hiệu</th>
                                                    <th>Có</th>
                                                    <th>Không</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Sốt</td>
                                                    <td>
                                                        <CustomInput id="exampleCustomRadio1" type="radio" name="customRadio1" 
                                                        checked={formData.Fever == true} onChange={()=> {setformData({...formData, Fever: true})}}
                                                        />
                                                    </td>
                                                    <td>
                                                        <CustomInput id="exampleCustomRadio2" type="radio" name="customRadio1" 
                                                        checked={formData.Fever == false} onChange={()=> {setformData({...formData, Fever: false})}}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Ho</td>
                                                    <td>
                                                        <CustomInput id="exampleCustomRadio3" type="radio" name="customRadio2" 
                                                        checked={formData.Cough == true} onChange={()=> {setformData({...formData, Cough: true})}}
                                                        />
                                                    </td>
                                                    <td>
                                                        <CustomInput id="exampleCustomRadio4" type="radio" name="customRadio2" 
                                                        checked={formData.Cough == false} onChange={()=> {setformData({...formData, Cough: false})}}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Đau họng</td>
                                                    <td>
                                                        <CustomInput id="exampleCustomRadio5" type="radio" name="customRadio3" 
                                                        checked={formData.SoreThroat == true} onChange={()=> {setformData({...formData, SoreThroat: true})}}
                                                        />
                                                    </td>
                                                    <td>
                                                        <CustomInput id="exampleCustomRadio6" type="radio" name="customRadio3" 
                                                        checked={formData.SoreThroat == false} onChange={()=> {setformData({...formData, SoreThroat: false})}}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mất vị/Mất mùi</td>
                                                    <td>
                                                        <CustomInput id="exampleCustomRadio7" type="radio" name="customRadio4" 
                                                        checked={formData.LossOfSmell == true} onChange={()=> {setformData({...formData, LossOfSmell: true})}}
                                                        />

                                                    </td>
                                                    <td>
                                                        <CustomInput id="exampleCustomRadio8" type="radio" name="customRadio4" 
                                                        checked={formData.LossOfSmell == false} onChange={()=> {setformData({...formData, LossOfSmell: false})}}
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>

                                <FormGroup check row className='text-right'>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                        <Button onClick={() => Submit()}>Gửi</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Container>
            </CSSTransitionGroup>
        </Fragment>
    )
}
