console.log('HI, I am java and I am working fine');

// 1.:  Creare una formula per generare 5 numeri casuali
// 1.a: Creare un array per contenere i numeri casuali
// 2.:  Stampa i numeri generati sulla pagina
// 2.a  Creare cinque box per html
// 3.:  Dopo 30 secondi:
// 3.a: - i numeri scompaiono
// 3.b: - l'utente deve inserire i numeri che si ricorda tramite prompt

// 4.a: Il computer risponde con quanti numeri giusti è stato risolto il gioco
// 4.b: Il computer risponde con quali numeri giusti è stato risolto il gioco

// 1) Funzione per generare un numero random compreso tra 1 e 100

function randomNumbers () {
    return (Math.floor(Math.random() * 100) + 1);
}

/*Verifica*/
let random = randomNumbers();
console.log('Verifica numero casuale:', random, typeof random );

// 1.a) Creare un array per contenere i numeri casuali

let boxNumbers = [];

// 2.a) Ciclo for per replicare la funzione numero casuale 5 volte

for (let i = 0; i <= 5; i++) {

    let randomNums = randomNumbers();
    console.log('Numeri random:', randomNums, typeof randomNums);
    boxNumbers.push(randomNums);
    console.log('Array di numeri casuali', boxNumbers)

}

// 2.b) Ciclo for per creare div contenitori

for (let i = 0; i <= 5; i++) {

    document.createElement

}


