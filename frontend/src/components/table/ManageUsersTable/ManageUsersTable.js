import React from 'react';
import { Table,Button,Avatar } from 'antd';
import {
    Link
} from 'react-router-dom'; 
import '../ManageTutorsTable/ManageTutorsTable.scss';

const columns = [{
  title: 'Name',
  dataIndex: 'Name',
  width: 150,
}, {
  title: 'Zip Code',
  dataIndex: 'Zip_Code',
  width: 150,
}, {
  title: 'Email ID',
  dataIndex: 'Email_ID',
},{
  title: 'Date of signup',
  dataIndex: 'Date_of_signup',
},{
  title: 'Action',
  dataIndex: 'action',
}];

const data = [{
  Name: <div className="Student-Table-Avatar"><Avatar src="resources/images/avatars/5.jpg" />User 1</div>,
  Zip_Code: '456 545',
  Email_ID: 'tutorus@studioq.co.in',
  Date_of_signup: '2014/06/13',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/view-tutors"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>View</Button></Link>
  </div>,
  id: '1',
},
{
  Name: <div className="Student-Table-Avatar"><Avatar src="resources/images/avatars/5.jpg" />User 2</div>,
  Zip_Code: '456 545',
  Email_ID: 'tutorus@studioq.co.in',
  Date_of_signup: '2014/06/13',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/view-tutors"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>View</Button></Link>
  </div>,
  id: '2',
},
{
  Name: <div className="Student-Table-Avatar"><Avatar src="resources/images/avatars/5.jpg" />User 3</div>,
  Zip_Code: '456 545',
  Email_ID: 'tutorus@studioq.co.in',
  Date_of_signup: '2014/06/13',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/view-tutors"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>View</Button></Link>
  </div>,
  id: '3',
},
{
  Name: <div className="Student-Table-Avatar"><Avatar src="resources/images/avatars/5.jpg" />User 4</div>,
  Zip_Code: '456 545',
  Email_ID: 'tutorus@studioq.co.in',
  Date_of_signup: '2014/06/13',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/view-tutors"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>View</Button></Link>
  </div>,
  id: '4',
},
{
  Name: <div className="Student-Table-Avatar"><Avatar src="resources/images/avatars/5.jpg" />User 5</div>,
  Zip_Code: '456 545',
  Email_ID: 'tutorus@studioq.co.in',
  Date_of_signup: '2014/06/13',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/view-tutors"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>View</Button></Link>
  </div>,
  id: '5',
},
{
  Name: <div className="Student-Table-Avatar"><Avatar src="resources/images/avatars/5.jpg" />User 6</div>,
  Zip_Code: '456 545',
  Email_ID: 'tutorus@studioq.co.in',
  Date_of_signup: '2014/06/13',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/view-tutors"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>View</Button></Link>
  </div>,
  id: '6',
},
{
  Name: <div className="Student-Table-Avatar"><Avatar src="resources/images/avatars/5.jpg" />User 7</div>,
  Zip_Code: '456 545',
  Email_ID: 'tutorus@studioq.co.in',
  Date_of_signup: '2014/06/13',
  action: 
  <div className="SectionTableActionSet">
  <Link to="/view-tutors"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>View</Button></Link>
  </div>,
  id: '7',
},
{
  Name: <div className="Student-Table-Avatar"><Avatar src="resources/images/avatars/5.jpg" />User 8</div>,
  Zip_Code: '456 545',
  Email_ID: 'tutorus@studioq.co.in',
  Date_of_signup: '2014/06/13',
  action: 
  <div className="SectionTableActionSet">
    <Link to="/view-tutors"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>View</Button></Link>
  </div>,
  id: '8',
},
{
  Name: <div className="Student-Table-Avatar"><Avatar src="resources/images/avatars/5.jpg" />User 9</div>,
  Zip_Code: '456 545',
  Email_ID: 'tutorus@studioq.co.in',
  Date_of_signup: '2014/06/13',
  action: 
  <div className="SectionTableActionSet">
    <Link to="/view-tutors"><Button className="ant-btn-sm Section-Table-Edit" type="default" ghost>View</Button></Link>
  </div>,
  id: '9',
}];

class ManageUsersTable extends React.Component {
	render() {
		return (
			 <div className="table-responsive">
				<Table columns={columns} rowKey='id' dataSource={data} pagination={{ pageSize: 5 }}  />
      		</div>
		);
	}
}

export default ManageUsersTable;