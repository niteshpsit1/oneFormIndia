var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;
var Input = Bootstrap.Input;

var Iinformation = React.createClass({
    render: function(){
        return (
            <Panel>
            <form>
            	<Row>
            		<Col sm={6} smOffset={3}>
            			<Input type="text" name="examName" label="Name of subject" />
            		</Col>
            		<Col sm={6} smOffset={3}>
            			<Input type="number" name="examTime" label="No. of seats" />
            		</Col>
            		<Col sm={6} smOffset={3}>
            			<Input type="text" name="applyLastDate" label="Course Name" />
            		</Col>
            		<Col sm={6} smOffset={3}>
                        <Panel>
                            <p><b>Question paper medium</b></p>
                            <Input type="checkbox" label="English" />
                            <Input type="checkbox" label="Hindi" />
                        </Panel>
            		</Col>
            		<Col sm={6} smOffset={3}>
                        <Panel>
                            <p><b>Qualification</b></p>
                            <Input type="number" name="class10Quali" label="Class 10 qualification" />
                            <Input type="number" name="class12Quali" label="Class 12 qualification" />
                            <Input type="number" name="ugQuali" label="UG qualification" />
                            <Input type="number" name="pgQuali" label="PG qualification" />
                        </Panel>
            		</Col>
            		<Col sm={6} smOffset={3}>
                        <Panel>
                            <p><b>Fees in Rupees</b></p>
                            <Input type="number" name="generalFees" label="General" />
                            <Input type="number" name="obcFees" label="OBC" />
                            <Input type="number" name="stscFees" label="ST/SC" />
                        </Panel>
            		</Col>

            		<Col sm={4} smOffset={4}>
            			<Input type="submit" value="Save the information"/>
            		</Col>
            	</Row>	
            </form>
            	
            </Panel>
        )
    }
});

module.exports = Iinformation; 