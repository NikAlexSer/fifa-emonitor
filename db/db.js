const MongoClient = require('mongodb').MongoClient,
      format = require('util').format;

const uri = "mongodb+srv://povarok:EDCFVgb1@cluster0-watg3.mongodb.net/test?retryWrites=true"
var settings = {
    reconnectTries : Number.MAX_VALUE,
    autoReconnect : true,
    auto_reconnect: true
};


MongoClient.connect(uri, settings, function(err, client) {
    if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    } else {
        console.log('Connected...');
    }
});