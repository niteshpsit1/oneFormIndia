var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;


var ImanageExams = React.createClass({
	getInitialState: function(){
		return	{exams:[
					{name:"Exam one"},
					{name: "Exam Two"},
					{name: "Exam Three"}
		]};
	},
    render: function(){
    	var createItem = function(item){
    		return (
    			<Col sm={6} smOffset={3}>
    				<Button href="/#/institute/examPlanning/exam">{item.name}</Button>
    			</Col>
    		);
    	}
        return (
            <div className="of-ipContainer">
                <Row className="of-ipcCont">
                    <Panel>
                    	<Row>
                    		{this.state.exams.map(createItem)}

                    		<Col sm={6} smOffset={3}>
			    				<Button href="/#/institute/examPlanning/exam">Add New Exam</Button>
			    			</Col>
                    	</Row>
                    </Panel>
                </Row>
            </div>
        )
    }
});

module.exports = ImanageExams; 