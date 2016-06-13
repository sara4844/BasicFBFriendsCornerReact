/**
 * Created by Sa on 6/10/2016.
 */
var React = require("react");
var Router = require("react-router");
var Link = Router.Link;
var AppActions = require("../actions/AppActions");
var AppStore = require("../stores/AppStore");

var DisplayUser = React.createClass({
    getInitialState: function () {
        return {
            profile: []
        }
    },
    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },
    render: function () {
        return (
            <div>
                Displaying the profile of {this.props.params.username}
                {this.state.profile[this.props.params.username]}
            </div>
        )
    },
    _onChange: function() {
        this.setState({
            profile: AppStore.getProfiles(this.props.params.username)
        });
    }
});

module.exports = DisplayUser;