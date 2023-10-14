// this is a function to handle tech blog login

const techLoginHandler = async (event) => {
    event.preventDefault();
  
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
  
    if (username && password) {
      try {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/');
        } else {
          throw new Error('Failed to log in. Please check your credentials.');
        }
      } catch (error) {
        console.error(error);
        alert(error.message); 
      }
    } else {
      alert('Please provide both username and password.');
    }
  };
  
  const techLoginForm = document.querySelector('.tech-login-form');
  if (techLoginForm) {
    techLoginForm.addEventListener('submit', techLoginHandler);
  }
  