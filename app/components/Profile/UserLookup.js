/**
 * Created by Sa on 6/4/2016.
 */
var React = require("react");

var UserLookup = React.createClass({
    search: function(obj, key) {
        this.props.onLookup(obj.hasOwnProperty("key"));
    },
    componentWillMount: function () {
        this.search(this.props.friends, this.props.username);
    },
    render: function() {
        return (
            <div>       
            </div>
        )
    }
});

module.exports = UserLookup;