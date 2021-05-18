import React from "react";
import {
  Form,

  Input,
  Button,


  Tag,
  Modal,
  Select,
} from "antd";


import "./delivery-team-create.scss";
import agent from "../../../agent";
import { connect } from "react-redux";
import {
  COUPON_VIEW,
  COUPON_CHANGE_STATUS,
} from "../../../constants/actionTypes";
import queryString from "query-string";
import _ from "lodash";
import moment from "moment";

//   const FormItem = Form.Item;
const { Option } = Select;

const couponType = [
  "Percentage",
  "Price",
  "Number",
];

const couponDayType = [
  "All Week",
  "Weekends",
  "Weekday",
  "Specific Days",
  "Particular Days",
];

class DeliveryTeamViewPage extends React.Component {
  formRef = React.createRef();

  state = {
    visible: false,
    statusType: "",
    statusValue: 0,

  };

  componentDidMount() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    let requestParams = { id: queryString.stringify(params) };
    this.props.couponViewProcess(requestParams);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.coupon_status !== this.props.coupon_status) {
      if (this.props.coupon_status && this.props.coupon_status != null) {
        if (
          this.props.coupon_status &&
          this.props.coupon_status.success === true
        ) {
          let url = this.props.location.search;
          let params = queryString.parse(url);
          let requestParams = { id: queryString.stringify(params) };
          this.props.couponViewProcess(requestParams);
          this.setState({
            visible: false,
          });
        }
      }
    }

  }

  showModal = (type, status) => {
    this.setState({
      visible: true,
      statusType: type,
      statusValue: status,
    });

    setTimeout(() => {
      this.formRef.current.setFieldsValue({ status: "1" });
    }, 1000);
  };

  onFinish = (e) => {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    let statusDetail = { ...e };
    statusDetail.id = queryString.stringify(params);

    this.props.couponChangeStatusProcess(statusDetail);

  };


  onFinishFailed = (e) => {

  };
  handleOk = () => {
    this.setState({
      visible: false,
    });
  };



  handleCancel = () => {
    this.setState({ visible: false });
  };


  render() {
    const { visible } = this.state;

    const view_details = _.get(this, "props.coupon_View.data.details", {});
    return (
      <div className="ListCategoriesContent">
        <div className="card">
          <div className="card-body">
            <div className="PageTitle">Delivery Team View</div>
            <div className="CategoriesViewContainer mt-4">
              <div className="row">

                <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mb-4">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Team Name</div>
                        <div className="TextSemiBold">
                          Team -1
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Team Id</div>
                        <div className="TextSemiBold">
                          2726372
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Email</div>
                        <div className="TextSemiBold">
                          test@gmail.com
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Mobile</div>
                        <div className="TextSemiBold">
                          897897897878
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Pin Code</div>
                        <div className="TextSemiBold">
                          28327
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Country</div>
                        <div className="TextSemiBold">
                         India
                        </div>
                      </div>
                    </div>
                   
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Starts In</div>
                        <div className="TextSemiBold">
                          {moment(view_details.starts_in).format('DD-MM-YYYY')}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Expires In</div>
                        <div className="TextSemiBold">
                          {moment(view_details.expires_in).format('DD-MM-YYYY')}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Status</div>
                        <div className="TextSemiBold">
                          {view_details.status === 1 ? (
                            <Tag color="green">Active</Tag>
                          ) : (
                              <Tag color="red">In Active</Tag>
                            )}
                        </div>
                      </div>
                      <div>
                        <div className="CategoriesViewList">
                          <div className="mt-2">
                            {view_details.status === 0 ? (
                              <Button

                                className="btn-active"
                                color="green"
                                onClick={() => this.showModal("status", 1)}
                              >
                                Active
                              </Button>
                            ) : (
                                <Button
                                  onClick={() => this.showModal("status", 0)}
                                  className="btn-deactive"
                                  color="red"

                                >
                                  Deactive
                                </Button>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>


                    <Modal
                      visible={visible}
                      title="Change Status"
                      //   onOk={this.handleOk}
                      onCancel={this.handleCancel}
                      footer={null}
                    >
                      <div className="row">
                        <div className="col-12">
                          <div className="CategoriesViewList">
                            <Form
                              scrollToFirstError={true}
                              onFinish={(e) => this.onFinish(e)}
                              onFinishFailed={(e) => this.onFinishFailed(e)}
                              ref={this.formRef}
                            >
                              <Form.Item
                                label="Status"
                                name="status"
                                rules={[
                                  {
                                    required: true,
                                    message: "This field required!",
                                  },
                                ]}
                              >
                                <Select placeholder="Select">
                                  <Option value="1">Active</Option>
                                  <Option value="0">Inactive</Option>
                                </Select>
                              </Form.Item>
                              <Form.Item
                                label="Reason for the Change"
                                name="status_glossary"
                                rules={[
                                  {
                                    required: true,
                                    message: "This field required!",
                                  },
                                ]}
                              >
                                <Input.TextArea />
                              </Form.Item>

                              <div
                                className="text-align-end"
                                style={{ textAlign: "end" }}
                              >
                                <Button
                                  className="mr-2"
                                  onClick={this.handleCancel}
                                >
                                  Cancel
                                  </Button>
                                <Button
                                  htmlType="submit"
                                  type="primary"

                                // onClick={this.handleOk}
                                >
                                  Submit
                                  </Button>
                              </div>

                            </Form>
                          </div>
                        </div>
                      </div>
                    </Modal>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    coupon_View: state.coupon_reducer.couponView,
    coupon_status: state.coupon_reducer.couponChangeStatus,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    couponViewProcess: (requestBody) =>
      dispatch({
        type: COUPON_VIEW,
        payload: agent.Coupon_crud.couponView(requestBody),
      }),
    couponChangeStatusProcess: (requestBody) =>
      dispatch({
        type: COUPON_CHANGE_STATUS,
        payload: agent.Coupon_crud.change_status(requestBody),
      }),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryTeamViewPage);
