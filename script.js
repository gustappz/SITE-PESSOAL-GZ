// Este é um arquivo de JavaScript simples.
// Ele reage com ações que o usuário faz na tela.

// Função chamada quando alguém clica em "Enviar Mensagem" no formulário de contato.
function enviarMensagem(event) {
    // 1. O formulário HTML tenta atualizar a página por padrão quando você clica em enviar.
    // O comando '.preventDefault()' impede que isso aconteça para não estragar a experiência visual.
    event.preventDefault();

    // 2. Dispara um alerta (caixinha nativa do navegador) para o usuário.
    alert("Mensagem enviada com sucesso! Logo entrarei em contato.");

    // 3. Pega o "alvo" que acionou o evento (o nosso formulário)
    // E limpa todos os campos usando '.reset()'.
    event.target.reset();
}
