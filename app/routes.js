  var Tracks  = require('./models/tracks');

  module.exports = function (app, express) {

      var router  = express.Router();

      // middleware to use for all requests
      router.use(function (req, res, next) {
          console.log('Something is happening');
          next();
      });

      // more routes for our API will happen here

      // on routes that end in /tracks
      // --------------------------------------------
      router.route('/tracks')

          // create a track (accessed at POST http://localhost:3000/api/tracks)
          .post(function (req, res) {

              console.log(req.body);

              // crate a new instance of the Tracks model
              Tracks.create(req.body, function(err) {
                  if (err) res.send(err);

                  Tracks.find(function (err, todos) {
                      if(err) res.send(err);

                      res.json(todos);
                  });
              });

          })

          // get all the tracks (accessed at GET http://localhost:3000/api/tracks)
          .get(function (req, res) {
              Track.find(function (err, tracks) {
                  if (err) res.send(err);
                  res.json(tracks);
              });
          });

      // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
      router.get('*', function (req, res) {
          res.sendfile('./public/index.html');
          // res.json({ message: 'hooray! welcome to our application!'});
      });

      // REGISTER OUR ROUTES ------------------------
      // all our our routes will be prefixed wit /api
      app.use('/api', router);

  };
