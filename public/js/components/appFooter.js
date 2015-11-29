var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Button = Bootstrap.Button;


var AppFooter = React.createClass({
    render: function(){
        return (
            <footer>
            <Row className="of-footer">
                <Col xs={8} className="of-fLeft">
                    <div className="of-flLogo">one-form-india</div>
                    <div className="of-flCopy">&copy; copyright 2015</div>
                </Col>
                <Col xs={4} className="of-fRight">
                    <Row>
                        <Col xs={6}>
                            <Button bsStyle="link">About</Button><br/>
                            <Button bsStyle="link">Privacy and policy</Button><br/>
                            <Button bsStyle="link">Tems of use</Button>
                        </Col>
                        <Col xs={6}>
                            <Button bsStyle="link">Contact us</Button><br/>
                            <Button bsStyle="link">Cookies</Button><br/>
                            <Button bsStyle="link">Careers</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </footer>
        )
    }
});

module.exports = AppFooter;