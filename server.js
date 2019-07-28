const express = require('express');
const app = express();
//const port = process.argv[1] | 3000; 
const port = 3030
const redis = require('redis');
const rport = 6379
const rhost = 'redis-svr'

function writeCache(skey,sval) {
    var client = redis.createClient(rport,rhost);
    client.on('connect', function() {
        console.log('Redis client connected');
    });
    client.on('error', function (err) {
        console.log('Something went wrong ' + err);
    });
    client.set(skey, sval, redis.print); 
    client.quit();
}

app.get('/set', function(req, res) {
  var skey = req.param('key');
  var sval = req.param('val');
  writeCache(skey, sval);
  res.send(skey + ' ' + sval);
});

/* client.get('bgmode', function (error, result) {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log('GET result ->' + result);
}); */

app.listen(port);
console.log('Server started! At http://localhost:' + port);
