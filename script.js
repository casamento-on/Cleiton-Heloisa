// 🔴 AJUSTE AQUI O NÚMERO QUE RECEBERÁ AS CONFIRMAÇÕES
const numeroDestino = '5511988887777';

function confirmarPresenca() {
  const nomeInput = document.getElementById('nome');
  const nome = nomeInput.value || 'Convidado';

  const mensagem = `Olá! Meu nome é ${nome} e confirmo minha presença no casamento de Cleiton & Heloisa 💍`;

  abrirWhatsApp(mensagem);
}

function naoPoderei() {
  const nomeInput = document.getElementById('nome');
  const nome = nomeInput.value || 'Convidado';

  const mensagem = `Olá! Meu nome é ${nome} e infelizmente não poderei comparecer ao casamento de Cleiton & Heloisa.`;

  abrirWhatsApp(mensagem);
}

function abrirWhatsApp(mensagem) {
  const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}
