 var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;
var Input = Bootstrap.Input;
var Table = Bootstrap.Table;

var IsubmittedForms = React.createClass({
	loadCommentsFromServer: function() {
		$.ajax({
		  url: "/submittedForms",
		  dataType: 'json',
		  cache: false,
		  success: function(data) {
		    this.setState({data: data.data});
		  }.bind(this),
		  error: function(xhr, status, err) {
		    console.error(this.props.url, status, err.toString());
		  }.bind(this)
		});
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
    render: function(){
        return (
            <Panel>
            	<FormList data={this.state.data}/>
            </Panel>
        )
    }
});

var FormList = React.createClass({
	render: function(){/*
		var createItem = function(item) {
			return (
				<tr>
					<td>1</td>
					<td>{item.regNo}</td>
					<td>{item.name}</td>
					<td>{item.age}</td>
					<td>{item.gender}</td>
					<td>{item.email}</td>
					<td>{item.phone}</td>
					<td>{item.address}</td>
					<td>{item.payment}</td>
				</tr>
			);
		};*/
		var formComponents = this.props.data.map(function(components){
			return(
				<RenderComponents 
				regNo={components.regNo} 
				name={components.name} 
				age={components.age} 
				gender={components.gender} 
				email ={components.email} 
				phone={components.phone} 
				address={components.address} 
				payment ={components.payment} />
			);
		});
		return (
			<Table striped bordered condensed hover>
                <thead>
                    <tr>
						<th>#</th>
						<th>Registration No.</th>
						<th>Name</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Email</th>
						<th>Phone </th>
						<th>Address</th>
						<th>Payment Details</th>
                    </tr>
                </thead>
                <tbody>
                	{formComponents}
                </tbody>
            </Table>
		);
	}
});
 var RenderComponents = React.createClass({
 	render: function(){
 		return (
 			<tr>
				<td>1</td>
				<td>{this.props.regNo}</td>
				<td>{this.props.name}</td>
				<td>{this.props.age}</td>
				<td>{this.props.gender}</td>
				<td>{this.props.email}</td>
				<td>{this.props.phone}</td>
				<td>{this.props.address}</td>
				<td>{this.props.payment}</td>
			</tr>
 		)
 	}
 });
/*
 var SubmittedData = React.createClass({
 	render: function(){
 		return (

 		)
 	}
 });*/
module.exports = IsubmittedForms;