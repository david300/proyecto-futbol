var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactList', ['contactList']);
var bodyParser = require('body-parser');



app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var routes = require('./routes/contactList')(app, db);

//app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Página no encontrada');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


app.listen(3000);

console.log("Server running 3000 port");
