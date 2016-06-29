/**
 * Created by Sa on 6/8/2016.
 */
var React = require("react");
var Router = require("react-router");
var Link = Router.Link;
var AppActions = require("../actions/AppActions");
var AppStore = require("../stores/AppStore");
var DisplayMin = require("./DisplayMin");

var NotFound = React.createClass({
    getAppState: function() {
      return {
          profile: AppStore.getProfiles(this.props.params.username)
      }
    },
    getInitialState: function () {
      return this.getAppState();
    },
    componentDidMount: function () {
        //AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        //AppStore.removeChangeListener(this._onChange);
        this.setState({
            profile: []
        })
    },
    displayUsers: function (f) {
        var name = this.props.params.username;
        return <DisplayMin user={f} username={name} />
    },
    render: function() {
        var username = this.props.params.username;

        return(
            <div>
                {this.state.profile == null? <NoFriendsToShow user={username}/> : this.state.profile.map(this.displayUsers)}
                <Link to={`New-user/${username}`} className="primary ui floating link button">
                    <i className="icon user"></i>Create new user {username}
                </Link>
            </div>
        )
        
    },
    _onChange: function() {
        this.setState(this.getAppState());
    }
});

var NoFriendsToShow = React.createClass({
    render: function () {
        return (
            <div className="ui secondary teal fluid segment">
                <h3>User Not Found</h3>
                <h2>No info to show yet for {this.props.user}</h2>
            </div>
        )
    }
});

module.exports = NotFound;