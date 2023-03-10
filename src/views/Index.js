import { useState } from "react";
import Chart from "chart.js";
import { Spin, Checkbox, Input, DatePicker, TimePicker, Upload, Select, Modal } from 'antd';
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
import { Notepad2, Clock, CalendarCircle, Box1, InfoCircle } from "iconsax-react";
import Header from "components/Headers/Header.js";
import AllRequestsModal from "./examples/AllRequestsModal";
import SignAndSeal from "./examples/SignAndSeal";
import AllPopUpModel from "./examples/AllPopUp";
const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [open123, setOpen123] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [borderBoxOpen, setBorderBoxOpen] = useState(false);
  const Option = Select.Option;

  const handleok = () => {
    setOpen123(false);
    setOpen1(false);
  }
  const handleCancel = () => {
    setOpen123(false);
    setOpen1(false);
  }
  const handleModalok = () => {
    setModalOpen(false);
    // setOpen2(false);
  }
  const handleModalCancel = () => {
    setModalOpen(false);
    // setOpen2(false);
  }

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
        {
          borderBoxOpen ?
            <Card className=" borderBox mb-5 ml-10" >
              <div className="d-flex">
                <div> <InfoCircle className="attentionInfoIcon mr-5" style={{ color: '#264B5D' }} /></div>
                <div>
                  <div className="boxFirstRowtext"
                  >
                    It is past 2 PM EST deadline for new orders. Depending on the time and workload, this order may not be completed by the end of the day.
                  </div>
                  <div className="boxSecondRowtext pt-2 "
                  >
                    For more information, please call the plotroom.
                  </div>
                </div>
              </div>
            </Card> : ''
        }
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
                <div className="" >
                  <h6 className=" text-black font12 text-left ls-1 mb-1">
                    Sign & Seal
                  </h6>
                </div>

                <Row className="align-items-center pt-3">
                  <Col lg="5">

                    <Row>
                      <Col lg="2" className="pr-0">
                        <Checkbox className="" onClick={() => { setOpen1(true);setBorderBoxOpen(!borderBoxOpen);}}></Checkbox>
                      </Col>
                      <Col lg="10" className="pl-0 pt-1">
                        <span className='font14  pl-2'>Sign and Seal Required</span>
                      </Col>
                    </Row>                    </Col>
                  <Col lg="7" className=' header-3 font12'>
                    Select this option if you need PDF / Word document printed with the option of requesting a sign and seal of the documents printed
                  </Col>
                </Row>
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
                    {/* <Upload> */}
                    <button className="pl-3 pr-3 button-request" onClick={() => setOpen123(true)}>Choose File</button>
                    {/* </Upload> */}
                  </label>
                  <label for="images" class="drop-containers p-4" >

                  </label>
                </div>
                <Button type="submit" onClick={() => setModalOpen(true)}>
                  Submit Request
                </Button>
                <Modal
                  // title="Print"
                  centered
                  open={open123}
                  onOk={handleok}
                  onCancel={handleCancel}
                  closable={false}
                  footer={[
                    <Row className="p-3">
                      <Col className="ml-2" style={{ textAlign: 'start' }}>
                        <button className="button-request padding" onClick={handleCancel}>Go Back</button>
                      </Col>
                      <Col>
                        <Button key="submit" onClick={handleok}>Submit Request</Button>
                      </Col>
                    </Row>,

                  ]}

                  // height={"381px)"}
                  width={"1300px"}                >

                  <AllRequestsModal />
                </Modal>
                <Modal
                  // title="signandseal"
                  centered
                  open={open1}
                  onOk={handleok}
                  onCancel={handleCancel}
                  closable={false}
                  footer={[
                    <Row className="p-3">
                      <Col className="ml-2" style={{ textAlign: 'start' }}>
                        <button className="button-request padding" onClick={handleCancel}>Go Back</button>
                      </Col>
                      <Col>
                        <Button key="submit" onClick={handleok}>Submit Request</Button>
                      </Col>
                    </Row>,

                  ]}

                  width={1300}
                >

                  <SignAndSeal />

                </Modal>
                <Modal
                  // title="Print"
                  centered
                  open={modalOpen}
                  onOk={handleModalok}
                  onCancel={handleModalCancel}
                  closable={false}
                  footer={[
                    <Row className="p-3">
                      <Col className="ml-2" style={{ textAlign: 'start' }}>
                        <button className="button-request padding" onClick={handleModalCancel}>Stay here</button>
                      </Col>
                      <Col>
                        <Button key="submit" onClick={handleModalok}>Continue</Button>
                      </Col>
                    </Row>,

                  ]}

                  height ={"381px"}
                  width={"384px"}              >

                  <AllPopUpModel />
                </Modal>
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

export default Index;
