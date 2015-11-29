var Hapi = require('hapi'),
    routes = require('./routes');

var server = new Hapi.Server();
server.connection({ port: 5000 });

server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'views'
});
server.route({
	method:'GET',
	path:'/',
	handler: function(req, res){
		res.view("index");
	}
});

server.route({
	method:'GET',
	path:'/submittedForms',
	handler: function(req, res){
		res({data:[{regNo:"154151", name:"deepak", age:"23", gender:"male", email:"deepakvert@gmail.com", phone:"9540078594", address:"iit delhi", payment:"successful"},
			{regNo:"154151", name:"deepak", age:"23", gender:"male", email:"deepakvert@gmail.com", phone:"9540078594", address:"iit delhi", payment:"successful"},
			{regNo:"154151", name:"deepak", age:"23", gender:"male", email:"deepakvert@gmail.com", phone:"9540078594", address:"iit delhi", payment:"successful"}]});
	}
});

server.route({
    path: "/public/{path*}",
    method: "GET",
    handler: {
        directory: {
            path: "./public",
            listing: false,
            index: false
        }
    }
});

routes(server);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});