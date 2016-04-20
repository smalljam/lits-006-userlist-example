var content = document.getElementById('content');
var router = {
  index: function(){
    content.innerHTML = 'INDEX PAGE';
  },
  users: function(){
    content.innerHTML = '';
    var users = getUsers();
    var template = getTemplate();
    users.forEach(function(user){
      content.innerHTML += renderUser(user);
    });

    function renderUser(userData) {
      var newContent = template;
      var fields = Object.keys(userData);
      fields.forEach(function(fieldName) {
        newContent = newContent.replace('{{' + fieldName + '}}', userData[fieldName]);
      });
      return newContent;
    }

    function getUsers(){
      var usersString = makeSyncRequest('http://heedio.me:8383');
      var usersArray = JSON.parse(usersString);
      return usersArray;
    }

    function getTemplate(){
      return makeSyncRequest('http://heedio.me:8383/template');
    }

    function makeSyncRequest(url){
      var result;
      var request = new XMLHttpRequest();
      request.open('GET', url, false);  // `false` makes the request synchronous
      request.send(null);
      if (request.status === 200) {
        result = request.responseText
      }
      return result;
    }
  },
  about: function(){
    console.log('about page')
  }
}
