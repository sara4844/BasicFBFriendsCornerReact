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
            textAge: "",
            friends: []
        }
    },
    updateInput: function (e) {
        this.setState({
            textAge: e.target.value
        })
    },
    handlePic: function(e) {
        this.setState({
            pic: e.target.value
        })
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
        user["age"] = this.state.textAge;
        user["pic"] = this.state.pic;
        user["friends"] = this.state.friends;

        var obj = {};
        obj[this.props.params.username] = user;
        AppActions.addProfile(obj);
        this.setState({
            pic: "",
            textAge: "",
            friends: []
        });

    },
    render: function () {
        return(
            <div className="ui secondary teal fluid segment">
                <label>Include Age</label>
                <div className="ui right labeled input">
                    <input type="number" value={this.state.textAge} onChange={this.updateInput} placeholder="Enter age" />
                </div>
                <div className="ui horizontal divider"></div>
                <div class="inline fields">
                    <label>Dogs vs Cats! Take your pick</label>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="pic" onChange={this.updateInput} value={this.state.pic}/>
                                <label>Cats</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="pic" onChange={this.updateInput} value={this.state.pic}/>
                                <label>Dogs</label>
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