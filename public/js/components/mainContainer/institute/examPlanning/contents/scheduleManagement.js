var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;
var Input = Bootstrap.Input;

var Ischedule = React.createClass({
    getInitialState: function(){
        return {data: [
                {date:"yyyy-dd-mm", time:"hh:mm", from:"hh:mm", to:"hh:mm", startDate:"yyyy-dd-mm", lastDate:"yyyy-dd-mm"}
            ]};
    },
    updateDataState: function(items){
            var updatedData = [items];
            this.setState({data: updatedData});
    },
    render: function(){
        return (
            <Panel>
                <Row>
                    <Col sm={6}>
                        <Ssubmitted data={this.state.data} />
                    </Col>
                    <Col sm={6}>
                        <SformSide onItemAdd={this.updateDataState} />
                    </Col>
                </Row>
            </Panel>
        )
    }
});


var Ssubmitted = React.createClass({
    render: function(){
        var data = this.props.data;
        return(
            <Row className="of-submitSchedule">
                <Col sm={12}>
                    <p><b>Date of Examination</b></p>
                    <p>{data[0].date}</p>
                    <hr/>
                </Col>
                <Col sm={12}>
                    <p><b>Time of Examination</b></p>
                    <p>{data[0].time}</p>
                    <hr/>
                </Col>
                <Col sm={12}>
                    <Row>
                        <Col xs={6}><p><b>From</b></p>
                            <p>{data[0].from}</p>
                        </Col>
                        <Col xs={6}>
                            <p><b>To</b></p>
                            <p>{data[0].to}</p>
                        </Col>
                    </Row>
                    <hr/>
                </Col>
                <Col sm={12}>
                    <p><b>Start Date of Application</b></p>
                    <p>{data[0].startDate}</p>
                    <hr/>
                </Col>
                <Col sm={12}>
                    <p><b>Start Last of Application</b></p>
                    <p>{data[0].lastDate}</p>
                </Col>
            </Row>
        )
    }
})

var SformSide = React.createClass({
    handleClick: function(){
        var itemDate = $(".sExamDate").val();
        var itemTime = $(".sExamTime").val();
        var itemFrom = $(".sExamFrom").val();
        var itemTo = $(".sExamTo").val();
        var itemStartDate = $(".sExamStart").val();
        var itemLastDate = $(".sExamLast").val();
        this.props.onItemAdd({date: itemDate, time: itemTime, from: itemFrom, to: itemTo, startDate: itemStartDate, lastDate: itemLastDate});
        $(".of-sNotSubmitted").css("display","none");
        $(".of-sChange").fadeIn();
        return;
    },
    render: function(){
        return(
            <div>
                <Row className="of-sNotSubmitted">
                    <Col sm={12}>
                        <Input className="sExamDate" type="date" name="examDate" label="Select exam date" />
                    </Col>
                    <Col sm={12}>
                        <Input className="sExamTime" type="time" name="examTime" label="Select exam time" />
                    </Col>
                    <Col sm={12}>
                        <Row>
                            <Col xs={6}><Input className="sExamFrom" type="time" name="sessionTime" label="From" /></Col>
                            <Col xs={6}><Input className="sExamTo" type="time" name="sessionTime" label="To" /></Col>
                        </Row>
                    </Col>
                    <Col sm={12}>
                        <Input className="sExamStart" type="date" name="applyLastDate" label="Select start date of application" />
                    </Col>
                    <Col sm={12}>
                        <Input className="sExamLast" type="date" name="examDate" label="Select Last date of application" />
                    </Col>
                    <Col sm={6}>
                        <Input type="submit" value="Submit the details" onClick={this.handleClick}/>
                    </Col>
                </Row>


            <form>
                <Row className="of-sChange">
                    <Col sm={12}>
                        <Input type="date" name="examDate" label="Select exam date" />
                    </Col>
                    <Col sm={12}>
                        <Input type="time" name="examTime" label="Select exam time" />
                    </Col>
                    <Col sm={12}>
                        <Row>
                            <Col xs={6}><Input type="time" name="sessionTime" label="From" /></Col>
                            <Col xs={6}><Input type="time" name="sessionTime" label="To" /></Col>
                        </Row>
                    </Col>
                    <Col sm={12}>
                        <Input type="submit" value="Change the schedule"/>
                    </Col>
                </Row>
            </form>
            </div>
        )
    }
});

module.exports = Ischedule;