var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;
var Input = Bootstrap.Input;
var Tabs = Bootstrap.Tabs;
var Tab = Bootstrap.Tab;
var Table = Bootstrap.Table
var Pagination = Bootstrap.Pagination;

var IadmitCards = React.createClass({
    render: function(){
        return (
            <Panel>
            	<Tabs defaultActiveKey={1}>
					<Tab eventKey={1} title="View Admit Cards">
						<ViewAdmitCards />
					</Tab>
					<Tab eventKey={2} title="Issue Admit Cards">
						<IssueAdmitCards />
					</Tab>
					<Tab eventKey={3} title="Re-Issue Admit Cards">
						<ReIssueAdmitCards />
					</Tab>
				</Tabs>
			</Panel>
        )
    }
});

var  ViewAdmitCards = React.createClass({
	getInitialState: function() {
	    return {
	      activePage: 1
	    };
	},

	handleSelect: function(event, selectedEvent) {
	    this.setState({
	      activePage: selectedEvent.eventKey
	    });
	},

	render: function(){
		return (
			<div>
			<Table striped bordered condensed hover>
				<thead>
					<tr>
						<th></th>
						<th colSpan="5">Candidate Information</th>
						<th colSpan="4">Examination Center Information</th>
					</tr>
					<tr>
						<th>#</th>
						<th>Roll No.</th>
						<th>Name</th>
						<th>Address</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Name </th>
						<th>Address</th>
						<th>City</th>
						<th>State</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
					</tr>
				</tbody>
  			</Table>

  			<Pagination
	        prev
	        next
	        first
	        last
	        ellipsis
	        items={20}
	        maxButtons={5}
	        activePage={this.state.activePage}
	        onSelect={this.handleSelect} />

	        </div>

		);
	}
});

var  IssueAdmitCards = React.createClass({
	getInitialState: function() {
	    return {
	      activePage: 1
	    };
	},

	handleSelect: function(event, selectedEvent) {
	    this.setState({
	      activePage: selectedEvent.eventKey
	    });
	},

	render: function(){
		return (
			<div><br/>
			<Button bsStyle="primary">Generate Admit Cards</Button><br/><br/>
			<Table striped bordered condensed hover>
				<thead>
					<tr>
						<th><input type="checkbox" readOnly /></th>
						<th>#</th>
						<th>Registration No.</th>
						<th>Name</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Email</th>
						<th>Phone </th>
						<th>Address</th>
						<th>Payment Details</th>
						<th>Admit Card Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><input type="checkbox" readOnly /></td>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td><input type="checkbox" readOnly /></td>
						<td>2</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td><input type="checkbox" readOnly /></td>
						<td>3</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
					</tr>
				</tbody>
  			</Table>

  			<Pagination
	        prev
	        next
	        first
	        last
	        ellipsis
	        items={20}
	        maxButtons={5}
	        activePage={this.state.activePage}
	        onSelect={this.handleSelect} />

	        </div>
		);
	}
});

var  ReIssueAdmitCards = React.createClass({
	render: function(){
		return (
			<Table striped bordered condensed hover>
				<thead>
					<tr>
						<th></th>
						<th colSpan="7">Center Information</th>
					</tr>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Address</th>
						<th>City</th>
						<th>State</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Send by mail</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td><Button bsStyle="link">Send</Button></td>
					</tr>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td><Button bsStyle="link">Send</Button></td>
					</tr>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td><Button bsStyle="link">Send</Button></td>
					</tr>
				</tbody>
  			</Table>
		);
	}
});

module.exports = IadmitCards;  