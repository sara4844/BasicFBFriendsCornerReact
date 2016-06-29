/**
 * Created by Sa on 6/24/2016.
 */
var React = require("react");

var DisplayMin = React.createClass({
    getInitialState: function () {
        return {
            picLink: ""
        }
    },
    componentWillMount: function () {
        var dog = "http://goodbyemypetangel.com/wp-content/themes/heartvet/images/bottom-dog-img.png";
        var cat = "http://thecatapi.com/api/images/get?format=src&type=gif";

        var link = this.props.user.pic == "Cats"? cat : dog;
        this.setState({
            picLink: link
        })
    },
    render: function () {
        var username = this.props.username;
        return (
            <div >
                <div className="ui horizontal divider"></div>
                <div className="ui card ">
                    <div className="content">
                        <img className="right floated mini ui image" src={this.state.picLink}/>
                        <div className="content">
                            <div className="ui big header">
                                {username}
                            </div>
                        </div>
                        <div className="content">
                            <div className="large meta">
                                Age: {this.props.user.age}
                            </div>
                        </div>
                        <div className="content">
                            <div className="large meta">
                                Number of friends: {this.props.user.friends.length}
                            </div>
                        </div>
                            <div className="description">

                            </div>
                    </div>
                    <div className="extra content">
                        <div className="ui button">Display Profile</div>

                    </div>
                </div>
                <div className="ui horizontal divider"></div>
            </div>
        )
    }
});

module.exports = DisplayMin;