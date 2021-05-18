import React from 'react';
import {Breadcrumb} from 'antd';

class Breadcrumbs extends React.Component {
	render() {
		return (
			<div>
			   <Breadcrumb style={{ margin: '16px 0' }}>
	              <Breadcrumb.Item>ManageTutors</Breadcrumb.Item>
	           
	            </Breadcrumb>
			</div>
		);
	}
}

export default Breadcrumbs;