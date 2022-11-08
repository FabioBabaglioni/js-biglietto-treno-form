// calcolare il prezzo del biglietto del treno in base ai kilometri e agli anni


// variabili
const costoPrimo = 0.21 
const generalita = document.getElementById("nome_cognome");
const buttonInvia = document.getElementById("invia");
const age = document.getElementById("age");

let anni
let kilometriDaPercorrere
let costoTotale
let sconto
let costo


buttonInvia.addEventListener("click",

    function(){
        const nome  = inputField.value
        console.log(nome);
    }

);




// chiedere all'utente gli anni 



// chiedere all'utente il numero dei kilometri che dovrà percorrere

// kilometriDaPercorrere = parseInt(prompt("Quanti chilometri dovrai percorrere?"));

// console.log(kilometriDaPercorrere);

// calcolare il costo totale del biglietto

costoTotale = costoPrimo * kilometriDaPercorrere

// console.log(costoTotale);

// se minorenne (sotto i 18 annni) allora applica sconto 20%
if (anni < 18) {
    sconto = (costoTotale * 20) / 100 
    costo = (costoTotale - sconto);
    // console.log("Il tuo biglietto costerà:", costo)
}else if (anni >= 65){ // se over 65 applica sconto del 40%
    sconto = (costoTotale * 40) / 100;
    costo = (costoTotale - sconto);
    // console.log("Il tuo biglietto costerà:", costo)
}else{
    // console.log("Il tuo biglietto costerà:", costoTotale)
}