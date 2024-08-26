let container = document.querySelector(".container");
let html = document.querySelector("html");
let body = document.querySelector("body");

html.style.margin = 0;
body.style.margin = 0;

function createGrid(gridDimension) {
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "1vw";
  container.style.backgroundColor = "#F7F3E3";

  let boxWidth = Math.floor(100 / gridDimension);

  for (let i = 0; i < gridDimension; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "space-around";
    row.style.gap = "1vw";

    for (let j = 0; j < gridDimension; j++) {
      // add boxes to container
      let box = document.createElement("div");
      box.style.width = `${boxWidth}%`;
      box.style.aspectRatio = 1 / 1;
      box.style.backgroundColor = "#AF9164";
      row.appendChild(box);

      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "#6F1A07";
      });
    }
    container.appendChild(row);
  }
}

function draw() {}

const gridDimension = 24;
createGrid(gridDimension);
