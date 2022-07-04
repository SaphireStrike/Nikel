const nome = "Jessica Valmini";
let nome2 = "";
let pessoaDefault = {
    nome: "Jessica Valmini",
    idade: "26",
    trabalho: "Desempregada"
}

let nomes = ["Jessica Valmini", "Maria Silva", "Pedro Silva"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Jessica Valmini",
        idade: "26",
        trabalho: "Desempregada"
    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Designer"
    }
];


function AlterarNome () {
    nome2 = "Maria Silva"
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(NovoNome) {
    nome2 = NovoNome;
    console.log("valor alterado recebendo um nome:")
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log(pessoa);

    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("---------Imprimir Pessoas---------")
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
    
        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro silva",
    idade: "28",
    trabalho: "Porteiro"
})

imprimirPessoas();

console.log(pessoas);

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome: " Maria Silva",
//    idade: "25",
//    trabalho: "UX/UI Designer"
//});

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva")

//AlterarNome();