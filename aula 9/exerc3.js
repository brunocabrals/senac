/*Os tempos, em minutos, foram 10, 35, 18, 42, 8, 27 e 50. Percorra os valores e informe quais
atendimentos demoraram mais de 30 minutos. Ao final, mostre quantos ultrapassaram esse tempo.*/
let tempo = [8,10,18,27,35,42,50]
let contador = 0;
for (let i = 0; i < tempo.length; i++) {
    if (tempo[i] > 30) {
        console.log("Atendimento demorou mais de 30 minutos: " + tempo[i]);
        contador++;
    }
}
console.log("Quantidade de atendimentos acima de 30 minutos: " + contador);