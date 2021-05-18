import React from 'react';
import { Layout, Menu } from 'antd';
import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  DatabaseOutlined,
  DollarCircleOutlined,
  DashboardOutlined,
  SolutionOutlined,
  TagsOutlined,
  TagOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
  FormOutlined,
} from '@ant-design/icons';
import * as routeConfig from '../../config/routeConfig';
import './style.scss';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class PageSideBar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    return (
      <div>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className="AdminSideBar"
          style={{ width: 225 }}

        >
          <div className="Admin-logo">
            <Link to="/">
              <img className="SubLogo" src={require('../../resources/images/logo.jpeg')} alt="header logo" />
              <img className="MainLogo" src={require('../../resources/images/logo.jpeg')} alt="header logo" />
            </Link>
          </div>
          <Scrollbars className="ScrollbarMenus" renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{ display: "none" }} />}>
            <Menu defaultOpenKeys={['sub1']} mode="inline" defaultdkeys="1">
              
              <SubMenu
                key="sub5"
                title={<span><TagsOutlined /><span>Delivery Team</span></span>}
              >
                <Menu.Item key="TeamCreate">
                  <Link to={routeConfig.globalRoutes.delivery_team_create}>Create</Link>
                </Menu.Item>
                <Menu.Item key="TeamList">
                  <Link to={routeConfig.globalRoutes.delivery_team_list}>List</Link>
                </Menu.Item>
               </SubMenu>
               <SubMenu
                key="sub6"
                title={<span><TagsOutlined /><span>Support Executive</span></span>}
              >
                <Menu.Item key="Team1Create">
                  <Link to={routeConfig.globalRoutes.support_executive_create}>Create</Link>
                </Menu.Item>
                <Menu.Item key="Team1List">
                  <Link to={routeConfig.globalRoutes.support_executive_list}>List</Link>
                </Menu.Item>
               </SubMenu>
               <SubMenu
                key="sub7"
                title={<span><TagsOutlined /><span>Delivery Executive</span></span>}
              >
                <Menu.Item key="Team2Create">
                  <Link to={routeConfig.globalRoutes.delivery_executive_create}>Create</Link>
                </Menu.Item>
                <Menu.Item key="Team2List">
                  <Link to={routeConfig.globalRoutes.delivery_executive_list}>List</Link>
                </Menu.Item>
               </SubMenu>
               <SubMenu
                key="sub8"
                title={<span><TagsOutlined /><span>Orders</span></span>}
              >
                <Menu.Item key="Team3List">
                  <Link to={routeConfig.globalRoutes.orders_list}>List</Link>
                </Menu.Item>
               </SubMenu>
              
              
            </Menu>
          </Scrollbars>
        </Sider>
      </div>
    );
  }
}

export default PageSideBar;