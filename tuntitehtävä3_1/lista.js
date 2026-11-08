"use strict";

const nimet = [];

for (let i = 0; i < 5; i++) {
    nimet.push(prompt("Anna nimi:"));
}

document.querySelector("#kaikki").innerHTML = nimet;

document.querySelector("#vika").innerHTML = nimet[nimet.length-1];

nimet.sort();
document.querySelector("#sort").innerHTML = nimet[0];

nimet.shift();
document.querySelector("#muokattu").innerHTML = nimet;
