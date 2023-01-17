// 1.:  Creare una formula per generare 5 numeri casuali
// 1.a: Creare un array per contenere i numeri casuali
// 2.:  Stampa i numeri generati sulla pagina
// 3.:  Dopo 30 secondi:
// 3.a: - i numeri scompaiono
// 3.b: - l'utente deve inserire i numeri che si ricorda tramite prompt
// 4.a: Il computer risponde con quanti numeri giusti è stato risolto il gioco
// 4.b: Il computer risponde con quali numeri giusti è stato risolto il gioco

/*-------------------Funzione per generare un numero random compreso tra 1 e 100-----------------*/

function randomNumbers () {
    return (Math.floor(Math.random() * 100) + 1);
}

/*----------------------Array per inserire i numeri generati randomicamente----------------------*/

let boxNumbers = [];

/*-------Ciclo for per generare 5 volte dei numeri randomici e inserirli nell'array--------------*/

for (let i = 0; i <= 5; i++) {

    let randomNums = randomNumbers();
    boxNumbers.push(randomNums);

}

/*-----------------------------------Selezionati elementi dal DOM--------------------------------*/

let boxUno = document.getElementById('First-box');
let boxDue = document.getElementById('Second-box');
let boxTre = document.getElementById('Third-box');
let boxQuattro = document.getElementById('Fourth-box');
let boxCinque = document.getElementById('Fifth-box');

/*------------------------------------Creati Array colori e box----------------------------------*/


let megaBox = [boxUno, boxDue, boxTre, boxQuattro, boxCinque];

/*----------------------Funzione per assegnare elementi al dom ----------------------------------*/


for (let i = 0; i <= 4; i++) {

    megaBox[i].innerHTML = boxNumbers[i];

    
}

/*-------------------------Dopo 30 secondo i numeri scompaiono-----------------------------------*/


setTimeout(function () {
    

    for (let i = 0; i <= 4; i++) {

        megaBox[i].innerHTML = '?';
    
        
    }

/*-------------------------Dopo 1 secondo compare alert TIME OUT--------------------------------*/

    setTimeout(function () {

        alert('TIME OUT');
    
    }, 32000);

}, 30000);


/*---------------------------------Creazione box colori-----------------------------------------*/

let orange = 'arancione';
let blue = 'blu';
let pink = 'rosa';
let purple = 'viola';
let yellow = 'giallo';

/*---------------------------------Creazione array colori-----------------------------------------*/

let color = [orange, blue, pink, purple, yellow]

/*---------------Creazione funzione per ricevere num da utenti rispetto al colore-----------------*/

function colorFunction(color, [j]) {
    
    console.log(color[j]); //Descrizione in console: colore.
    color[j] = parseInt(prompt('Inserisci il numero del box' + ' ' + color[j] + ':'));
    console.log(color[j]); //Descrizione in console: numero che corrisponde al colore.

    if (isNaN(color[j])) {
        alert('Puoi inserire solo numeri');
        console.log(color[j]); //Descrizione in console: colore.
        color[j] = parseInt(prompt('Inserisci il numero del box' + ' ' + color[j] + ':'));
        console.log(color[j]); //Descrizione in console: numero che corrisponde al colore.

    }

}

/*--------------------------Applicata funzione 5 volte tramite ciclo for-------------------------*/


setTimeout(function () {
    
    let k = 0;
    for(let i = 0; i <= 4; i++) {

     colorFunction(color, [k]);
     verifica(color[k], boxNumbers[k], megaBox[k]) //verifica box
     k++;

    }

    setTimeout(function () {

        alert("Il tuo punteggio è: " + '' + score + '')
    
    }, 2000);



}, 35000);

/*----------------------------Creata funzione per verifica punteggio----------------------------*/

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


