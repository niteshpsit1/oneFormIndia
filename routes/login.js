var InstituteLogin = require('../models/instituteLogin');
var UserLogin = require('../models/userLogin');
var Student = require('../models/students')
module.exports = function(server){

	// @   this route for get the university detail
	server.route({
		path:'/login',
		method:'POST',
		handler: function(request, reply){
			if(request.payload.user){
				UserLogin.forge().where({email:request.payload.email,password:request.payload.password}).fetch().then(function(data){
					if(data){
						reply.redirect('/profile?email='+request.payload.email);
					}else{
						reply({data:"no record found"});
					}
				}).catch(function(err){
					reply({data:"somethink went wrong"});
				});
			}else if (request.payload.institute) {
				InstituteLogin.forge().where({email:request.payload.email,password:request.payload.password}).fetch().then(function(data){
					if(data){

					}else{
						reply({data:"no record found"});
					}
				}).catch(function(err){
					reply({data:"somethink went wrong"});
				});
			}else{
				reply({data:"somethink went wrong"});
			}
		}	
	});
	server.route({
		path:'/profile',
		method:'GET',
		handler:function(request, reply){
			Student.forge().where({email:request.query.email}).fetch().then(function(data){
				reply(data);
			}).catch(function(err){
				reply({data:"somethink went wrong"})
			})
		}
	})
}