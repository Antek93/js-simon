console.log('HI, I am java and I am working fine');

// 1.:  Creare una formula per generare 5 numeri casuali
// 1.a: Creare un array per contenere i numeri casuali
// 2.:  Stampa i numeri generati sulla pagina
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

// 2) Ciclo for per replicare la funzione numero casuale 5 volte

for (let i = 0; i <= 5; i++) {

    let randomNums = randomNumbers();
    console.log('Numeri random:', randomNums, typeof randomNums);
    boxNumbers.push(randomNums);
    console.log('Array di numeri casuali', boxNumbers)

}

// Manipolare il DOM per selezionare i box

let boxUno = document.getElementById('First-box');
let boxDue = document.getElementById('Second-box');
let boxTre = document.getElementById('Third-box');
let boxQuattro = document.getElementById('Fourth-box');
let boxCinque = document.getElementById('Fifth-box');

// Inserire i numeri nei box

boxUno.innerHTML = boxNumbers[0];
boxDue.innerHTML = boxNumbers[1];
boxTre.innerHTML = boxNumbers[2];
boxQuattro.innerHTML = boxNumbers[3];
boxCinque.innerHTML = boxNumbers[4];

// Verifiche box

console.log('Box uno:', boxUno)
console.log('Box due:', boxDue)
console.log('Box tre:', boxTre)
console.log('Box quattro:', boxQuattro)
console.log('Box cinque', boxCinque)

// 3.)
// 3.a) Dopo 30 secondi i numeri scompaiono







