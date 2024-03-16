
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.getElementById('score');
const gameOverScreen = document.getElementById('gameOverScreen');
const finalScoreDisplay = document.getElementById('finalScore');

const settingsBtn = document.getElementById('settingsBtn');
const settingsMenu = document.getElementById('settingsMenu');

const volumeSlider = document.getElementById('volumeSlider');
const bgMusic = document.getElementById('bgMusic');



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        clearInterval(loop);
        clearInterval(updateScoreIntervalId);
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './imagens/onep.png';
        mario.style.width = '120px';
        mario.style.marginLeft = '25px';
        gameOverScreen.classList.remove('hidden');
        finalScoreDisplay.textContent = score;
    }

}, 10);

let score = 0;
let totalScore;
let updateScoreIntervalId = setInterval(updateScore, 100);

function updateScore() {
    score += 1;
    scoreDisplay.innerHTML = score;
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);


// Função para alternar a visibilidade do menu lateral
function toggleSettingsMenu() {
    settingsMenu.classList.toggle('show');
  }

  // Função para fechar o menu quando clicar fora dele
function closeSettingsMenu(event) {
    if (!event.target.closest('#settingsMenu') && !event.target.matches('#settingsBtn')) {
      settingsMenu.classList.remove('show');
    }
  }
  
  // Adicionando evento de clique ao botão de configurações
  settingsBtn.addEventListener('click', toggleSettingsMenu);

  
// Adicionando evento de clique ao documento para fechar o menu ao clicar fora dele
document.addEventListener('click', closeSettingsMenu);

// Função para ajustar o volume da música de fundo
function setVolume() {
    bgMusic.volume = volumeSlider.value / 100;
  }

  // Adicionando evento de input ao controle de volume
volumeSlider.addEventListener('input', setVolume);

