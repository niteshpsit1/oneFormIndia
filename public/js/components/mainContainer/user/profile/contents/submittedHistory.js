var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;
var Table = Bootstrap.Table;


var UsubmittedForms = React.createClass({
    render: function(){
        return (
        	<Panel>
        		<Table striped bordered condensed hover>
				    <thead>
						<tr>
							<th>#</th>
							<th>Form Name</th>
							<th>Submitted Date</th>
						</tr>
				    </thead>
				    <tbody>
						<tr>
							<td>1</td>
							<td>name of form</td>
							<td>dd, mm, yyyy</td>
						</tr>
						<tr>
							<td>2</td>
							<td>name of form</td>
							<td>dd, mm, yyyy</td>
						</tr>
						<tr>
							<td>3</td>
							<td>name of form</td>
							<td>dd, mm, yyyy</td>
						</tr>
				    </tbody>
				 </Table>
        	</Panel>
        )
    }
});

module.exports = UsubmittedForms;