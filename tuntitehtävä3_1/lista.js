"use strict";

const nimet = [];

for (let i = 0; i < 5; i++) {
    nimet.push(prompt("Anna nimi:"));
}

document.querySelector("#kaikki").innerHTML = nimet;

document.querySelector("#vika").innerHTML = nimet[nimet.leght-1];

taulukko.sort();
document.querySelector("#sort").innerHTML = nimet[0];

taulukko.shift();
document.querySelector("#muokattu").innerHTML = nimet;
