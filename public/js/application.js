var React = require('react');
var Router = require('react-router');
var RouteManager = require('./config/routes');
var AppStore = require('./stores/appStore');


Router.run(RouteManager, function(Root){
    React.render(<Root />, document.getElementById('container'));
})