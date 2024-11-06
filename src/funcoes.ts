// Função não Tipada;
// function calculaArea(base, altura) {
//     return base * altura;
// }
// Função Tipada;
function calculaArea(base: number, altura: number ): number {
    return base * altura;
}

// Funciona também em uma Arrow Function;
const calculaArea2 = (base: number, altura: number): number => base * altura;

// Utilizando o Rest;
// Quando não informamos o Return de uma Função o Retorno é Vazio (void);
function somar(...numeros: number[]): void {
    // Poderiamos usar o Reduce para fazer cálculos;
    // numeros.reduce();
    console.log(numeros);
}

// Podemos utilizar o Union Type em Funções também;
function teste(): string | number {
    if (10 > 5) {
        return 'Dez é maior que Cinco';
    } else {
        return 5;
    }
}
// Uma Variável da Função "teste" teria o mesmo Tipo da Função string | number;
const resultadoDeTeste = teste();