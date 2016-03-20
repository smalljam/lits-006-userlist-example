var users = [
  {
    name: 'John',
    info: 'likes bowling',
    second: 'Second',
    avatar: 'http://www.iconarchive.com/download/i51046/hopstarter/halloween-avatars/Jason.ico',
    newfield: 'asdasdasdasd',
  },
  {
    name: 'Pavel',
    info: 'plays footbal',
    second: 'Second',
    avatar: 'http://www.iconarchive.com/download/i51026/hopstarter/halloween-avatars/Alien.ico',
    newfield: 'asdasdasdasd',
  },
  {
    name: 'Igor',
    info: 'drinks a lot',
    second: 'Second',
    avatar: 'http://files.softicons.com/download/internet-cons/halloween-avatars-icons-by-deleket/ico/Zombie%202.ico',
    newfield: 'asdasdasdasd',
  },
];

var usersList = document.getElementById('usersListNode');
var userInfoNode = document.getElementById('userInfoNode');

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
         this.classList.add('additionalUser');
      }
  
    setUserInfo(userObject);
   
      selectedUser = this;
  };

  usersList.appendChild(item);
}

var template = userInfoNode.innerHTML;

setUserInfoNodeHTML('');

function setUserInfo(userObject) {
  var newContent = template;

  var fields = Object.keys(userObject);
  fields.forEach(function(fieldName) {
    newContent = newContent.replace('{{' + fieldName + '}}', userObject[fieldName]);
  });

  setUserInfoNodeHTML(newContent);
}

function setUserInfoNodeHTML(content) {
  userInfoNode.innerHTML = content;
}
