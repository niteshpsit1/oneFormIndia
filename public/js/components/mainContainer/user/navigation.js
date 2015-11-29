var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Button = Bootstrap.Button;
var Glyphicon = Bootstrap.Glyphicon;
var Input = Bootstrap.Input;
var RouteHandler = require('react-router').RouteHandler;


var User = React.createClass({
    render: function(){
        return (
            <div>
                <div className="of-navigation">
                    <Row className="of-nContainer">
                        <Col sm="6" className="of-ncLeft">
                            <Row>
                                <Col xs="3"><Button bsSize="large" bsStyle="link" href="/#/user/home"><Glyphicon glyph="home" /> Home</Button></Col>
                                <Col xs="3"><Button bsSize="large" bsStyle="link" href="/#/user/profile"><Glyphicon glyph="user" /> Profile</Button></Col>
                                <Col xs="3"><Button bsSize="large" bsStyle="link"><Glyphicon glyph="cloud" /> Other</Button></Col>
                                <Col xs="3"><Button bsSize="large" bsStyle="link"><Glyphicon glyph="cog" /> Setting</Button></Col>
                            </Row>
                        </Col>
                        <Col sm="6" className="of-ncRight">
                            <Input type="text" placeholder="Search..." />
                        </Col>
                    </Row>
                </div>
                <div>
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

module.exports = User;