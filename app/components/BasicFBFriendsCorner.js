/**
 * Created by Sa on 6/3/2016.
 */
var React = require("react");
var UserIs = require("./UserIs");
var Profile = require("./Profile/Profile");

var BasicFBFriendsCorner = React.createClass({
    getInitialState: function () {
        return {
            username: "",
            profiles: {}
        }
    },
    changeUser: function (user) {
        this.setState({
            username: user
        });
    },
    addProfile: function(friendsList) {
        var profile = {};
        profile[this.state.username] = friendsList;
        this.setState({
           profiles:  Object.assign(this.state.profiles, profile)
        });
    },
    render() {
        return (
            <div>
                <UserIs user={this.changeUser}/>
                {this.state.username?
                    <Profile friendsData={this.state.profiles}
                             addNewProfile={this.addProfile}
                             user={this.state.username}/> : null}
            </div>
        );
    }
});

module.exports = BasicFBFriendsCorner;