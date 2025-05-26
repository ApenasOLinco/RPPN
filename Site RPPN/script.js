// Substitua com o seu próprio EmailJS depois
document.getElementById("denuncia-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Aqui entraria o envio usando EmailJS
    function enviarEmail(){
        let parms = {
            nome      : document.getElementByName("nome").value,
            descricao : document.getElementsByName("descricao").value,
        }
        emailjs.send("service_9t4rbwq", "template_58i4qmu", parms).then(alert("Denúncia enviada com sucesso! Obrigado por proteger a natureza."));
    }
    
    // Você pode resetar o formulário:
    this.reset();
});
