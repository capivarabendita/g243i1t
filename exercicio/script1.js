const Fila = (_locaSaida) =>{
    let locaSaida = _locaSaida;
    let dados = [];
    const tamanho = () => dados.length;
    const vazia = () => dados.length < 1;
    const enfileirar = valor => {
        dados.push(valor);
        imprimir();
    }
    const desenfileirar = () =>{
        dados.splice(0,1);
        imprimir();
    }
    const imprimir = () => {
        console.log(dados);
        dado_saida = "";
        for(let i = 0; i < tamanho(); i++){
            dado_saida += dados[i].id + "(" + dados[i].itens+") ";

        }
        document.getElementById(locaSaida).innerHTML = dado_saida;

    }
    return{
        enfileirar, desenfileirar
    }
}

const F1 = Fila('saidafilageral');



const Cliente = (_id,_itens) =>{
    return{
        id:_id,
        itens: _itens
    }
}

const gerarItens = () => Math.floor(Math.random() * (15 - 3) + 2)
const tamanhoInicialFila = 15;
(function(){
    for(let i = 1; i <= tamanhoInicialFila; i++){
        F1.enfileirar(Cliente("P"+i,gerarItens()));
    }
} )();                                                        

