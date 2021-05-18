import React from "react";
import { connect } from "react-redux";
import './home.scss'
import Logout from '../../logout/logout.js';
import { Link } from "react-router-dom";
class Home extends React.Component {


  componentDidMount() {

  }

  componentDidUpdate(prevProps) {

  }

  render() {
    return (<div className="home-container">
      <h1>Welcome Door Delivery Admin  </h1>

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
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
