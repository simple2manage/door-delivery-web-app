import React from 'react'
import { Route, Switch } from 'react-router';
import { Redirect } from "react-router-dom";
import * as routeConfig from '../../config/routeConfig';
import Login from './login/login';
class AccountLayoutContent extends React.Component {
    render() {
        return (

            <div className="AdminLoginContent">
                <Switch>

                    <Route exact path={routeConfig.globalRoutes.login} component={Login} />
                    <Redirect from={'/'} to={'login'} />
                </Switch>
            </div>


        );
    }
}

export default AccountLayoutContent;