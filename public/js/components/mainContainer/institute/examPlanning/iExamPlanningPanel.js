var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;
var RouteHandler = require('react-router').RouteHandler;


var IexamPlanningPanel = React.createClass({
    render: function(){
        return (
            <div className="of-ipContainer">
                <Row className="of-ipcCont">
                    <Col sm={3} md={3}>
                        <Panel header="Profile">
                            <Button bsStyle="link" href="/#/institute/examPlanning/exam/information">General Information</Button>
                            <Button bsStyle="link" href="/#/institute/examPlanning/exam/loginForSchedule">Schdule Management</Button><br/>
                            <Button bsStyle="link" href="/#/institute/examPlanning/exam/centre">Exam Centre Management</Button>
                            <Button bsStyle="link" href="/#/institute/examPlanning/exam/createForm">Create Form</Button><br/>
                            <Button bsStyle="link" href="/#/institute/examPlanning/exam/admitCards">Admit card module</Button><br/>
                            <Button bsStyle="link" href="/#/institute/examPlanning/exam/submittedForms">Submitted Forms</Button><br/>
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

module.exports = IexamPlanningPanel;