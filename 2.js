$(function(){
  loadData().promise().done(function(data) {
    drawUsers(data.users);
  });
});

function loadData() {
  return $.getJSON('data.json', function(data) {
    return data.users;
  });
}

var usersList = $('#usersListNode');
var userInfoNode = $('#userInfoNode');
var template = $('#userInfoTemplate').html();
var selectedUser;

function drawUsers(users) {
  users.forEach(drawOneUser);
}

function drawOneUser(user, index) {
  var item = $(document.createElement('li'));
  item.text(index + ':' + user.name);
  item.addClass('user');
  item.click(function() {
    clickOnUser(user);
  });
  usersList.append(item);
}

function clickOnUser(user) {
  if (selectedUser)
    selectedUser.removeClass('userActive');
  var selectedUser = $(this);
  selectedUser.addClass('userActive');
  setUserInfo(user);
}

function setUserInfo(user) {
  var newTemplate = template;
  var newContent = Mustache.to_html(template, user);
  userInfoNode.html(newContent);
}
