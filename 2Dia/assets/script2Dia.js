let nome = ""
let sIdade = ""
let idade = ""
let linguagem = ""
   
function armazena(){
     nome = document.querySelector('#pergunta1').value
     sIdade = document.querySelector('#pergunta2').value
     idade = parseFloat(sIdade);
     linguagem = document.querySelector('#pergunta3').value
}

function exibir(){
    let print = document.querySelector('#label-exibir')
    print.textContent= "Olá "+ nome+ '! Você tem '+ idade+ ' anos e está aprendendo ' + linguagem+ "."
}

function  cadastro(){
    armazena()
    exibir()
}