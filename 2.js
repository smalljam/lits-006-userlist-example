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

var usersList = $('#usersListNode');
var userInfoNode = $('#userInfoNode');

function drawUsers(usersList) {
  usersList.forEach(drawOneUser);
}

var selectedUser;

function drawOneUser(user, index) {
  var item = $(document.createElement('li'));
  item.text(index + ':' + user.name);
  item.addClass('user');
  item.click(function() {
    if (selectedUser)
      selectedUser.removeClass('userActive');
    setUserInfo(user);
    var self = $(this);
    self.addClass('userActive');
    selectedUser = self;
  });
  usersList.append(item);
}

var template = userInfoNode.html();

setUserInfoNodeHTML('');

function setUserInfo(user) {
  var newContent = template;
  var fields = Object.keys(user);
  fields.forEach(function(fieldName) {
    newContent = newContent.replace('{{' + fieldName + '}}', user[fieldName]);
  });

  setUserInfoNodeHTML(newContent);
}

function setUserInfoNodeHTML(content) {
  userInfoNode.html(content);
}
