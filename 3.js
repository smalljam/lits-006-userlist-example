var r1 = document.getElementById('root1');
var r2 = document.getElementById('root2');
var button = document.getElementById('button');

button.addEventListener('click', function(e) {
  console.log('button clicked');
});

r1.addEventListener('click', function(e) {
  console.log('r1 clicked');
});
