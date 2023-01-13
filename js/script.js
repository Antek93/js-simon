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

console.log('Box yellow:', boxUno)
console.log('Box pink:', boxDue)
console.log('Box orange:', boxTre)
console.log('Box blue:', boxQuattro)
console.log('Box purple', boxCinque)

// 3.)
// 3.a) Dopo 30 secondi i numeri scompaiono

setTimeout(function () {

    boxUno.innerHTML = '?';
    boxDue.innerHTML = '?';
    boxTre.innerHTML = '?';
    boxQuattro.innerHTML = '?';
    boxCinque.innerHTML = '?';

}, 30000);

// 3.a) Dopo 31 secondi compare alert TIME OUT

setTimeout(function () {

    alert('TIME OUT');

}, 31000);

// 3.a) Dopo 32 secondi compaiono i prompt


setTimeout(function () {

    let orange = parseInt(prompt('Inserisci il numero del box arancione'));
    console.log('Blocco arancione:', orange);
    if (isNaN(orange)) {
        alert('Puoi inserire solo numeri')
        let orange = parseInt(prompt('Inserisci il numero del box arancione'));
        console.log('Blocco arancione:', orange);

    }

    let blue = parseInt(prompt('Inserisci il numero del box blu'));
    console.log('Blocco blu:', blue);
    if (isNaN(blue)) {
        alert('Puoi inserire solo numeri')
        let blue = parseInt(prompt('Inserisci il numero del box blu'));
        console.log('Blocco blu:', blue);

    }

    let pink = parseInt(prompt('Inserisci il numero del box rosa'));
    console.log('Blocco rosa:', pink);
    if (isNaN(pink)) {
        alert('Puoi inserire solo numeri')
        let pink = parseInt(prompt('Inserisci il numero del box rosa'));
        console.log('Blocco rosa:', pink);

    }

    let purple = parseInt(prompt('Inserisci il numero del box viola'));
    console.log('Blocco viola:', purple );
    if (isNaN(purple)) {
        alert('Puoi inserire solo numeri')
        let purple = parseInt(prompt('Inserisci il numero del box viola'));
        console.log('Blocco viola:', purple );

    }

    let yellow = parseInt(prompt('Inserisci il numero del box giallo'));
    console.log('Blocco giallo:', yellow);
    if (isNaN(yellow)) {
        alert('Puoi inserire solo numeri')
        let yellow = parseInt(prompt('Inserisci il numero del box giallo'));
        console.log('Blocco giallo:', yellow);
    }

    verifica(yellow, boxNumbers[0], boxUno) //verifica box
    verifica(pink, boxNumbers[1], boxDue) //verifica box
    verifica(orange, boxNumbers[2], boxTre) //verifica box
    verifica(blue, boxNumbers[3], boxQuattro) //verifica box
    verifica(purple, boxNumbers[4], boxCinque) //verifica box

    setTimeout(function () {

        alert("Il tuo punteggio è: " + '' + score + '')
    
    }, 2000);



}, 32000);

// Creo funzione per ripete if quando necessito

let score = 0;

function verifica(numUtente, arraycasuale, box) {

    if(numUtente == arraycasuale) {

        score = score + 1;
        box.classList.add('corretto');
        console.log('punteggio', score)

        

    } else {
        box.classList.add('scorretto');
        
    }


}





