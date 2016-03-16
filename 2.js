var users = [
  {
    name: 'John',
    info: 'likes bowling',
    avatar: 'http://www.iconarchive.com/download/i51046/hopstarter/halloween-avatars/Jason.ico',
  },
  {
    name: 'Pavel',
    info: 'plays footbal',
    avatar: 'http://www.iconarchive.com/download/i51026/hopstarter/halloween-avatars/Alien.ico',
  },
  {
    name: 'Igor',
    info: 'drinks a lot',
    avatar: 'http://files.softicons.com/download/internet-cons/halloween-avatars-icons-by-deleket/ico/Zombie%202.ico',
  },
];

var usersList = document.getElementById('usersListNode');

function drawUsers(usersList) {
  usersList.forEach(drawOneUser);
}

var selectedUser;

function drawOneUser(userObject, index) {
  var item = document.createElement('li');
  item.innerHTML = index + ':' + userObject.name;
  item.className = 'user';
  item.onclick = function() {
    if (selectedUser) {
      selectedUser.className = 'user';
    }

    setUserInfo(userObject);
    this.className = 'userActive';
    selectedUser = this;
  };

  usersList.appendChild(item);
}

var template = document.getElementById('userInfoNode').innerHTML;

document.getElementById('userInfoNode').innerHTML = '';

function setUserInfo(userObject) {
  var newContent = template.replace('{{name}}', userObject.name);

  newContent = newContent.replace('{{avatar}}', userObject.avatar);

  newContent = newContent.replace('{{info}}', userObject.info);

  document.getElementById('userInfoNode').innerHTML = newContent;
}
