import React from 'react';
import { Layout, Avatar, Badge, Menu, Dropdown } from 'antd';
import "./style.scss"
import { CaretDownFilled } from '@ant-design/icons';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {
	LOGOUT,
	LOGIN_PAGE_UNLOADED,
	APP_LOAD
} from "../../constants/actionTypes";

import agent from "../../agent";
const { Header, } = Layout;



class PanelHeader extends React.Component {
	onLogout = () => {
		this.props.onLoad();
		this.props.logout();
	}
	openMenu = () => {
		document.body.classList.add('open-mobile-menu');
	}
	closeMenu = () => {
		document.body.classList.remove('open-mobile-menu');
	}

	render() {
		const menu = (
			<Menu>
				<Menu.Item key="0">
					<span>Settings</span>
				</Menu.Item>
				<Menu.Item onClick={() => this.onLogout()} key="1">
					<span>Logout</span>
				</Menu.Item>

			</Menu>
		);
		return (
			<div>
				<Header style={{ background: '#fff', padding: 0 }}>
					<div className="ProfileMenu">
						<div className="mobile-log">
							<div className="mobile-menu" onClick={() => this.openMenu()}>
								<MenuOutlined />
							</div>
							<span className="menu-backdrop" onClick={() => this.closeMenu()}></span>
							<Link to="/">
								<img className="MainLogo" src={require('../../resources/images/logo.jpeg')} alt="header logo" />
							</Link>
						</div>
						<Dropdown overlay={menu} trigger={['click']}>
							<span className="ant-dropdown-link" href="#">
								<span style={{ marginRight: 7 }}>
									<Avatar icon={<UserOutlined />} />
								</span> <CaretDownFilled />
							</span>
						</Dropdown>
					</div>
				</Header>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {

	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLoad: (payload, token) =>
			dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
		logout: () => dispatch({ type: LOGOUT, payload: agent.Auth.logout() }),
		onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED })
	}
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PanelHeader);
