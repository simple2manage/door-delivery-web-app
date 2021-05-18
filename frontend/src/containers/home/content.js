import React from 'react'
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import * as routeConfig from '../../config/routeConfig';
import Home from './sample/index';
import DeliveryTeamViewPage from './delivery-team/delivery-team-view';
import DeliveryTeamCreatePage from './delivery-team/delivery-team-create';
import DeliveryTeamListPage from './delivery-team/delivery-team-list';
import SupportExecutiveViewPage from './support-executive/support-executive-view';
import SupportExecutiveCreatePage from './support-executive/support-executive-create';
import SupportExecutiveListPage from './support-executive/support-executive-list';
import DeliveryExecutiveViewPage from './delivery-executive/delivery-executive-view';
import DeliveryExecutiveCreatePage from './delivery-executive/delivery-executive-create';
import DeliveryExecutiveListPage from './delivery-executive/delivery-executive-list';
import OrdersList from './orders/order-list';
import OrderItemList from './orders/order-item-list';

import { history } from "../../config/storeConfig";

class LayoutContent extends React.Component {
    render() {
        return (
            <div >
                <Switch>
                    <Redirect exact from={'/login'} to={routeConfig.globalRoutes.home} />
                    <Redirect exact from={'/'} to={routeConfig.globalRoutes.home} />
                    <Route path={routeConfig.globalRoutes.home} component={Home} />
                    <Route path={routeConfig.globalRoutes.delivery_team_view} component={DeliveryTeamViewPage} />
                    <Route path={routeConfig.globalRoutes.delivery_team_create} component={DeliveryTeamCreatePage} />
                    <Route path={routeConfig.globalRoutes.delivery_team_list} component={DeliveryTeamListPage} />
                    <Route path={routeConfig.globalRoutes.support_executive_view} component={SupportExecutiveViewPage} />
                    <Route path={routeConfig.globalRoutes.support_executive_create} component={SupportExecutiveCreatePage} />
                    <Route path={routeConfig.globalRoutes.support_executive_list} component={SupportExecutiveListPage} />

                    <Route path={routeConfig.globalRoutes.delivery_executive_view} component={DeliveryExecutiveViewPage} />
                    <Route path={routeConfig.globalRoutes.delivery_executive_create} component={DeliveryExecutiveCreatePage} />
                    <Route path={routeConfig.globalRoutes.delivery_executive_list} component={DeliveryExecutiveListPage} />

                    <Route path={routeConfig.globalRoutes.orders_list} component={OrdersList} />
                    <Route path={routeConfig.globalRoutes.order_item_list} component={OrderItemList} />
                    
                   
                   

                </Switch>
            </div>





        );
    }
}

export default LayoutContent;