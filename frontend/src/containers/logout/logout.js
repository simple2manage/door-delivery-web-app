import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import {
  LOGOUT,
  LOGIN_PAGE_UNLOADED,
  APP_LOAD
} from "../../constants/actionTypes";

import agent from "../../agent";

class Logout extends React.Component {


  componentWillMount() {

  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  /*Admin Logout */
  onLogout = () => {
    this.props.onLoad();
    this.props.logout();
  }

  render() {
    return <div>
      <Button onClick={() => this.onLogout()} >Logout</Button>
    </div>
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
)(Logout);
