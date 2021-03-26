document.querySelector(".menu button").onclick = function () {
  init();
  resizeCanvas(WIDTH, HEIGHT);
  if (!canSee) run();
};

// document.getElementById("keeptrail").onchange = function () {
//   keeptrail = document.getElementById("keeptrail").checked;
// };
