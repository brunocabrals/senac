class funcionarios{
    constructor(nome, cargo, salario) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }

    verificarSitucao() {
        let soma = 0
        for (let i = 0; i < this.salario.length; i++) {
            soma += this.salario[i]
        }
        if (soma >= 3000) {
            console.log("acima de 3mil!");
        } else {
            console.log("abaxo de 3 mil!");
        }
    }
}

let aluno = new funcionarios("Jonathan", "professor", "4000")
let aluno2 = new funcionarios("Ana", "Diretora","1500")
aluno.verificarSitucao();
aluno2.verificarSitucao()
