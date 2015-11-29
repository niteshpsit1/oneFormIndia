var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Button = Bootstrap.Button;
var Glyphicon = Bootstrap.Glyphicon;
var Input = Bootstrap.Input;

 var IcreateForm = React.createClass({
 	getInitialState: function(){
 		return {contents:[]};
 	},
 	addContents: function(content){
 		var contents = this.state.contents;
 		var contentsLength = contents.length;
 		var checkStatus;
 		for(var i=0; i<contentsLength; i++){
 			if(contents[i].itemKey == content.itemKey){
 				checkStatus = "matched";
 				break;
 			}
 			else{
 				checkStatus ="notMatched";
 			}

 		}
 		if(checkStatus == "matched"){
 			alert("you have already selected this item");
 		}
 		else{
 			var updatedContents = this.state.contents.concat([content]);
 			this.setState({contents: updatedContents});
 		}
 		return;
 	},
 	deleteContents: function(content){
 		var contents = this.state.contents;
 		var contentsLength = contents.length;
 		var rememberId;
 		for(var i=0; i<contentsLength; i++){
 			if(contents[i].itemKey == content.itemKey){
 				rememberId = i;
 				break;
 			}
 		}

		contents.splice(rememberId, 1);
		this.setState({contents: contents});

		return;
 	},
 	render: function(){
 		return (
 			<Panel>
 				<Row>
 					<Col sm={6}>
 						<FormContents onItemAdd={this.addContents} onItemDelete={this.deleteContents} />
 					</Col>
 					<Col sm={6}>
 						<FormAddedContents contents={this.state.contents} />
 					</Col>
 				</Row>
 			</Panel>
 		);
 	}
 })

var FormContents = React.createClass({
	itemAdd: function(e){
        var itemName = e.target.getAttribute('data-name');
        var itemType = e.target.getAttribute('data-type');
        var itemKey = e.target.getAttribute('data-key');
        this.props.onItemAdd({itemName: itemName, itemType: itemType, itemKey: itemKey});
        return;
	},
	itemDelete: function(e){
		var itemKey = e.target.getAttribute('data-key');
		this.props.onItemDelete({itemKey: itemKey});
		return;
	},
	render: function(){
		return (
			
			<Row>
				<Col sm={12}>
					<Row className="of-formComponent">
						<Col xs={6}>
							<div className="of-compTitle">First Name</div>
						</Col>
						<Col xs={3}>
							<Button className="of-addComp" bsStyle="success" data-name="First Name" data-type="textInput" data-key="fname" onClick={this.itemAdd}>Add</Button>
						</Col>
						<Col xs={3}>
							<Button className="of-delComp" bsStyle="danger" data-name="First Name" data-type="textInput" data-key="fname" onClick={this.itemDelete}>Delete</Button>
						</Col>
					</Row>
					
					<Row>
						<Col xs={6}> 
							<div>Last Name</div>
						</Col>
						<Col xs={3}>
							<Button bsStyle="success" data-name="Last Name" data-type="textInput" data-key="lname" onClick={this.itemAdd}>Add</Button>
						</Col>
						<Col xs={3}>
							<Button bsStyle="danger" data-name="Last Name" data-type="textInput" data-key="lname" onClick={this.itemDelete}>Delete</Button>
						</Col>
					</Row>

					<Row>
						<Col xs={6}>
							<div>Fathers Name</div>
						</Col>
						<Col xs={3}>
							<Button bsStyle="success" data-name="Father's Name" data-type="textInput" data-key="fathername" onClick={this.itemAdd}>Add</Button>
						</Col>
						<Col xs={3}>
							<Button bsStyle="danger" data-name="Father's Name" data-type="textInput" data-key="fathername" onClick={this.itemDelete}>Delete</Button>
						</Col>
					</Row>

					<Row>
						<Col xs={6}>
							<div>Mothers Name</div>
						</Col>
						<Col xs={3}>
							<Button bsStyle="success" data-name="Mother's Name" data-type="textInput" data-key="mothername" onClick={this.itemAdd}>Add</Button>
						</Col>
						<Col xs={3}>
							<Button bsStyle="danger" data-name="Mother's Name" data-type="textInput" data-key="mothername" onClick={this.itemDelete}>Delete</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		)
	}
});

var FormAddedContents = React.createClass({
	render: function(){
		var createContents = function(content){
			var selectContent;
			switch (content.itemType){
				case "textInput":
					selectContent = <TextContent itemName={content.itemName} itemKey={content.itemKey} />;
					break;
				default:
					selectContent = <TextContent itemName={content.itemName} itemKey={content.itemKey} />;
			}

			return(
				<Col sm={12}> 
					{selectContent}
				</Col>
			)
			
		};
		return (
			<Row>
				{this.props.contents.map(createContents)}{JSON.stringify(this.props.contents)}
			</Row>
		)
	}
});

var TextContent = React.createClass({
	render: function(){
		return (
			<div>
			<Input type="text" label={this.props.itemName} />
			</div>
		)
	}
});

 module.exports = IcreateForm;