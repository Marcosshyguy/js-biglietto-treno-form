// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2 (BONUS):
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).


// user input
let pricePerKm = 0.21;

// hidden ticket
let ticketHidden = document.getElementById("output-data");
// dropdown userAge values
// const minorValue = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
// console.log( typeof(minorValue), Array.isArray(minorValue))

// form
// kilometers to cover
let kiloMetersInput = document.getElementById("kilometres");

// user age
let userAgeInput = document.getElementById("user-age");

// name
let userNameInput = document.getElementById("user-name");

// btn
let buttonSubmit = document.getElementById("cta");
let buttonCancel = document.getElementById("cancel-btn");

// wagon train randomaizer
let trainWagon = Math.floor(Math.random() * 10 ) + 1;
    
// cp value
let cpCode = Math.floor(Math.random() * 100000) +1 ;

// add listener
buttonSubmit.addEventListener("click", function(){

    let kiloMeters = parseInt(kiloMetersInput.value);
    // let userAge = parseInt(userAgeInput.value);
    let userAgeMinor = userAgeInput.options[1];
    console.log(userAgeMinor)
    let userAgeAdult = userAgeInput.options[2];
    console.log(userAgeAdult)
    let userAgeSenior = userAgeInput.options[3];
    console.log(userAgeSenior)
    let userName = userNameInput.value;
    let price = ""


    let ticketPrice = kiloMeters * pricePerKm;
    console.log(ticketPrice)
    // discounts
    let childDiscount  = ticketPrice * 0.2;
    let oldDiscount  = ticketPrice * 0.4;

    //child price senior price
    const ticketChildPrice = ticketPrice - childDiscount;
    const ticketOldPrice = ticketPrice - oldDiscount;

    // data elaboration
    // if (userAge <= 18){
    if(userAgeMinor.selected == true){
        ticketPrice = ticketChildPrice.toFixed(2);
        price = "Biglietto ridotto";
    }
    // if (userAge >= 65){
    else if(userAgeSenior.selected == true){
        ticketPrice = ticketOldPrice.toFixed(2);
        price = "Biglietto ridotto";
    }
    else if(userAgeAdult.selected == true){
    ticketPrice = ticketPrice.toFixed(2);
        price = "Biglietto Standard"
    }


    

    // visible ticket
    let visibleTicket = ticketHidden.classList.remove("d-none");
    // output

    document.getElementById("ticket-price").innerHTML = ticketPrice;
    document.getElementById("cp-code").innerHTML = cpCode;
    document.getElementById("train-wagon").innerHTML = trainWagon;
    document.getElementById("offerta").innerHTML = price;
    document.getElementById("passenger-name").innerHTML = userName;
})

// cancel listenr
if()
buttonCancel.addEventListener("click", function(){
    kiloMetersInput.value = "";
    userNameInput.value = "";
    userAgeInput.value = "";
    ticketHidden.classList.add("d-none");

})