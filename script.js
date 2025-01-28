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
  numeros: {
    resumo: "Relata a jornada de Israel pelo deserto e a preparação para a entrada na Terra Prometida.",
    historias: [
      "Rebelião de Corá (Nm 16): Desafio à autoridade de Moisés.",
      "Balaão e a profecia (Nm 22-24): Deus fala por meio de um profeta pagão.",
      "Conquista de Canaã (Nm 26-36): Preparação para a entrada na Terra Prometida.",
    ],
    referencias: [
      "Profecia de Balaão (Nm 24:17): Anúncio do Messias.",
      "Conquista de Canaã: Tipologia da vitória de Cristo sobre o pecado.",
    ],
  },
  deuteronomio: {
    resumo: "Revisão das leis e dos eventos da jornada de Israel, com ênfase na obediência e na fidelidade.",
    historias: [
      "Revisão da Lei (Dt 1-4): Recapitulação das leis e dos eventos.",
      "Exortação à obediência (Dt 5-11): Chamado à fidelidade e à obediência.",
      "Leis e regulamentos (Dt 12-26): Detalhes sobre a vida na Terra Prometida.",
    ],
    referencias: [
      "Shemá (Dt 6:4-5): Declaração da unidade e da soberania de Deus.",
      "Lei da realeza (Dt 17:14-20): Tipologia do reino de Cristo.",
    ],
  },
  josue: {
resumo: "Relata a conquista de Canaã sob a liderança de Josué e a divisão da terra entre as tribos de Israel.",
historias: [
"Conquista de Jericó (Js 6): Primeira vitória em Canaã.",
"Derrota em Ai (Js 7): Consequência da desobediência.",
"Renovação da aliança (Js 8): Compromisso de Josué com Deus.",
"Divisão da terra (Js 13-22): Distribuição da terra entre as tribos.",
],
referencias: [
"Conquista de Canaã: Tipologia da vitória de Cristo sobre o pecado.",
"Renovação da aliança: Prefiguração da nova aliança em Cristo.",
],
},
juizes: {
resumo: "Relata o ciclo de pecado, juízo e libertação em Israel durante o período dos juízes.",
historias: [
"Otoniel (Jz 1:12-20; 3:7-11): Primeiro juiz de Israel.",
"Ehud (Jz 3:12-30): Libertação de Israel da opressão moabita.",
"Debora (Jz 4-5): Vitória sobre os cananeus e a profecia de Debora.",
"Sansão (Jz 13-16): Força e fraqueza de um herói de Israel.",
],
referencias: [
"Ciclo de pecado, juízo e libertação: Tipologia da história da salvação.",
"Profecia de Debora (Jz 5:31): Anúncio da vitória de Deus.",
],
},
rute: {
resumo: "Relata a história de Rute, uma mulher moabita que se torna parte da família de Davi e da linhagem de Jesus.",
historias: [
"Rute e Noemi (Rt 1-2): Amizade e lealdade entre duas mulheres.",
"Rute e Boaz (Rt 3-4): Casamento e descendência de Rute.",
],
referencias: [
"Rute na linhagem de Jesus (Mt 1:5; Lc 3:32): Exemplo de inclusão e graça.",
"Amizade e lealdade: Valores importantes na comunidade cristã.",
],
},
1samuel: {
resumo: "Relata a transição de Israel de uma teocracia para uma monarquia, com a ascensão de Saul e Davi ao trono.",
historias: [
"Samuel e Eli (1Sm 1-4): Chamado de Deus e a queda da família de Eli.",
"Saul e Davi (1Sm 8-31): Ascensão e queda de Saul, e a ascensão de Davi.",
],
referencias: [
"Davi e a linhagem de Jesus (Mt 1:6; Lc 3:31): Exemplo de liderança e obediência.",
"Amon e Tamar (2Sm 13): Exemplo de pecado e consequências.",
],
},
2samuel: {
resumo: "Relata o reinado de Davi em Israel, incluindo suas vitórias e derrotas.",
historias: [
"Davi e Bate-Seba (2Sm 11): Pecado e consequências de Davi.",
"Absalão e a rebelião (2Sm 15-18): Consequência da desobediência de Davi.",
"Davi e Mefibosete (2Sm 9): Exemplo de misericórdia e graça.",
],
referencias: [
"Davi e a linhagem de Jesus (Mt 1:6; Lc 3:31): Exemplo de liderança e obediência.",
"Amon e Tamar (2Sm 13): Exemplo de pecado e consequências.",
],
},
  1reis: {
resumo: "Relata a divisão do reino de Israel em duas partes, com a ascensão de Salomão e a queda de Jeroboão.",
historias: [
"Salomão e a sabedoria (1Rs 1-11): Ascensão de Salomão e a construção do Templo.",
"Jeroboão e a rebelião (1Rs 11-14): Consequência da desobediência de Jeroboão.",
"Elías e a profecia (1Rs 17-21): Profecia e milagres de Elías.",
],
referencias: [
"Salomão e a sabedoria (1Rs 3:1-15): Exemplo de sabedoria e liderança.",
"Elías e a profecia (1Rs 17-21): Exemplo de profecia e obediência.",
],
},
2reis: {
resumo: "Relata a história dos reis de Israel e Judá, incluindo a queda de Samaria e a deportação para a Assíria.",
historias: [
"Eliseu e a profecia (2Rs 1-13): Profecia e milagres de Eliseu.",
"Jezabel e a idolatria (2Rs 9:1-37): Consequência da idolatria de Jezabel.",
"Joás e a restauração (2Rs 11-12): Restauração do Templo e da adoração em Judá.",
],
referencias: [
"Eliseu e a profecia (2Rs 1-13): Exemplo de profecia e obediência.",
"Jezabel e a idolatria (2Rs 9:1-37): Exemplo de idolatria e consequências.",
],
},
1cronicas: {
resumo: "Relata a história dos reis de Judá, desde Davi até Zorobabel, com ênfase na genealogia e na adoração.",
historias: [
"Davi e a preparação para o Templo (1Cr 22-29): Preparação para a construção do Templo.",
"Salomão e a construção do Templo (2Cr 1-5): Construção do Templo e a dedicação.",
"Reis de Judá (2Cr 6-36): História dos reis de Judá, desde Salomão até Zorobabel.",
],
referencias: [
"Davi e a preparação para o Templo (1Cr 22-29): Exemplo de liderança e obediência.",
"Salomão e a construção do Templo (2Cr 1-5): Exemplo de sabedoria e liderança.",
],
},
2cronicas: {
resumo: "Relata a história dos reis de Judá, desde Salomão até Zorobabel, com ênfase na adoração e na restauração.",
historias: [
"Salomão e a construção do Templo (2Cr 1-5): Construção do Templo e a dedicação.",
"Reis de Judá (2Cr 6-36): História dos reis de Judá, desde Salomão até Zorobabel.",
"Restauração do Templo (2Cr 29-31): Restauração do Templo e da adoração em Judá.",
],
referencias: [
"Salomão e a construção do Templo (2Cr 1-5): Exemplo de sabedoria e liderança.",
"Restauração do Templo (2Cr 29-31): Exemplo de restauração e renovação.",
],
