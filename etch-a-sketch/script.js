let container = document.querySelector(".container");
let html = document.querySelector("html");
let body = document.querySelector("body");

html.style.margin = 0;
body.style.margin = 0;

function createGrid(gridDimension) {
  container.style.display = "flex";
  container.style.justifyContent = "space-around";
  container.style.flexWrap = "wrap";
  container.style.gap = "1vw"
  container.style.backgroundColor = "#F7F3E3";
  container.style.flexGrow = 1;
  
  // We are substracting gridDimension to allow space for gap
  let boxWidth = Math.floor((100 - gridDimension) / gridDimension);
  let gridArea = gridDimension * gridDimension

  for (let j = 0; j < gridArea; j++) {
    // add boxes to container
    let box = document.createElement("div");
    box.style.width = `${boxWidth}%`;
    box.style.aspectRatio = 1 / 1;
    box.style.backgroundColor = "#AF9164";
    container.appendChild(box);

    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "#2B2118"
    })
  }
}

function draw() {

}

const gridDimension = 16;
createGrid(gridDimension);
