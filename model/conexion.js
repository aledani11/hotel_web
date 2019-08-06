const MongoClient = require('mongodb').MongoClient;


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'hotel';

const client = new MongoClient(url);

const conn ={};

conn.client = client;
conn.dbName = dbName;

module.exports = conn;


