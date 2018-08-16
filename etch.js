const gridArea = document.querySelector('#gridArea');
let userInput = 10;
let userSquared = userInput*userInput;
let basisValue = 600/userInput;
let refBasisValue = basisValue + "px";
console.log (refBasisValue);
console.log (userInput);
console.log (userSquared);

createGrid (userInput);
document.querySelectorAll('.gridCell').forEach(node => node.onmouseover = changeCell);

function updateValues(){
  userSquared = userInput*userInput;
  basisValue = 600/userInput;
  refBasisValue = basisValue + "px";
}

function createGrid (userInput) { 
  for (let i = 1; i<userSquared; i++) {
    const grid = document.createElement('div');
    grid.classList.add("gridCell");
    grid.style.width= refBasisValue;
    gridArea.appendChild(grid);
  }
}

function changeGrid() {
  let value = prompt("Please enter how many squares wide you want your canvas to be. The maximum value accepted is 60.",30);
  while(gridArea.firstChild){
    gridArea.removeChild(gridArea.firstChild);}
  userInput = parseInt(value);
  updateValues();
  console.log(userInput);
  createGrid(userInput);
  document.querySelectorAll('.gridCell').forEach(node => node.onmouseover = changeCell);
}

function clearGrid() {
  let nodes = document.getElementById('gridArea').childNodes;
  for(var i=0; i<nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == 'div') {
         nodes[i].style.backgroundColor = 'white';
     }
  }
  console.log(typeof (grid));
}


function changeCell(e) {
  let currentCell = e.target;
  currentCell.style.backgroundColor= 'black';
}

