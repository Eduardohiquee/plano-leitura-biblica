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
  // Adicione outros livros seguindo o modelo acima
  levitico: {
    resumo: "Descreve a vida ritual e a santidade do povo de Deus.",
    historias: [
      "Sistema de sacrifícios (Lv 1-7): Expiação e propiciação.",
      "Consagração dos sacerdotes (Lv 8-10): Arão e seus filhos.",
      "Pureza e impureza (Lv 11-15): Leis de pureza.",
    ],
    referencias: [
      "Sistema de sacrifícios: Prefiguração do sacrifício de Cristo.",
      "Sacerdócio: Tipologia do sacerdócio de Cristo.",
    ],
  },
  // ...
};

// Função para exibir resumo do livro
function exibirResumo(livro) {
  const conteudo = document.getElementById("conteudo-resumo");
  const dados = resumos[livro];
  if (!dados) return;
  conteudo.innerHTML = `
    <h2>${livro.toUpperCase()}</h2>
    <
