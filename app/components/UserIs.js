/**
 * Created by Sa on 6/3/2016.
 */
var React = require("react");
var Router = require("react-router");
var Link = Router.Link;
/**************************** Props from parent: ****************************
 *                                                                          *
 *          user --> changeUser(username)                                   *
 *                                                                          *
 ****************************************************************************/

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
        this.setState({
            username: ""
        });
    },
    // <button onClick={this.handleSearch}>Search</button>
    render: function(){
        return (
            <div>
                <div className="ui vertical raised primary teal segment">
                    <h2 className="ui center aligned icon header">
                        <i className="circular users icon"></i>
                        Basic Profiler
                    </h2>
                    <div className="ui center aligned container">
                        <div className="ui right action left icon input">
                            <i className="users icon"></i>
                            <input type="text" value={this.state.username} onChange={this.update}
                            placeholder="Search by username"/>  
                            <Link to={`Profile/${this.state.username}`} className="ui floating link button">
                                <i className="inverted circular search link icon"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
});

module.exports = UserIs;