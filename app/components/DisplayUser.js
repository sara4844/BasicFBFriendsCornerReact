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

    getInitialState: function () {
        return {
            userList: AppStore.getProfiles(this.props.params.username),
            profile: {}
        }
    },
    componentWillMount: function(){
        var list = this.state.userList;
        var currProfile = null;
        for (var i = 0; i < list.length; i++) {
            if (list[i].id == this.props.params.uid) {
                currProfile = list[i];
            }
        }
        this.setState({
            profile: currProfile
        })
        console.log(currProfile);
    },
    componentWillUnmount: function(){
        this.setState({
            userList: [],
            profile: {}
        })
    },
    render: function () {
        var username = this.props.params.username;
        return (
            <div className="ui secondary teal fluid segment">
                <div className="ui container">
                <h2>Displaying the profile of {username}</h2>
                <h4>Age: {this.state.profile.age} </h4>
                <h4>Pic: {this.state.profile.pic} </h4>
                <h4>{username}'s friends are</h4>
                <ShowList friends={this.state.profile.friends} />

            </div>
            </div>
        )
    }
});

module.exports = DisplayUser;