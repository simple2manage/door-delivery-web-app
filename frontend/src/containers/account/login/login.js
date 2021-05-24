import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { LOGIN, LOGIN_PAGE_UNLOADED } from "../../../constants/actionTypes";

import agent from "../../../agent";
import { connect } from "react-redux";
import "./style.scss";
const FormItem = Form.Item;

class Login extends Component {
  /*Validation process */
  onFinish = (credentials) => {
    let login = { ...credentials };
    
    delete login.team_id;
    delete login.team_name
    login.email = 'test@gmail.com'
    login.password = 'test'
    console.log('login',login);
    this.props.onSubmit(agent.Auth.loginUser(login));
  };

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="LoginFormConatiner">
        <div className="container">
          <div className="row flexJustifyCenter">
            <div className="col-lg-5 col-md-5 col-sm-10 col-xs-12 no-padding">
              <div className="LoginFormInnerContainer">
                <div className="title"> Login here </div>{" "}
                <Form
                  scrollToFirstError={true}
                  onFinish={(e) => this.onFinish(e)}
                  className="login-form"
                >
                  <FormItem
                    label="Team ID"
                    name="team_id"
                    rules={[
                      {
                        required: true,
                        message: "Please input your team id",
                      },
                      
                    ]}
                  >
                    <Input placeholder="Your Team ID" />
                  </FormItem>{" "}
                  <FormItem
                    label="Team Name"
                    name="team_name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your team name",
                      },
                     
                    ]}
                  >
                    <Input placeholder="Your Team Name" />
                  </FormItem>{" "}
                  <FormItem
                    label="Mobile"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your mobile",
                      },
                      
                    ]}
                  >
                    <Input placeholder="Your Mobile" />
                  </FormItem>{" "}
                  <FormItem
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input type="password" placeholder="Password" />
                  </FormItem>{" "}
                  <div className="form-actions mt-4">
                    <Button
                      type="primary"
                      block
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Login{" "}
                    </Button>{" "}
                  </div>{" "}
                </Form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inProgress: state.common.inProgress,
    currentUser: state.common.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (payload) => dispatch({ type: LOGIN, payload }),
  onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
