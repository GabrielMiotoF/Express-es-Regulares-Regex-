document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nomeInput = document.getElementById("nome");
        const emailInput = document.getElementById("email");
        const telefoneInput = document.getElementById("telefone");

        const nomeValor = nomeInput.value.trim();
        const emailValor = emailInput.value.trim();
        const telefoneValor = telefoneInput.value.trim();

        const nomeRegex = /^[A-Za-zÀ-ú\s]{1,100}$/;
        if (!nomeRegex.test(nomeValor)) {
            alert("Por favor, insira um nome válido (máximo 100 caracteres e sem números).");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValor)) {
            alert("Por favor, insira um endereço de email válido.");
            return;
        }

        const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        if (!telefoneRegex.test(telefoneValor)) {
            alert("Por favor, insira um número de telefone válido no formato (99) 99999-9999.");
            return;
        }

        alert("Formulário enviado");
        form.reset();
    });
});
