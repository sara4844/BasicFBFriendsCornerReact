/**
 * Created by Sa on 6/3/2016.
 */
var React = require("react");
var ReactRouter = require("react-router");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require("../components/UserIs");
var ProfileShow = require("../components/Profile");
var CreateUser = require("../components/createUser/CreateUser");
var DisplayUser = require("../components/DisplayUser");
var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route name="Profile" path="Profile/:username" component={ProfileShow}/>
            <Route name="CreateUser" path="New-user/:username" component={CreateUser}/>
            <Route name="DisplayUser" path="Display/:username/:uid" component={DisplayUser} />
        </Route>
    </Router>
);
module.exports = routes;