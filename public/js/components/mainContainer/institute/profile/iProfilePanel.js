var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;
var RouteHandler = require('react-router').RouteHandler;


var IprofilePanel = React.createClass({
    render: function(){
        return (
            <div className="of-ipContainer">
                <Row className="of-ipcCont">
                    <Col sm={3} md={3}>
                        <Panel header="Profile">
                            <Button bsStyle="link" href="/#/institute/profile/showProfile">Show Profile</Button><br/>
                            <Button bsStyle="link" href="/#/institute/profile/editprofile">Edit Profile</Button><br/>
                        </Panel>
                    </Col>
                    <Col sm={9} md={9}>
                        <RouteHandler />
                    </Col>
                </Row>
            </div>
        )
    }
});

module.exports = IprofilePanel;