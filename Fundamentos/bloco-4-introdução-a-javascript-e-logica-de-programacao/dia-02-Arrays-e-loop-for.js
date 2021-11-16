/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; */

/*exercicio 1 - imprime todos os valores
for (let i=0;i<numbers.length;i+=1){
    console.log(numbers[i])
}
*/

/*exercicio 2 - soma todos e imprime*/
/*let soma = 0;

for (let i=0; i<numbers.length; i+=1){
soma = numbers[i] + numbers[i];
}
console.log(soma);
/* exercicio 3 - média aritmética */

//let mediaAritmetica = soma/numbers.length;
//console.log(mediaAritmetica);

/* exercício 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

//if (mediaAritmetica > 20){
  //  console.log("valor maior que 20")
//} else {
//    console.log("valor menor ou igual a 20")
//}

/* exercício 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o; */
//let maiorNumero = numbers [0];
//for (let i = 0; i<numbers.length; i+=1){
  //  if(numbers[i]>maiorNumero){
    //maiorNumero = numbers[i]
    //}}
    //console.log("o maior valor contido no array é:", maiorNumero);

/* Exercício 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */
/* Exercício 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;*/
// Exercícios 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// Exercício 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let player = {
  name:'Marta',
  lastName:'Silva',
  age: 34,
  medals: {
    golden: 2, 
    silver: 3 
  },
  bestInTheWorld: {
    [2006, 2007, 2008, 2009, 2010, 2018]
  },
  
};

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade");
console.log("A jogadora " + player.name + " " + player.lastName + "foi eleita a melhor do mundo por" + bestInTheWorld[] 6 vezes".)