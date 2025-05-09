// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)
// Console e Debug

// Operadores
//     Operador Atribuição (=)
//     Operadores aritméticos(+,-,/,*)
//     Operadores relacionais(>,<,>=, <=, !=, ==)

let n1 = 10
let n2 = 5
console.log(n1 + n2)
console.log(n1==n2) // iigualdade 
console.log(n1 != n2) //diferente
console.log(n1>n2) //meior que
console.log(10<10) // menor que 
//     Operadores lógicos
console.log(!10>2)
console.log("10"+"15")

// == OU apenas uma verificação precisa ser verdadeira para o resultado ser verdadeiro, 
// o resultado so sera falso quando todos forem falsos  
// Estrutura


// Arrays 
let nome = "keylane"
let idade = 22
console.log(nome)
console.log(idade)


nome = "renata"
idade = 25
console.log(nome,idade)
// Funções básicas
// Escopo



//tipos de Dados
// text == string
let cidade = "SBO"

//numerico == number
let salario = 1500.50

//boleano == boolean
let fumante = false 

console.log (typeof cidade)

// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  ************
 



// DESAFIO
let preco = 100
let precoAcrescimo = 0
let precoDesconto = 0
//faça um codigo que acrecente 17% ao preço imprima
 
 precoAcrescimo = preco + preco * 0.17
 console.log("preço com acréscimo: " + precoAcrescimo.toFixed(2))

 // faça um codigo que desconte 7% de preço e imprima
 precoDesconto = preco - preco * 0.07
 console.log(" preço com Desconto: " + precoDesconto)



        
  //     Estrutura de controle/decisão7
  if (10>5){
    console.log("10 é maior que 5")
  } else{
    console.log("é falso ")
  }
//     Laços de repetição

let idadeDoCandidato = 17
if (idadeDoCandidato >= 18){
    console.log("pode dirigir")
}else {
    console.log ("nao pode dirigir")
}

// DESAFIO 
//Fsçs um codigo que verifique se o salario do funcionamento é maior que 5000, se for mostre a mensagem "salario OK" 
// se nao for mostre a mensagem " precisa aumento" de x reais 

let Salariofuncionario = 3000
let aumento = 5000 - Salariofuncionario
if (Salariofuncionario > 5000){
    console.log ("Salario OK")
} else{
    console.log("precisa aumento de" + aumento )
}
