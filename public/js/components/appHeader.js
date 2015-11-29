var React = require('react');
var AppFooter = require('./appFooter.js');
var RouteHandler = require('react-router').RouteHandler;

var Bootstrap = require('react-bootstrap');
var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var NavDropdown = Bootstrap.NavDropdown;
var MenuItem = Bootstrap.MenuItem;
var CollapsibleNav = Bootstrap.CollapsibleNav;
var Glyphicon = Bootstrap.Glyphicon;

var AppHeader = React.createClass({
    render: function(){
        return (
            <header>
                <Navbar brand="One-Form-India" toggleNavKey={0}>
                    <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
                      <Nav navbar>
                        <NavItem eventKey={1} href="#">About</NavItem>
                        <NavItem eventKey={2} href="#">Contacts</NavItem>
                        <NavItem eventKey={3} href="#">Forms</NavItem>
                        <NavItem eventKey={4} href="#">Blog</NavItem>
                      </Nav>
                      <Nav navbar right>
                        <NavItem eventKey={1} href="index.html#/"><Glyphicon glyph="log-out" />LogOut</NavItem>
                      </Nav>
                    </CollapsibleNav>
                </Navbar>
                <div className="of-mainContainer">
                    <RouteHandler />
                </div>
                <div>
                    <AppFooter />
                </div>
            </header>
        )
    }
});



module.exports = AppHeader;