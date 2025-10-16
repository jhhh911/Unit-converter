let meter = 3.281;
let litre = 0.264;
let kilogram = 2.204;
let feet = 0.305;
let gallon = 4.546;
let pound = 0.453;

const button = document.getElementById("convert-btn");
const input = document.getElementById("input-number");
const output = document.getElementById("output");

button.onclick = function () {
  let userValue = input.value;

  output.innerHTML = ` <div id='length'>
  <h2>Length (Meter/Feet)</h2>
        <p>${userValue} meters = ${(userValue / feet).toFixed(3)} feet | 
        ${userValue} feet = ${(userValue / meter).toFixed(3)} meters</p>
</div>
<div id='volume'>
<h2>Volume (Litres/Gallons)</h2>
        <p>${userValue} litres = ${(userValue / gallon).toFixed(3)} gallons | 
        ${userValue} gallons = ${(userValue / litre).toFixed(3)} litres</p>
</div>
<div id='mass'>
<h2>Length (Kilograms/Pounds)</h2>
        <p>${userValue} kilos = ${(userValue / pound).toFixed(
    3
  )} pounds | ${userValue} pounds = 
        ${(userValue / kilogram).toFixed(3)} kilos</p>
        </div>`;
};
