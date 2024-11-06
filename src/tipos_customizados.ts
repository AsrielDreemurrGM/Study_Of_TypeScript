// Criando um Tipo Personalizado;
type aluno = {
    nome: string;
    // Para fazermos uma Propriedade ser Opcional utilizamos o 
    // Ponto de Interrogação "?" após o Nome da Propriedade;
    cursos?: string[];
    idade: number;
}

// Utilizando o Tipo Personalizado;
const alunos: aluno[] = [
    {
        nome: "Izaias",
        cursos: ["Front-end", "UX/UI"],
        idade: 30,
    },
    {
        nome: "Manoela",
        cursos: ["Back-end", "Python"],
        idade: 26,
    }
]

// Adicionando um item ao Array;
alunos.push({
    nome: "José",
    cursos: ["Engenharia Civil"],
    idade: 32
})

// Podemos utilizá-lo também em um Objeto;
const novoAluno: aluno = {
    nome: "Pablo",
    idade: 22,
}

// Utilizando o Tipo Personalizado em uma Função;
function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}
