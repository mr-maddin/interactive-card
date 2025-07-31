"use strict";

let nameInput = document.getElementById("cardholder-input");
let nameOutput = document.getElementById("cardholder-output");

let cardInput = document.getElementById("cardnumber-input");
let cardOutput = document.getElementById("cardnumber-output");

let expDateInputMM = document.getElementById("exp-mm");
let expDateInputYY = document.getElementById("exp-yy");
let expDateOutput = document.getElementById("expire-date-output");

let cvcInput = document.getElementById("cvc-input");
let cvcOutput = document.getElementById("cvc-output");

let validateName = document.getElementById("validateName");
let validateNumber = document.getElementById("validateNumber");
let validateExpMM = document.getElementById("validateExpMM");
let validateExpYY = document.getElementById("validateExpYY");
let validateCvc = document.getElementById("validateCvc");

nameInput.addEventListener("input", function () {
  nameOutput.textContent = nameInput.value || "John Doe";
});

cardInput.addEventListener("input", function () {
  let rawValue = cardInput.value.replace(/\D/g, "").substring(0, 16);
  let formattedValue = rawValue.replace(/(.{4})/g, "$1 ").trim();
  cardInput.value = formattedValue;
  cardOutput.textContent = formattedValue || "0000 0000 0000 0000";
});

expDateInputMM.addEventListener("input", function () {
  expDateOutput.textContent = (expDateInputMM.value || "00") + "/" + (expDateInputYY.value || "00");
});

expDateInputYY.addEventListener("input", function () {
  expDateOutput.textContent = (expDateInputMM.value || "00") + "/" + (expDateInputYY.value || "00");
});

cvcInput.addEventListener("input", function () {
  cvcOutput.textContent = cvcInput.value || "000";
});

function validate() {
  //NAME
  if (nameInput.value.length < 5) {
    validateName.textContent = "Please enter a valid Name";
  } else {
    validateName.textContent = "";
  }
  //CARD NUMBER
  const cardNumberRaw = cardInput.value.replace(/\s/g, "");
  if (!/^\d{16}$/.test(cardNumberRaw)) {
    validateNumber.textContent = "Please enter a valid 16-digit card number";
  } else {
    validateNumber.textContent = "";
  }
  //MONTH
  const mm = parseInt(expDateInputMM.value, 10);
  if (isNaN(mm) || mm < 1 || mm > 12) {
    validateExpMM.textContent = "Invalid month";
  } else {
    validateExpMM.textContent = "";
  }
  //YEAR
  if (expDateInputYY.value.trim() === "") {
    validateExpYY.textContent = "Invalid year";
  } else {
    validateExpYY.textContent = "";
  }
  //CVC
  if (!/^\d{3}$/.test(cardOutput.value)) {
    validateCvc.textContent = "Enter a valid CVC Number";
  } else {
    validateCvc.textContent = "";
  }
}
