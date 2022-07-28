const mobile = document.getElementById('seta');

function toggleMenu() {
    const botão = document.getElementsById('botão');
    botão.classList.toggle('active');
}

mobile.addEventListener('click', toggleMenu);

