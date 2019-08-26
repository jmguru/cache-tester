const express = require('express');
const app = express();
//const port = process.argv[1] | 3000; 
const port = 3030
const redis = require('redis');
const rport = 6379
const rhost = 'localhost'

function writeCache(res,skey,sval) {
    var client = redis.createClient(rport,rhost);
    client.on('connect', function() {
        console.log('Redis client connected');
    });
    client.on('error', function (err) {
        console.log('Something went wrong ' + err);
    });
    client.unref();
    client.set(skey, sval, redis.print); 
    res.send('SET: ' + skey + ' ' + sval);
    client.quit();
}

function getCache(res,skey) {
    var client = redis.createClient(rport,rhost);
    client.on('connect', function() {
        console.log('Redis client connected');
    });
    client.on('error', function (err) {
        console.log('Something went wrong ' + err);
    });
    client.unref();
    client.get(skey, function (err, value) {
        if (err) throw(err);
        res.send('GET: ' +skey + ' ' + value);
    }); 
    client.quit();
}

app.get('/set', function(req, res) {
  var skey = req.query.key;
  var sval = req.query.val;
  writeCache(res, skey, sval);
});

app.get('/get', function(req, res) {
  var skey = req.query.key;
  getCache(res,skey);
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);
