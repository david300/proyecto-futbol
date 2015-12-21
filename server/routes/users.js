//File: routes/users.js
module.exports = function(app, db) {

  var User = require('../models/user')(db);

  //GET - Return all users in the DB
  findAllUsers = function(req, res) {
  	User.find(function(err, users) {
  		if(!err) {
        console.log('GET /users')
  			res.send(users);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a User with specified ID
  findById = function(req, res) {
  	User.findById(req.params.id, function(err, user) {
  		if(!err) {
        console.log('GET /user/' + req.params.id);
  			res.send(user);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Insert a new User in the DB
  addUser = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var user = new User({
  		email:      req.body.email,
  		password:   req.body.password,
  		name:       req.body.name,
  		joinDate:   new Date()
  	});

  	user.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(user);
  };

  //PUT - Update a register already exists
  updateUser = function(req, res) {
  	User.findById(req.params.id, function(err, user) {

      user.email   = req.body.email;
  		user.name    = req.body.name;

  		user.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(user);
  		});
  	});
  }

  //DELETE - Delete a user with specified ID
  deleteUser = function(req, res) {
  	user.findById(req.params.id, function(err, user) {
  		user.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/users', findAllUsers);
  app.get('/user/byId/:id', findById);
  app.post('/user', addUser);
  app.put('/user/:id', updateUser);
  app.delete('/user/:id', deleteUser);

}
