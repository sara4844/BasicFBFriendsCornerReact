/**
 * Created by Sa on 6/9/2016.
 */
var React = require("react");
var Router = require("react-router");
var Link = Router.Link;

var CreateUser = React.createClass({
    render: function () {
        return(
            <div className="ui secondary teal fluid segment">
                <Age />
                <Picture />
                <AddFriends />
                <div className="ui horizontal divider"></div>
                <Link to={`Display`}  
                      className="ui center aligned blue floating link button">
                    <i className="add user icon"></i>Create User
                </Link>
            </div>
        )
    }
});

module.exports = CreateUser;