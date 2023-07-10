// a function declaration ela permite se utilizada antes dela ser criada no codigo.
// chamar a função antes de sua declaração recebe o nome de "hoisting", oque isso significa. O javascript le todo o codigo antes de executar algo. Por esse motivo não existe problema em chamar a função antes da sua "criação".
// essaPalavraEUmPalindromo();


// function expression - essa função é criada fora do scopo global e fica dentro de uma variavel. Nesse caso o hoisting não funciona, gerando um erro.
// ex. const essaPalavaEUmPalindromo = function () {}
// nesse caso é necessario chamar a função após a sua criacação, obedecendo a ordem.
function essaPalavraEUmPalindromo(palavra){
   var resposta = document.getElementById("resposta");
   resposta.innerHTML = ""
   var separandoAsLetrasDaPalavra = palavra.split("");
   var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
   palavraInvertida = palavraInvertida.join("");
   if (palavra == palavraInvertida){
     document.getElementById("resposta").innerHTML += `A palavra <strong>${palavra}</strong> é um palíndromo!`;
   } else {
    
    document.getElementById("resposta").innerHTML += `A palavra <strong>${palavra}</strong> não é um palíndromo!`;
   }

   return essaPalavraEUmPalindromo;
}



var palavra = document.getElementById("palavra");
palavra.addEventListener("focusout", ()=> essaPalavraEUmPalindromo(palavra.value));
palavra.addEventListener("keypress", (event)=>{ 
  if(event.key == "Enter"){
  essaPalavraEUmPalindromo(palavra.value)}});