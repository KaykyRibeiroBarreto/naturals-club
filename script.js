// Seleciona os elementos
const cardOverlay = document.getElementById('cardOverlay');
const card = document.getElementById('card');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const comecarBtn = document.getElementById('comecar');
const voltarBtn = document.getElementById('voltar');
const finalizarBtn = document.getElementById('finalizar');
const progress = document.getElementById('progress');

// Função para abrir o card
function abrirCard() {
    cardOverlay.style.display = 'flex'; // Mostra o overlay e o card
    progress.style.width = '0%'; // Reseta o progresso ao abrir o card
    screen1.classList.remove('hidden'); // Garante que a primeira tela esteja visível
    screen2.classList.add('hidden'); // Garante que a segunda tela esteja oculta
}

// Função para fechar o card
function fecharCard() {
    cardOverlay.style.display = 'none'; // Oculta o overlay e o card
}

// Função para ir para a segunda tela
function irParaSegundaTela() {
    screen1.classList.add('hidden'); // Oculta a primeira tela
    screen2.classList.remove('hidden'); // Mostra a segunda tela
    progress.style.width = '100%'; // Atualiza o progresso para 100%
}

// Função para voltar para a primeira tela
function voltarParaPrimeiraTela() {
    screen2.classList.add('hidden'); // Oculta a segunda tela
    screen1.classList.remove('hidden'); // Mostra a primeira tela
    progress.style.width = '0%'; // Reseta o progresso para 0%
}

// Eventos
document.querySelector('.btn-primary').addEventListener('click', abrirCard); // Abre o card ao clicar no botão "QUERO APLICAR AGORA"
comecarBtn.addEventListener('click', irParaSegundaTela); // Navega para a segunda tela
voltarBtn.addEventListener('click', voltarParaPrimeiraTela); // Volta para a primeira tela
finalizarBtn.addEventListener('click', fecharCard); // Fecha o card ao finalizar