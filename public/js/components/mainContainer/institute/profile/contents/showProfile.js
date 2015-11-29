var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;


var IshowProfile = React.createClass({
    render: function(){
        return (
        	<Panel>
        		<Row>
        			<Col xs={12}>
        				<Panel>
        					<Row>
	        					<Col sm={6}> <img alt="user pic" src="../public/img/institute.png" width="130"></img> </Col>
	        					<Col sm={6}>
	        						<h4>Name of institute</h4>
	        					</Col>
	        				</Row>
        				</Panel>
        			</Col>
        			<Col xs={12}>
        				<Panel header="About">
        					Lorem ipsum Culpa in et anim Excepteur laboris enim enim sit veniam adipisicing anim exercitation magna veniam adipisicing nisi consectetur veniam esse.
        				</Panel>
        				<Panel header="Academic Details">
        					<Col sm={4} md={3}>
    							<p><b>Degrees</b></p>
    							<p>BTech, MTech, Phd, Bsc, Msc</p>
    							<br/><br/>
    						</Col>
    						<Col sm={4} md={3}>
    							<p><b>No. of students</b></p>
    							<p>7222</p>
    							<br/><br/>
    						</Col>
        				</Panel>
        			</Col>
        			<Col xs={12}>
        				<Panel header="Contact">
        					<Col sm={4} md={3}>
    							<p><b>Phone number</b></p>
    							<p>+91-8451234512</p>
    							<br/><br/>
    						</Col>
    						<Col sm={4} md={3}>
    							<p><b>Email Id</b></p>
    							<p>institute@mail.com</p>
    							<br/><br/>
    						</Col>
    						<Col sm={4} md={3}>
    							<p><b>Address</b></p>
    							<p>Enter address</p>
    							<br/><br/>
    						</Col>
        				</Panel>
        			</Col>
        		</Row>
        	</Panel>
        )
    }
});

module.exports = IshowProfile; 