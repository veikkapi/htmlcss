"use strict";

const a = parseInt(prompt("Anna ensimmäinen luku:"));
const b = parseInt(prompt("Anna toinen luku:"));
const c = parseInt(prompt("Anna kolmas luku:"));

const summa = a + b + c;
const tulo = a * b * c;
const keskiarvo = summa / 3;

document.getElementById("tulos").innerHTML =
  `Summa: ${summa}<br>Tulo: ${tulo}<br>Keskiarvo: ${keskiarvo}`;