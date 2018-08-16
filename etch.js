const gridArea = document.querySelector('#gridArea');
let userInput = 30;
let userSquared = userInput*userInput;
let basisValue = 600/userInput;
let refBasisValue = basisValue + "px";
console.log (refBasisValue);
console.log (userInput);
console.log (userSquared);
let currentColour = 'black' ;
let selectedMode = "hover";

createGrid (userInput);  



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
  currentCell.style.backgroundColor= currentColour;
}

let interval;

function colourize() {
  interval = setInterval(function(){ currentColour = pastelColors(); }, 50);
}

function black() {
  clearInterval(interval);
  currentColour = 'black';
}

function pastelColors(){
  var r = (Math.round(Math.random()* 127) + 127).toString(16);
  var g = (Math.round(Math.random()* 127) + 127).toString(16);
  var b = (Math.round(Math.random()* 127) + 127).toString(16);
  return '#' + r + g + b;
}

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  mouseDown = 0;
}

function activateDrag() {
  selectedMode= "drag";
  document.querySelectorAll('.gridCell').forEach(node => node.onmouseover = dragCell);
  document.querySelectorAll('.gridCell').forEach(node => node.onmousedown = changeCell);
}

function dragCell(e) {
  if(mouseDown){
  changeCell(e);
}
}

function activateHover() {
  selectedMode= "hover";
  document.querySelectorAll('.gridCell').forEach(node => node.onmouseover = changeCell);
}

