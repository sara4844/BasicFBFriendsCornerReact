/**
 * Created by Sa on 6/4/2016.
 */
var React = require("react");

var NoFriendsToShow = React.createClass({
    render: function () {
        return (
            <div>
                <h4>{this.props.username} has no friends to show</h4>
            </div>
        )
    }

});

module.exports = NoFriendsToShow;