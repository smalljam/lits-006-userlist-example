var r1 = document.getElementById('root1');
var r2 = document.getElementById('root2');
var button = document.getElementById('button');
var par1 = document.getElementById('par1');

button.addEventListener('click', function(e) {
  console.log('button clicked');
  e.stopPropagation();
});

r1.addEventListener('click', function(e) {
  this.style.height = '20px';
  this.style.overflow = 'hidden';
});

par1.addEventListener('click', function(e) {
  console.log('par1 clicked');
  e.stopPropagation();
  document.dispatchEvent(new MouseEvent('click'));
});

document.addEventListener('click', function(e) {
  console.log('document clicked', e.clientX);
});
