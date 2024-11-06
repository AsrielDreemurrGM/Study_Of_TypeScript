// Não podemos ter duas Variáveis com o Mesmo Nome no TypeScript,
// mesmo em arquivos diferentes;
// let idade: any = 19;
// Para contornarmos isto, utilizamos o "namespace";
namespace casting {
    let idade: any = 19;
    // Para fazermos o TypeScript interpretar um Tipo de Valor como Outro 
    // Tipo, utilizamos a palavra reservada "as", que significa "como";
    // "toFixed()" adiciona Casas Decimais;
    (idade as number).toFixed();
    // ".length" retorna o Tamanho da String;
    (idade as string).length;
    // "idade" como um Array;
    // Porém, assim, como um Array, não irá funcionar, já que estamos 'enganando'
    // o TypeScript, fazendo ele tratar um Valor Bruto (19) como Array;
    // Devemos sempre ter cuidado ao fazer este tipo de alteração, onde 'enganamos'
    // o TypeScript, para não encontrarmos um erro ao executar o código;
    (idade as string[]).forEach( x => {
        console.log(x)
    })

    // Armazenando um Número em uma String;
    let nome: string = 19 as unknown as string;
}