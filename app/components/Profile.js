/**
 * Created by Sa on 6/8/2016.
 */
var React = require("react");
var Router = require("react-router");
var Link = Router.Link;
var AppActions = require("../actions/AppActions");
var AppStore = require("../stores/AppStore");

function getAppState() {
    return {

    }
}
var NotFound = React.createClass({
    render: function() {
        return(
            <div className="ui secondary teal fluid segment">
                <h3>User {this.props.params.username} Not Found</h3>
                <Link to={`New-user/${this.props.params.username}`} className="primary ui floating link button">
                    <i className="icon user"></i>Add User?
                </Link>
            </div>
        )
        
    },
    _onChange: function() {
        this.setState(getAppState());
    }
});

var NoFriendsToShow = React.createClass({
    render: function () {
        return (
            <div>
                <h2>No friends to show yet for {this.props.params.username}</h2>
            </div>
        )
    }
});

module.exports = NotFound;