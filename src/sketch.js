var size;
var cols;
var rows;
var WIDTH;
var HEIGHT;
var grid = [];
var stack = [];
var current;
var canSee;
var keeptrail;
var isFinished = false;

let startPoint;
let endPoint;

function init() {
  rows = parseInt(document.getElementById("rows").value);
  cols = parseInt(document.getElementById("cols").value);
  size = parseInt(document.getElementById("cellsize").value);
  canSee = document.getElementById("watch").checked;
  WIDTH = size * cols + size;
  HEIGHT = size * rows + size;
  grid = [];
  stack = [];
  isFinished = false;

  // fill grid with cells
  for (let i = 0; i < cols; i++) {
    let row = [];
    for (let j = 0; j < rows; j++) {
      row.push(new Cell(i * size, j * size));
    }
    grid.push(row);
  }

  current = grid[0][0];
  current.visited = true;

  initEnds({ x: 0, y: 0 }, { x: cols, y: rows });
}

function run() {
  while (!isFinished) {
    generate();
  }
  drawCells();
}

function setup() {
  init();
  createCanvas(WIDTH, HEIGHT);
  // frameRate(5)
  if (!canSee) run();
}

function draw() {
  if (!canSee || isFinished) return;
  drawCells();
  current.highlight();
  generate();
}
