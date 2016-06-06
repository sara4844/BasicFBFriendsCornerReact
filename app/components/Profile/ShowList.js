/**
 * Created by Sa on 6/4/2016.
 */
var React = require("react");

var ShoWList = React.createClass({
    render: function () {
        var listFriends = this.props.friends.map(function(f){
            return <li>{f}</li>;
        });
        return (
            <div>
                <ul>
                    {listFriends};
                </ul>
            </div>
        )
    }
});

module.exports = ShoWList;