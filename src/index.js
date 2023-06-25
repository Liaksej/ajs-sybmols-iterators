import { Team } from "./js/team.js";

const team = new Team();

// Способ вызова любого одного элемента из класса Team
console.log(team[Symbol.iterator]().next().value);

// Способ вызова элементов из класса Team по одному
for (let caracter of team) {
  console.log(caracter);
}
