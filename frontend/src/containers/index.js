import React from "react";
import { Router } from "react-router-dom";
import AccountLayoutContent from "./account/content";
import LayoutContent from "./home/content";
import { Spin, Layout } from "antd";
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import PanelHeader from '../components/header';
import PageSideBar from '../components/sidebar';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();


class AdminLayOut extends React.Component {
  beforeLogin() {
    return (
      <AccountLayoutContent />
    );
  }
  afterLogin() {

    return (
      <div className="AdminPanelContainer">

        <Layout style={{ minHeight: '100vh' }}>
          <PageSideBar />
          <Scrollbars style={{ height: '100vh' }}>
            <Layout>
              <PanelHeader />
              <LayoutContent />
            </Layout>
          </Scrollbars>
        </Layout>
        {/*<div style={{ height: '100%' }}>
					<LoginHeader/>
					<LoginContent/>
				</div>*/}

      </div>

    );
  }

  render() {

    let renderData = null;
    // if logged in then the user will be redirected to home page
    if (this.props.isLoggedIn) {
      renderData = this.afterLogin();
    }
    // if user is not logged then this component will render login page
    else if (this.props.isLoggedIn === false) {
      renderData = this.beforeLogin();
    }
    // http request will take some time to return the result so meanwhile we can show the spinner
    else {
      renderData = (
        <div style={{ textAlign: 'center', marginTop: '180px' }}>
          <Spin tip="Loading..." size="large" />
        </div>
      );
    }
    return (
      <div className="AdminPanelContainer">
        <Router history={history}>{renderData}</Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.common.isLoggedIn,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLayOut);
