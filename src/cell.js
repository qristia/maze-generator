class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.visited = false;
    this.walls = { t: true, b: true, l: true, r: true };
  }

  checkNeighbors() {
    let neighbors = [];

    let top = null;
    let bottom = null;
    let right = null;
    let left = null;

    let x = this.x / size;
    let y = this.y / size;

    if (y - 1 >= 0) top = grid[x][y - 1];
    if (y + 1 < rows) bottom = grid[x][y + 1];
    if (x - 1 >= 0) right = grid[x - 1][y];
    if (x + 1 < cols) left = grid[x + 1][y];

    if (top && !top.visited) neighbors.push(top);
    if (bottom && !bottom.visited) neighbors.push(bottom);
    if (right && !right.visited) neighbors.push(right);
    if (left && !left.visited) neighbors.push(left);

    if (neighbors.length > 0) {
      return neighbors[floor(random(0, neighbors.length))];
    } else return null;
  }

  show() {
    push();
    stroke(51);
    translate(this.x, this.y);
    if (this.walls.t) line(0, 0, size, 0);
    if (this.walls.b) line(0, size, size, size);
    if (this.walls.l) line(0, 0, 0, size);
    if (this.walls.r) line(size, 0, size, size);

    if (this.visited) {
      noStroke();
      fill(50, 50, 199, 100);
      rect(0, 0, size, size);
    }
    pop();
  }

  highlight() {
    noStroke();
    fill(255, 0, 0);
    rect(this.x, this.y, size - 2, size - 2);
  }
}
