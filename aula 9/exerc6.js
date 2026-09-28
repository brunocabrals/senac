/* Crie uma função que receba horas de atendimento e preço por hora. A função deverá retornar o custo
do serviço. Teste a função com pelo menos três valores diferentes e apresente os resultados */
function calcularServico(horas, precoHora) {
    return horas * precoHora;
}

console.log(calcularServico(2, 50));
console.log(calcularServico(5, 80));
console.log(calcularServico(10, 100));