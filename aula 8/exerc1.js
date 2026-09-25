/*Uma loja de informática solicitou este sistema para melhorar seus processos internos.
Uma empresa deseja criar um sistema para cadastrar clientes. O sistema deverá receber
informações pessoais dos clientes e apresentar os dados cadastrados.
Antes de desenvolver o sistema, analise a demanda recebida e organize a solução.
Identifique as informações que o sistema precisa armazenar, as regras que precisam ser
consideradas, os cálculos necessários e os resultados que deverão ser apresentados ao
usuário.*/
let nome = prompt("digite seu nome");
let idade = prompt("digite sua idade");
let cidade = prompt("digite sua cidade");
    document.write(nome+" "+ idade+" "+cidade+" ")
let servico = prompt("digite seu serviço");
let pecas = prompt("digite as peças utilizadas");
    document.write(servico+" "+pecas+" ")
let valor1 = Number(prompt("digite o valor do serviço"));
let valor2 = Number(prompt("digite o valor das peças"));
let calculo= Number(prompt("digite o 1- para soma"));
if(calculo == 1){
    adicao = (valor1 + valor2)
    document.write("O resultado é: "+ adicao);
}
