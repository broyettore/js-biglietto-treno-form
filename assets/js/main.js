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

// THEME SWITCH 

const themeLightBtn = document.querySelector(".ms-sun");

themeLightBtn.addEventListener("click", changeTheme);

function changeTheme() {

    themeLightBtn.classList.toggle("fa-moon");
    themeLightBtn.classList.toggle("ms-sun");
}


// DATI PER IL FORM

const formAppear = document.querySelector(".form-bottom");

const nomeUtente = document.getElementById("name").value;
const nomeUtenteGen = document.getElementById("user-name-gen");
const kmUtente = document.getElementById("distance").value;
const etàUtente = document.getElementById("age");
const userPrezzo = document.querySelector(".price");

// Prezzo Biglietto calcolato
let prezzoBase = 0.21 * kmUtente;


// FORM BUTTONS 
const cancelBtn = document.querySelector(".cancel")
const prezzoGenera = document.querySelector(".generate");


// EVENTO GENERA BIGLIETTO

prezzoGenera.addEventListener("click", showPrice)

function showPrice () {

    formAppear.classList.add("form-generated");

    nomeUtenteGen.innerHTML = nomeUtente;
    userPrezzo.innerHTML = Number(prezzoBase);

    // condizioni di sconto 

    if (etàUtente.value == "1") {
        userPrezzo.innerHTML = Number((prezzoBase -= prezzoBase * 0.2).toFixed(2));
    } else if (etàUtente.value == "2") {
        userPrezzo.innerHTML = Number((prezzoBase -= prezzoBase * 0.4).toFixed(2));
    } 
}

// EVENTO CANCELLA BIGLIETTO

cancelBtn.addEventListener("click", refreshSession);

function refreshSession() {

    formAppear.classList.remove("form-generated");
    // window.location.reload();

//     if(window.location.reload()) {
//         userPrezzo.innerHTML = 0;
//         nomeUtente.innerHTML = "";
//     }
}







