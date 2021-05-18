import React from 'react'
import { Button, Table, Tag,Form,Input,Select,InputNumber} from 'antd'
import { Link } from 'react-router-dom'
import _ from 'lodash';
import './userlist.scss';
import {
  FilterOutlined
} from '@ant-design/icons';
import { connect } from "react-redux";
import agent from '../../../agent';
import {
  GUEST_LIST,
} from '../../../constants/actionTypes';
const { Option } = Select;



const userColumns = [
  {
    title: 'First Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },

];
class UserListPage extends React.Component {
  state = {
    limit: 10,
    city_fil: '',
    state_fil: '',
    country_fil: '',
    zipcode_fil: '',
    gender_fil: '',
    approved_fil: ''
  }
constructor(props) {
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      active: false,
    };
  }
  addActiveClass() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
  };
  componentDidMount() {
    let request = {
      sort: 'created_at.desc'
    }
    this.props.guestListProcess(request)
  }

  componentDidUpdate(prevProps) {

  }

  pageChange = (page, pageSize) => {
    let requesParams = {
      limit: pageSize,
      page: page,
      sort: 'created_at.desc'
    }
    this.props.guestListProcess(requesParams)

  }
  searchGuest = _.debounce((value) => {
    let guest_filter = { search: value};
    let empty_filter = {sort: 'created_at.desc'}
    if(value){
      this.props.guestListProcess(guest_filter);
    } else {
      this.props.guestListProcess(empty_filter);
    }
  }, 300) 

  searchCity = (value) => {
    let city_filter =  value
    // let empty_filter = {sort: 'created_at.desc'}
    if(value){
      this.setState({
        city_fil:city_filter
      })
    } 
  }
  searchState = (value) => {
    let state_filter =  value
    // let empty_filter = {sort: 'created_at.desc'}
    if(value){
      this.setState({
        state_fil:state_filter
      })
    } 
  }
  searchCountry = (value) => {
    let country_filter =  value
    // let empty_filter = {sort: 'created_at.desc'}
    if(value){
      this.setState({
        country_fil:country_filter
      })
    } 
  }
  searchZipcode = (value) => {
    let zipcode_filter =  value
    // let empty_filter = {sort: 'created_at.desc'}
    if(value){
      this.setState({
        zipcode_fil:zipcode_filter
      })
    } 
  }
  genderFilter = (event) => {
    if(event){
      this.setState({
        gender_fil: event
      })
    }  
  }
  approvedFilter = (event) => {
    console.log('approved_fil', event);
    if(event){
      this.setState({
        approved_fil: event
      })
    }  
  }
  submitFilter = (value) => {
    let filterParams = {
      city: this.state.city_fil,
      state: this.state.state_fil,
      country: this.state.country_fil,
      zip_code: this.state.zipcode_fil,
      gender: this.state.gender_fil,
      approved_status: this.state.approved_fil,
      sort: 'created_at.desc'
    }
    console.log('filterParams', filterParams);
    this.props.guestListProcess(filterParams);
  }
  clearFilters = () => {
    window.location.reload();
  }
  render() {
    let tableDatatest = []
    if (
      this.props.guests_List &&
      this.props.guests_List.data &&
      this.props.guests_List.data.items &&
      this.props.guests_List.data.items.length > 0
    ) {
      tableDatatest = this.props.guests_List.data.items.map((value, index) => {
        return {

          key: value.id,
          name: _.startCase(_.get(value, 'first_name', '-')),
          last_name: _.startCase(_.get(value, 'last_name')),
          gender: value.gender === null ? '-' : value.gender,
          address: value.address === null ? '-' : value.address,
          action: <Button type="link"><Link to={`/guests-view?${value.id}`}> View</Link></Button>




        }
      })
    }
    return (
      <div className="ListCategoriesContent">
        <div className="card">
          <div className="card-body">
            <div className="PageTitle d-flex justify-content-between align-items-center">
              <span>Guest List</span>
              {/* <Button className="advance-filter-btn" onClick = {this.addActiveClass}>
                <FilterOutlined />
                <span>Advanced Filter</span>
              </Button> */}
            </div>
            <div className = {
              this.state.active ? 'advance-filter-container-set Active' : 'advance-filter-container-set'
            }>
            <div className = "advance-filter-container">
            <Form>
              <div className="row">
                {/* <Form.Item className="col-12 col-md-6 col-lg-3">
                  <Input placeholder="Search" onChange = {e => this.searchGuest(e.target.value)}/>
                </Form.Item>
                <Form.Item className="col-12 col-md-6 col-lg-3">
                  <Select placeholder="Gender" dropdownClassName="advance-filter-dropdown" onChange={this.genderFilter}>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="others">Others</Option>
                  </Select>
                </Form.Item>
                <Form.Item className="col-12 col-md-6 col-lg-3">
                  <Input placeholder="City" onChange = {e => this.searchCity(e.target.value)} />
                </Form.Item>
                <Form.Item className="col-12 col-md-6 col-lg-3">
                  <Input placeholder="State" onChange = {e => this.searchState(e.target.value)} />
                </Form.Item>
                <Form.Item className="col-12 col-md-6 col-lg-3">
                  <Input placeholder="Country" onChange = {e => this.searchCountry(e.target.value)} />
                </Form.Item>
                <Form.Item className="col-12 col-md-6 col-lg-3">
                  <Input  placeholder="Zip Code" onChange = {e => this.searchZipcode(e.target.value)}/>
                </Form.Item>
                <Form.Item className="col-12 col-md-6 col-lg-3">
                  <Select placeholder="Approved Status" dropdownClassName="advance-filter-dropdown" onChange={this.approvedFilter}>
                    <Option value='0'>Not Approved</Option>
                    <Option value='1'> Approved</Option>
                  </Select>
                </Form.Item> */}
                {/* <Form.Item className="col-12 d-flex filter-submit-btn-container">
                <Button className="mr-3" type="primary" htmlType="submit" onClick = {this.submitFilter}>Submit</Button>
                <Button type="reset" htmlType="reset" className="filter-clear-btn" onClick = {this.clearFilters}>Clear Filters</Button>
                </Form.Item> */}
              </div>
              </Form>
            </div>
            </div>
            <div className="UserTable mt-3">
              <Table  dataSource={tableDatatest} columns={userColumns}
                pagination={{
                  onChange: (page, pageSize) =>
                    this.pageChange(page, pageSize),
                  total: _.get(
                    this,
                    "props.guests_List.data.meta.total",
                    0
                  ),
                  pageSize: _.get(
                    this,
                    "state.limit"
                  ),
                }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    guests_List: state.guest_reducer.guestList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    guestListProcess: (requestBody) =>
      dispatch({ type: GUEST_LIST, payload: agent.Guests_crud.guestList(requestBody) }),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListPage);