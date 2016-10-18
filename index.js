var app = require('express')();
var server	 = require('http').Server(app);
var io = require('socket.io')(server);
app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html')
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
	console.log("connection was made");
	socket.on('chat.message', function(message){
		console.log(message);
	});
});