// calcolare il prezzo del biglietto del treno in base ai kilometri e agli anni


// variabili
const costoPrimo = 0.21 
let generalita = document.getElementById("nome_cognome");
let km = document.getElementById("percorso");
let anni = document.getElementById("age");
let buttonInvia = document.getElementById("invia");
let buttonAnnulla = document.getElementById("reset");
let costoTotale
let sconto
let costo
let code
let codeUnic



buttonInvia.addEventListener("click",

    function(){ 
        // chiedere all'utente le generalità
        const nome  = generalita.value

        // chiedere all'utente i kilometri da percorrere
        const percorso  = km.value

        // chiedere all'utente l'età
        const eta  = anni.value

        console.log("nome", eta, "km", percorso, "nome", nome);

        costoTotale = costoPrimo * percorso

        // calcolare il costo totale del biglietto
        console.log(costoTotale);

        // se minorenne (sotto i 18 annni) allora applica sconto 20%
        if (eta< 18) {
            sconto = (costoTotale * 20) / 100 
            costo = (costoTotale - sconto);
        }else if (eta >= 65){ // se over 65 applica sconto del 40%
            sconto = (costoTotale * 40) / 100;
            costo = (costoTotale - sconto);
        }else{
            costo = costoTotale
        }

        code = Math.floor(Math.random() * 10) + 1;
        codeUnic = Math.floor(Math.random() * 10000) + 1000;

        document.getElementById("carrozza").innerHTML = `Biglietto standard`
        document.getElementById("carrozza").innerHTML = `${code}`
        document.getElementById("codice").innerHTML = `${codeUnic}`
        document.getElementById("costo").innerHTML = `${costo}€`


    }

);

buttonAnnulla.addEventListener("click",

    function(){ 
        // reset generalità
        generalita.value = ""

        // reset kilometri da percorrere
        km.value = ""

        // reset l'età
        anni.value = ""
    }

);







