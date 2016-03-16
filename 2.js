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

function drawUsers() {
  // usersList.innerHTML = '<li>123123123</li><li>47456456456456</li><li>another</li>';

  var item = document.createElement('li');
  item.innerHTML = '123123123';
  usersList.appendChild(item);

  var item2 = document.createElement('li');
  item2.innerHTML = '47456456456456';
  usersList.appendChild(item2);

  var another = document.createElement('li');
  another.innerHTML = 'another';
  usersList.appendChild(another);
}
