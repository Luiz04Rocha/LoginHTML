
const registerForm = document.getElementById('register-form');

if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;

        const usuario = { email, password };
        localStorage.setItem(email, JSON.stringify(usuario));

        alert("Cadastro realizado com sucesso!");
        window.location.href = "index.html"; 
    });
}

const loginForm = document.querySelector('.login-card');


if (loginForm && !registerForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const usuarioSalvo = localStorage.getItem(email);

        if (usuarioSalvo) {
            const dadosUsuario = JSON.parse(usuarioSalvo); 

            if (dadosUsuario.password === password) {
                alert("Sucesso! Bem-vindo de volta.");
            } else {
                alert("Senha incorreta!");
            }
        } else {
            alert("Usuário não encontrado. Cadastre-se primeiro!");
        }
    });
}