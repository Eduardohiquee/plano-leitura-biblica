// Dados dos resumos de cada livro
const resumos = {
    genesis: {
        resumo: "Conta a origem do mundo, da humanidade, do pecado e do povo de Israel. Enfatiza o plano redentor de Deus, começando com a promessa feita a Abraão.",
        historias: [
            "Criação (Gn 1-2): Deus cria o mundo e o ser humano.",
            "Queda do homem (Gn 3): Adão e Eva desobedecem a Deus.",
            "Dilúvio e Noé (Gn 6-9): Deus preserva Noé e sua família.",
            "Torre de Babel (Gn 11): A humanidade tenta alcançar Deus por conta própria.",
            "Abraão (Gn 12-25): A aliança de Deus e a promessa de uma grande descendência.",
            "Isaque, Jacó e José (Gn 26-50): Histórias dos patriarcas e a preservação do povo de Deus no Egito.",
        ],
        referencias: [
            "Semente da mulher (Gn 3:15): Primeiro anúncio de um Salvador.",
            "Sacrifício de Isaque (Gn 22): Prefiguração do sacrifício de Jesus.",
        ],
    },
    // Adicione outros livros seguindo o modelo acima
    exodo: {
        resumo: "Registra a libertação de Israel da escravidão no Egito e o estabelecimento da aliança no Sinai.",
        historias: [
            "Libertação do Egito (Êx 1-15): As pragas e a travessia do Mar Vermelho.",
            "Dez Mandamentos (Êx 20): Deus entrega a Lei a Moisés.",
            "Construção do Tabernáculo (Êx 25-40): Morada de Deus no meio do povo.",
        ],
        referencias: [
            "Cordeiro Pascal (Êx 12): Representa Cristo como o Cordeiro de Deus.",
            "Tabernáculo: Simboliza a presença de Deus habitando entre os homens.",
        ],
    },
};

// Função para exibir resumo do livro
function exibirResumo(livro) {
    const conteudo = document.getElementById("conteudo-resumo");
    const dados = resumos[livro];

    if (!dados) return;

    conteudo.innerHTML = `
        <h2>${livro.toUpperCase()}</h2>
        <p><strong>Resumo:</strong> ${dados.resumo}</p>
        <p><strong>Principais Histórias:</strong></p>
        <ul>${dados.historias.map((h) => `<li>${h}</li>`).join("")}</ul>
        <p><strong>Referências a Jesus:</strong></p>
        <ul>${dados.referencias.map((r) => `<li>${r}</li>`).join("")}</ul>
        <div class="observacoes">
            <h2>Adicione sua Observação</h2>
            <textarea id="observacao-texto" placeholder="Escreva sua observação..."></textarea>
            <button onclick="adicionarObservacao('${livro}')">Adicionar</button>
            <div id="observacoes-${livro}"></div>
        </div>
    `;
}

// Função para adicionar observação
function adicionarObservacao(livro) {
    const texto = document.getElementById("observacao-texto").value;
    const observacoesDiv = document.getElementById(`observacoes-${livro}`);

    if (!texto) return;

    const observacao = document.createElement("div");
    observacao.className = "story";
    observacao.textContent = texto;

    observacoesDiv.appendChild(observacao);
    document.getElementById("observacao-texto").value = ""; // Limpa o campo
}
