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













// // VARIABILI 

// const nomeUtente = document.getElementById("name");
// const kmUtente = document.getElementById("distance").value;
// const etàUtente = document.getElementById("age");

// const prezzoGenera = document.querySelector(".generate");
// const userPrice = document.querySelector(".price");

// const prezzoBase = 0.21 * kmUtente;
// const scontoMinorenni = prezzoBase - (prezzoBase / 100) * 20
// const scontoAnziani = prezzoBase - (prezzoBase / 100) * 40

// // EVENTI 

// prezzoGenera.addEventListener("click", showPrice)

// function showPrice () {

//     userPrice.innerHTML = prezzoBase

//     // CONDIZIONI DI SCONTO 

//     if (etàUtente.value == "user-age-small") {
//         userPrice.innerHTML = Number(scontoMinorenni.toFixed(2));
//     } else if (etàUtente.value == "user-age-old") {
//         userPrice.innerHTML = Number(scontoAnziani.toFixed(2));
//     }
// }

// kmUtente.addEventListener("change", updateKm)

// function updateKm () {
//     userPrice.innerHTML = prezzoBase
// }






