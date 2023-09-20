const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const froggy = new Froggy();

//let bottom = y + 100;
function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  froggy.draw();
  froggy.update();
}

animate();

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      if (froggy.velocity.y === 0) froggy.velocity.y = -20;
      break;
  }
});
