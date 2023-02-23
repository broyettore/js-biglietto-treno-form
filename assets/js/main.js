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

const formAppear = document.querySelector(".form-bottom");   // Biglietto generato
const nomePassaggero = document.getElementById("user-name-gen"); //  Nome passagero generato
const utentePrezzo = document.querySelector(".price"); // Prezzo generato
const tipoBiglietto = document.querySelector(".ticket-type")  // tipo di biglietto generato
const prezzoKm = 0.21;  // Prezzo Biglietto al km


// FORM BUTTONS 
const cancelBtn = document.querySelector(".cancel")     //button annulla
const prezzoGenera = document.querySelector(".generate");    //button genera


// EVENTO GENERA BIGLIETTO

prezzoGenera.addEventListener("click", showPrice)

function showPrice () {

    formAppear.classList.add("form-generated"); 

    // variabili prese dall'utente
    let nomeUtente = document.getElementById("name").value;  // nome utente inserito
    let utenteKm = document.getElementById("distance").value; // km inseriti
    let etàUtente = document.getElementById("age").value;  // fascia d'età selezionata
    let bigliettoPrezzo = prezzoKm * utenteKm; // calcolo del prezzo del biglietto

    // condizioni di sconto 

    if (etàUtente === "giovane") {
        bigliettoPrezzo -= bigliettoPrezzo * 0.2;
        tipoBiglietto.innerHTML = "Sconto Under 18"
    } else if (etàUtente === "anziano") {
        bigliettoPrezzo -= bigliettoPrezzo * 0.4;;
        tipoBiglietto.innerHTML = "Sconto Over 65"
    } else if (etàUtente === "adulto") {
        tipoBiglietto.innerHTML = "Biglietto Standard"
    } else {
        tipoBiglietto.innerHTML = ""
    }

     // condizioni in cui vengono lasciati campi vuoti o 0km

    if (nomeUtente == "" || (utenteKm == "0" || utenteKm == "")) {
        alert("Campi Obbligatori");
        formAppear.classList.remove("form-generated");
    }

    // variabili generate
    nomePassaggero.innerHTML = nomeUtente;
    utentePrezzo.innerHTML = Number(bigliettoPrezzo.toFixed(2)); // prezzo standard calcolato

}

// EVENTO SCOMPARE BIGLIETTO

cancelBtn.addEventListener("click", refreshSession);

function refreshSession() {

    formAppear.classList.remove("form-generated");
    document.getElementById("ms-form").reset();

}







