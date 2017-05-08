var express = require('express');
var app = express();

const spawn = require('child_process').spawn;

setInterval(function(){
  spawn('git', ['pull']);
},30000)


app.use(express.static('dist'));
var server = app.listen(8081,'0.0.0.0' ,function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
