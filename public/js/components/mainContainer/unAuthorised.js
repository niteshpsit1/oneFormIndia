var React = require('react');
var Bootstrap = require('react-bootstrap');
var Grid = Bootstrap.Grid;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var form = Bootstrap.form;
var Input = Bootstrap.Input;
var option = Bootstrap.option;
var ButtonInput = Bootstrap.ButtonInput;
var Button = Bootstrap.Button;

var UnAuthorised = React.createClass({
    scrollFormDown: function(amt){
        $(".of-fcDiv").animate({marginTop: "-500px"});
    },
    scrollFormUp: function(amt){
        $(".of-fcDiv").animate({marginTop: "0px"});
    },
    handleLoginSubmit: function(){
        var loginData ={data:[
            {regNo:"154151", name:"deepak", age:"23", gender:"male", email:"deepakvert@gmail.com", phone:"9540078594", address:"iit delhi", payment:"successful"}
            ]
        };
        $.post("/login", loginData, function(data){});
    },
    render: function(){
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={6} mdPush={6} className="of-formCont">
                        <div className="of-fcDiv">
                            <form onSubmit={this.handleLoginSubmit} action="/#/institute">
                                <h3>Login to one-form-india</h3>
                                <br/>
                                <Input type="email" placeholder="Email" />
                                <Input type="password" placeholder="Password" />
                                <Row>
                                    <Col xs={4}><Input type="radio" label="User" name="clientType" readOnly /></Col>
                                    <Col xs={4}><Input type="radio" label="Institute" name="clientType" /></Col>
                                    <Col xs={4}><Input type="radio" label="Center" name="clientType" /></Col>
                                </Row>
                                <Input type="checkbox" label="Remember me" readOnly />
                                <Button bsStyle="link">Forgot password</Button><br/><br/>
                                <ButtonInput type="submit" value="Sign In" />
                            </form>
                            <br/>
                            <div className="of-signUpScroll">
                                <h3>Don not have account, Create one now</h3>
                                <Button bsStyle="link" onClick={this.scrollFormDown}>Sign Up</Button>
                            </div>
                            <br/>
                            <form>
                                <h3>Sign up on one-form-india</h3><br/><br/>
                                <Row>
                                    <Col sm={6}><Input type="text" placeholder="Enter firstname" /></Col>
                                    <Col sm={6}><Input type="email" placeholder="Enter lastname" /></Col>
                                    <Col sm={12}><Input type="email" placeholder="Enter email" /></Col>
                                    <Col sm={6}><Input type="email" placeholder="Enter password" /></Col>
                                    <Col sm={6}><Input type="email" placeholder="Re-enter password" /></Col>
                                    <Col xs={4}><Input type="radio" label="User" name="clientType" readOnly /></Col>
                                    <Col xs={4}><Input type="radio" label="Institute" name="clientType" readOnly /></Col>
                                    <Col xs={4}><Input type="radio" label="Center" name="clientType" readOnly /></Col><br/>
                                    <Col sm={12}><ButtonInput type="submit" value="Sign Up" /></Col>
                                </Row>
                            </form>
                            <br/>
                            <div className="of-signInScroll">
                                <h3>Already have account, Create one right now</h3>
                                <Button bsStyle="link" onClick={this.scrollFormUp}>Sign In</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} mdPull={6} className="of-imgCont">
                        <div className="of-imgContDiv"></div>
                    </Col>
                </Row>
            </Grid>
        )
    }
});

module.exports = UnAuthorised;