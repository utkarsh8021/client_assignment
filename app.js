var express = require('express');
var app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


  // Load Public folder
  app.use( express.static( "public" ) );

  // index page 
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });

  // about page 
  app.get('/about', function(req, res) {
    res.render('about.ejs');
  });

  // projects page 
  app.get('/projects', function(req, res) {
    res.render('project.ejs');
  });

  // services page 
  app.get('/services', function(req, res) {
    res.render('services.ejs');
  });

  // contact page 
  app.get('/contact', function(req, res) {
    res.render('contact.ejs');
  });



  // Start Server
  app.listen(process.env.PORT || 3000, 
    () => console.log("Server is running..."));


