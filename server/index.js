// NOTE: This quick Node/Express server technique ('ember g server') will
// only work in development and testing. Ember CLI will not output
// any of the contents under /server to a production build.
//
// That said, if node.js and Express end up being our choices
// for a production setting, we can simply move the app onto its own environment.


/*jshint node:true*/

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

// Original code generated by: 'ember g server'
// module.exports = function(app) {
//   // All these highlighted lines basically set up the stage
//   // for including mock files, useful in testing.
//   var globSync   = require('glob').sync;
//   var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
//   var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);
//
//   // Log proxy requests
//   var morgan  = require('morgan');
//   app.use(morgan('dev'));
//
//   mocks.forEach(function(route) { route(app); });
//   proxies.forEach(function(route) { route(app); });
//
// };

// MODIFIED CODE:

const bodyParser = require('body-parser');

module.exports = function(app) {

  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/codes', function (req, res) {

    // Check for user authorization
    if (req.headers['authorization'] !== "Access granted to token 123456") {
      return res.status(401).send('Unauthorized');
    }

    return res.status(200).send({
      codes: [
        { id: 1, description: 'Obama Nuclear Missile Launching Code is: lovedronesandthensa' },
        { id: 2, description: 'Putin Nuclear Missile Launching Code is: invasioncoolashuntingshirtless' }
      ]
    });
  });


  // endpoint named /token through which clients can obtain a
  // token (in order to query the API)
  app.post('/token', function(req, res) {

    if (req.body.username == 'login' && req.body.password == 'ok') {
      res.send({ access_token: "123456" });
    } else {
      res.status(400).send({ error: "invalid_grant" });
    }

  });

};
