// use lirc to control pvr
//Service listens to pvrcommandrequested
var exec = require('child_process').exec;
var config = require('./serviceconfig.json');

exports.initializeService = function(client) {
    client.subscribe('/pvrcommandrequested', function(message){
        console.log(config.commandpath+' SEND_ONCE \"'+config.remote+'\" \"'+message.command+'\"');
        exec(config.commandpath+' SEND_ONCE \"'+item.remote+'\" \"'+item.signal+'\"', function (error, stdout, stderr) { console.log(stdout) });
    });
};