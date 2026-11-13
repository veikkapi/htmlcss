"use strict";

const koirat = [];
for (let i = 0; i < 6; i++) {
  koirat.push(prompt(`Anna koiran ${i + 1} nimi:`));
}

koirat.sort((a, b) => b.localeCompare(a, "fi")); // käänteinen järjestys

let html = "<ul>";
for (const koira of koirat) {
  html += `<li>${koira}</li>`;
}
html += "</ul>";

document.getElementById("tulos").innerHTML = html;