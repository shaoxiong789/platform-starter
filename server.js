var express = require('express');
var app = express();

const spawn = require('child_process').spawn;

setInterval(function(){
  var git = spawn('git', ['pull']);
  git.stdout.on('data', (data) => {
    console.log(data.indexOf('Already up-to-date'))
    console.log(`stdout: ${data}`);
  });
},30000)


app.use(express.static('dist'));
var server = app.listen(8081,'127.0.0.1' ,function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
