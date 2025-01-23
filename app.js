//let titulo = document.querySelector('h1'); // Aqui eu estou puxando o H1 que está no HTML, para mexer
//titulo.innerHTML = 'Jogo do numero secreto'; // Aqui é onde eu altero o que eu selecionei emcima, ou seja, o H1
let lista = [];
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Aqui eu transformei a função exibir texto em algo mais adaptativo para não ter que escrever dezenas de vezes

function exibirTextoNaTela(){
    exibirTexto('h1', 'Jogo do numero secreto!');
    exibirTexto('.texto__paragrafo', 'Digite um numero entre 1 e 10: ');
}

exibirTextoNaTela()

// Resumindo, eu crio a variavel, o documento.queryselector seleciona o que eu estou procurando, e o innerHTML me deixa alterar

function verificarChute(){
    let chute = document.querySelector('input').value // O Value faz o chute armazenar o numero colocado no input

    if (chute == numeroSecreto){
        exibirTexto('h1', 'Acertou!');
        exibirTexto('.texto__paragrafo', `Foram feitas ${tentativas} tentativas`);
        document.getElementById('reiniciar').removeAttribute('disabled') // Ok, aqui, eu puxei um botão pelo id, apesar de dar pra puxar pela class ou pelo nome do button, em seguida, eu habilitei ele removendo a desabilitação que colocaram no html
        // detalhe, no if de acertou, somente se acertar o numero secreto
    }
    else if (chute > numeroSecreto){
        exibirTexto('.texto__paragrafo', 'O numero digitado é maior que o numero secreto ');
    }
    else{
        exibirTexto('.texto__paragrafo', 'O numero digitado é menor que o numero secreto ');
    }
    tentativas++
}

function gerarNumero(){
    let gerarNumeroAleatorio = parseInt(Math.random() * 100 + 1); // Aqui, o que eu fiz, na função, eu inclementei esse includes, que verifica se já não tem o numero que gerou no array, melhor que o python
    let quantidadeElementos = lista.length;

    if(quantidadeElementos == 10){
        lista = []; 
    }
    if(lista.includes(gerarNumeroAleatorio)){
        return gerarNumero();
    }
    else{
        lista.push(gerarNumeroAleatorio); // Esse push é o apeend do js, estou colocando o numero aleatorio dentro da lista, quando gerar
        console.log(lista);
        return gerarNumeroAleatorio;
    }
}

function limparChute(){
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarGame(){
    numeroSecreto = gerarNumero();
    tentativas = 1;
    limparChute()
    exibirTextoNaTela()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}