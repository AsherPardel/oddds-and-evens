// state
const bank = [];
const odds = [];
const evens = [];

// helpers functions

//add to the bank
function AddingToBank(number) {
  bank.push(number);
  render();
}
// sorting function from bank into odds or evens
function SortBank() {
  const number = bank.shift();

  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }
  render();
}

function SortOne() {
  SortBank();
  //render app
}
function SortAll() {
  while (bank.length > 0) {
    SortBank();
  }
  // render
}

// components
function NumberForm() {
  <form>
    <label>
      add a number to the bank
      <input type="text" name="number" type="number" />
    </label>
    <button>Add number</button>
    <button>Sort One</button>
    <button>Sort All</button>
  </form>;
  const $form = document.createElement("form");
  $form.innerHTML = `<label>
        add a number to the bank
        <input type="text" name="number" type="number" />
      </label>
      <button type="button">Add number</button>
      <button type="button">Sort One</button>
      <button type="button">Sort All</button>
    `;
  $form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
  const data = new FormData($form);
  const number = data.get("number");
  //if the text box is empty exit
  if (number === "") {
    return;
  }
  return $form;
  AddingToBank(Number(number));
}

function NumberInBank() {
  const $span = document.createElement("span");
  $span.textContent = number;
  return $span;
}

function NumberBank() {
  const $section = document.createElement("section");
  $section.innerHTML = `
    <h2>${label}</h2>
    <output></output>
    `;
  const $numbers = numbers.map(NumberBank);
  $section.querySelector("output").replaceChildren(...$numbers);
  return $section;
}
// render
function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
    <h1>odds and events</h1>
    <NumberForm></NumberForm>
    <NumberBank id="Bank"></NumberBank>
    <NumberBank id="odds"></NumberBank>
    <NumberBank id ="evens"></NumberBank>
    `;
  $app.querySelector("NumberForm").replaceWith(NumberForm());
  $app.querySelector("NumberBank#Bank").replaceWith(NumberBank("Bank", bank));
}
render();
