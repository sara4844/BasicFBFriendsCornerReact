/**
 * Created by Sa on 6/3/2016.
 */
var React = require("react");


var UserIs = React.createClass({
    getInitialState: function() {
      return {
          username: ""
      };
    },
    update: function (e) {
        this.setState({
            username: e.target.value
        });
    },
    handleSearch: function() {
        this.props.user(this.state.username);
        this.setState({
            username: ""
        });
    },
    render: function(){
        return (
            <div>
                <input type="text" value={this.state.username} onChange={this.update} placeholder="Search profiles by username"/>
                <button onClick={this.handleSearch}>Search</button>
            </div>
        )
        
    }
});

module.exports = UserIs;