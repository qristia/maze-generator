var size;
var cols;
var rows;
var WIDTH;
var HEIGHT;
var grid = [];
var stack = [];
var current;
var canSee;
var keeptrail = false;
var isFinished = false;

function init() {
  rows = parseInt(document.getElementById("rows").value);
  cols = parseInt(document.getElementById("cols").value);
  size = parseInt(document.getElementById("cellsize").value);
  canSee = document.getElementById("watch").checked;
  WIDTH = size * cols;
  HEIGHT = size * rows;
  grid = [];
  isFinished = false;

  // fill with grid with cells
  for (let i = 0; i < cols; i++) {
    let row = [];
    for (let j = 0; j < rows; j++) {
      row.push(new Cell(i * size, j * size));
    }
    grid.push(row);
  }

  current = grid[0][0];
  current.visited = true;
}

function drawCells() {
  background(255);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}

function run() {
  if (!canSee) {
    while(!isFinished) {
      generate();
    }
    drawCells();
  }
}

function setup() {
  init();
  createCanvas(WIDTH, HEIGHT);
  run();
}

function draw() {
  if (!canSee || isFinished) return;
  drawCells();
  current.highlight();
  generate();
}
