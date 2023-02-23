'use strict';

// NAV NENU 

const navMenu = document.querySelector(".nav-menu");
const hamburgerIcon = document.querySelector(".hamburger");

hamburgerIcon.addEventListener("click", showMenu);

function showMenu() {

    hamburgerIcon.classList.toggle("fa-xmark");
    hamburgerIcon.classList.toggle("fa-bars");
    navMenu.classList.toggle("show");
} 

// THEME SWITCH ( ONLY VISUAL, WILL ADD EFFECT LATER)

const themeLightBtn = document.querySelector(".ms-sun");

themeLightBtn.addEventListener("click", changeTheme);

function changeTheme() {

    themeLightBtn.classList.toggle("fa-moon");
    themeLightBtn.classList.toggle("ms-sun");
}


// FORM

// variabili prese dall'utente
const nomeUtente = document.getElementById("name");  // nome utente inserito
const utenteKm = document.getElementById("distance"); // km inseriti
const etàUtente = document.getElementById("age")  // fascia d'età selezionata
const prezzoKm = 0.21;  // Prezzo Biglietto al km

// variabili stampate
const formAppear = document.querySelector(".form-bottom");   // Biglietto generato
const nomePassaggero = document.getElementById("user-name-gen"); //  Nome passagero generato
const utentePrezzo = document.querySelector(".price"); // Prezzo generato
const tipoBiglietto = document.querySelector(".ticket-type")  // tipo di biglietto generato

// FORM BUTTONS 
const cancelBtn = document.querySelector(".cancel")     //button annulla
const prezzoGenera = document.querySelector(".generate");    //button genera


// EVENTO GENERA BIGLIETTO

prezzoGenera.addEventListener("click", showPrice)

function showPrice () {

    formAppear.classList.add("form-generated"); 

    // valori variabili 
    const nomeUtenteValue = nomeUtente.value;  // nome utente inserito
    const utenteKmValue = Number(utenteKm.value); // km inseriti
    const etàUtenteValue = etàUtente.value;  // fascia d'età selezionata
    let bigliettoPrezzo = prezzoKm * utenteKmValue; // calcolo del prezzo del biglietto

    // condizioni di sconto 

    if (etàUtenteValue === "giovane") {
        bigliettoPrezzo -= bigliettoPrezzo * 0.2;
        tipoBiglietto.innerHTML = "Sconto Under 18"
    } else if (etàUtenteValue === "anziano") {
        bigliettoPrezzo -= bigliettoPrezzo * 0.4;;
        tipoBiglietto.innerHTML = "Sconto Over 65"
    } else if (etàUtenteValue === "adulto") {
        tipoBiglietto.innerHTML = "Biglietto Standard"
    } else {
        tipoBiglietto.innerHTML = ""
    }

     // condizioni in cui vengono lasciati campi vuoti o 0km

    if (nomeUtente == "" || etàUtenteValue === "" || (utenteKm == "0" || utenteKm == "")) {
        alert("Campi Obbligatori");
        formAppear.classList.remove("form-generated");
    }

    // variabili generate
    nomePassaggero.innerHTML = nomeUtenteValue;
    utentePrezzo.innerHTML = bigliettoPrezzo.toFixed(2); // prezzo standard calcolato
    
    console.log(typeof utentePrezzo)
    console.log(typeof utenteKmValue)

}

// EVENTO SCOMPARE BIGLIETTO

cancelBtn.addEventListener("click", refreshSession);

function refreshSession() {

    formAppear.classList.remove("form-generated");
    document.getElementById("ms-form").reset();

}







