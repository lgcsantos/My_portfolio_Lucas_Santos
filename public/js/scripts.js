/* Evento abrir e fechar menu **********/

const mainMenu = document.querySelector('.mainMenu');
const fecharMenu = document.querySelector('.fecharMenu');
const abrirMenu = document.querySelector('.abrirMenu');

abrirMenu.addEventListener('click', show);
fecharMenu.addEventListener('click', fechar)

function show(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
}

function fechar (){
    mainMenu.style.top = '-100%';
}

console.log("Olá Mundo.")
