
function enviarMensagem(event) {

    event.preventDefault();


    alert("Mensagem enviada com sucesso! Logo entrarei em contato.");
    console.log("Alguém clicou no botão de enviar formulário.");

    event.target.reset();
}

console.log("Arquivo de JavaScript carregado com sucesso!");
console.log("Site carregado");
