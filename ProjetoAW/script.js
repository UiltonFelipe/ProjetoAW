/* =====================================================
   1. DADOS (perguntas, categorias e itens da loja)
   Para adicionar perguntas, basta copiar um objeto
   e mudar os textos. "correta" é a posição (0 a 3)
   da resposta certa dentro de "opcoes".
   ===================================================== */

const categorias = [
  {
    id: "copa",
    nome: "Copa do Mundo",
    icone: "🏆",
    fases: [
      {
        minAcertos: 3,
        perguntas: [
          {
            texto: "Qual seleção tem mais títulos da Copa do Mundo?",
            opcoes: ["Argentina", "Brasil", "Alemanha", "Itália"],
            correta: 1,
            explicacao: "O Brasil tem 5 títulos."
          },
          {
            texto: "Em que ano aconteceu a primeira Copa do Mundo?",
            opcoes: ["1922", "1930", "1938", "1950"],
            correta: 1,
            explicacao: "A primeira Copa foi em 1930."
          },
          {
            texto: "Qual país sediou a Copa do Mundo de 2014?",
            opcoes: ["Alemanha", "Brasil", "África do Sul", "Rússia"],
            correta: 1,
            explicacao: "A Copa de 2014 foi no Brasil."
          },
          {
            texto: "Quem foi a campeã da Copa do Mundo de 2022?",
            opcoes: ["França", "Argentina", "Croácia", "Brasil"],
            correta: 1,
            explicacao: "A Argentina venceu a França nos pênaltis."
          },
          {
            texto: "Quem venceu a Copa do Mundo de 2014?",
            opcoes: ["Argentina", "Holanda", "Alemanha", "Brasil"],
            correta: 2,
            explicacao: "A Alemanha venceu a Argentina na final."
          }
        ]
      },
      {
        minAcertos: 3,
        perguntas: [
          {
            texto: "Quem é o maior artilheiro da história das Copas?",
            opcoes: ["Pelé", "Ronaldo", "Miroslav Klose", "Lionel Messi"],
            correta: 2,
            explicacao: "Klose marcou 16 gols em Copas."
          },
          {
            texto: "Qual país sediou a Copa de 2002 junto com o Japão?",
            opcoes: ["China", "Coreia do Sul", "Tailândia", "Austrália"],
            correta: 1,
            explicacao: "A Copa de 2002 foi no Japão e na Coreia do Sul."
          },
          {
            texto: "Em que ano o Brasil conquistou o pentacampeonato?",
            opcoes: ["1994", "1998", "2002", "2006"],
            correta: 2,
            explicacao: "O penta veio em 2002."
          },
          {
            texto: "Quem foi a campeã da Copa do Mundo de 2010?",
            opcoes: ["Holanda", "Espanha", "Alemanha", "Uruguai"],
            correta: 1,
            explicacao: "A Espanha venceu a Holanda na final."
          },
          {
            texto: "Qual país sediou e venceu a primeira Copa, em 1930?",
            opcoes: ["Brasil", "Argentina", "Itália", "Uruguai"],
            correta: 3,
            explicacao: "O Uruguai foi sede e campeão em 1930."
          }
        ]
      }
    ]
  },
  {
    id: "regras",
    nome: "Regras do Futebol",
    icone: "📋",
    fases: [
      {
        minAcertos: 3,
        perguntas: [
          {
            texto: "Qual jogador pode usar as mãos dentro da própria área?",
            opcoes: ["Atacante", "Volante", "Goleiro", "Zagueiro"],
            correta: 2,
            explicacao: "O goleiro pode usar as mãos na própria área."
          },
          {
            texto: "O que significa receber um cartão amarelo?",
            opcoes: ["Advertência", "Expulsão", "Gol", "Substituição obrigatória"],
            correta: 0,
            explicacao: "O cartão amarelo é uma advertência."
          },
          {
            texto: "Quantos jogadores cada time tem em campo?",
            opcoes: ["9", "10", "11", "12"],
            correta: 2,
            explicacao: "São 11 jogadores por time, contando o goleiro."
          },
          {
            texto: "Quanto tempo dura uma partida (sem acréscimos)?",
            opcoes: ["60 minutos", "80 minutos", "90 minutos", "120 minutos"],
            correta: 2,
            explicacao: "Dois tempos de 45 minutos."
          },
          {
            texto: "O que acontece com quem leva dois cartões amarelos no mesmo jogo?",
            opcoes: ["Nada", "É expulso", "Paga multa", "Sai e volta depois"],
            correta: 1,
            explicacao: "O segundo amarelo resulta em cartão vermelho."
          }
        ]
      }
    ]
  },
  {
    id: "jogadores",
    nome: "Jogadores Lendários",
    icone: "⭐",
    fases: [
      {
        minAcertos: 3,
        perguntas: [
          {
            texto: 'Qual jogador é conhecido como "Rei do Futebol"?',
            opcoes: ["Pelé", "Ronaldo", "Neymar", "Romário"],
            correta: 0,
            explicacao: "Pelé é conhecido como o Rei do Futebol."
          },
          {
            texto: 'Quem é conhecido como "Fenômeno"?',
            opcoes: ["Ronaldo", "Rivaldo", "Kaká", "Adriano"],
            correta: 0,
            explicacao: "Ronaldo ganhou o apelido de Fenômeno."
          },
          {
            texto: 'Quem marcou o gol da "Mão de Deus" em 1986?',
            opcoes: ["Zico", "Maradona", "Platini", "Cruyff"],
            correta: 1,
            explicacao: "Maradona, contra a Inglaterra."
          },
          {
            texto: "Em qual clube Neymar começou a carreira profissional?",
            opcoes: ["Santos", "Barcelona", "Flamengo", "São Paulo"],
            correta: 0,
            explicacao: "Neymar surgiu no Santos."
          },
          {
            texto: "Cristiano Ronaldo nasceu em qual país?",
            opcoes: ["Espanha", "Brasil", "Portugal", "Itália"],
            correta: 2,
            explicacao: "Ele nasceu em Portugal, na ilha da Madeira."
          }
        ]
      }
    ]
  }
];

const itensLoja = [
  { id: "dica", nome: "💡 Dica", descricao: "Remove 2 opções erradas de uma pergunta.", preco: 30 },
  { id: "pular", nome: "⏭️ Pular", descricao: "Pula uma pergunta sem perder acerto.", preco: 50 },
  { id: "dobro", nome: "✨ Dobro", descricao: "Dobra os pontos dos acertos da fase atual.", preco: 60 }
];

const PONTOS_POR_ACERTO = 10;
const BONUS_FASE_CONCLUIDA = 20;

/* =====================================================
   2. ESTADO DO JOGO
   ===================================================== */

let jogador = null; // dados salvos do jogador

// estado da partida em andamento
let categoriaAtual = null;
let numeroFaseAtual = 0;
let perguntasDaFase = [];
let indice = 0;
let acertos = 0;
let pontosGanhosNaFase = 0;
let respondida = false;
let dobroAtivo = false;

/* =====================================================
   3. SALVAR E CARREGAR (localStorage)
   Os jogadores ficam guardados pelo nome.
   ===================================================== */

function lerJogadores() {
  return JSON.parse(localStorage.getItem("futquiz_jogadores")) || {};
}

function salvar() {
  const todos = lerJogadores();
  todos[jogador.nome] = jogador;
  localStorage.setItem("futquiz_jogadores", JSON.stringify(todos));
}

function carregarOuCriarJogador(nome) {
  const todos = lerJogadores();
  if (todos[nome]) {
    return todos[nome];
  }
  // jogador novo: só a fase 1 de cada categoria está liberada
  const progresso = {};
  categorias.forEach(function (cat) {
    progresso[cat.id] = 1;
  });
  return {
    nome: nome,
    pontos: 0,        // pontos para gastar na loja
    pontosTotais: 0,  // pontos do ranking (nunca diminuem)
    inventario: { dica: 0, pular: 0, dobro: 0 },
    progresso: progresso
  };
}

/* =====================================================
   4. NAVEGAÇÃO ENTRE TELAS
   ===================================================== */

function mostrarTela(id) {
  document.querySelectorAll(".tela").forEach(function (tela) {
    tela.classList.add("escondido");
  });
  document.getElementById(id).classList.remove("escondido");
}

function atualizarPlacar() {
  document.getElementById("placar-pontos").textContent = jogador.pontos + " pts";
}

/* =====================================================
   5. TELA INICIAL
   ===================================================== */

document.getElementById("btn-comecar").addEventListener("click", function () {
  const nome = document.getElementById("campo-nome").value.trim();
  if (nome === "") {
    alert("Digite seu nome para começar!");
    return;
  }
  jogador = carregarOuCriarJogador(nome);
  salvar();
  document.getElementById("menu").classList.remove("escondido");
  atualizarPlacar();
  abrirCategorias();
});

/* =====================================================
   6. CATEGORIAS E FASES
   ===================================================== */

function abrirCategorias() {
  document.getElementById("ola-jogador").textContent = "Bem-vindo, " + jogador.nome + "!";
  const lista = document.getElementById("lista-categorias");
  lista.innerHTML = "";

  categorias.forEach(function (cat) {
    const card = document.createElement("button");
    card.className = "card";
    card.type = "button";

    const icone = document.createElement("span");
    icone.className = "icone";
    icone.textContent = cat.icone;

    const nome = document.createElement("span");
    nome.textContent = cat.nome;

    const info = document.createElement("small");
    const liberadas = Math.min(jogador.progresso[cat.id], cat.fases.length);
    info.textContent = liberadas + "/" + cat.fases.length + " fases liberadas";

    card.append(icone, nome, info);
    card.addEventListener("click", function () {
      abrirFases(cat);
    });
    lista.appendChild(card);
  });

  mostrarTela("tela-categorias");
}

function abrirFases(cat) {
  categoriaAtual = cat;
  document.getElementById("titulo-categoria").textContent = cat.icone + " " + cat.nome;
  const lista = document.getElementById("lista-fases");
  lista.innerHTML = "";

  cat.fases.forEach(function (fase, i) {
    const numero = i + 1;
    const liberada = numero <= jogador.progresso[cat.id];

    const card = document.createElement("button");
    card.type = "button";
    card.className = "card" + (liberada ? "" : " bloqueada");
    card.textContent = liberada ? "Fase " + numero : "🔒 Fase " + numero;

    const info = document.createElement("small");
    info.textContent = "Acerte " + fase.minAcertos + " de " + fase.perguntas.length;
    card.appendChild(info);

    if (liberada) {
      card.addEventListener("click", function () {
        iniciarFase(numero);
      });
    }
    lista.appendChild(card);
  });

  mostrarTela("tela-fases");
}

document.getElementById("btn-voltar-categorias").addEventListener("click", abrirCategorias);

/* =====================================================
   7. LÓGICA DO QUIZ
   ===================================================== */

function embaralhar(lista) {
  // algoritmo de Fisher-Yates
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = lista[i];
    lista[i] = lista[j];
    lista[j] = temp;
  }
  return lista;
}

function iniciarFase(numero) {
  numeroFaseAtual = numero;
  const fase = categoriaAtual.fases[numero - 1];
  perguntasDaFase = embaralhar(fase.perguntas.slice()); // slice() copia a lista
  indice = 0;
  acertos = 0;
  pontosGanhosNaFase = 0;
  dobroAtivo = false;
  mostrarTela("tela-quiz");
  mostrarPergunta();
}

function mostrarPergunta() {
  respondida = false;
  const p = perguntasDaFase[indice];

  document.getElementById("progresso").textContent =
    "Pergunta " + (indice + 1) + " de " + perguntasDaFase.length;
  document.getElementById("pontos-fase").textContent = "Acertos: " + acertos;
  document.getElementById("texto-pergunta").textContent = (indice + 1) + ". " + p.texto;

  // monta as opções já embaralhadas, lembrando qual é a certa
  const opcoes = p.opcoes.map(function (texto, i) {
    return { texto: texto, certa: i === p.correta };
  });
  embaralhar(opcoes);

  const caixa = document.getElementById("opcoes");
  caixa.innerHTML = "";
  opcoes.forEach(function (op) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "opcao";
    botao.textContent = op.texto;
    botao.dataset.certa = op.certa; // guarda "true" ou "false" no próprio botão
    botao.addEventListener("click", function () {
      responder(botao);
    });
    caixa.appendChild(botao);
  });

  document.getElementById("feedback").classList.add("escondido");
  document.getElementById("btn-proxima").classList.add("escondido");
  atualizarBotoesItens();
}

function responder(botaoEscolhido) {
  if (respondida) return;
  respondida = true;

  const p = perguntasDaFase[indice];
  const acertou = botaoEscolhido.dataset.certa === "true";
  const feedback = document.getElementById("feedback");

  document.querySelectorAll(".opcao").forEach(function (botao) {
    botao.disabled = true;
    if (botao.dataset.certa === "true") {
      botao.classList.add("certa");
    }
  });

  if (acertou) {
    acertos++;
    const ganho = PONTOS_POR_ACERTO * (dobroAtivo ? 2 : 1);
    pontosGanhosNaFase += ganho;
    feedback.textContent = "✅ Correto! " + p.explicacao + " (+" + ganho + " pts)";
  } else {
    botaoEscolhido.classList.add("errada");
    feedback.textContent = "❌ Essa não é a resposta correta. " + p.explicacao;
  }

  feedback.classList.remove("escondido");
  document.getElementById("pontos-fase").textContent = "Acertos: " + acertos;
  document.getElementById("btn-proxima").textContent =
    indice === perguntasDaFase.length - 1 ? "Ver resultado" : "Próxima";
  document.getElementById("btn-proxima").classList.remove("escondido");
  atualizarBotoesItens();
}

document.getElementById("btn-proxima").addEventListener("click", function () {
  indice++;
  if (indice < perguntasDaFase.length) {
    mostrarPergunta();
  } else {
    finalizarFase();
  }
});

function finalizarFase() {
  const fase = categoriaAtual.fases[numeroFaseAtual - 1];
  const passou = acertos >= fase.minAcertos;
  let total = pontosGanhosNaFase;

  if (passou) {
    total += BONUS_FASE_CONCLUIDA;
    // libera a próxima fase, se esta era a mais avançada liberada
    if (numeroFaseAtual === jogador.progresso[categoriaAtual.id]) {
      jogador.progresso[categoriaAtual.id]++;
    }
  }

  jogador.pontos += total;
  jogador.pontosTotais += total;
  salvar();
  salvarNoRanking();
  atualizarPlacar();

  document.getElementById("titulo-resultado").textContent =
    passou ? "🎉 Fase concluída!" : "😕 Não foi dessa vez";

  let texto = "Você acertou " + acertos + " de " + perguntasDaFase.length + ". ";
  texto += "Pontos ganhos: " + total;
  if (passou) texto += " (incluindo bônus de " + BONUS_FASE_CONCLUIDA + ")";
  texto += ".";
  if (!passou) texto += " Você precisava de " + fase.minAcertos + " acertos para avançar.";
  document.getElementById("texto-resultado").textContent = texto;

  // botão "Próxima fase" só aparece se passou e existe uma próxima
  const temProxima = passou && numeroFaseAtual < categoriaAtual.fases.length;
  document.getElementById("btn-proxima-fase").classList.toggle("escondido", !temProxima);

  mostrarTela("tela-resultado");
}

document.getElementById("btn-proxima-fase").addEventListener("click", function () {
  iniciarFase(numeroFaseAtual + 1);
});
document.getElementById("btn-repetir").addEventListener("click", function () {
  iniciarFase(numeroFaseAtual);
});
document.getElementById("btn-resultado-voltar").addEventListener("click", function () {
  abrirFases(categoriaAtual);
});
   8. ITENS DURANTE O QUIZ
   ===================================================== */

function atualizarBotoesItens() {
  ["dica", "pular", "dobro"].forEach(function (id) {
    document.getElementById("qtd-" + id).textContent = jogador.inventario[id];
  });

  document.getElementById("btn-dica").disabled = respondida || jogador.inventario.dica <= 0;
  document.getElementById("btn-pular").disabled = respondida || jogador.inventario.pular <= 0;
  document.getElementById("btn-dobro").disabled =
    dobroAtivo || (jogador.inventario.dobro <= 0);
  document.getElementById("btn-dobro").classList.toggle("ativo", dobroAtivo);
}

document.getElementById("btn-dica").addEventListener("click", function () {
  if (respondida || jogador.inventario.dica <= 0) return;
  jogador.inventario.dica--;

  const erradas = Array.from(document.querySelectorAll(".opcao")).filter(function (botao) {
    return botao.dataset.certa === "false" && !botao.classList.contains("escondido");
  });
  embaralhar(erradas).slice(0, 2).forEach(function (botao) {
    botao.classList.add("escondido");
  });

  salvar();
  atualizarBotoesItens();
});

document.getElementById("btn-pular").addEventListener("click", function () {
  if (respondida || jogador.inventario.pular <= 0) return;
  jogador.inventario.pular--;
  salvar();

  indice++;
  if (indice < perguntasDaFase.length) {
    mostrarPergunta();
  } else {
    finalizarFase();
  }
});

document.getElementById("btn-dobro").addEventListener("click", function () {
  if (dobroAtivo || jogador.inventario.dobro <= 0) return;
  jogador.inventario.dobro--;
  dobroAtivo = true;
  salvar();
  atualizarBotoesItens();
});

function abrirLoja() {
  const lista = document.getElementById("lista-loja");
  lista.innerHTML = "";

  itensLoja.forEach(function (item) {
    const caixa = document.createElement("div");
    caixa.className = "produto";

    const textos = document.createElement("div");
    const titulo = document.createElement("strong");
    titulo.textContent = item.nome + " (você tem " + jogador.inventario[item.id] + ")";
    const desc = document.createElement("p");
    desc.textContent = item.descricao;
    textos.append(titulo, desc);

    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = "Comprar por " + item.preco + " pts";
    botao.disabled = jogador.pontos < item.preco;
    botao.addEventListener("click", function () {
      comprar(item.id);
    });

    caixa.append(textos, botao);
    lista.appendChild(caixa);
  });

  mostrarTela("tela-loja");
}

function comprar(itemId) {
  const item = itensLoja.find(function (i) {
    return i.id === itemId;
  });
  if (jogador.pontos < item.preco) {
    alert("Pontos insuficientes!");
    return;
  }
  jogador.pontos -= item.preco; // só os pontos gastáveis diminuem
  jogador.inventario[itemId]++;
  salvar();
  atualizarPlacar();
  abrirLoja(); // redesenha a loja com os valores novos
}


function salvarNoRanking() {
  const ranking = JSON.parse(localStorage.getItem("futquiz_ranking")) || [];
  const existente = ranking.find(function (r) {
    return r.nome === jogador.nome;
  });
  if (existente) {
    existente.pontos = jogador.pontosTotais;
  } else {
    ranking.push({ nome: jogador.nome, pontos: jogador.pontosTotais });
  }
  ranking.sort(function (a, b) {
    return b.pontos - a.pontos;
  });
  localStorage.setItem("futquiz_ranking", JSON.stringify(ranking.slice(0, 10)));
}

function abrirRanking() {
  const ranking = JSON.parse(localStorage.getItem("futquiz_ranking")) || [];
  const lista = document.getElementById("lista-ranking");
  lista.innerHTML = "";

  if (ranking.length === 0) {
    lista.textContent = "Ninguém jogou ainda. Seja o primeiro!";
  }

  ranking.forEach(function (r, i) {
    const linha = document.createElement("div");
    linha.className = "linha-ranking" + (i === 0 ? " primeiro" : "");
    const medalhas = ["🥇", "🥈", "🥉"];
    const posicao = i < 3 ? medalhas[i] : (i + 1) + "º";

    const esquerda = document.createElement("span");
    esquerda.textContent = posicao + " " + r.nome;
    const direita = document.createElement("strong");
    direita.textContent = r.pontos + " pts";

    linha.append(esquerda, direita);
    lista.appendChild(linha);
  });

  mostrarTela("tela-ranking");
}

document.getElementById("btn-categorias").addEventListener("click", abrirCategorias);
document.getElementById("btn-loja").addEventListener("click", abrirLoja);
document.getElementById("btn-ranking").addEventListener("click", abrirRanking);