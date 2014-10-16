  var express           = require('express'),
      bodyParser        = require('body-parser'),
      mongoose          = require('mongoose'),
      database          = require('./config/database.js'),
      port              = process.env.PORT || database.port,
      app               = express(),
      methodOverride    = require('method-override');

  mongoose.connect(database.url);

  app.use(express.static(__dirname + '/public'));

  // configure app to use bodyParser()
  // this will let us get the data from a POST
  app.use(bodyParser.urlencoded({ 'extended' : 'true' }));
  app.use(bodyParser.json());
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  app.use(methodOverride());

  // routes
  require('./app/routes.js')(app, express);

  // START THE SERVER
  // ============================================
  app.listen(port, function () {
      console.log('Magic happens on port ' + port);
  });
