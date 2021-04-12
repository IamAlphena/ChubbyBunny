var userNameInput = document.getElementById('userName');
var passwordInput = document.getElementById('password');
var submitBtn = document.getElementById('submitBtn');

$("#submitBtn").on('click', function(event){
    event.preventDefault();
    console.log(userNameInput);
    console.log(passwordInput);
})

// if userNameInput is in db start session

//if not, throw error