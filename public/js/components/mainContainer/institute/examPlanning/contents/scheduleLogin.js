 var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;
var Input = Bootstrap.Input;

var IscheduleLogin = React.createClass({
    render: function(){
        return (
        	<Panel>
        		<form action="index.html#/institute/examPlanning/exam/schedule" method="post">
	                <Row>
	                    <Col sm={6} smOffset={3}>
	                        <Input type="text" name="examDate" label="First Name" />
	                    </Col>
	                    <Col sm={6} smOffset={3}>
	                        <Input type="password" name="examTime" label="Password" />
	                    </Col>
	                    <Col sm={4} smOffset={4}>
	                        <Input type="submit" value="Login for schedule" />
	                    </Col>
	                </Row>
	            </form>
        	</Panel>
        )
    }
});

module.exports = IscheduleLogin;