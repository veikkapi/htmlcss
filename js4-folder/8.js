"use strict";

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operation = document.querySelector('#operation');
const button = document.querySelector('button');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
  const a = Number(num1.value);
  const b = Number(num2.value);
  let answer;

  switch (operation.value) {
    case 'add':
      answer = a + b;
      break;
    case 'sub':
      answer = a - b;
      break;
    case 'multi':
      answer = a * b;
      break;
    case 'div':
      answer = a / b;
      break;
  }
  result.textContent = answer;
});