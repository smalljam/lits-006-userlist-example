var users = document.querySelectorAll('h1');
[].forEach.call(users, function(user){
  user.addEventListener('click', function(){
    this.style.background = 'red';
  });
});
