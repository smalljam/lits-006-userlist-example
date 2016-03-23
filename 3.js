var r1 = document.getElementById('root1');
var r2 = document.getElementById('root2');
var button = document.getElementById('button');
var par1 = document.getElementById('par1');

r1.addEventListener('click', function(e) {
  this.style.height = '20px';
  this.style.overflow = 'hidden';
});

par1.addEventListener('click', function(e) {

  console.log(e.target);

  if (e.target.tagName == 'BUTTON') {
    console.log(e.target.id, 'clicked');
  } else {
    this.style.fontSize = '36px';
    console.log('par1 clicked');
  }

  e.stopPropagation();
});

document.addEventListener('click', function(e) {
  console.log('document clicked', e.clientX);
});

var newButton = document.createElement('button');
newButton.id = 'button3';
par1.appendChild(newButton);
