let vagas = [

    ["vaga Livre", "vaga Livre", "vaga Ocupada","vaga Ocupada","vaga Livre"],

    ["vaga Ocupada", "vaga Livre", "vaga Livre","vaga Ocupada", "vaga Livre"],

    ["vaga Livre", "vaga Ocupada", "vaga Livre", "vaga Livre", "vaga Livre"]

]

for (let linhas = 0; linhas < vagas.length; linhas++) {
    const vaga = vagas[linhas];

    for (let colunas = 0; colunas < vaga.length; colunas++) {
        const statusvaga = vaga[colunas];

        if (statusvaga === "vaga Livre") {

            console.log("vaga disponível!")
            
        } else {

            console.log("vaga ocupada!")

        }
        
    }
    
}