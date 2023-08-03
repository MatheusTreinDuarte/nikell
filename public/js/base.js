const nome = "Marcelo Eltz";
let nome2 = "";
let pessoadefault = {
    nome: "Matheus",
    idade: "22",
    trabalho: "Programador"
}

let pessoasListaVazia = [];

let nomes = ["Matheus", "Maria Silva", "Pedro Silva"];

let pessoas =[
    {
        nome: "Matheus",
        idade: "22",
        trabalho: "Programador"
    },
    {
        nome: "Maria Silva",
        idade: "24",
        trabalho: "Programador"
    }
];


function alterarnome() {
    nome2 = "Maria Silva"
    console.log("Valor alterado:")
    console.log(nome2);
}

function recebeEalteranome(novoNome) {
    nome2= novoNome;
    console.log("Valor alterado recebendo um nome")
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("trabalho");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(Pessoa) {
    pessoas.push(Pessoa);
}

function imprimirPessoas() {
    console.log("=======IMPRIMIR PESSOAS=======")
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome)

        console.log("Idade:");
        console.log(item.idade);

        console.log("trabalho");
        console.log(item.trabalho);
    })
}

imprimirPessoas()

adicionarPessoa( {
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
})

imprimirPessoas()

//imprimirPessoa(pessoadefault);

//imprimirPessoa({nome: "Matheus",idade: "22",trabalho: "UX/UI Designer"});
 


//recebeEalteranome("João Silva Perreira")
//recebeEalteranome("Maria Silva")

//alterarnome();