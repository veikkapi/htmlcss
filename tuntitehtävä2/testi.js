"use strict";

console.log("Hello World!");

let teksti = document.querySelector("#result")
teksti.textContent = "Hei maailma!";

let nimi = prompt("Anna nimesi: ");
console.log(nimi)

document.getElementById("calc").addEventListener("click", () => {
    let hintaInput = document.querySelector("#hinta");
    let hinta = parseFloat(hintaInput.value)
    let maaraInput = document.querySelector("#maara");
    let maara = parseInt(maaraInput.value);

    let kokonaishinta = hinta * maara

    let teksti = document.querySelector("#result")
    teksti.textContent = `Hinta: $(kokonaishinta)`;
})
