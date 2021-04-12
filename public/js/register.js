const signupFormHandler = async(event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-signup').value.trim();
    const userName = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if (userName && password && email) {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify({ email,userName, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        console.log(await response.json());
        alert('Failed to register');
      }
    }
  
  };

  document
.querySelector('#signup')
.addEventListener('click', signupFormHandler);