var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('client'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users', function (req, res) {
  var users = [{"id":1,"name":"asd","info":"asdasdvatar=a","second":"sdf","newfield":"new"},{"id":2,"name":"Pavel","info":"plays footbal","second":"Second","avatar":"http://www.iconarchive.com/download/i51026/hopstarter/halloween-avatars/Alien.ico","newfield":"asdasdasdasd"},{"id":3,"name":"Igor","info":"drinks a lot","second":"Second","avatar":"http://files.softicons.com/download/internet-cons/halloween-avatars-icons-by-deleket/ico/Zombie%202.ico","newfield":"asdasdasdasd"},{"id":4},{"id":5,"name":"asd","info":"asdasd","second":"sdf","avatar":"a","newfield":"new"},{"id":6,"name":"asd","info":"asdasd","second":"sdf","avatar":"a","newfield":"new"}]
  var html = '';
  users.forEach(function(user){
    html += '<h1>'+user.name+'</h1>';
  });
  html += '<script src="secret.js"></script>';
  res.send(html);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
