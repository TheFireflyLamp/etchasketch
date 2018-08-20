const gridArea = document.querySelector('#gridArea');
let userInput = 30;
let userSquared = userInput*userInput;
let basisValue = 600/userInput;
let refBasisValue = basisValue + "px";
console.log (refBasisValue);
console.log (userInput);
console.log (userSquared);
let currentColour = 'black' ;
let selectedMode = "drag";
let mode = "ink";

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
    grid.style.backgroundColor= "rgb(255,255,255)";
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
  mode = "colour";
  interval = setInterval(function(){ currentColour = pastelColors(); }, 50);
  if (selectedMode == "hover") {
  document.querySelectorAll('.gridCell').forEach(node => node.onmouseover = changeCell);
  }
  else if (selectedMode == "drag"){
    document.querySelectorAll('.gridCell').forEach(node => node.onmouseover = dragCell);
    document.querySelectorAll('.gridCell').forEach(node => node.onmousedown = dragCell);
  }
}


function black() {
  mode = "ink";
  clearInterval(interval);
  currentColour = "rgb(0,0,0)";
  if (selectedMode == "hover") {
  document.querySelectorAll('.gridCell').forEach(node => node.onmouseover = changeCell);
  }
  else if (selectedMode == "drag"){
    document.querySelectorAll('.gridCell').forEach(node => node.onmouseover = dragCell);
    document.querySelectorAll('.gridCell').forEach(node => node.onmousedown = dragCell);
  }
  
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
  if (mode != "translucent") {
    document.querySelectorAll('.gridCell').forEach(node => node.onmouseover = dragCell);
    document.querySelectorAll('.gridCell').forEach(node => node.onmousedown = changeCell);
  }
  if (mode == "translucent") {
    document.querySelectorAll('.gridCell').forEach(node => node.onmouseover = dragTransCell);
    document.querySelectorAll('.gridCell').forEach(node => node.onmousedown = dragTransCell);
  }
}

function dragCell(e) {
  if(mouseDown){
  changeCell(e);
}
}

function activateHover() {
  selectedMode= "hover";
  if (mode != "translucent") {
    document.querySelectorAll('.gridCell').forEach(node => node.onmouseover = changeCell);
  }
  if (mode == "translucent") {
     document.querySelectorAll('.gridCell').forEach(node => node.onmouseover = translucentCell)
  }
}

function activateTranslucent(){
  if (selectedMode == "hover") {
  document.querySelectorAll('.gridCell').forEach(node => node.onmouseover = translucentCell);
  }
  else if (selectedMode == "drag"){
    document.querySelectorAll('.gridCell').forEach(node => node.onmouseover = dragTransCell);
    document.querySelectorAll('.gridCell').forEach(node => node.onmousedown = dragTransCell);
  }
}

function dragTransCell(e) {
  if(mouseDown){
  translucentCell(e);
}
}

function translucentCell(e){
  mode = "translucent";
  clearInterval(interval);
  let cellToShade = e.target;
  console.log(e.target);
  let currentRGB = ((window.getComputedStyle(cellToShade, null).getPropertyValue("background-color")).slice(4, -11));
  console.log(currentRGB);
  if (currentRGB < 100) {
     currentRGB = ((window.getComputedStyle(cellToShade, null).getPropertyValue("background-color")).slice(4, -9));
    }
  let newRGB = currentRGB - 25.5;
  console.log(newRGB);
  let shade = `rgb(${newRGB}, ${newRGB}, ${newRGB})`;
  console.log(shade);
  currentColour = shade;
  cellToShade.style.backgroundColor= currentColour;
  
}

