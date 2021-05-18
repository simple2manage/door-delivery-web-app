import React from 'react';
import {Route} from 'react-router-dom';
import UserListPage from '../../pages/User/users-list.js';
import CategoriesListPage from '../../pages/Categories/categories-list.js';

class PageContent extends React.Component {
	render() {
		return (
			<div className="PageMidContent">
				<Route path="/users-list" component={UserListPage}/>
				<Route path="/categories-list" component={CategoriesListPage}/>
		    </div>
		);
	}
}

export default PageContent;