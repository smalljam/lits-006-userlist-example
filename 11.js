var content = document.getElementById('content');
var router = {
  index: function(){
    content.innerHTML = 'INDEX PAGE';
  },
  users: function(){
    content.innerHTML = '';
    var users = getUsers();
    users.forEach(function(user){
      content.innerHTML += JSON.stringify(user);
    });

    function getUsers(){
      var request = new XMLHttpRequest();
      request.open('GET', 'http://heedio.me:8383', false);  // `false` makes the request synchronous
      request.send(null);
      if (request.status === 200) {
        usersArray = JSON.parse(request.responseText);
      }
      return usersArray;
    }
  },
  about: function(){
    console.log('about page')
  }
}
