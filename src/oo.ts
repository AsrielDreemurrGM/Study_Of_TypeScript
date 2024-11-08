// Orientação de Objetos no JS
// class Pessoa {
//     constructor(nome) {
//         this.nome = nome;
//     }
// }
// Orientação de Objetos no TS
class Pessoa {
    // Temos que Declarar Propriedades Antes do Construtor; 
    // Também devemos Sempre informar o Tipo;
    nome: string;
    // Propriedade Opcional, então colocamos o "?";
    renda?: number;

    // Precisamos sempre informar os tipos no TS;
    // As Propriedades Opcionais devem Sempre vir Por Último;
    constructor(nome: any, renda?:number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}

// No TS foi adicionado um Novo Tipo de Modificador (Encapsulamento - Público/Privado);
// Este Novo Modificador é chamado de Protected (Protegido);
class ContaBancaria {
    // Uma propriedade Privada só é acessível na Classe onde foi Criada, nem mesmo
    // herdando conseguimos acessá-la;
    // Porém, se ela for classificada como Protected, ela é acessível quando Herdada;
    protected saldo: number = 0;
    // Propriedades podem ser iniciadas Vazias ou com um Valor Inicial;
    // Não é necessário informar que a classe é Pública, já que é o Valor Padrão;
    public numeroConta: number;

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }

    // Uma Propriedade Estática pertence a Classe e não a Instância, ou seja,
    // ela pode ser chamada sem a criação de um Objeto e não pode ser
    // acessada dentro de uma Instância;
    static retornaNumeroDobanco() {
        return 321;
    }

    // Também podemos Classificar Métodos;
    private getSaldo() {
        return this.saldo;
    }

    depositar(valor:number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        // A Propriedade "saldo" não é accessível enquanto Privada,
        // Porém, é acessível quando Classificada como Protegida;
        this.saldo = valor * 2;
    }
}

// Criando uma Instância de Conta;
const contaDoPedro = new ContaBancariaPessoaFisica(123456);

// Acessando o Método Estático sem utilizar de uma Instância;
ContaBancaria.retornaNumeroDobanco();