const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value;
  console.log("email:", value);
  const userName = document.querySelector("#username-signup").value;
  const password = document.querySelector("#password-signup").value;
  if (userName && password && email) {
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({email, userName, password}),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      console.log("sign up:", response);
      alert("Failed to register");
    }
  }
};

document.querySelector("#signup").addEventListener("click", signupFormHandler);
