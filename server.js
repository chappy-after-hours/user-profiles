var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js')
var profile = require('./controllers/profileCtrl.js');
var user = require('./controllers/userCtrl.js');
var port = process.argv[2] || 8000;

app.use(bodyParser.json());
app.use(express.static('public'))

var corsOptions = {
  origin: 'http://localhost:8000'
}
app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret
}))

app.post('/api/login', user.login);
app.get('/api/profiles', profile.getFriends)



app.listen(port, function(){
  console.log("Listening on port ", port)
})
