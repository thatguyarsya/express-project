const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb+srv://Bob:bobby@cluster0-rsb5p.mongodb.net/Tododb?retryWrites=true&w=majority"
const dbName = "Todos"

let mongodb;

function connect (callback) {
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function (err, client) {
            assert.equal(null, err);
        console.log ("connected");

        mongodb = client;
        callback();
    }
  );
}

function get() {
    return db.db(dbName);
}

function close(){
    db.close();
}

module.exports = {
    connect, get, close
}