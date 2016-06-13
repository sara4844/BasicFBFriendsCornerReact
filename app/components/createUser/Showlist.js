/**
 * Created by Sa on 6/12/2016.
 */
var React = require("react");

var Showlist = React.createClass({
    render: function () {
        var listOfFriends = this.props.friends.map(function(f){
            return <li>{f}</li>;
        });
        return (
            <div>
                <ul>
                    {listOfFriends}
                </ul>
            </div>
        )
        
    }
});

module.exports = Showlist;