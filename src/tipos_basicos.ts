// Para informar no TypeScript o Tipo de uma Variável com o Dois Pontos ":",
// seguido do Tipo desejado e do Valor da Variável;
let estaChovendo: boolean = false;

estaChovendo = true;

let idade: number = 19;
// No TypeScript não tem diferença entre Inteiro e Decimal;
let altura: number = 1.83;

const nacionalidade: string = 'Brasileira';

// Com o TypeScript não podemos ter um Array com Valores de vários Tipos,
// diferente do JavaScript, além disto, sempre Tipamos o Array no TypeScript;
const colegas: string[] = ['José', 'Luís'];

// Podemos Tipar um Array atráves da Palavra Reservada "Array";
const tecnologias: Array<string> = ['HTML', 'CSS', 'JS'];

// Temos no TypeScript outro Tipo de Array, chamado de Read Only (Somente Leitura);
// A diferença deste Tipo de Array é que não temos a função ".push", que adicionaria
// um novo item ao Array;
const notas: ReadonlyArray<number> = [8, 10, 5, 6];

// Temos um Tipo de Estrutura no TypeScript que permite a criação de uma estrutura,
// parecida com Array, com tipos de dados diferentes, chamamos isto de "Tupla";
// Para criar uma Tupla usamos os Colchetes, fornecendo dentro deles os Tipos Desejados;
// const lista: [string, boolean, number] = ['Eduardo', true, 19];
// Podemos também adicionar um nome aos Campos;
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['Eduardo', true, 19];

// Outro Tipo de Array é o Union Type, que é união de Tipos;
// Com ele conseguimos fazer com que a variável aceite mais de um Tipo,
// fazemos isto com a tecla Pipe "|";
let idadeDaAna: number | string = 25
idadeDaAna = '25 anos';

// Temos também o Array do Tipo Any, que aceita qualquer Valor;
// Recomenda-se usá-lo somente quando necessário;
let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = ['teste1', 'teste2'];
dadosDaApi = 'string';

// Informação Extra - Exemplo de Tipagem Implícita
// let curso = 'front-end';
// curso = 10;
// Isto não irá aceitar alteração, mesmo que não informamos o tipo da Variável
// "curso", pois o TypeScript verifica sozinho que a Variável foi iniciada com 
// uma String e supõe que ela sempre será isto, uma Variável de Valor = String;
// Porém é recomendado informar o Tipo sempre que possível;