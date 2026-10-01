/*Uma loja possui 3 setores, e cada setor possui 4 produtos. A quantidade disponível de cada produto
está armazenada em uma matriz. Percorra toda a matriz e apresente os produtos que possuem
menos de 5 unidades. Ao final, informe quantos produtos precisam de reposição.*/
let produtos = [
    ["p1","p2,","p3","p4"],

    ["p1.1","p2.1,","p3.1","p4.1"],

    ["p1.2","p2.2","p3.2","p4.2"]
]

for (let i = 0; i < produtos.length; i++) {

    for (let j = 0; j < produtos[i].length; j++) {

        console.log("produto " + (i + 1) + " - unidade " + (j + 1) + ": " + produtos[i][j]);

    }
}

console.table(produtos)
