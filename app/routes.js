  var Tracks  = require('./models/tracks');

  // getAll 		 --> GET    --> /api/tracks
  // getByStat 	 --> GET    --> /api/tracks/state/:state_attr
  // getById     --> GET    --> /api/tracks/:track_id
  // store       --> POST   --> /api/tracks
  // update      --> PUT    --> /api/tracks/:track_id
  // delete      --> DELETE --> /api/tracks/:track_id
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

              Tracks.find(function (err, tracks) {
                  if (err) res.send(err);

                  res.json(tracks);
              });
          });

      // on routes that end in /tracks/:track_id
      router.route('/tracks/:track_id')

          .get(function (req, res) {
              Tracks.find({
                  _id : req.params.track_id
              }, function (err, track) {
                  if (err) res.send(err);

                 res.json(track);
              });
          })

          .delete(function (req, res) {
              Tracks.remove({
                  _id : req.params.track_id
              }, function (err) {
                  if (err) res.send(err);

                  Tracks.find(function (err, todos) {
                      if (err) res.send(err);

                      res.json(todos);
                  });
              });
          })

          .put(function (req, res) {
              Tracks.update({
                  _id : req.params.track_id
              },
              req.body,
              {
                multi: false
              },
              function (err) {
                  if (err) res.send(err)

                  Tracks.find(function (err, tracks) {
                    if (err) res.send(err)

                    res.json(tracks);
                  });
              });
          });

      // on routes that end in /tracks/state/:state_attr
      router.route('/tracks/state/:state_attr')

          .get(function (req, res) {
              Tracks.find({
                  state : req.params.state_attr
              }, function (err, tracks) {
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
