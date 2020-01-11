var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/fixit';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

gracefulShutdown = function (msg, callback) {
    mongoose.connection.close( function () {
        console.log('Mongoose disconnected through ' + msg);
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