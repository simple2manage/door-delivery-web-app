import React from 'react'
import { Button, Table, Tag,Select, Modal } from 'antd'
import { Link } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import '../delivery-executive/delivery-executive-create.scss';
import { connect } from "react-redux";
import agent from '../../../agent';
import {
  COUPON_LIST,
  COUPON_DELETE
} from '../../../constants/actionTypes';
import moment from 'moment';
import _ from 'lodash';
import { request } from 'superagent';
const { Option } = Select;
const { confirm } = Modal;
const data =[
  {
    name:'Team',
    id:'12121',
    mobile:'54645654654',
    email:'iyyappanrock@gmal.com',
    pin_code:'86780',
    country:'India',
    time:'2:00 PM',
    committed_time:'3:00 PM',
    delivery_time:'3:30 PM',
    value:30,
    no_of_item:3,
    delivery_executive:'iyyappan',
    delivery_mobile:'87878777878',
    otp:'4343',
    item_code:'45254',
    mrp:20,
    tax:'2',

  },
  {
    name:'Team-1',
    id:'23423',
    mobile:'45345435435',
    email:'iyyappanrock@gmal.com',
    pin_code:'86780',
    country:'India',
    time:'4:00 PM',
    committed_time:'5:00 PM',
    delivery_time:'5:30 PM',
    value:40,
    no_of_item:2,
    delivery_executive:'lokey',
    delivery_mobile:'354543',
    otp:'343'
  },
  {
    name:'Team-2',
    id:'54654',
    mobile:'675675675',
    email:'test@g.com',
    pin_code:'86780',
    country:'India',
    time:'5:00 PM',
    committed_time:'6:00 PM',
    delivery_time:'6:30 PM',
    value:50,
    no_of_item:6,
    delivery_executive:'Joe',
    delivery_mobile:'7765656',
    otp:'5343'
  },
  {
    name:'Team-3',
    id:'67876',
    mobile:'23423423',
    email:'test@g.com',
    pin_code:'86780',
    country:'India',
    time:'6:00 PM',
    committed_time:'6:00 PM',
    delivery_time:'7:30 PM',
    value:10,
    no_of_item:8,
    delivery_executive:'Jhon',
    delivery_mobile:'54654654',
    otp:'343'
  },
  {
    name:'Team-4',
    id:'0676',
    mobile:'452342',
    email:'test@g.com',
    pin_code:'86780',
    country:'India',
    time:'7:00 PM',
    committed_time:'8:00 PM',
    delivery_time:'8:30 PM',
    value:10,
    no_of_item:4,
    delivery_executive:'Bass',
    delivery_mobile:'54654654',
    otp:'343'
  }
]
const userColumns = [
  {
    title: 'Order ID',
    dataIndex: 'order_id',
    key: 'order_id',
  },
  {
    title: 'Mobile',
    dataIndex: 'mobile',
    key: 'mobile',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Order Time',
    dataIndex: 'order_time',
    key: 'order_time',
  },
  {
    title: 'Committed Time',
    dataIndex: 'committed_time',
    key: 'committed_time',
  },
  {
    title: 'Delivery Time',
    dataIndex: 'delivery_time',
    key: 'delivery_time',
  },
  {
    title: 'Order Value',
    dataIndex: 'order_value',
    key: 'order_value',
  },
  {
    title: 'Number Of Item',
    dataIndex: 'no_of_item',
    key: 'no_of_item',
  },
  {
    title: 'Delivery Executive',
    dataIndex: 'delivery_executive',
    key: 'delivery_executive',
  },
  {
    title: 'Delivery Mobile',
    dataIndex: 'delivery_mobile',
    key: 'delivery_mobile',
  },
  {
    title: 'OTP',
    dataIndex: 'otp',
    key: 'otp',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];
class OrderListPage extends React.Component {
  state = {
    limit: 10,
    visible: false
  }
  componentDidMount() {
    let request = {
      sort: 'created_at.desc'
    }
    this.props.couponsList(request)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.couponsDeletes !== this.props.couponsDeletes) {
      this.props.couponsList()
    }
  }
  /*Pagination change */
  pageChange = (page, pageSize) => {
    let requesParams = {
      limit: pageSize,
      page: page,
      sort: 'created_at.desc',
    }
    this.props.couponsList(requesParams)

  }
  /*Delete form list*/
  onDeleteConfirm = (value) => {
    let currentThis = this;
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Once deleted content cannot be retrieved again',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        let request = { ids: [value.id] }
        currentThis.props.couponsDelete(request)
      },
      onCancel() {

      },
    });
    // confirm({
    //   title: 'Do you Want to delete these items?',
    //   icon: <ExclamationCircleOutlined />,
    //   content: 'Once deleted content cannot be retrieved again',
    //   okText: 'Yes',
    // okType: 'danger',
    // cancelText: 'No',
    //   onOk() {
    //     let request ={ids:[value.id]}
    //     currentThis.props.couponsDelete(request)
    //   },
    //   onCancel() {
    //   },
    // });
  }
  render() {
    let tableDatatest = []
    if (
      data
    ) {
      tableDatatest = data.map((value, index) => {
        return {
          key: value.id,
          order_id: value.id,
          mobile: value.mobile,
          name:value.name,
          order_time:value.time,
          committed_time:value.committed_time,
          delivery_time:value.delivery_time,
          delivery_executive:value.delivery_executive,
          order_value:value.value,
          no_of_item:value.no_of_item,
          delivery_mobile:value.delivery_mobile,
          otp:value.otp,

          action: <span>
            <Button type="link">
              <Link to={`/orders-item-list`}>
                View
            </Link>
            </Button>
            
          </span>,
        }
      })
    }
    return (
      <div className="ListCategoriesContent">
        <div className="card">
          <div className="card-body">
            <div className="PageTitle">Orders List</div>
            <div className="UserTable mt-3">
            <div className="row" style={{marginLeft:'-3px'}}>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-4" style={{width:'720px'}}>
                    <div className="row" style={{marginLeft:'-3px'}}>
                    <div className="col">
                    <label style={{fontSize:'14px'}}>Order Id</label>  
                      <div className=" CategoriesViewList" style={{width:'140px'}}>
                      <Select
                              placeholder="Order Id"
                              onChange={this.onamountChange}
                              value={this.state.value}
                            >
                              <Option value={0}>Bike</Option>
                              <Option value={1}>Car</Option>
                              <Option value={2}>Auto</Option>
                            </Select>
                      </div>
                    </div>
                    <div className="col">
                    <label style={{fontSize:'14px'}}>Customer</label>
                      <div className="CategoriesViewList">
                      <Select
                              placeholder="Customer"
                              onChange={this.onamountChange}
                              value={this.state.value}
                            >
                              <Option value={0}>Bike</Option>
                              <Option value={1}>Car</Option>
                              <Option value={2}>Auto</Option>
                            </Select>
                      </div>
                    </div>
                    <div className="col">
                    <label style={{fontSize:'14px'}}>Delivery/Undelivered</label>
                      <div className="CategoriesViewList">
                      <Select
                              placeholder="Delivery/Undelivered"
                              onChange={this.onamountChange}
                              value={this.state.value}
                            >
                              <Option value={0}>Bike</Option>
                              <Option value={1}>Car</Option>
                              <Option value={2}>Auto</Option>
                            </Select>
                      </div>
                    </div>
                  </div>
                  </div>
                    </div>
              <Table loading={tableDatatest.length > 0 ? false : true} dataSource={tableDatatest} columns={userColumns}
                pagination={{
                  onChange: (page, pageSize) =>
                    this.pageChange(page, pageSize),
                  total: _.get(
                    this,
                    "props.couponsLists.data.meta.total",
                    0
                  ),
                  pageSize: _.get(
                    this,
                    "state.limit"
                  ),
                }}



              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    couponsLists: state.coupons.couponsList,
    couponsDeletes: state.coupons.couponsDelete,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    couponsList: (requestBody) =>
      dispatch({ type: COUPON_LIST, payload: agent.Coupons.list(requestBody) }),
    couponsDelete: (requestBody) =>
      dispatch({ type: COUPON_DELETE, payload: agent.Coupons.delete(requestBody) }),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderListPage);