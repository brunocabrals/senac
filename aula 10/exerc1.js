let notas = [
    [8, 9, 3, 6],
    [7, 8, 4, 10],
    [5, 8, 6, 9],
]

let aluno1 = notas[2]
let aluno4 = [10, 10, 10, 10]

notas.push(aluno4)
notas[2][2] = 10

let notaprova2 = notas[2][2]

console.log(notas[2][2])

notas[0].push(0)
notas[1].push(0)
notas[2].push(0)
notas[3].push(0)

console.table(notas)

for (let linhas = 0; linhas < notas.lenght;linhas++){

const notasalunos = notas [linhas];

console.log("a nota do aluno é"+ linhas)
console.table(notasalunos)
}
