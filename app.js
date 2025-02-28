let listaDeNumerosSorteados=[];
let numeroLimite= 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas=1;

//funçao com parametro
// código omitido. 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}
function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute== numeroSecreto){
        exibirTextoNaTela('h1','voce acertou!');
        let palavreaTentativa= tentativas>1 ? 'tentativas' : 'tentativas';
        let mensagemTentativas = `arrasou diva!!!!, voce descobriu com ${tentativas} ${palavreaTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        exibirTextoNaTela('h1','voce errou, que pena');
        if (chute < numeroSecreto){
            exibirTextoNaTela ('p','dica:o numero é maior');
        }
        else{
            exibirTextoNaTela ('p','dica:o numero é menor');
        }
      tentativas++;
      limparCampo()
    }
}

//funçoes com retorno 
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 10 +1 );
  let quantidadeDeElementos=listaDeNumerosSorteados.length;
  
  if(quantidadeDeElementos == numeroLimite);
  listaDeNumerosSorteados =[];
  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();

  }
  else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo(){
    chute= document.querySelector ('input');
    chute.value ='';
}
function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}