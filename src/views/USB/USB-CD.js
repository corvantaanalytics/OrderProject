
import { useState } from "react";
import Chart from "chart.js";
import { Spin, Checkbox, Input, DatePicker, TimePicker, Upload, Select } from 'antd';
// react plugin used to create charts
// import Select from "react-select";
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    NavbarBrand,
    Progress,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2
} from "variables/charts.js";
import { Notepad2, Clock, CalendarCircle } from "iconsax-react";
import Header from "components/Headers/Header.js";

const USBCD = (props) => {
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState("data1");
    const Option = Select.Option;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    function handleBlur() {
        console.log('blur');
    }

    function handleFocus() {
        console.log('focus');
    }


    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
        setChartExample1Data("data" + index);
    };
    return (
        <>
            <Header />
            {/* Page content */}
            <Container fluid className="pl-4 ml-3">
                <Row>
                    <Col xl="8">
                        <Card className="bg-white " >
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h6 className=" header-white ls-1 mb-1" style={{ color: "#7E7E7E" }}>
                                            Request Type
                                        </h6>
                                    </div>

                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="px-0" >
                                    <h1 style={{ fontSize: 24, color: '#000000', fontWeight: 500, fontFamily: 'Manrope' }}>
                                        USB/CD                                    </h1>
                                    <div style={{ fontSize: 12, color: '#7E7E7E' }}>
                                        Select this option if you require a CD / DVD made of your digital files.
                                    </div>
                                </div>
                                <div className="mt-3" style={{ fontSize: 16, color: '#000000', fontFamily: 'Manrope' }}>
                                    Request a USB / CD
                                </div>
                                <div className="mt-3 mr-1"
                                style={{display: "flex",flexDirection: 'row'}}>
                                    <div className="col-4">
                                        <label className="labels font12">Select</label>
                                        <Select
                                            showSearch
                                            size={"large"}
                                            style={{ width: '100%' }}
                                            placeholder="USB"
                                        />
                                    </div>

                                    <div className="col-4">
                                        <label className="labels font12">#</label>
                                        <Select
                                            showSearch
                                            size={"large"}
                                            style={{ width: '100%' }}
                                            placeholder="1"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <label className="labels font12">Last Name</label>
                                        <Input
                                            size={"large"}
                                            style={{ width: '100%' }}
                                            placeholder="Enter lable Name..."
                                        />
                                    </div>
                                    {/* </form> */}
                                </div>
                                <div className='header-2 ls-1 mt-3'>
                                    Print
                                </div>
                                <div className='mt-2'>
                                    <label for="images" class="drop-container p-4">
                                        {/* <img src={require("../assets/img/theme/upload.png")} alt="" className="h-10 w-10 mt-5" /> */}
                                        <div className="note p-4">
                                            <Notepad2 size="40" className="ml-1 mt-1" color="#A0A0A0" />

                                        </div>

                                        <span class="drop-title mt-2">Drag and drop or browse a file from the network to continue.</span>
                                        {/* <button className="choose mt-2 ">Choose File</button> */}
                                        <Upload><Button className="pl-3 pr-3">Choose File</Button></Upload>
                                    </label>
                                    <label for="images" class="drop-containers p-4" >
                                    </label>
                                </div>
                                <Button className="mt-5" key="submit">Submit Request</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="4">
                        <Card className="" style={{ height: '100%' }}>
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h6 className="text-black header-white ls-1 mb-1 ls-1 mb-1">
                                            General Information
                                        </h6>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <form className="p-2">

                                    <label className="labels">Project Number</label>
                                    <Select
                                        showSearch
                                        size={"large"}
                                        style={{ width: '100%' }}


                                        placeholder="Type to Search..."

                                    > </Select>

                                    {/* <select
                  className="inputs"
                  placeholder="Type to Search...">
                    <option value =""></option>
                </select> */}

                                    <label for="start" className="labels pt-3">Date/Time Required</label>
                                    <div className="pb-3">
                                        {/* <Input suffix={<CalendarCircle />} className="inputs" defaultValue="Select..." placeholder="Select" type="inputs" /> */}
                                        <DatePicker
                                            name={""}
                                            className="inputs"
                                            suffixIcon={<CalendarCircle style={{ color: "black" }} />}
                                            placeholder="Select..."
                                            hideTime
                                            format="MM/DD/YYYY" />
                                    </div>
                                    <div>
                                        {/* <Input suffix={<Clock />} className="inputs" defaultValue="00 : 00 PM" type="inputs" /> */}
                                        <TimePicker
                                            name={""}
                                            suffixIcon={<Clock style={{ color: "black" }} />}
                                            placeholder="00 : 00 PM"
                                            hideSeconds
                                            format="HH:mm A"
                                            showTime={{ format: 'HH:mm A', use12Hours: true }}
                                        />
                                    </div>
                                    <label className="labels pt-3">Order For</label>
                                    <Select
                                        size={"large"}
                                        style={{ width: '100%' }}
                                        showSearch
                                        placeholder="Type to Search..."

                                    > </Select>



                                </form>
                                <label for="images" class="drop-containers p-4" ></label>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default USBCD;
