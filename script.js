var jogadorEscolha = 0;
var jogadorPontuacao = 0;
var pcEscolha = 0;
var pcPontuacao = 0;
var ganhador = -1;
var msg = document.querySelector('div#mensagens')

function jogar(escolha) {
    jogadorEscolha = escolha;
    pcEscolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;
 
    //1 - PEDRA
    //2 - PAPEL
    //3 - TESOURA
    if ((jogadorEscolha == 1) && (pcEscolha == 1)) {
        ganhador = 0;
        msg.style.textAlign = 'center'
        msg.innerHTML = `Os dois escolheram Pedra. EMPATE`
    } else if ((jogadorEscolha == 1) && (pcEscolha == 2)) {
        ganhador = 2;
        msg.style.textAlign = 'center'
        msg.innerHTML = `Computador escolheu Papel. VOCÊ PERDEU`
        pcPontuacao++;
    } else if ((jogadorEscolha == 1) && (pcEscolha == 3)) {
        ganhador = 1;
        msg.style.textAlign = 'center'
        msg.innerHTML = `Computador escolheu Tesoura. VOCÊ GANHOU`
        jogadorPontuacao++;
    } else if ((jogadorEscolha == 2) && (pcEscolha == 1)) {
        ganhador = 1;
        msg.style.textAlign = 'center'
        msg.innerHTML = `Computador escolheu Pedra. VOCÊ GANHOU`
        jogadorPontuacao++;
    } else if ((jogadorEscolha == 2) && (pcEscolha == 2)) {
        ganhador = 0;
        msg.style.textAlign = 'center'
        msg.innerHTML = `Os dois escolheram Papel. EMPATE`
    } else if ((jogadorEscolha == 2) && (pcEscolha == 3)) {
        ganhador = 2;
        msg.style.textAlign = 'center'
        msg.innerHTML = `Computador escolheu Tesoura. VOCÊ PERDEU`
        pcPontuacao++;
    } else if ((jogadorEscolha == 3) && (pcEscolha == 1)) {
        ganhador = 2;
        msg.style.textAlign = 'center'
        msg.innerHTML = `Computador escolheu Pedra. VOCÊ PERDEU`
        pcPontuacao++;
    } else if ((jogadorEscolha == 3) && (pcEscolha == 2)) {
        ganhador = 1;
        msg.style.textAlign = 'center'
        msg.innerHTML = `Computador escolheu Papel. VOCÊ GANHOU`
        jogadorPontuacao++;
    } else if ((jogadorEscolha == 3) && (pcEscolha == 3)) {
        ganhador = 0;
        msg.style.textAlign = 'center'
        msg.innerHTML = `Os dois escolheram Tesoura. EMPATE`
    }
    document.getElementById("jogador-escolha-1").classList.remove('selecionado');
    document.getElementById("jogador-escolha-2").classList.remove('selecionado');
    document.getElementById("jogador-escolha-3").classList.remove('selecionado');
    document.getElementById("pc-escolha-1").classList.remove('selecionado');
    document.getElementById("pc-escolha-2").classList.remove('selecionado');
    document.getElementById("pc-escolha-3").classList.remove('selecionado');

    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add('selecionado');
    document.getElementById("pc-escolha-" + pcEscolha).classList.add('selecionado');

    document.getElementById("jogador-pontos").innerHTML = jogadorPontuacao;
    document.getElementById("pc-pontos").innerHTML = pcPontuacao;
}