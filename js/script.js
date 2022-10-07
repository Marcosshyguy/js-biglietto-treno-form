// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// user input
let pricePerKm = 0.21;
// form
// kilometers to cover
let kiloMetersInput = document.getElementById("kilometres");


// user age
let userAgeInput = document.getElementById("user-age");
// btn
let buttonSubmit = document.getElementById("cta");
buttonSubmit.addEventListener("click", function(){
    let kiloMeters = parseInt(kiloMetersInput.value);
    let userAge = parseInt(userAgeInput.value);
    let ticketPrice = kiloMeters * pricePerKm;
    console.log(ticketPrice)
    // discounts
    let childDiscount  = ticketPrice * 0.2;
    let oldDiscount  = ticketPrice * 0.4;

    //child price senior price
    const ticketChildPrice = ticketPrice - childDiscount;
    const ticketOldPrice = ticketPrice - oldDiscount;

    // data elaboration
    if(userAge <= 18){
        ticketPrice = ticketChildPrice.toFixed(2);
    }
    else if(userAge >= 65){
        ticketPrice = ticketOldPrice.toFixed(2);
    }
    else{
    ticketPrice = ticketPrice.toFixed(2);
    }
    // reset
    userAgeInput.value = ""
    kiloMetersInput.value = ""
    // output
    document.getElementById("ticket-price").innerHTML = "Il prezzo del ticket é:" + ticketPrice + "$";
})
