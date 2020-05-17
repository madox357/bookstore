/*To require mongoose in this file*/
var mongoose = require('mongoose');

/*To create connection to loc8r/fixit*/
var dbURI = 'mongodb://localhost/fixit';

mongoose.connect(dbURI);

/*Monitoring successful connection through Mongoose*/
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

/*Checking for connection error*/
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error ' + err);
});

/*Checking for disconnection event*/
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

/*Closing Mongoose connection when app stops*/
gracefulShutdown = function (msg, callback) { /*function accept message and callback function*/
    mongoose.connection.close( function () { /*close mongoose connection*/
        console.log('Mongoose disconnected through ' + msg); /*Message output to console*/
        callback();
    })
};

// Application terminated locally
process.on('SIGINT', function() {
    gracefulShutdown('local app termination', function () {
        process.exit(0);
    })
});

// Application terminated at Heroku
process.on('SIGTERM', function() { 
    gracefulShutdown('heroku app shutdown', function () {
        process.exit(0);
    });
});


require('./fix');