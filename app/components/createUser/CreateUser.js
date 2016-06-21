/**
 * Created by Sa on 6/9/2016.
 */
var React = require("react");
var Router = require("react-router");
var Link = Router.Link;

var AppActions = require("../../actions/AppActions");
var AppStore = require("../../stores/AppStore");
var AddFriends = require("./AddFriends");

var CreateUser = React.createClass({
    getInitialState: function() {
        return {
            pic: "",
            age: "",
            friends: []
        }
    },
    updateInput: function (e) {
        this.setState({
            age: e.target.value
        });
    },
    handlePic: function(e) {
        this.setState({
            pic: e.currentTarget.value
        });
    },
    addNew: function(friend) {
      this.setState({
         friends: this.state.friends.concat([friend]) 
      });

    },
    sendData: function() {

    },
    componentWillUnmount: function () {
        var user = {};
        user["age"] = this.state.age;
        user["pic"] = this.state.pic;
        user["friends"] = this.state.friends;

        var obj = {};
        obj[this.props.params.username] = user;
        AppActions.addProfile(obj);
        this.setState({
            pic: "",
            age: "",
            friends: []
        });

    },
    render: function () {
        return(
            <div className="ui secondary teal fluid segment">
                <h4>Include Age</h4>
                <div className="ui input">
                    <input type="number" value={this.state.age} onChange={this.updateInput} placeholder="Enter age" />
                </div>
                <div className="ui horizontal divider"></div>
                <div className="ui form">
                    <div className="grouped fields">
                        <label>Dogs vs Cats! Take your pick</label>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="pic" checked={this.state.pic === "Cats"} onChange={this.handlePic} value="Cats"/>
                                <label>Cats</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="pic" checked={this.state.pic === "Dogs"} onChange={this.handlePic} value="Dogs"/>
                                <label>Dogs</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui horizontal divider"></div>
                <AddFriends add={this.addNew} />

                <div className="ui horizontal divider"></div>
                <Link to={`Display/${this.props.params.username}`}  
                      className="ui center aligned blue floating link button">
                    <i className="add user icon"></i>Create User
                </Link>
            </div>
        )
    }
});

module.exports = CreateUser;