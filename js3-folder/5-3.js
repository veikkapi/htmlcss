"use strict";

const luvut = [];
let jatka = true;

while (jatka) {
  const luku = parseInt(prompt("Anna luku:"));

  if (luvut.includes(luku)) {
    console.log("Luku on jo annettu!");
    jatka = false;
  } else {
    luvut.push(luku);
  }
}

luvut.sort((a, b) => a - b); // numeerinen järjestys

for (const l of luvut) {
  console.log(l);
}