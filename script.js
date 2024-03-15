document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");

  function clearDisplay() {
    display.value = "";
  }

  function deleteCharacter() {
    display.value = display.value.slice(0, -1);
  }

  function appendValue(value) {
    display.value += value;
  }

  function calculateResult() {
    try {
      const result = Function('"use strict";return (' + display.value + ")")();
      display.value = result;
    } catch (error) {
      display.value = "Error";
    }
  }

  document
    .getElementById("clearButton")
    .addEventListener("click", clearDisplay);
  document
    .getElementById("deleteButton")
    .addEventListener("click", deleteCharacter);
  document.getElementById("dotButton").addEventListener("click", function () {
    appendValue(".");
  });
  document
    .getElementById("divideButton")
    .addEventListener("click", function () {
      appendValue("/");
    });
  document
    .getElementById("multiplyButton")
    .addEventListener("click", function () {
      appendValue("*");
    });
  document
    .getElementById("subtractButton")
    .addEventListener("click", function () {
      appendValue("-");
    });
  document.getElementById("addButton").addEventListener("click", function () {
    appendValue("+");
  });

  const numberButtons = document.querySelectorAll(".numberButton");
  numberButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      appendValue(button.value);
    });
  });

  document
    .getElementById("equalButton")
    .addEventListener("click", calculateResult);
});
