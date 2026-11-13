"use strict";

const luvut = [];
let luku;

do {
  luku = parseInt(prompt("Anna luku (0 lopettaa):"));
  if (luku !== 0) {
    luvut.push(luku);
  }
} while (luku !== 0);

luvut.sort((a, b) => b - a);

for (const l of luvut) {
  console.log(l);
}