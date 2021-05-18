import React, { useState } from 'react'
import { Form, Input, Button, Select, TimePicker, InputNumber, DatePicker, Spin, Upload } from 'antd'
import { connect } from "react-redux";
import agent from '../../../agent';
import {
  COUPON_CREATE,
  COUPON_UPDATE,
  COUPON_VIEW,
  EXPERIENCE_LIST,
} from '../../../constants/actionTypes';
import queryString from "query-string";
import './support-executive-create.scss';
import moment from 'moment';

import { DateRangePicker } from 'rsuite';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
const { Option } = Select;
const { RangePicker } = DatePicker;

class SupportExecutiveCreatePage extends React.Component {
  formRef = React.createRef();

  state = {
    loading: false,
    query: '',
    amtType: '',
    dayType: '',
    amount: '',
    existData: {},
    view: {},
    photo: [],
  };
  componentDidMount() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    if (Object.keys(params).length > 0) {
      this.setState({
        query: params.id
      })
    } else {
      this.setState({
        query: '',
        amtType: '',
        dayType: '',
        startDate: '',
        existData: {},
        view: {}
      })
    }

    if (this.state.query !== '') {
      let requestParams = { id: queryString.stringify(params) }
      this.props.couponViewProcess(requestParams);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    if (prevProps.couponsCreates !== this.props.couponsCreates) {
      if (this.props.couponsCreates.success) {
        this.props.history.push('/coupons-list');
      }
    }
    if (prevProps.couponsUpdates !== this.props.couponsUpdates) {
      if (this.props.couponsUpdates.success) {
        this.props.history.push('/coupons-list');
      }
    }
    if (prevProps.location.search !== this.props.location.search) {
      if (Object.keys(params).length > 0) {
        this.setState({
          query: params.id
        })
      } else {
        this.setState({
          query: '',
          amtType: '',
          dayType: '',
          existData: {},
          view: {}
        })
      }
    }

    if (prevState.query !== this.state.query) {

      let requestParams = { id: params.id }

      this.props.couponViewProcess(requestParams);

    }

    if (prevProps.coupon_View !== this.props.coupon_View && queryString.stringify(params) &&
      this.props.coupon_View &&
      this.props.coupon_View.data &&
      this.props.coupon_View.data.details &&
      Object.keys(this.props.coupon_View.data.details).length > 0
    ) {
      let views = this.props.coupon_View.data.details
      this.setState({
        existData: this.props.coupon_View.data.details,
        amtType: parseInt(this.props.coupon_View.data.details.amount_type),
        dayType: parseInt(this.props.coupon_View.data.details.day_type),
      })
      this.formRef.current.setFieldsValue({
        coupon_code: views.coupon_code,
        amount_type: (() => {
          switch (views.amount_type) {
            case 0:
              return "Percentage"
            case 1:
              return "Price"
            case 2:
              return "Number"
            default:
              return null
          }
        })(),
        amount: views.amount,
        day_type: (() => {
          switch (views.day_type) {
            case 0:
              return "All Week"
            case 1:
              return "Weekends"
            case 2:
              return "Weekdays"
            case 3:
              return "Specific Days"
            case 4:
              return "Particular Dates "
            default:
              return null
          }
        })(),
        days: views.days,
        dates: views.dates != null && (views.dates).length > 0 ? [moment(views.dates[0]), moment(views.dates[1])] : views.dates,
        starts_in: moment(views.starts_in),
        expires_in: moment(views.expires_in),
        start_hours: moment(views.start_hours, "HH:mm"),
        end_hours: moment(views.end_hours, "HH:mm"),
        min_amount: views.min_amount,
        max_amount: views.max_amount,
      })
    }
  }
  /*Form validation error */
  onFinishFailed = errorInfo => {
  };
  /*Form validation*/
  onFinish = values => {

    let fieldValues = {}
    if (this.state.query === "") {
      if (values.day_type === "4") {
        fieldValues = {
          ...values, dates: values.dates,
          days: [values.days],
          starts_in: moment(values.starts_in).format("DD.MM.YYYY HH:mm"),
          expires_in: moment(values.expires_in).format("DD.MM.YYYY HH:mm"),
          start_hours: moment(values.start_hours).format("HH:mm"),
          end_hours: moment(values.end_hours).format("HH:mm"),
          experience: values.experiences.key,
        }
        this.props.couponsCreate(fieldValues);
      } else {
        fieldValues = {
          ...values,
          days: [values.days],
          starts_in: moment(values.starts_in).format("DD.MM.YYYY HH:mm"),
          expires_in: moment(values.expires_in).format("DD.MM.YYYY HH:mm"),
          start_hours: moment(values.start_hours).format("HH:mm"),
          end_hours: moment(values.end_hours).format("HH:mm"),
          experience: values.experiences.key,
        }
        this.props.couponsCreate(fieldValues);
      }


    } else {
      let urlParams = {
        id: this.state.query
      }
      if (values.day_type === 4) {
        fieldValues = {
          ...values, dates: values.dates,
          amount_type: (() => {
            switch (values.amount_type) {
              case "Percentage":
                return 0
              case "Price":
                return 1
              case "Number":
                return 2
              default:
                return null
            }
          })(),
          day_type: (() => {
            switch (values.day_type) {
              case "All Week":
                return 0
              case "Weekends":
                return 1
              case "Weekdays":
                return 2
              case "Specific Days":
                return 3
              case "Particular Dates ":
                return 4
              default:
                return null
            }
          })(),
          days: [values.days],
          starts_in: moment(values.starts_in).format("DD.MM.YYYY HH:mm"),
          expires_in: moment(values.expires_in).format("DD.MM.YYYY HH:mm"),
          start_hours: moment(values.start_hours).format("HH:mm"),
          end_hours: moment(values.end_hours).format("HH:mm"),
          experience: values.experiences.key,
        }
        this.props.couponsUpdate(fieldValues, urlParams);
      } else {
        fieldValues = {
          ...values,
          amount_type: (() => {
            switch (values.amount_type) {
              case "Percentage":
                return 0
              case "Price":
                return 1
              case "Number":
                return 2
              default:
                return null
            }
          })(),
          day_type: values.day_type,
          days: [values.days],
          starts_in: moment(values.starts_in).format("DD.MM.YYYY HH:mm"),
          expires_in: moment(values.expires_in).format("DD.MM.YYYY HH:mm"),
          start_hours: moment(values.start_hours).format("HH:mm"),
          end_hours: moment(values.end_hours).format("HH:mm"),
          experience: values.experiences.key,
        }
        this.props.couponsUpdate(fieldValues, urlParams);
      }
    }

  };
  /*Form Reset */
  onReset = () => {
    this.formRef.current.resetFields()
  }
  onamountChange = (event) => {
    this.setState({
      amtType: parseInt(event)
    })
  }
  onDayTypeChange = (event) => {
    this.setState({
      dayType: parseInt(event)
    })
  }
  disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');

  }
  onStartDate = (event) => {
    // console.log('startDate',event);

    this.setState({
      startDate: event
    })
  }
  expireDate = (current) => {
    return current && current < this.state.startDate
  }
  onChangeValues = (event) => {
    // console.log('event',event);
    this.setState({
      amount: event
    })
  }
  setExperience = (value, text) => {
    if (value && value.key && this.props.form) {
      this.props.form.setFieldsValue({
        [`${text}`]: value,
      });

    }
  };
  searchExperience = (value, text) => {
    // console.log('experiences value',value);

    const experiences = { search: value, expand: "template" };
    // skill.search = value
    if (text == "experiences") {
      this.props.experienceList(experiences);
    }
  };
  render() {
    const { dayType, amtType, fetching } = this.state;
    const partDays = [];
    for (let i = 1; i >= 31; i++) {
      return partDays.push(i)
    }
    // console.log('min_amount',this.formRef)
    const { loading, imageUrl, photo } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    const dummyRequest = ({ file, onSuccess }) => {
      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    };
    return (
      <div className="LoginFormInnerContainer">
      <div className="card">
        <div className="card-body">
          <div className="PageTitle">{this.state.query === "" ? "Add Support Executive" : "Update Support Executive"}</div>
          <div className="CategoriesViewContainer mt-4">
            <Form
            scrollToFirstError={true}
              // form={form}
              ref={this.formRef}
              name="control-hooks"
              onFinish={this.onFinish}
            >
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-4">
                  <div className="row">
                    {/* Coupon Code */}
                    <div className="col-12">
                      <div className="CategoriesViewList">
                        <Form.Item
                          label="Name"
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Name!',
                            },
                          ]}>
                          <Input placeholder="Name" />
                        </Form.Item>
                      </div>
                    </div>
                    {/* Amount type */}
                    <div className="col-12">
                      <div className="CategoriesViewList">
                        <Form.Item
                          label="Mobile"
                          name="mobile"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Mobile!',
                            },
                          ]}>
                          <Input placeholder="Mobile" />
                        </Form.Item>
                      </div>
                    </div>
                    
                    <div className="col-12">
                      <div className="CategoriesViewList">
                        <Form.Item
                          label="Email"
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Email!',
                            },
                          ]}>
                          <Input placeholder="Email" />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="CategoriesViewList">
                        <Form.Item
                          label="User Name"
                          name="user_name"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your User Name!',
                            },
                          ]}>
                          <Input placeholder="User Name" />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="CategoriesViewList">
                        <Form.Item
                          label="Password"
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: 'Please input Password!',
                            },
                          ]}>
                          <Input placeholder="Password" />
                        </Form.Item>
                      </div>
                    </div>
                    
                    <div className="row" style={{marginLeft:'-3px'}}>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-4" style={{width:'720px'}}>
                    <div className="row" style={{marginLeft:'-3px'}}>
                    <div className="full-width CategoriesViewList">
                    <label style={{fontSize:'14px',fontWeight:'bold',marginLeft:'18px'}}>Documents</label></div>
                    <div className="col">
                      
                      <div className=" CategoriesViewList" style={{width:'140px'}}>
                        <Form.Item
                          label="Document Name"
                          name="document_name"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Document Name!',
                            },
                          ]}>
                          <Input placeholder="Document Name" />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col">
                      <div className="CategoriesViewList">
                        <Form.Item
                          label="Number"
                          name="doc_number"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Document Number!',
                            },
                          ]}>
                          <Input placeholder="Document Number" />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col">
                      <div className="CategoriesViewList">
                        <Form.Item
                          label="Expires Date"
                          name="expires_in"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your expires date!',
                            },
                          ]}>
                          <DatePicker disabledDate={this.expireDate} format={"DD.MM.YYYY"} />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col">
                    <div className="CategoriesViewProfile">
                    {/* {this.state.existData.id ?   */}
                    <label>Document File</label>
                    <Upload className="uploadDocument"
                      customRequest={dummyRequest}
                      fileList={photo}
                      showUploadList={true}
                      onChange={e => this.handleChange(e, "photo")}
                    >
                          <Button icon={<UploadOutlined />}>Upload</Button>

                    </Upload>
                    {/* :''} */}

                  </div></div>
                  </div>
                  </div>
                    </div>
                    <div className="col-12 mb-4">
                      <div className="CategoriesViewList">
                        <Form.Item>
                          <Button className="mr-3" type="primary" htmlType="submit">{this.state.query === '' ? "Submit" : "Update"}</Button>
                          <Button type="reset" htmlType="reset"
                            onClick={this.onReset}
                          >Reset</Button>
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>

          </div>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coupon_View: state.coupon_reducer.couponView,
    couponsCreates: state.coupons.couponsCreate,
    couponsUpdates: state.coupons.couponsUpdate,
    experience_list: state.experience.experienceList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    couponsCreate: (requestBody) =>
      dispatch({ type: COUPON_CREATE, payload: agent.Coupons.create(requestBody) }),
    couponViewProcess: (requestBody) =>
      dispatch({
        type: COUPON_VIEW,
        payload: agent.Coupon_crud.couponView(requestBody),
      }),
    couponsUpdate: (requestBody, urlParams) =>
      dispatch({ type: COUPON_UPDATE, payload: agent.Coupons.update(requestBody, urlParams) }),
    experienceList: (requestBody) =>
      dispatch({ type: EXPERIENCE_LIST, payload: agent.Templates.list(requestBody) }),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupportExecutiveCreatePage);