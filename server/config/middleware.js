var bodyParser = require('body-parser');

module.exports = function(app, express) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/../../client'));

  var user = express.Router();

  app.use('/api/user', user);

  app.get('/*', function(req, res) {
    res.redirect('/');
  })

  require('../user/userRoutes')(user);
}