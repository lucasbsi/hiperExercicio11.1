//Desenvolver utilizando as caixas de diálogos (Prompt e Alert) 
//em JavaScript uma função para verificar se um 
//número é par ou impar.

var num = prompt("Informe um número");

checkNum(num);

function checkNum(num){
    if(num % 2 == 0){
        alert("Numero é PAR")
    }else{
        alert("Numero é Impar")
    }
}