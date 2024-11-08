// Interfaces só estão disponíveis no TS, não estão presentes no JS;
// Interfaces são meios de acesso;
// Define-se Interface como: 
// Uma Junção de Regras que Determinada Classe Deve Aplicar;
// Ex: Todo veículo tem que conseguir acelerar para ser um veículo, ou seja, 
// Acelerar é um Método Obrigatório de Existir;

// Conta Normal
class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}

// Conta Salário - Só pode recebe depósitos do Empregador e não pode
// fazer transações financeiras;
class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

// Por convenção, iniciamos Interfaces com a letra "I";
interface ITransacional {
    // O que fazemos em uma Interface?
    // Devemos informar quem for utilizá-la que é necessário criar um
    // método conforme o informado pela Interface Criada;
    // Utilizamos uma Arrow Function;
    // Podemos utilizar uma Classe para Tipar um Argumento;
    transferir: (valor:number, destinatario: Conta) => boolean;
    // Antes do Pix existiam as Taxas de Transferência, então vamos adicioná-las;
    taxaTransferencia: number;
}

interface ICnpj {
    cnpj: number;
}

// Podemos também Herdar Interfaces, ao fazer isto podemos Adicionar 
// Novos Campos/Obrigações e Reaproveitar campos de Uma Interface anterior;
interface ITelefoneECnpj extends ICnpj{
    telefone: number;
}

// Para utilizar uma Interface utilizamos a Palavra Reservada "implements";
// Podemos Implementar quantas Interfaces quisermos;
class ContaCorrente extends Conta implements ITransacional, ITelefoneECnpj {
    telefone: number = 123456;
    cnpj: number = 654321;
    // Aqui dentro implementamos o Código da Interface;
    // Transferir(Move um Valor, Para um Destinatário) {(Primeiro Diminui a Taxa do Valor) 
    // Depois Aumenta o Saldo do Destinatário e Retorna Verdadeiro ou Falso - Booleano}
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true
    };
    // Inicializamos a Taxa;
    taxaTransferencia: number = 0;
}