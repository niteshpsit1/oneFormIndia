var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;


var UshowProfile = React.createClass({
    render: function(){
        return (
        	<Panel>
        		<Row>
        			<Col xs={12}>
        				<Panel>
        					<Row>
	        					<Col sm={6}> <img alt="user pic" src="../public/img/usermale.png" width="130"></img> </Col>
	        					<Col sm={6}>
	        						<h4>Name of User</h4>
	        						<h4>Male</h4>
	        						<img src="../public/img/signature.png" alt="user signature" height="50"></img>
	        					</Col>
	        				</Row>
        				</Panel>
        			</Col>
        			<Col xs={12}>
        				<Panel header="Profile Details">
        					<Row>
        						<Col sm={4} md={3}>
        							<p><b>Name</b></p>
        							<p>fname mname lname</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>Fathers Name</b></p>
        							<p>fname lname</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>Mothers Name</b></p>
        							<p>fname lname</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>Guardians Name</b></p>
        							<p>fname lname</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>Date of Birth</b></p>
        							<p>dd, mm, yyyy</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>Marital status</b></p>
        							<p>status</p>
        							<br/><br/>
        						</Col>
        					</Row>
        				</Panel>
        			</Col>
        			<Col xs={12}>
        				<Panel header="Contact Details">
        					<Row>
        						<Col sm={4} md={3}>
        							<p><b>Phone number</b></p>
        							<p>+91-9551564885</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>Email address</b></p>
        							<p>example@mail.com</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>Address</b></p>
        							<p>Block, Street, Town</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>City</b></p>
        							<p>City Name</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>State</b></p>
        							<p>State Name</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>Country</b></p>
        							<p>Country Name</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>Pin code</b></p>
        							<p>151515</p>
        							<br/><br/>
        						</Col>
        					</Row>
        				</Panel>
        			</Col>
        			<Col xs={12}>
        				<Panel header="Education Details">
        					<Row>
        						<Col sm={4} md={3}>
        							<p><b>Class 10 qualification</b></p>
        							<p>qualification details</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>Class 12 qualification</b></p>
        							<p>qualification details</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>Graduation qualification</b></p>
        							<p>qualification details</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>Post Gradution qualification</b></p>
        							<p>qualification details</p>
        							<br/><br/>
        						</Col>
        					</Row>
        				</Panel>
        			</Col>
        			<Col xs={12}>
        				<Panel header="Other Details">
        					<Row>
        						<Col sm={4} md={3}>
        							<p><b>Primary Language</b></p>
        							<p>name of language</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>Religion</b></p>
        							<p>name of religion</p>
        							<br/><br/>
        						</Col>
        						<Col sm={4} md={3}>
        							<p><b>Nationality</b></p>
        							<p>name of nationality</p>
        							<br/><br/>
        						</Col>
        					</Row>
        				</Panel>
        			</Col>
        		</Row>
        	</Panel>
        )
    }
});

module.exports = UshowProfile;