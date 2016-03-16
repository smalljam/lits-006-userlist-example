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
    drawOneUser(arrayItem.name);
  });
}

function drawOneUser(content) {
  var item = document.createElement('li');
  item.innerHTML = content;

  // item.className = 'user';
  // item.style.cssText = 'border: 1px solid #000;margin: 10px;padding: 20px;';
  item.style.border = '1px solid #000';
  item.style.margin = '10px';
  item.style.padding = '20px';
  usersList.appendChild(item);
}
