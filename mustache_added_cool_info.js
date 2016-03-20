var users = [
  {
    name: 'John',
    info: 'likes bowling',
    second: 'Second',
    avatar: 'http://www.iconarchive.com/download/i51046/hopstarter/halloween-avatars/Jason.ico',
    newfield: 'asdasdasdasd',
    webpages: ['www.google.com', 'www.lits.com.ua'],
     skills: ['JavaScript', 'CSS', 'HTML'],
 },
  
  {
    name: 'Pavel',
    info: 'plays footbal',
    second: 'Second',
    avatar: 'http://www.iconarchive.com/download/i51026/hopstarter/halloween-avatars/Alien.ico',
    newfield: 'asdasdasdasd',
     webpages: ['www.google.com', 'www.lits.com.ua'],
      skills: ['SQL', 'Mustache.js', 'Angular'],
    },
  {
    name: 'Igor',
    info: 'drinks a lot',
    second: 'Second',
    avatar: 'http://files.softicons.com/download/internet-cons/halloween-avatars-icons-by-deleket/ico/Zombie%202.ico',
    newfield: 'asdasdasdasd',
     webpages: ['www.wineroom.com', 'www.nemiroff.com'],
      skills: ['Drink vodka', 'drink beer', 'have no hangover'],
  }
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
var tpl = "{{#.}}<h1>{{name}}</h1> <br> <img src={{avatar}}> <p>{{info}}</p> <br> <p> {{second}}</p>  <h3>{{newfield}}</h3>  webpages : <ul>{{#webpages}} <li> {{.}} </li>{{/webpages}}</ul> skills:<ul>{{#skills}}<li>{{.}}</li>{{/skills}}</ul>{{/.}}";

var html = Mustache.to_html(tpl, userObject);
 userInfoNode.innerHTML = html;

  setUserInfoNodeHTML(html);
}



function setUserInfoNodeHTML(html) {
  userInfoNode.innerHTML = html;
}
drawUsers(users);
