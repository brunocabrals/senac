/* Crie uma função que analise tempo de espera. Quando o valor for maior que 30 minutos, a função
deverá retornar “Prioridade alta”; caso contrário, deverá retornar “Atendimento normal”. Faça diferentes
chamadas para testar as duas possibilidades.*/
function tempo(minutos) {
    if (minutos > 30) {
        return "Prioridade alta";
    } else {
        return "Atendimento normal";
    }
}

console.log(tempo(40));
console.log(tempo(20));
console.log(tempo(35));