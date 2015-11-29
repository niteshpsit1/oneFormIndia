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
		return {items: []};
	},
    addItems: function(newItem){
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},/*
    deleteItems: function(newItem){
        allItems = this.state.items;
        for(var i = 0; i < allItems.length; i++) {
            var obj = allItems[i];

            if(obj.itemName == "gender") {
                allItems.splice(i, 1);
            }
        }
        this.setState({items: allItems});
        alert("I am an alert box!");
    },*/
    render: function(){
        return (
            <div className="of-cfContainer">
                <Panel>
                    <Row>
                        <Col xs={4} className="of-cfcAdd">
                            <FormContents onItemAdd={this.addItems} />
                        </Col>
                        <Col xs={8} className="of-cfcAdded">
                            <FormAdded items={this.state.items} />
                        </Col>
                    </Row>
                </Panel>
            </div>
        );
    }
});

var FormAdded = React.createClass({
    deleteItem: function(){
        var itemName = e.target.getAttribute('itemName');
        alert(itemName);
    },
    render: function() {
        var createItem = function(itemText) {
			return (
                <div>
				<FormAddedItem itemName={itemText.itemName} itemType={itemText.itemType} />
                <Button onClick={this.deleteItem} itemName={itemText.itemName}>delete</Button>
                </div>
			);
		};
		return <div>{this.props.items.map(createItem)}<br/>{JSON.stringify(this.props.items)}</div>;
    }
});

var FormAddedItem = React.createClass({/*
    deleteItem: function(item){
        this.props.onItemDelete({itemName: item.itemName});
        return;
        alert(item);
    },
    handleDelete: function(){
        var deleteItem= this.props.itemName;
        this.props.onItemDelete({itemName: deleteItem});
        return;
    },*/
    render: function(){
        var optionalElement;
        var checkType = this.props.itemType;
        if (checkType == "gender"){
            optionalElement = <GenderType itemName={this.props.itemName} />;
        }
        else if (checkType=="dob") {
            optionalElement = <DOBType itemName={this.props.itemName} />
        }
        else if (checkType=="email") {
            optionalElement = <EmailType itemName={this.props.itemName} />
        }
        else if (checkType=="phonenumber") {
            optionalElement = <PhonenumberType itemName={this.props.itemName} />
        }
        else if (checkType=="pincode") {
            optionalElement = <PincodeType itemName={this.props.itemName} />
        }
        else if (checkType=="language") {
            optionalElement = <LanguageType itemName={this.props.itemName} />
        }
        else if (checkType=="nationality") {
            optionalElement = <NationalityType itemName={this.props.itemName} />
        }
        else if (checkType=="religion") {
            optionalElement = <ReligionType itemName={this.props.itemName} />
        }
        else if (checkType=="marital") {
            optionalElement = <MaritalType itemName={this.props.itemName} />
        }
        else if (checkType=="img") {
            optionalElement =<ImgType itemName={this.props.itemName} />
        }
        else{
            optionalElement= <TextType itemName={this.props.itemName} />;
        }

        return(
                <div>{optionalElement}<Button onClick={this.handleDelete}>delete</Button></div>
            );
        
    }
});

var GenderType = React.createClass({/*
    handleDelete: function(){
        var deleteItem= this.props.itemName;
        this.props.onItemDelete({itemName: deleteItem});
        return;
    },*/
    render: function(){
        return(
            <Row className="of-cfcAddedItem">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>{this.props.itemName}</b></p>
                <Col sm={4}>
                    <Input type="radio" name="gender" label="male"/>
                </Col>
                <Col sm={4}>
                    <Input type="radio" name="gender" label="Female" />
                </Col>
                <Col sm={4}>
                    <Input type="radio" name="gender" label="Other" />
                </Col>
                <br/><br/><br/>
            </Row>
            
        );
    }
});

var DOBType = React.createClass({
    render: function(){
        return(
            <Row className="of-cfcAddedItem">
                <Col sm={12}>
                    <Input type="date" name="dob" label="Date of Birth" />
                    <br/>
                </Col>
            </Row>
        );
    }
});

var EmailType = React.createClass({
    render: function(){
        return(
            <Row className="of-cfcAddedItem">
                <Col sm={12}>
                    <Input type="email" label={this.props.itemName} />
                    <br/>
                </Col>
            </Row>
        );
    }
});

var PhonenumberType = React.createClass({
    render: function(){
        return(
            <Row className="of-cfcAddedItem">
                <Col sm={12}>
                    <Input type="number" label={this.props.itemName} />
                    <br/>
                </Col>
            </Row>
            
        );
    }
});

var PincodeType = React.createClass({
    render: function(){
        return(
            <Row className="of-cfcAddedItem">
                <Col sm={12}>
                    <Input type="number" label={this.props.itemName} />
                    <br/>
                </Col>
            </Row>
            
        );
    }
});

var ReligionType = React.createClass({
    render: function(){
        return(
            <Row className="of-cfcAddedItem">
                <Col sm={12}>
                    <Input type="select" label={this.props.itemName} >
                        <option value="hindu">Hindu</option>
                        <option value="islam">Islam</option>
                        <option value="christian">Christian</option>
                        <option value="other">Other</option>
                    </Input>
                    <br/>
                </Col>
            </Row>
        );
    }
});

var LanguageType = React.createClass({
    render: function(){
        return(
            <Row className="of-cfcAddedItem">
                <Col sm={12}>
                    <Input type="select" label={this.props.itemName} >
                        <option value="hindi">Hindi</option>
                        <option value="english">English</option>
                        <option value="bengoli">Bengoli</option>
                        <option value="tamil">Tamil</option>
                        <option value="other">Other</option>
                    </Input>
                    <br/>
                </Col>
            </Row>
        );
    }
});

var NationalityType = React.createClass({
    render: function(){
        return(
            <Row className="of-cfcAddedItem">
                <Col sm={12}>
                    <Input type="select" label={this.props.itemName} >
                        <option value="indian">Indian</option>
                        <option value="foreign">Foreigner</option>
                    </Input>
                    <br/>
                </Col>
            </Row>
        );
    }
});

var MaritalType = React.createClass({
    render: function(){
        return(
            <Row className="of-cfcAddedItem">
                <Col sm={12}>
                    <Input type="select" label={this.props.itemName} >
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                    </Input>
                    <br/>
                </Col>
            </Row>
        );
    }
});


var PincodeType = React.createClass({
    render: function(){
        return(
            <Row className="of-cfcAddedItem">
                <Col sm={12}>
                    <Input type="Number" label={this.props.itemName} />
                    <br/>
                </Col>
            </Row>
            
        );
    }
});

var ImgType = React.createClass({
    render: function(){
        var help = this.props.itemName+"with aspect ratio of 4:5";
        return(
            <Row className="of-cfcAddedItem">
                <Col sm={12}>
                    <Input type="file" label={this.props.itemName} help={help} />
                    <br/>
                </Col>
            </Row>
            
        );
    }
});

var TextType = React.createClass({
    render: function(){
        return(
            <Row className="of-cfcAddedItem">
                <Col sm={12}>
                    <Input type="text" label={this.props.itemName} />
                    <br/>
                </Col>
            </Row>
            
        );
    }
});

var FormContents = React.createClass({
    handleAdd: function(e){
        e.target.setAttribute("bsStyle", "success");
        var itemName = e.target.getAttribute('data-name');
        var itemType = e.target.getAttribute('data-type');
        this.props.onItemAdd({itemName: itemName, itemType: itemType});
        return;
	},
    handleAddButton:function(){
        var itemName = $(".addText").val();
        this.props.onItemAdd({itemName: itemName, itemType: "text"});
    },
    render: function(){
		return (
            <div>
                <Button data-name="First Name" data-type="text" onClick={this.handleAdd}>
                First Name</Button><br/><br/>

                <Button data-name="Middle Name" data-type="text" onClick={this.handleAdd}>
                Middle Name</Button><br/><br/>

                <Button data-name="Last Name" data-type="text" onClick={this.handleAdd}>
                Last Name</Button><br/><br/>

                <Button data-name="Gender" data-type="gender" onClick={this.handleAdd}>
                Gender</Button><br/><br/>

                <Button data-name="Date of Birth" data-type="dob" onClick={this.handleAdd}>
                Date of Birth</Button><br/><br/>

                <Button data-name="Father's Name" data-type="text" onClick={this.handleAdd}>
                Father Name</Button><br/><br/>

                <Button data-name="Mother's Name" data-type="text" onClick={this.handleAdd}>
                Mother Name</Button><br/><br/>

                <Button data-name="Gaurdian's Name" data-type="text" onClick={this.handleAdd}>
                Gaurdian Name</Button><br/><br/>

                <Button data-name="Email Id" data-type="email" onClick={this.handleAdd}>
                Email Id</Button><br/><br/>

                <Button data-name="Phone Number" data-type="phonenumber" onClick={this.handleAdd}>
                Phone Number</Button><br/><br/>

                <Button data-name="Address" data-type="text" onClick={this.handleAdd}>
                Address</Button><br/><br/>

                <Button data-name="City" data-type="text" onClick={this.handleAdd}>
                City</Button><br/><br/>

                <Button data-name="State" data-type="text" onClick={this.handleAdd}>
                State</Button><br/><br/>

                <Button data-name="Country" data-type="text" onClick={this.handleAdd}>
                Country</Button><br/><br/>

                <Button data-name="Pincode" data-type="pincode" onClick={this.handleAdd}>
                Pincode</Button><br/><br/>

                <Button data-name="Marital Status" data-type="marital" onClick={this.handleAdd}>
                Marital Status</Button><br/><br/>

                <Button data-name="Primary Language" data-type="language" onClick={this.handleAdd}>
                Primary Language</Button><br/><br/>

                <Button data-name="Nationality" data-type="nationality" onClick={this.handleAdd}>
                Nationality</Button><br/><br/>

                <Button data-name="Religion" data-type="religion" onClick={this.handleAdd}>
                Religion</Button><br/><br/>

                <Button data-name="Class 10 Qualification" data-type="number" onClick={this.handleAdd}>
                Class 10 Qualification</Button><br/><br/>

                <Button data-name="Class 12 Qualification" data-type="number" onClick={this.handleAdd}>
                Class 12 Qualification</Button><br/><br/>

                <Button data-name="Graduation Qualification" data-type="text" onClick={this.handleAdd}>
                Graduation Qualification</Button><br/><br/>

                <Button data-name="PostGraduate Qualification" data-type="text" onClick={this.handleAdd}>
                PostGraduate Qualification</Button><br/><br/>

                <Button data-name="Photograph" data-type="img" onClick={this.handleAdd}>
                Photograph</Button><br/><br/>

                <Button data-name="Signature" data-type="img" onClick={this.handleAdd}>
                Signature</Button><br/><br/>

                <br/><br/><br/>
                <div>
                    <Input className="addText" type="text" placeholder="What it is about"/>
                    <Button onClick={this.handleAddButton}>Add new field</Button>
                </div>

            </div>
		);
	}
});


module.exports = IcreateForm;
















































































































