/*
 * Fibonacci -- Server Javascript
 *
 * @author Matthew Balint
 * @date February 2015
 */

// If the user supplied a port number then listen on that, otherwise use
// the default of 80. 80 is currently the only usable listening port when
// running on nodejitsu.com.
var port = 80;
if (process.argv.length > 2) {
    port = parseInt(process.argv[2], 10);
}

// Set up a simple webserver to serve our static pages and image files.
// Once it is created, we can use it to listen for client events.
var static = require('node-static');
var http = require('http');
var file = new (static.Server)();
var app = http.createServer(function (req, res){
    file.serve(req, res);
}).listen(port);

// Listen to the default namespace.
var io = require('socket.io').listen(app);
io.on('connection', function(socket){
    console.log('/: ' + socket.id + ' connected.');

    socket.on('disconnect', function(){
        console.log('/: ' + socket.id + ' disconnected.');
    });
});

console.log('listening on *:' + port);