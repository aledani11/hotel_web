const assert = require('assert');
const conn = require('./conexion.js');



conn.client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = conn.client.db(conn.dbName);

  //insertDocuments(db, function() {
  findDocuments(db, function () {
    conn.client.close();
  });
  // });
});




const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    { a: 1 }, { a: 2 }, { a: 3 }
  ], function (err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}



const express = require('express')
const app = express()
const port = 3000



const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('habitaciones');
  // Find some documents
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    
    app.get('/habitaciones', function (req, res) {
      res.send(docs)
    })
    
    callback(docs);
  });
}




app.listen(port, () => console.log(`Example app listening on port ${port}!`))