"use strict";

const maara = parseInt(prompt("Kuinka monta osallistujaa?"));
const nimet = [];

for (let i = 0; i < maara; i++) {
  nimet.push(prompt(`Anna osallistujan ${i + 1} nimi:`));
}

nimet.sort((a, b) => a.localeCompare(b, "fi"));

let html = "<ol>";
for (const nimi of nimet) {
  html += `<li>${nimi}</li>`;
}
html += "</ol>";

document.getElementById("tulos").innerHTML = html;