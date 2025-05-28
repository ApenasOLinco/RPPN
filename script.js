// Substitua com o seu próprio EmailJS depois
document.getElementById("denuncia-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Aqui entraria o envio usando EmailJS
    let parms = {
        nome      : document.getElementById("nome").value || "Anônimo",
        data      : document.getElementById("data").value,
        hora      : document.getElementById("hora").value,
        local     : document.getElementById("local").value,
        descricao : document.getElementById("descricao").value
    }

    emailjs.send("service_k0j6mza", "template_uyxwwyh", parms).then(alert("Denúncia enviada com sucesso! Obrigado por proteger a natureza."));
    
    // Você pode resetar o formulário:
    this.reset();
});
