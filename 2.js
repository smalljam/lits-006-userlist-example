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

function drawUsers(users) {

  users.forEach(function(value, index) {
    console.log(value, index);
  });

  drawOneUser('123123123');
  drawOneUser('47456456456456');
  drawOneUser('another');
}

function drawOneUser(content) {
  var item = document.createElement('li');
  item.innerHTML = content;
  usersList.appendChild(item);
}
