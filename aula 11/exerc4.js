class produtos { 

    constructor(nome, preco, estoque) { 
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    mostrarinformacoes() { 
        console.log("nome do carro:"+" "+this.nome);
        console.log("preço do carro:"+" "+ this.preco);
        console.log("estoque do carro:"+" "+ this.estoque);
    }
}

let produto = new produtos("mustang", 500000, 50);
let produtos2 = new produtos("m2", 400000, 200);
produto.mostrarinformacoes();
produtos2.mostrarinformacoes();