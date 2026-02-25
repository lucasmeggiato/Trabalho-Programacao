const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const saudacaoEl = document.getElementById('saudacao');
 
const horaAtual = new Date().getHours();
if (horaAtual >= 5 && horaAtual < 12) {
    saudacaoEl.textContent = '☕ Bom dia!';
} else if (horaAtual >= 12 && horaAtual < 18) {
    saudacaoEl.textContent = '☀️ Boa tarde!';
} else {
    saudacaoEl.textContent = '🌙 Boa noite!';
}

const temaSalvo = localStorage.getItem('temaPreferido');

if (temaSalvo === 'escuro') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Modo Claro';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️ Modo Claro';
        localStorage.setItem('temaPreferido', 'escuro'); // Salva no navegador
    } else {
        toggleBtn.textContent = '🌙 Modo Escuro';
        localStorage.setItem('temaPreferido', 'claro'); // Salva no navegador
    }
});