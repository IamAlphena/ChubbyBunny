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

  const userName = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
console.log("1: ", userName, password)
  if (userName && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("2:",response);

    if (response.ok) {
      document.location.redirect("homepage");
    } else {
      console.log("3:",response);
      alert("Failed to log in/login.js(test)");
    }
  }
};
document.querySelector("#login").addEventListener("click", loginFormHandler);
