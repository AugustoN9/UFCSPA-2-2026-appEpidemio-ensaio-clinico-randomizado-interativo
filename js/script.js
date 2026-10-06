// Exemplo Prático e Fluxograma da Questão 1
function simularCenarioQuestao1() {
  Swal.fire({
    title: "Cenário Real: Teste do Gel Hemostático",
    width: "700px",
    html: `
      <div class="text-start small">
        <p><strong>Situação Hipotética:</strong></p>
        <p class="text-muted">Um hospital está a testar um novo gel hemostático dispendioso em cirurgias de emergência contra o penso padrão.</p>
        
        <div class="alert alert-danger p-2 mb-3">
          <strong>❌ O Erro de Alocação por Prontuário:</strong><br>
          O sistema foi configurado para alocar por número do prontuário (Par = Gel Novo / Ímpar = Penso Padrão).
          Ao receber um paciente muito grave com prontuário ímpar, o cirurgião decide não o incluir no estudo para não lhe dar o penso padrão. Isto gera um <strong>viés de seleção grave</strong>.
        </div>

        <hr>

        <p class="fw-bold mb-2 text-center text-primary">Diagrama de Fluxo do Processo:</p>
        
        <div class="p-3 bg-light rounded border">
          <div class="d-flex flex-column gap-2">
            
            <!-- Incorreto -->
            <div class="p-2 border border-danger rounded bg-white">
              <div class="fw-bold text-danger mb-1"><i class="fa-solid fa-xmark me-1"></i> Método Incorreto (Determinístico)</div>
              <div class="ps-3 border-start border-danger border-2">
                <span>1. Consulta Prontuário/Dia</span> ➔ 
                <span class="text-danger fw-semibold">2. Revela Grupo Antes da Inclusão 👁️</span> ➔ 
                <span>3. Decisão Viciada do Médico ⚠</span>
              </div>
            </div>

            <!-- Correto -->
            <div class="p-2 border border-success rounded bg-white">
              <div class="fw-bold text-success mb-1"><i class="fa-solid fa-check me-1"></i> Método Correto (Ocultação Centralizada)</div>
              <div class="ps-3 border-start border-success border-2">
                <span>1. Registo e Confirmação de Elegibilidade</span> ➔ 
                <span>2. Clique em "Randomizar" 🔒</span> ➔ 
                <span class="text-success fw-semibold">3. Revela Grupo Após Inclusão Final ✅</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    `,
    icon: "info",
    confirmButtonText: "Entendido!",
    confirmButtonColor: "#0d6efd",
  });
}

// Calculadora de Métricas da Questão 4
function simularMétricas() {
  Swal.fire({
    title: "Entendendo Métricas na Prática",
    html: `
    <div class="text-start small">
      <p><strong>Exemplo Prático (1.000 pacientes):</strong></p>
      <ul>
        <li><strong>Grupo Sem Remédio:</strong> 12,1% tiveram complicações (121 doentes).</li>
        <li><strong>Grupo Com Remédio:</strong> 9,2% tiveram complicações (92 doentes).</li>
      </ul>
      <hr>
      <p><strong>1. RAR (Redução Absoluta do Risco):</strong> 12,1% - 9,2% = <strong>2,9%</strong> (Evitou 29 casos em cada 1.000 pessoas).</p>
      <p><strong>2. RRR (Redução Relativa do Risco):</strong> 2,9% / 12,1% = <strong>24%</strong> (Faz o remédio parecer muito mais potente!).</p>
      <p><strong>3. NNT (Número Necessário para Tratar):</strong> 1 / 0,029 = <strong>~34</strong> (Precisamos tratar 34 pessoas para salvar 1).</p>
    </div>
  `,
    icon: "info",
    confirmButtonText: "Entendido!",
    confirmButtonColor: "#0d6efd",
  });
}

// --- LÓGICA DO EPIDEMIOGAME ---
const casas = [
  { id: 0, tipo: "start", titulo: "Início", icon: "fa-flag-checkered" },
  {
    id: 1,
    tipo: "pergunta",
    titulo: "Desafio 1",
    icon: "fa-vial-circle-check",
    contexto: "Em ensaios clínicos, a alocação dos participantes deve ser rigorosamente oculta para evitar vícios de seleção.",
    pergunta: "No teste de um novo Gel Hemostático em cirurgias, decidir o tratamento pelo número PAR ou ÍMPAR do prontuário é um bom método de sorteio?",
    opcoes: [
      "Sim, pois o número do prontuário é imprevisível.",
      "Não, pois o médico saberá a alocação antes e pode escolher quem entra no estudo, gerando viés de seleção.",
    ],
    respostaCorreta: 1,
    explicacao: "💡 <b>Analogia da Raspadinha:</b> Se o médico sabe com antecedência qual grupo o paciente vai receber, pode evitar incluir pacientes graves. A alocação precisa ser oculta!",
  },
  {
    id: 2,
    tipo: "neutro",
    titulo: "Revisão Ética",
    icon: "fa-file-signature",
    msg: "Sua pesquisa foi aprovada no Comitê de Ética! Avance tranquilo.",
  },
  {
    id: 3,
    tipo: "pergunta",
    titulo: "Desafio 2",
    icon: "fa-hospital-user",
    contexto: "Um hospital quer avaliar um alerta de sepse comparando a mortalidade hospitalar antes e depois de sua implantação.",
    pergunta: 'Para saber se o alerta funciona de verdade, basta comparar a mortalidade "Antes e Depois"?',
    opcoes: [
      "Sim, é um método perfeito pois mede diretamente a mudança histórica.",
      "Não, pois outras coisas mudam no tempo (mudanças de medicação, treinamentos), exigindo um estudo por grupos (cluster).",
    ],
    respostaCorreta: 1,
    explicacao: "💡 <b>Analogia do Semáforo:</b> Se instala um semáforo e os acidentes diminuem, mas no mesmo mês a rua foi iluminada, não pode dar 100% de crédito ao semáforo!",
  },
  {
    id: 4,
    tipo: "neutro",
    titulo: "Coleta de Dados",
    icon: "fa-database",
    msg: "Banco de dados organizado com sucesso!",
  },
  {
    id: 5,
    tipo: "pergunta",
    titulo: "Desafio 3",
    icon: "fa-chart-line",
    contexto: "Ao saberem que o paciente estava no Grupo B (tratamento novo), os médicos passaram a monitorar os sinais vitais com o dobro da frequência e prescrever medicações extras em relação ao Grupo A.",
    pergunta: "Este cenário exemplifica qual tipo de viés?",
    opcoes: [
      "Viés de Aferição (Detecção)",
      "Viés de Performance (Desempenho)",
      "Viés de Memória (Recordação)"
    ],
    respostaCorreta: 1,
    explicacao: "💡 <b>Resposta Correta: Viés de Performance (Desempenho)!</b><br>Ocorre quando a equipe altera a atenção ou o cuidado médico prestado entre os dois grupos por saber qual tratamento cada grupo está a receber.",
  },
  {
    id: 6,
    tipo: "neutro",
    titulo: "Café da Ciência",
    icon: "fa-coffee",
    msg: "Pausa para o café! Ganhe energia para a fase final.",
  },
  {
    id: 7,
    tipo: "pergunta",
    titulo: "Desafio 4",
    icon: "fa-calculator",
    contexto: "Você precisa apresentar os resultados do tratamento de trombólise aos gestores num painel de indicadores.",
    pergunta: 'Entre RRR (24%), RAR (2,9 p.p.) e NNT (34), qual escolha isolada pode SUPERESTIMAR o benefício real?',
    opcoes: [
      "A RAR (2,9 p.p.), pois mostra um valor pequeno demais.",
      "A RRR (24%), pois esconde o risco real da doença e faz o remédio parecer mais potente.",
    ],
    respostaCorreta: 1,
    explicacao: "💡 <b>Analogia do Desconto:</b> '50% de desconto' parece gigante (RRR), mas se o preço caiu de R$ 2 para R$ 1, a economia real foi só de R$ 1 (RAR)!",
  },
  {
    id: 8,
    tipo: "neutro",
    titulo: "Auditoria Ok",
    icon: "fa-clipboard-check",
    msg: "Sua pesquisa passou sem pendências na auditoria externa!",
  },
  {
    id: 9,
    tipo: "pergunta",
    titulo: "Desafio 5",
    icon: "fa-mobile-screen-button",
    contexto: "Um aplicativo de telemonitoramento reduziu internações num ensaio clínico controlado.",
    pergunta: "O que é essencial avaliar antes de recomendá-lo para milhões de pessoas no SUS?",
    opcoes: [
      "Efetividade real (se idosos e áreas sem internet usam), custo financeiro total e infraestrutura do SUS.",
      "Basta ter funcionado no ensaio clínico inicial para garantir sucesso no mundo real.",
    ],
    respostaCorreta: 0,
    explicacao: "💡 <b>Analogia do Bolo:</b> Uma receita que dá certo na cozinha do chef (Eficácia) precisa funcionar no forno descalibrado do dia a dia (Efetividade).",
  },
  {
    id: 10,
    tipo: "neutro",
    titulo: "Artigo Escrito",
    icon: "fa-pen-nib",
    msg: "Escrevendo as conclusões do seu artigo científico...",
  },
  { id: 11, tipo: "finish", titulo: "Publicação!", icon: "fa-trophy" },
];

let jogadorNome = "";
let jogadorPosicao = 0;
let jogadorPontos = 0;
let aguardandoResposta = false;
let jogoIniciado = false;
let modalBs = null;

function iniciarFluxoJogo() {
  Swal.fire({
    title: "🎮 Bem-vindo ao EpidemioGame!",
    text: "Digite seu nome para iniciar a partida:",
    input: "text",
    inputPlaceholder: "Ex: Dr. Silva / Maria",
    icon: "question",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonText: "Começar a Jogar!",
    confirmButtonColor: "#198754",
    inputValidator: (value) => {
      if (!value || !value.trim()) {
        return "Por favor, digite seu nome!";
      }
    },
  }).then((result) => {
    if (result.isConfirmed && result.value) {
      jogadorNome = result.value.trim();
      jogoIniciado = true;
      jogadorPosicao = 0;
      jogadorPontos = 0;

      document.getElementById("nome-jogador-texto").innerText = jogadorNome;
      document.getElementById("btn-dado").disabled = false;
      document.getElementById("painel-inicio").style.display = "none";
      document.getElementById("instrucao-jogo").innerText = "Jogo em andamento! Role o dado para avançar pelas casas.";

      renderizarTabuleiro();

      Swal.fire({
        title: `Boa sorte, ${jogadorNome}!`,
        text: 'Sua jornada começou. Clique em "Rolar Dado" para avançar!',
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  });
}

function renderizarTabuleiro() {
  const tabuleiro = document.getElementById("tabuleiro");
  if (!tabuleiro) return;

  tabuleiro.innerHTML = "";

  casas.forEach((casa) => {
    let classeExtra = "";
    if (casa.tipo === "start") classeExtra = "tile-start";
    else if (casa.tipo === "pergunta") classeExtra = "tile-question";
    else if (casa.tipo === "finish") classeExtra = "tile-finish";

    if (jogoIniciado && casa.id === jogadorPosicao) classeExtra += " active";

    tabuleiro.innerHTML += `
      <div class="board-tile ${classeExtra}">
        <span class="tile-badge">${casa.id}</span>
        <i class="fa-solid ${casa.icon} fa-2x mb-1 text-primary"></i>
        <span class="small text-center">${casa.titulo}</span>
        ${jogoIniciado && casa.id === jogadorPosicao ? '<div class="player-token"></div>' : ""}
      </div>
    `;
  });

  const posTexto = document.getElementById("posicao-texto");
  if (posTexto) posTexto.innerText = `Casa ${jogadorPosicao} - ${casas[jogadorPosicao].titulo}`;

  const pontosTexto = document.getElementById("pontuacao-texto");
  if (pontosTexto) pontosTexto.innerText = jogadorPontos;
}

function jogarDado() {
  if (!jogoIniciado || aguardandoResposta) return;

  const btn = document.getElementById("btn-dado");
  btn.disabled = true;

  let giros = 0;
  const interval = setInterval(() => {
    const valorTemp = Math.floor(Math.random() * 3) + 1;
    document.getElementById("dado-valor").innerText = valorTemp;
    giros++;
    if (giros > 8) {
      clearInterval(interval);
      const dadoFinal = Math.floor(Math.random() * 3) + 1;
      document.getElementById("dado-valor").innerText = dadoFinal;
      moverJogador(dadoFinal);
    }
  }, 80);
}

function moverJogador(passos) {
  jogadorPosicao += passos;
  if (jogadorPosicao >= casas.length - 1) {
    jogadorPosicao = casas.length - 1;
    jogadorPontos += 200;
    renderizarTabuleiro();
    vitoria();
    return;
  }

  renderizarTabuleiro();
  verificarCasa();
}

function verificarCasa() {
  const casaAtual = casas[jogadorPosicao];

  if (casaAtual.tipo === "neutro") {
    Swal.fire({
      title: casaAtual.titulo,
      text: casaAtual.msg,
      icon: "info",
      confirmButtonText: "Continuar",
    }).then(() => {
      document.getElementById("btn-dado").disabled = false;
    });
  } else if (casaAtual.tipo === "pergunta") {
    aguardandoResposta = true;

    document.getElementById("desafio-titulo").innerText = casaAtual.titulo;
    
    const contextoEl = document.getElementById("desafio-contexto");
    if (casaAtual.contexto) {
      contextoEl.innerText = casaAtual.contexto;
      contextoEl.style.display = "block";
    } else {
      contextoEl.style.display = "none";
    }

    document.getElementById("desafio-pergunta").innerText = casaAtual.pergunta;

    const containerOpcoes = document.getElementById("desafio-opcoes");
    containerOpcoes.innerHTML = "";

    casaAtual.opcoes.forEach((opcao, idx) => {
      containerOpcoes.innerHTML += `
        <label class="list-group-item d-flex align-items-center gap-3 p-3 rounded border style-option-item" style="cursor: pointer;">
          <input class="form-check-input flex-shrink-0" type="radio" name="opcaoDesafio" value="${idx}">
          <span class="pt-1 text-dark fw-medium">${opcao}</span>
        </label>
      `;
    });

    if (!modalBs) {
      modalBs = new bootstrap.Modal(document.getElementById("modalDesafio"));
    }
    modalBs.show();
  } else {
    document.getElementById("btn-dado").disabled = false;
  }
}

function submeterResposta() {
  const opcaoSelecionada = document.querySelector('input[name="opcaoDesafio"]:checked');

  if (!opcaoSelecionada) {
    Swal.fire({
      title: "Atenção!",
      text: "Selecione uma opção antes de confirmar.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }

  const respostaInt = parseInt(opcaoSelecionada.value);
  const casaAtual = casas[jogadorPosicao];

  modalBs.hide();

  if (respostaInt === casaAtual.respostaCorreta) {
    jogadorPontos += 100;
    Swal.fire({
      title: `🎯 Muito bem, ${jogadorNome}! (+100 Pontos)`,
      html: `<div class="text-start">${casaAtual.explicacao}</div>`,
      icon: "success",
      confirmButtonText: "Avançar",
    }).then(() => {
      aguardandoResposta = false;
      renderizarTabuleiro();
      document.getElementById("btn-dado").disabled = false;
    });
  } else {
    jogadorPontos = Math.max(0, jogadorPontos - 50);
    Swal.fire({
      title: `❌ Atenção, ${jogadorNome}! (-50 Pontos & Volte 2 casas)`,
      html: `<div class="text-start mb-2"><strong class="text-danger">Atenção ao conceito:</strong></div><div class="text-start">${casaAtual.explicacao}</div>`,
      icon: "error",
      confirmButtonText: "Retroceder",
    }).then(() => {
      jogadorPosicao = Math.max(0, jogadorPosicao - 2);
      aguardandoResposta = false;
      renderizarTabuleiro();
      document.getElementById("btn-dado").disabled = false;
    });
  }
}

function vitoria() {
  Swal.fire({
    title: `🏆 PARABÉNS, ${jogadorNome.toUpperCase()}!`,
    html: `
      <p>Você dominou os conceitos de epidemiologia clínica, evitou vieses e publicou o seu estudo com sucesso!</p>
      <h4 class="text-success fw-bold">Pontuação Final: ${jogadorPontos} Pontos</h4>
    `,
    icon: "success",
    confirmButtonText: "Jogar Novamente",
  }).then(() => {
    jogoIniciado = false;
    jogadorPosicao = 0;
    jogadorPontos = 0;
    document.getElementById("nome-jogador-texto").innerText = "Aguardando início...";
    document.getElementById("btn-dado").disabled = true;
    document.getElementById("painel-inicio").style.display = "block";
    document.getElementById("instrucao-jogo").innerText = 'Clique em "Começar Jogo" para registrar seu nome e iniciar!';
    renderizarTabuleiro();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarTabuleiro();
});

// Função para validar a resposta do Quiz de Vieses ao clicar
function checarRespostaVies(botaoClicado, eCorreta) {
  // Encontra o container da pergunta atual para limitar a ação
  const containerPergunta = botaoClicado.closest('.quiz-vies-item');
  const botoes = containerPergunta.querySelectorAll('.btn-opcao-vies');

  // Reseta o estilo de todos os botões da mesma pergunta
  botoes.forEach((btn) => {
    btn.classList.remove('btn-success', 'btn-danger', 'text-white');
    btn.classList.add('btn-outline-secondary');
    
    const badge = btn.querySelector('.status-badge');
    badge.classList.add('d-none');
    badge.classList.remove('bg-success', 'bg-danger', 'bg-light', 'text-dark');
    badge.innerText = '';
  });

  // Aplica o feedback visual ao botão clicado
  const badgeClicada = botaoClicado.querySelector('.status-badge');
  badgeClicada.classList.remove('d-none');

  if (eCorreta) {
    botaoClicado.classList.remove('btn-outline-secondary');
    botaoClicado.classList.add('btn-success', 'text-white');
    badgeClicada.classList.add('bg-light', 'text-success', 'fw-bold');
    badgeClicada.innerHTML = '<i class="fa-solid fa-check me-1"></i>CORRETA';
  } else {
    botaoClicado.classList.remove('btn-outline-secondary');
    botaoClicado.classList.add('btn-danger', 'text-white');
    badgeClicada.classList.add('bg-light', 'text-danger', 'fw-bold');
    badgeClicada.innerHTML = '<i class="fa-solid fa-xmark me-1"></i>INCORRETA';
  }
}