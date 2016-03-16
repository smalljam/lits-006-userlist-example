var users = [
  {
    name: 'John',
    info: 'likes bowling',
  },
  {
    name: 'Pavel',
    info: 'plays footbal',
  },
  {
    name: 'Igor',
    info: 'drinks a lot',
  },
];

var usersList = document.getElementById('usersListNode');

function drawUsers(usersList) {
  usersList.forEach(function(arrayItem, index) {
    drawOneUser(arrayItem);
  });
}

function drawOneUser(userObject) {
  var item = document.createElement('li');
  item.innerHTML = userObject.name;
  item.className = 'user';
  item.onclick = function() {
    document.getElementById('userInfoNode').innerHTML = userObject.info;
  };

  usersList.appendChild(item);
}
