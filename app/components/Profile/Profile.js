/**
 * Created by Sa on 6/3/2016.
 */
var React = require("react");
/* Iterate through friendsData object to find user
 * UserFound? <ShowList/> : <NoFriendsToShow />
 * ShowList will display on a list the value of user's friends
 * NoFriendsToShow will prompt user to add friend
 * Then display AddFriend component
 * Upon entry of new friend to add create an object with the user as key and
 * the new friend as value. Then call on the function addNewProfile(newObj)
 */
var UserLookup = require("./UserLookup");
var NoFriendsToShow = require("./NoFriendToShow");
var AddFriend = require("./AddFriend");
var ShowList = require("./ShowList");

var Profile = React.createClass ({
    getInitialState: function() {
      return {
          userFound: false,
          friendsList: this.props.friendsData.hasOwnProperty(this.props.user)?
              this.props.friendsData[this.props.user] : []
      }  
    },
    onFriendsFound: function(value){
        this.setState({
           userFound: value
        });
    },
    addFriends: function(friend) {

      this.setState({
         friendsList: this.state.friendsList.concat([friend])
      });
    },
    /*componentWillUnmount: function () {
        var profile = {};
        profile[this.props.username] = this.state.friendsList;
        this.props.addNewProfile(profile);
        this.setState({
           userFound: false,
            friendsList: []
        });
    },*/
    render: function() {
        return (
            <div>
                <h1>{this.props.user}'s Friends</h1>
                <UserLookup friends={this.props.friendsData} username=
                    {this.props.user} onLookup={this.onFriendsFound} />
                {this.state.userFound? <ShowList friends={this.state.friendsList} />: <NoFriendsToShow username={this.props.user}/>}
                <AddFriend onAdd={this.onFriendsFound} addFriend={this.addFriends}/>
            </div>
        )
        
    }
});

module.exports = Profile;