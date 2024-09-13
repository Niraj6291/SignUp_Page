function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = ''; // Clear previous errors

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!';
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long!';
        return false;
    }

    alert('Sign Up Successful!');
    return true;
}
