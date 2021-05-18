import React from "react";
import {
  Form,

  Input,
  Button,

  Tag,
  Modal,
  Select,
  Image,
} from "antd";

import "./userlist.scss";
import agent from "../../../agent";
import { connect } from "react-redux";
import {
  GUEST_VIEW,
  GUEST_CHANGE_STATUS,
  GUEST_APPROVE_STATUS,
} from "../../../constants/actionTypes";
import queryString from "query-string";
import _ from "lodash";


//   const FormItem = Form.Item;
const { Option } = Select;

class GuestsViewPage extends React.Component {
  formRef = React.createRef();

  state = {
    visible: false,
    statusType: "",
    statusValue: 0,
    approvedstatusValue: false,
    approveVisable: false,
  };

  componentDidMount() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    let requestParams = { id: queryString.stringify(params) };
    this.props.guestViewProcess(requestParams);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.guest_status !== this.props.guest_status) {
      if (this.props.guest_status && this.props.guest_status != null) {
        if (
          this.props.guest_status &&
          this.props.guest_status.success === true
        ) {
          let url = this.props.location.search;
          let params = queryString.parse(url);
          let requestParams = { id: queryString.stringify(params) };
          this.props.guestViewProcess(requestParams);
          this.setState({
            visible: false,
          });
        }
      }
    }
    if (prevProps.approve_guest_status !== this.props.approve_guest_status) {
      if (this.props.approve_guest_status && this.props.approve_guest_status != null) {
        if (
          this.props.approve_guest_status &&
          this.props.approve_guest_status.success === true
        ) {
          let url = this.props.location.search;
          let params = queryString.parse(url);
          let requestParams = { id: queryString.stringify(params) };
          this.props.guestViewProcess(requestParams);
          this.setState({
            approveVisable: false,
          });
        }

      }
    }
    // if (prevProps.guest_status !== this.props.guest_statuss) {
    //   if(this.props.guest_status && this.props.guest_status.success === true){
    //     this.setState({
    //       visible: false,
    //     });
    //   }
    // }
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
  approveShowModal = (type, status) => {
    this.setState({
      approveVisable: true,
      statusType: type,
      statusValue: status,
    });

    setTimeout(() => {
      this.formRef.current.setFieldsValue({ status: true });
    }, 1000);
  };
  onFinish = (e) => {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    let statusDetail = { ...e };
    statusDetail.id = queryString.stringify(params);

    this.props.guestChangeStatusProcess(statusDetail);

  };

  approveOnFinish = (e) => {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    let statusDetail = { ...e };
    statusDetail.id = queryString.stringify(params);

    this.props.guestApproveChangeStatusProcess(statusDetail);

  };
  onFinishFailed = (e) => {

  };
  handleOk = () => {
    if (this.props.guest_status && this.props.guest_status.success === true) {
      this.setState({
        visible: false,
      });
    }

  };

  approveHandleOk = () => {
    this.setState({
      approveVisable: false,
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  approveHandleCancel = () => {
    this.setState({ approveVisable: false });
  };
  render() {
    const { visible } = this.state;
    const { approveVisable } = this.state;
    const view_details = _.get(this, "props.guest_View.data.details", {});
    const meta_details = _.get(this, "props.guest_View.data.meta", {});
    return (
      <div className="ListCategoriesContent">
        <div className="card">
          <div className="card-body">
            <div className="PageTitle">Users View</div>
            <div className="CategoriesViewContainer mt-4">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-4">
                  <div className="CategoriesViewProfile">
                    <Image
                      className="img-thumbnail"
                      src={`${_.get(meta_details, 'photo.path')}/${_.get(meta_details, 'photo.folder')}/${_.get(meta_details, 'photo.sizes.medium')}/${_.get(view_details, 'photo')}`}
                      alt="MDN logo"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mb-4">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">First Name</div>
                        <div className="TextSemiBold">
                          {_.startCase(_.get(view_details, "first_name", "-"))}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Last Name</div>
                        <div className="TextSemiBold">
                          {_.startCase(_.get(view_details, "last_name", "-"))}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Email</div>
                        <div className="TextSemiBold">
                          {_.get(view_details, "email", "-")}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Gender</div>
                        <div className="TextSemiBold">
                          {view_details.gender === null
                            ? "-"
                            : view_details.gender}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">City</div>
                        <div className="TextSemiBold">
                          {view_details.city === null ? "-" : view_details.city}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">State</div>
                        <div className="TextSemiBold">
                          {view_details.state === null
                            ? "-"
                            : view_details.state}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Country</div>
                        <div className="TextSemiBold">
                          {view_details.country === null
                            ? "-"
                            : view_details.country}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Zip code</div>
                        <div className="TextSemiBold">
                          {view_details.zip_code === null
                            ? "-"
                            : view_details.zip_code}
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
                                // type="primary"
                                >
                                  Deactive
                                </Button>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Approved Status</div>
                        <div className="TextSemiBold">
                          {view_details.approved_status === true ? (
                            <Tag color="green">Approved</Tag>
                          ) : (
                              <Tag color="red">Not Approved</Tag>
                            )}
                        </div>

                        {/* <div className="CategoriesViewList">
                          <div className="mt-2">
                          {view_details.approved_status === true ? (
                            <Button
                              className="btn-active"
                              // visible = {this.state.buttonVisiable}
                              
                              style={{display:"none"}}
                              color="green"
                              onClick={() =>
                                this.approveShowModal("status", true)
                              }
                            >
                              Approve
                            </Button>

                          ):(
                            <Button
                              className="btn-active"

                              color="green"
                              onClick={() =>
                                this.approveShowModal("status", true)
                              }
                            >
                              Approve
                            </Button> 
                          )}

                          </div>
                        </div> */}
                      </div>
                      <div className="CategoriesViewList"></div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-4">
                      <div className="CategoriesViewList">
                        <div className="TextRegular mb-2">Bio</div>
                        <div className="TextSemiBold">
                          {view_details.zip_code === null
                            ? "-"
                            : view_details.zip_code}
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
                                    message: "This Field Required!",
                                  },
                                ]}
                              >
                                <Select placeholder="Select">
                                  <Option value="1">Active</Option>
                                  <Option value="0">Deactive</Option>
                                </Select>
                              </Form.Item>
                              <Form.Item
                                label="Reason for changing status"
                                name="status_glossary"
                                rules={[
                                  {
                                    required: true,
                                    message: "This Field required!",
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
                    {/*For Approve status*/}
                    <Modal
                      visible={approveVisable}
                      title="Approve status"
                      //   onOk={this.handleOk}
                      onCancel={this.approveHandleCancel}
                      footer={null}
                    >
                      <div className="row">
                        <div className="col-12">
                          <div className="CategoriesViewList">
                            <Form
                              scrollToFirstError={true}
                              onFinish={(e) => this.approveOnFinish(e)}
                              onFinishFailed={(e) => this.onFinishFailed(e)}
                              ref={this.formRef}
                            >
                              <Form.Item
                                label="Approve Status"
                                name="approved_status"
                                rules={[
                                  {
                                    required: true,
                                    message: "This Field is required!",
                                  },
                                ]}
                              >
                                <Select placeholder="Select">
                                  <Option value="true">Approve</Option>

                                </Select>
                              </Form.Item>
                              <Form.Item
                                label="Reason for changing status"
                                name="approved_status_glossary"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your username!",
                                  },
                                ]}
                              >
                                <Input.TextArea />
                              </Form.Item>
                              <div className="full-width button-group-section mt-2">
                                <div
                                  className="text-align-end"
                                  style={{ textAlign: "end" }}
                                >
                                  <Button
                                    className="mr-2"
                                    onClick={this.approveHandleCancel}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    htmlType="submit"
                                    type="primary"
                                  // loading={this.props.approve_guest_status.success === true}
                                  // onClick={this.approveHandleOk}
                                  >
                                    Submit
                                  </Button>
                                </div>
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
    guest_View: state.guest_reducer.guestView,
    guest_status: state.guest_reducer.guestChangeStatus,
    approve_guest_status: state.guest_reducer.guestApproveStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    guestViewProcess: (requestBody) =>
      dispatch({
        type: GUEST_VIEW,
        payload: agent.Guests_crud.guestView(requestBody),
      }),
    guestChangeStatusProcess: (requestBody) =>
      dispatch({
        type: GUEST_CHANGE_STATUS,
        payload: agent.Guests_crud.change_status(requestBody),
      }),
    guestApproveChangeStatusProcess: (requestBody) =>
      dispatch({
        type: GUEST_APPROVE_STATUS,
        payload: agent.Guests_crud.approve_status(requestBody),
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestsViewPage);
