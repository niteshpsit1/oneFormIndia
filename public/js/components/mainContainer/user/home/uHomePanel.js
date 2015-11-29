var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;
var RouteHandler = require('react-router').RouteHandler;


var UhomePanel = React.createClass({
    render: function(){
        return (
            <div className="of-ipContainer">
                <Row className="of-ipcCont">
                    <Col sm={3} md={3}>
                        <Panel header="Home">
                            <Button bsStyle="link" href="/#/user/home/allForms">All Forms</Button><br/>
                            <Button bsStyle="link" href="/#/user/home/recentForms">Recent Forms</Button><br/>
                            <Button bsStyle="link" href="/#/user/home/upcomingForms">Upcoming Forms</Button><br/>
                            <Button bsStyle="link" href="/#/user/home/closestForms">Closest deadline Forms</Button><br/>
                            <Button bsStyle="link" href="/#/user/home/popularForms">Popular Forms</Button><br/>
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

module.exports = UhomePanel;