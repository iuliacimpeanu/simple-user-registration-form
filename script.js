const submitButton = document.querySelector('.submit-button');

const validateForm = (e) => {
    e.preventDefault();

    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    const username = document.querySelector('.username').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;

    // Validate username
    if (!username) {
        document.getElementById('usernameError').textContent = 'Username is required!';
        return;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format!';
        return;
    }

    // Validate password
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required!';
        return;
    }

    alert('Registration was successful!');
    
}

submitButton.addEventListener('click', validateForm)