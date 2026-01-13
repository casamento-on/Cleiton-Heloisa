// Data do casamento
const weddingDate = new Date("September 5, 2026 00:00:00").getTime();

// Função de contagem regressiva
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "O grande dia chegou!";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days} dias ${hours}h ${minutes}m ${seconds}s`;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
