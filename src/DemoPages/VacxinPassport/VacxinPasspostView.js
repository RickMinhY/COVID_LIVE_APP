import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { toastWarningText } from '../../helpers/toastify';
import { getVacxinDetailAction } from '../../redux/action/submitFormAction';
import Loader from "react-loader-advanced";
import { Loader as LoaderAnim } from "react-loaders";

export default function VacxinPasspostView() {
    const dispatch = useDispatch()
    const [Filter, setFilter] = useState("");
    const { detailData } = useSelector((state) => state.VacxinDetailReducer)
    const { isLoading } = useSelector((state) => state.VacxinDetailReducer)


    function Search() {
        if (Filter) {
            dispatch(getVacxinDetailAction(Filter))
        } else {
            toastWarningText("Vui lòng nhập số CMND để tra cứu!")
        }
    }

    function onKeyDown(e) {
        if (e.key === 'Enter') {
            Search();
        }
    }
    console.log(detailData)
    return (
        <Card>
            <CardHeader>
                Tra cứu thông tin tiêm chủng
            </CardHeader>
            <CardBody>
                <Form>
                    <FormGroup row>
                        <Label className='text-right' sm={2}>
                            <strong >Số CMND:</strong>
                        </Label>
                        <Col sm={8}>
                            <Input type='text' bsSize={"sm"}
                                value={Filter}
                                onKeyDown={(e) => onKeyDown(e)}
                                onChange={(e) => { setFilter(e.target.value) }} />
                        </Col>
                        <Col sm={2}>
                            <Button outline color='info' onClick={() => { Search() }}>Tra cứu</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </CardBody>
            <Loader message={<div><h1 className="font-weight-bold text-info">Đang tải dữ liệu...<LoaderAnim color="black" type="line-scale" /></h1></div>} show={isLoading} priority={5} backgroundStyle={{ backgroundColor: 'white', opacity: 0.7 }}>
                {
                    detailData && detailData.length > 0 ?
                        <>
                            <CardBody>
                                <Row>
                                    <Col md={12}>
                                        <Card body className={detailData.length == 1 ? "card-shadow-warning border" : "card-shadow-success border"} outline color={detailData.length == 1 ? "warning" : "success"}>
                                            <CardTitle>Thông tin chung</CardTitle>
                                            <Form>
                                                <FormGroup row>
                                                    <Label for="exampleEmail" sm={12}>
                                                        Họ và tên:  <strong> {detailData[0].Name}</strong>
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label sm={6}>
                                                        Sinh ngày: <strong>{detailData[0].DateOfBirth}</strong>
                                                    </Label>
                                                    <Label for="exampleEmail" sm={6}>
                                                        Giới tính: <strong>{detailData[0].Sex == 1 ? "Nữ" : "Nam"}</strong>
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label sm={6}>
                                                        Số CMND: <strong>{detailData[0].CitizenId}</strong>
                                                    </Label>
                                                    <Label for="exampleEmail" sm={6}>
                                                        Số điện thoại: <strong>{detailData[0].Phone}</strong>
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="exampleEmail" sm={6}>
                                                        Đơn vị công tác: <strong>{detailData[0].Company}</strong>
                                                    </Label>
                                                    <Label for="exampleEmail" sm={6}>
                                                        Khoa/Phòng: <strong>{detailData[0].Department}</strong>
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="exampleEmail" sm={12}>
                                                        Địa chỉ: <strong>{detailData[0].Address}</strong>
                                                    </Label>
                                                </FormGroup>
                                            </Form>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardBody>
                                <CardTitle>Thông tin tiêm chủng</CardTitle>
                                <Row>
                                    {
                                        detailData.map((item, index) => {
                                            return (
                                                <Col md={detailData.length == 1 ? 12 : 6} key={item._id}>
                                                    <Card body className={detailData.length == 1 ? "card-shadow-warning border" : "card-shadow-success border"} outline color={detailData.length == 1 ? "warning" : "success"}>
                                                        <Form>
                                                            <FormGroup row>
                                                                <Label sm={4}>
                                                                    Mũi: <strong>{index + 1}</strong>
                                                                </Label>
                                                                <Label sm={4}>
                                                                    Ngày tiêm: <strong>{item.Date}</strong>
                                                                </Label>
                                                                <Label sm={4}>
                                                                    Hãng/ nhà sản xuất: <strong>{item.VacXinName}</strong>
                                                                </Label>
                                                            </FormGroup>
                                                        </Form>
                                                    </Card>
                                                </Col>

                                            )
                                        })
                                    }
                                </Row>
                            </CardBody>
                        </>
                        :
                        <CardBody className='mb-5'>
                            <h3 className='text-center text-danger'>Không có dữ liệu!!!</h3>
                        </CardBody>
                }
            </Loader>
        </Card>
    )
}
