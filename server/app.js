var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

//Colores para la consola
var clc = require('cli-color');
var error = clc.red.bold;
var warning = clc.xterm(220);
var info = clc.xterm(40);
var log = clc.xterm(239);

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


// Example Route
var router = express.Router();

router.get('/', function(req, res) {
  res.send("Hello world!");
});

app.use(router);

db = mongoose.createConnection("mongodb://localhost:27017/fulboProject", { server: { poolSize: 10 } });

db.on('error', console.error.bind(console, 'DB error:'));

db.once('open', function(){
  // Iniciamos el servidor API REST Full
  app.listen(3000, function() {
    console.log(" %s: %s", info("Servidor corriendo en"), warning("http://localhost:3000"));
  });

  // Import Models and controllers
  var users = require('./routes/users')(app, db);
});
