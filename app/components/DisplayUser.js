/**
 * Created by Sa on 6/10/2016.
 */
var React = require("react");
var Router = require("react-router");
var Link = Router.Link;
var AppActions = require("../actions/AppActions");
var ShowList = require("./Showlist");
var AppStore = require("../stores/AppStore");

var DisplayUser = React.createClass({
    getAppState: function () {
        return {
            profile: AppStore.getProfiles(this.props.params.username)
        };
    },
    getInitialState: function () {
        return this.getAppState();
    },
    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },
    render: function () {
        var username = this.props.params.username;
        return (
            <div>
                <h2>Displaying the profile of {username}</h2>
                <h4>Age: {this.state.profile[0].age} </h4>
                <h4>Pic: {this.state.profile[0].pic} </h4>
                <h4>{username}'s friends are</h4><ShowList friends={this.state.profile[0].friends} />
            </div>
        )
    },
    _onChange: function() {
        this.setState(this.getAppState());
    }
});

module.exports = DisplayUser;