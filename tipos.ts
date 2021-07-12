// boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;


// String
const nome: string = 'Dieferson';

// Array
const idades: number[] = [23,28,45];
const idades2: Array<number> = [23,28,45];


// Tuple
let jogadores: [string, string, string];
jogadores = ['Dieferson', 'Dieferson', 'Dieferson'];


//Enum
enum StatusAprovacao {
    Aprovado,
    Pendente,
    Rejeitado
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado

// Any
const retornoDaAPI: any[] = [123, 'Vitor', false];
const retornoDaAPI: any[] = [123, 'Vitor', false];


// void
function printarNaTela(msg: string): void {
    console.log(msg);
}

// null e undefined

const u: undefined = undefined;
const n: null = null;

//Object
function criar(objecto: object){
/...
}
criar({
    propriedade: 1,
})
//criar('Vitor') dá erro