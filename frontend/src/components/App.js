import agent from "../agent/";
import React from "react";
import { connect } from "react-redux";
import AdminLayOut from '../containers/index'
import {
  APP_LOAD,
  REDIRECT,
  IS_LOGGEDIN,
} from "../constants/actionTypes";
import { store } from "../config/storeConfig";
import { push } from "react-router-redux";
const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo,
    isLoggedIn: state.common.isLoggedIn,
  };
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () => dispatch({ type: REDIRECT }),
  current: () => dispatch({ type: IS_LOGGEDIN, payload: agent.Auth.current() }),
});

class App extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    this.props.current();
    this.props.onLoad();
  }

  async componentDidUpdate(prevProps) {


  }

  render() {
    return <div className="App"><AdminLayOut /></div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
