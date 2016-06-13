/**
 * Created by Sa on 6/11/2016.
 */
var React = require("react");
var Showlist = require("./Showlist");

var AddFriends = React.createClass({
    getInitialState: function () {
        return {
            text: "",
            friends: []
        }
    },
    updateInput: function (e) {
        this.setState({
            text: e.target.value
        })
    },
    addNewFriend: function() {
        this.props.add(this.state.text);
        this.setState({
            friends: this.state.friends.concat([this.state.text]),
            text: ""
        });
    },
    render: function () {
        return (
            <div className="ui input">
                <input type="text" value={this.state.text} onChange={this.updateInput} placeholder="Enter friend's name" />
                <button onClick={this.addNewFriend}>Update list of friends</button>
                <Showlist friends={this.state.friends} />
            </div>
        )
    }
});

module.exports = AddFriends;