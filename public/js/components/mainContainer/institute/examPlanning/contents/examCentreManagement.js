var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;
var Table = Bootstrap.Table;
var Input = Bootstrap.Input;
var Tabs = Bootstrap.Tabs;
var Tab = Bootstrap.Tab;

var Icentre = React.createClass({
	getInitialState: function(){
		return {items: []};
	},
    updateItems: function(newItem){
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},
    render: function(){
        return (
        	<Panel>
                <Tabs defaultActiveKey={1} animation={false}>
                    <Tab eventKey={1} title="Add centres"><AddCentres onItemAdd={this.updateItems}/></Tab>
                    <Tab eventKey={2} title="Added centres"><AddedCentres items={this.state.items}/></Tab>
                </Tabs>
        	</Panel>
        )
    }
});

var AddCentres = React.createClass({
    handleAdd: function(e){
        e.target.setAttribute("bsStyle", "success");
        var itemName = e.target.getAttribute('data-name');
        var itemAddress = e.target.getAttribute('data-address');
        var itemCity = e.target.getAttribute('data-city');
        var itemState = e.target.getAttribute('data-state');
        var itemSeats = e.target.getAttribute('data-seats');
        var itemPhone = e.target.getAttribute('data-phone');
        var itemEmail = e.target.getAttribute('data-email');
        var itemFax = e.target.getAttribute('data-fax');
        this.props.onItemAdd({
            itemName: itemName,
            itemAddress: itemAddress,
            itemCity: itemCity,
            itemState: itemState, 
            itemSeats: itemSeats,
            itemPhone: itemPhone,
            itemEmail: itemEmail,
            itemFax:itemFax
        });
        return;
    },
    render: function(){
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>No of seats</th>
                        <th>Contacts</th>
                        <th>Add/remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Public school</td>
                        <td>Rk puram</td>
                        <td>New Delhi</td>
                        <td>Delhi</td>
                        <td>500</td>
                        <td>8595859585<br/>centre@mail.com<br/>Fax</td>
                        <td><Button onClick={this.handleAdd}
                         data-name="Name" 
                         data-address="Address" 
                         data-city="city" 
                         data-state="state" 
                         data-seats="seats" 
                         data-phone="85484654845" 
                         data-email="centre@mail.com" 
                         data-fax="fax">Add</Button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Public school</td>
                        <td>Rk puram</td>
                        <td>New Delhi</td>
                        <td>Delhi</td>
                        <td>500</td>
                        <td>8595859585<br/>centre@mail.com<br/>Fax</td>
                        <td><Button onClick={this.handleAdd}
                         data-name="Name" 
                         data-address="Address" 
                         data-city="city" 
                         data-state="state" 
                         data-seats="seats" 
                         data-phone="85484654845" 
                         data-email="centre@mail.com" 
                         data-fax="fax">Add</Button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Public school</td>
                        <td>Rk puram</td>
                        <td>New Delhi</td>
                        <td>Delhi</td>
                        <td>500</td>
                        <td>8595859585<br/>centre@mail.com<br/>Fax</td>
                        <td><Button onClick={this.handleAdd}
                         data-name="Name" 
                         data-address="Address" 
                         data-city="city" 
                         data-state="state" 
                         data-seats="seats" 
                         data-phone="85484654845" 
                         data-email="centre@mail.com" 
                         data-fax="fax">Add</Button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Public school</td>
                        <td>Rk puram</td>
                        <td>New Delhi</td>
                        <td>Delhi</td>
                        <td>500</td>
                        <td>8595859585<br/>centre@mail.com<br/>Fax</td>
                        <td><Button onClick={this.handleAdd}
                         data-name="Name" 
                         data-address="Address" 
                         data-city="city" 
                         data-state="state" 
                         data-seats="seats" 
                         data-phone="85484654845" 
                         data-email="centre@mail.com" 
                         data-fax="fax">Add</Button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Public school</td>
                        <td>Rk puram</td>
                        <td>New Delhi</td>
                        <td>Delhi</td>
                        <td>500</td>
                        <td>8595859585<br/>centre@mail.com<br/>Fax</td>
                        <td><Button onClick={this.handleAdd}
                         data-name="Name" 
                         data-address="Address" 
                         data-city="city" 
                         data-state="state" 
                         data-seats="seats" 
                         data-phone="85484654845" 
                         data-email="centre@mail.com" 
                         data-fax="fax">Add</Button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Public school</td>
                        <td>Rk puram</td>
                        <td>New Delhi</td>
                        <td>Delhi</td>
                        <td>500</td>
                        <td>8595859585<br/>centre@mail.com<br/>Fax</td>
                        <td><Button onClick={this.handleAdd}
                         data-name="Name" 
                         data-address="Address" 
                         data-city="city" 
                         data-state="state" 
                         data-seats="seats" 
                         data-phone="85484654845" 
                         data-email="centre@mail.com" 
                         data-fax="fax">Add</Button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Public school</td>
                        <td>Rk puram</td>
                        <td>New Delhi</td>
                        <td>Delhi</td>
                        <td>500</td>
                        <td>8595859585<br/>centre@mail.com<br/>Fax</td>
                        <td><Button onClick={this.handleAdd}
                         data-name="Name" 
                         data-address="Address" 
                         data-city="city" 
                         data-state="state" 
                         data-seats="seats" 
                         data-phone="85484654845" 
                         data-email="centre@mail.com" 
                         data-fax="fax">Add</Button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Public school</td>
                        <td>Rk puram</td>
                        <td>New Delhi</td>
                        <td>Delhi</td>
                        <td>500</td>
                        <td>8595859585<br/>centre@mail.com<br/>Fax</td>
                        <td><Button onClick={this.handleAdd}
                         data-name="Name" 
                         data-address="Address" 
                         data-city="city" 
                         data-state="state" 
                         data-seats="seats" 
                         data-phone="85484654845" 
                         data-email="centre@mail.com" 
                         data-fax="fax">Add</Button></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
});

var AddedCentres = React.createClass({
    render: function(){
        var createItem = function(itemText) {
            return (
                <AddedItems 
                itemName={itemText.itemName} 
                itemAddress={itemText.itemAddress}
                itemCity={itemText.itemCity}
                itemState={itemText.itemState}
                itemSeats={itemText.itemSeats}
                itemEmail={itemText.itemEmail}
                itemFax={itemText.itemFax}
                itemPhone={itemText.itemPhone}/>
            );
        };
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>No of seats</th>
                        <th>Contacts</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map(createItem)}
                </tbody>
            </Table>
        );
    }
});

var AddedItems = React.createClass({
    render: function(){
        return(
            <tr>
                <td>#</td>
                <td>{this.props.itemName}</td>
                <td>{this.props.itemAddress}</td>
                <td>{this.props.itemCity}</td>
                <td>{this.props.itemState}</td>
                <td>{this.props.itemSeats}</td>
                <td>{this.props.itemPhone}<br/>{this.props.itemEmail}<br/>{this.props.itemFax}</td>
            </tr>
        );
    }
});



module.exports = Icentre;