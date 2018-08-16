const gridArea = document.querySelector('#gridArea');
let userInput = 20;
let userSquared = userInput*userInput;
let basisValue = 600/userInput;
let refBasisValue = basisValue + "px";
console.log (refBasisValue);
console.log (userInput);
console.log (userSquared);

for (let i = 1; i<userSquared; i++) {
  const grid = document.createElement('div');
  grid.classList.add("gridCell");
  grid.style.width= refBasisValue;
  gridArea.appendChild(grid);
}