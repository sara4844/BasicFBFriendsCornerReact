/**
 * Created by Sa on 6/4/2016.
 */
var React = require("react");

var AddFriend = React.createClass({
    getInitialState: function () {
      return {
          text: ""
      }  
    },
    handleInput: function (e) {
        this.setState({
           text: e.target.value 
        });
    },
    add: function() {
        this.props.addFriend(this.state.text);
        this.setState({
            text: ""
        });
        this.props.onAdd(true);
    },
    render: function () {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.handleInput}/>
                <button onClick={this.add}>Add Friend</button>
            </div>
        )
    }
});

module.exports = AddFriend;