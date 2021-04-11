function generate() {
  // finds a neighbor
  let next = current.checkNeighbors();
  if (next) {
    // mark the neighbor as visited
    next.visited = true;
    // push it to the stack
    stack.push(next);
    // remove the walls between the current and its neighbor
    removeWall(current, next);
    // the current is now the next
    current = next;
  } else if (stack.length > 0) {
    // if there's no neighbors get back to the previuos location
    current = stack.pop();
  }
  if (stack.length == 0) isFinished = true;
}

function removeWall(c1, c2) {
  let x = c1.x / size - c2.x / size;
  if (x == 1) {
    c1.walls.l = 0;
    c2.walls.r = 0;
  } else if (x == -1) {
    c2.walls.l = 0;
    c1.walls.r = 0;
  }
  let y = c1.y / size - c2.y / size;
  if (y == 1) {
    c1.walls.t = 0;
    c2.walls.b = 0;
  } else if (y === -1) {
    c2.walls.t = 0;
    c1.walls.b = 0;
  }
}

function initEnds(a, b) {
  startPoint = new Cell(a.x*size, a.y*size);
  endPoint = new Cell(b.x * size - size, b.y * size - size);

  grid[a.x][a.y].walls.t = 0;
  grid[b.x - 1][b.y - 1].walls.b = 0;
}

function drawCells() {
  translate(size / 2, size / 2);
  background(21);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
  startPoint.highlight({ r: 255, g: 50, b: 200, a: 100 });
  endPoint.highlight({ r: 123, g: 54, b: 171, a: 100 });
}
