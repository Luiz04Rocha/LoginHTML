
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


const resetForm = document.getElementById('reset-form');

if (resetForm) {
    resetForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('reset-email').value;
        const newPassword = document.getElementById('new-password').value;

        const usuarioExistente = localStorage.getItem(email);

        if (usuarioExistente) {
            const usuarioAtualizado = { 
                email: email, 
                password: newPassword 
            };
            
            localStorage.setItem(email, JSON.stringify(usuarioAtualizado));

            alert("Senha alterada com sucesso! Tente fazer login agora.");
            window.location.href = "index.html";
        } else {
            alert("E-mail não encontrado no nosso sistema!");
        }
    });
}

const loginForm = document.querySelector('.login-card');

if (loginForm && !document.getElementById('register-form') && !document.getElementById('reset-form')) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const usuarioSalvo = localStorage.getItem(email);

        if (usuarioSalvo) {
            const dadosUsuario = JSON.parse(usuarioSalvo);

            if (dadosUsuario.password === password) {
                window.location.href = "home.html"; 
            } else {
                alert("Senha incorreta!");
            }
        } else {
            
            if (email === "Admin@gmail.com" && password === "1234") {
                window.location.href = "home.html";
            } else {
                alert("Usuário não encontrado!");
            }
        }
    });
}
function logout() {
    window.location.href = "index.html";
}