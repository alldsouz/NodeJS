var events = require('events');

var myemitter = new events.EventEmitter();

myemitter.on('someEvent', function(msg){
    console.log(msg);
});

myemitter.emit('someEvent', 'the event was emitted');