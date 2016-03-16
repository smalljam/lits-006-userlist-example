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

var selectedUser;

function drawOneUser(userObject) {
  var item = document.createElement('li');
  item.innerHTML = userObject.name;
  item.className = 'user';
  item.onclick = function() {
    if (selectedUser) {
      selectedUser.className = 'user';
    }

    document.getElementById('userInfoNode').innerHTML = userObject.info;
    this.className = 'userActive';
    selectedUser = this;
  };

  usersList.appendChild(item);
}
