function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        alert("Login successful!");
    } else {
        alert("Please enter both username and password.");
    }
}

function showCreateAccount() {
    document.querySelector('.login-container').classList.add('hidden');
    document.getElementById('create-account-container').classList.remove('hidden');
}

function showForgotPassword() {
    document.querySelector('.login-container').classList.add('hidden');
    document.getElementById('forgot-password-container').classList.remove('hidden');
}

function goBack() {
    document.querySelector('.login-container').classList.remove('hidden');
    document.getElementById('create-account-container').classList.add('hidden');
    document.getElementById('forgot-password-container').classList.add('hidden');
}

function createAccount(event) {
    event.preventDefault();
    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
        alert("Account created successfully!");
    }
}

function resetPassword(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    if (email) {
        alert("Password reset link sent to your email.");
    } else {
        alert("Please enter your email address.");
    }
}

