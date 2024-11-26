let users = JSON.parse(localStorage.getItem('users')) || [];

function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const createAccountForm = document.getElementById('createAccountForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    
  
    if (loginForm.style.display !== 'none') {
        loginForm.style.display = 'none';
        createAccountForm.style.display = 'block';
        forgotPasswordForm.style.display = 'none';
    } else {
        createAccountForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}

function toggleForgotPassword() {
    const loginForm = document.getElementById('loginForm');
    const createAccountForm = document.getElementById('createAccountForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    
    
    if (forgotPasswordForm.style.display !== 'none') {
        forgotPasswordForm.style.display = 'none';
        loginForm.style.display = 'block';
    } else {
        forgotPasswordForm.style.display = 'block';
        loginForm.style.display = 'none';
    }
}

function createAccount() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    
    if (users.some(user => user.username === newUsername)) {
        alert('Usuário já existe! Tente outro nome.');
        return;
    }

  
    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Conta criada com sucesso!');
    toggleForms();
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

   
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        location.href = '././Lista/Lista.html'
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

function resetPassword() {
    const resetUsername = document.getElementById('resetUsername').value;
    
    
    const user = users.find(user => user.username === resetUsername);

    if (user) {
        const newPassword = prompt('Digite sua nova senha:');
        user.password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Senha redefinida com sucesso!');
        toggleForgotPassword();
    } else {
        alert('Usuário não encontrado!');
    }
}
