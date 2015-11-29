var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;
var Input = Bootstrap.Input;
var ButtonInput = Bootstrap.ButtonInput;

var IeditProfile = React.createClass({
    render: function(){
        return (
        	<Panel>
            <form>
        		<Row>
        			<Col xs={12}> 
                        <Panel>
                            <Row>
                                <Col sm={6}>
                                <img alt="user pic" src="../public/img/institute.png" width="90"></img>
                                    <Input type="file" label="Profile Image" help="resolution: 300x500" />
                                </Col>
                                <Col sm={6}>
                                    <Input type="text" label="Name"
                                    placeholder="fname mname lname" />
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
                                <Input type="tel" label="Phone number" placeholder="+91-8454511154" /> 
                                <br/><br/>
                            </Col>
                            <Col sm={4} md={3}>
                                <Input type="text" label="Email"
                                placeholder="institute@mail.com" />
                                <br/><br/>
                            </Col>
                            <Col sm={4} md={3}>
                                <Input type="text" label="Address"
                                placeholder="enter your address here" />
                                <br/><br/>
                            </Col>
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

module.exports = IeditProfile;  