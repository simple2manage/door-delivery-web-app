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
    total:32,
    narration:'Yes',
    shop:'Yes'
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
    otp:'343',
    item_code:'554',
    mrp:30,
    tax:'2',
    total:32,
    narration:'Yes',
    shop:'Yes'
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
    otp:'5343',
    item_code:'7676',
    mrp:30,
    tax:'1',
    total:31,
    narration:'Yes',
    shop:'Yes'
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
    otp:'343',
    item_code:'54654',
    mrp:20,
    tax:'2',
    total:32,
    narration:'No',
    shop:'Yes'
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
    otp:'343',
    item_code:'9898',
    mrp:40,
    tax:'3',
    total:43,
    narration:'Yes',
    shop:'No'
  }
]
const userColumns = [
  {
    title: 'SI No',
    dataIndex: 'si_no',
    key: 'si_no',
  },
  {
    title: 'Item Code',
    dataIndex: 'item_code',
    key: 'item_code',
  },
  {
    title: 'Item Name',
    dataIndex: 'item_name',
    key: 'item_name',
  },
  {
    title: 'MRP',
    dataIndex: 'mrp',
    key: 'mrp',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Tax',
    dataIndex: 'tax',
    key: 'tax',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: 'Narration',
    dataIndex: 'narration',
    key: 'narration',
  },
  {
    title: 'Shop',
    dataIndex: 'shop',
    key: 'shop',
  }
];
class OrderItemListPage extends React.Component {
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
      this.props.couponsLists &&
      this.props.couponsLists.data &&
      this.props.couponsLists.data.items &&
      this.props.couponsLists.data.items.length > 0
    ) {
      tableDatatest = data.map((value, index) => {
        return {
          key: value.id,
          si_no: index +1,
          item_code: value.item_code,
          item_name:value.name,
          mrp:value.mrp,
          price:value.value,
          quantity:value.no_of_item,
          tax:value.tax,
          total:value.total,
          narration:value.narration,
          shop:value.shop,
        }
      })
    }
    return (
      <div className="ListCategoriesContent">
        <div className="card">
          <div className="card-body">
            <div className="PageTitle">Orders Item List</div>
            <div className="UserTable mt-3">
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
)(OrderItemListPage);