import React from 'react';
import { Table,Button,Tag } from 'antd';
import { Link } from 'react-router-dom';
import '../ManageTutorsTable/ManageTutorsTable.scss'


const columns = [{
  title: 'Name',
  dataIndex: 'name',
   // width: 550,
   id: 'name',
},{
  title: 'Status',
  dataIndex: 'status',
  id: 'Status',
},{
  title: 'Description',
  dataIndex: 'description',
  id: 'Description',
},{
  title: 'Action',
  dataIndex: 'action',
  id: 'Action',
}];

const data = [{
  name: 'Mark Stevenson',
  status: <Tag color="green">Active</Tag>,
  description:'Lorem ipsum dolor sit amet',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/edit-categories"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>Edit</Button></Link>
  </div>,
  id: 'Mark Stevenson',
},
{
  name: 'Mark Stevenson',
  status: <Tag color="green">Active</Tag>,
  description:'Lorem ipsum dolor sit amet',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/edit-categories"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>Edit</Button></Link>
  </div>,
  id: 'Mark Stevenson2',
},
{
  name: 'Mark Stevenson',
  status: <Tag color="red">Deactive</Tag>,
  description:'Lorem ipsum dolor sit amet',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/edit-categories"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>Edit</Button></Link>
  </div>,
  id: 'Mark Stevenson3',
},
{
  name: 'Mark Stevenson',
  status: <Tag color="green">Active</Tag>,
  description:'Lorem ipsum dolor sit amet',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/edit-categories"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>Edit</Button></Link>
  </div>,
  id: 'Mark Stevenson4',
},
{
  name: 'Mark Stevenson',
  status: <Tag color="red">Deactive</Tag>,
  description:'Lorem ipsum dolor sit amet',
  action: 
  <div className="SectionTableActionSet">
    <Link to="/edit-categories"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>Edit</Button></Link>
  </div>,
  id: 'Mark Stevenson5',
},
{
  name: 'Mark Stevenson',
  status: <Tag color="green">Active</Tag>,
  description:'Lorem ipsum dolor sit amet',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/edit-categories"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>Edit</Button></Link>
  </div>,
  id: 'Mark Stevenson6',
},
{
  name: 'Mark Stevenson',
  status: <Tag color="green">Active</Tag>,
  description:'Lorem ipsum dolor sit amet',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/edit-categories"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>Edit</Button></Link>
  </div>,
  id: 'Mark Stevenson7',
},
{
  name: 'Mark Stevenson',
  status: <Tag color="green">Active</Tag>,
  description:'Lorem ipsum dolor sit amet',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/edit-categories"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>Edit</Button></Link>
  </div>,
  id: 'Mark Stevenson8',
},
{
  name: 'Mark Stevenson',
  status: <Tag color="green">Active</Tag>,
  description:'Lorem ipsum dolor sit amet',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/edit-categories"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>Edit</Button></Link>
  </div>,
  id: 'Mark Stevenson9',
}];


class ListCategoriesTable extends React.Component {

  render() {

    return (
      <div className="ListCategoriesTableContainer">
        <Table columns={columns} dataSource={data} rowKey='id' pagination={{ pageSize: 5 }}  />
      </div>
    );
  }
}

export default ListCategoriesTable;