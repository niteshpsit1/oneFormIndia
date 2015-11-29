var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;
var Input = Bootstrap.Input;
var ButtonInput = Bootstrap.ButtonInput;


var UeditProfile = React.createClass({
    render: function(){
        return (
        	<Panel>
        	<form>
        		<Row>
        			<Col xs={12}>
        				<Panel>
        					<Row>
	        					<Col sm={6}>
	        					<img alt="user pic" src="../public/img/usermale.png" width="90"></img>
	        						<Input type="file" label="Profile Image" help="resolution: 300x500" />
	        					</Col>
	        					<Col sm={6}>
	        						<Input type="text" label="Name"
                                    placeholder="Name of institute" />
                                    <br/><br/>
	        					</Col>
	        				</Row>
        				</Panel>
        			</Col>
        			<Col xs={12}>
        				<Panel header="Profile Details">
        					<Row>
        						<Col sm={4} md={3}>
        							<Input type="text" label="Name"
        							placeholder="fname mname lname" />
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="text" label="Fathers Name"
        							placeholder="fname lname" />
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="text" label="Mothers Name"
        							placeholder="fname lname" />
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="text" label="Guardians Name"
        							placeholder="fname lname" />
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="date" label="Date of Birth"
        							placeholder="dd, mm, yyyy" />
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="select" label="Marital status" >
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                    </Input>
        							<br/><br/>
        						</Col>
        					</Row>
        				</Panel>
        			</Col>
        			<Col xs={12}>
        				<Panel header="Contact Details">
        					<Row>
        						<Col sm={4} md={3}>
        							<Input type="text" label="Phone number"
        							placeholder="+91-9551564885" />
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="text" label="Email address"
        							placeholder="example@mail.com" />
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="text" label="Address"
        							placeholder="Block, Street, Town" />
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="text" label="City"
        							placeholder="City Name" />
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="text" label="State"
        							placeholder="State Name" />
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="text" label="Country"
        							placeholder="Country Name" />
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="text" label="Pin code"
        							placeholder="151515" />
        							<br/><br/>
        						</Col>
        					</Row>
        				</Panel>
        			</Col>
        			<Col xs={12}>
        				<Panel header="Education Details">
        					<Row>
        						<Col sm={4} md={3}>
        							<Input type="text" label="Class 10 qualification"
        							placeholder="qualification details" />
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="text" label="Class 12 qualification"
        							placeholder="qualification details" />
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="text" label="Graduation qualification"
        							placeholder="qualification details" />
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="text" label="Post Gradution qualification"
        							placeholder="qualification details" />
        							<br/><br/>
        						</Col>
        					</Row>
        				</Panel>
        			</Col>
        			<Col xs={12}>
        				<Panel header="Other Details">
        					<Row>
        						<Col sm={4} md={3}>
        							<Input type="select" label="Primary Language" >
                                        <option value="hindi">Hindi</option>
                                        <option value="english">English</option>
                                        <option value="bengoli">Bengoli</option>
                                        <option value="tamil">Tamil</option>
                                        <option value="other">Other</option>
                                    </Input>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="select" label="Religion" >
                                        <option value="hindu">Hindu</option>
                                        <option value="islam">Islam</option>
                                        <option value="christian">Christian</option>
                                        <option value="other">Other</option>
                                    </Input>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<Input type="select" label="Nationality" >
                                        <option value="indian">Indian</option>
                                        <option value="foreign">Foreigner</option>
                                    </Input>
        							<br/><br/>
        						</Col>
        					</Row>
        				</Panel>
        			</Col>
        			<Col xs={12}>
        				<ButtonInput bsStyle="success" type="submit" value="Save profile" />
        			</Col>
        		</Row>
        		</form>
        	</Panel>
        )
    }
});

module.exports = UeditProfile;