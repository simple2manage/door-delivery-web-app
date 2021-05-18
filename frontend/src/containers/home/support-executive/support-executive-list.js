import React from 'react'
import { Button, Table, Tag, Modal } from 'antd'
import { Link } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './support-executive-create.scss';
import { connect } from "react-redux";
import agent from '../../../agent';
import {
  COUPON_LIST,
  COUPON_DELETE
} from '../../../constants/actionTypes';
import moment from 'moment';
import _ from 'lodash';
import { request } from 'superagent';

const { confirm } = Modal;
const data =[
  {
    name:'Team',
    id:'12121',
    mobile:'54645654654',
    email:'iyyappanrock@gmal.com',
    pin_code:'86780',
    country:'India'
  },
  {
    name:'Team-1',
    id:'23423',
    mobile:'45345435435',
    email:'iyyappanrock@gmal.com',
    pin_code:'86780',
    country:'India'
  },
  {
    name:'Team-2',
    id:'54654',
    mobile:'675675675',
    email:'test@g.com',
    pin_code:'86780',
    country:'India'
  },
  {
    name:'Team-3',
    id:'67876',
    mobile:'23423423',
    email:'test@g.com',
    pin_code:'86780',
    country:'India'
  },
  {
    name:'Team-4',
    id:'0676',
    mobile:'452342',
    email:'test@g.com',
    pin_code:'86780',
    country:'India'
  }
]
const userColumns = [
  {
    title: 'Name',
    dataIndex: 'team_name',
    key: 'team_name',
  },
  {
    title: 'Id',
    dataIndex: 'team_id',
    key: 'team_id',
  },
  {
    title: 'Mobile',
    dataIndex: 'mobile',
    key: 'mobile',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];
class SupportExecutiveListPage extends React.Component {
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
          team_name: value.name,
          team_id: value.id,
          mobile: value.mobile,
          email:value.email,
          action: <span>
            <Button type="link">
              <Link to={`/delivery-team-view?28`}>
                View
            </Link>
            </Button>
            <Button type="link">
              <Link to={`/coupons-create?id=${value.id}&&type=Edit`}>
                Edit
            </Link>
            </Button>
            <Button className="btn-delete" onClick={() => this.onDeleteConfirm(value)}>
              Delete
          </Button>
          </span>,
        }
      })
    }
    return (
      <div className="ListCategoriesContent">
        <div className="card">
          <div className="card-body">
            <div className="PageTitle">Support Executive List</div>
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
)(SupportExecutiveListPage);