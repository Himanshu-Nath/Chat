var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app)
var io = require('socket.io')(http);
var port_no = 5000;

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(__dirname + '/static'));

io.on('connection', function(socket){
  console.log('a user connected');
});

app.get('/',function(req,res){
	res.sendFile( __dirname + "/" + 'index.html');
});

app.listen(port_no, function(){
	console.log("Express Started on Port "+port_no);
});