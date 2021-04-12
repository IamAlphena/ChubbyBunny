// var userNameInput = document.getElementById('userName');
// var passwordInput = document.getElementById('password');
// var submitBtn = document.getElementById('submitBtn');

// $("#submitBtn").on('click', function(event){
//     event.preventDefault();
//     console.log(userNameInput);
//     console.log(passwordInput);
// })

// if userNameInput is in db start session

//if not, throw error




 const loginFormHandler = async (event) => {
      event.preventDefault();
  
    const userName = document.querySelector('#username-login').value.trim();
     const password = document.querySelector('#password-login').value.trim();
  
     if (userName && password) {       const response = await fetch('/api/users/login', {
         method: 'POST',
         body: JSON.stringify({ userName, password }),
         headers: { 'Content-Type': 'application/json' },
       });
      console.log(response)
  
        if (response.ok) {
        document.location.reload();
       } else {
          console.log(await response.json());
          alert('Failed to log in');
        }
     }
   };
document
  .querySelector('#login')
  .addEventListener('click', loginFormHandler);