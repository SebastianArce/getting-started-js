let container = document.querySelector(".container");
let html = document.querySelector("html")
let body = document.querySelector("body")
let hoverColor = "#2B2118"

html.style.height = "100%"
body.style.height = "100%"
html.style.margin = 0
body.style.margin = 0

function createGrid(gridDimension) {
  container.style.display = "flex";
  container.style.justifyContent = "space-around";
  container.style.height = "100%"
  container.style.backgroundColor = "#F7F3E3"
  container.style.flexGrow = 0

  let boxWidth = Math.floor(100 / gridDimension)

  for (let i = 0; i < gridDimension; i++) {
    // create a col
    let col = document.createElement("div");
    col.style.display = "flex";
    col.style.flexDirection = "column";
    col.style.justifyContent = "space-around";
    // col.style.alignItems = "stretch"
    col.style.gap = "5px"
    col.style.flexGrow = 0

    for (let j = 0; j < gridDimension; j++) {
      // add boxes to col
      let box = document.createElement("div");
      box.style.width = `${boxWidth}px`;
    //   box.style.height = "16px";
      box.style.aspectRatio = 1/1;
      box.style.backgroundColor = "#AF9164";
      col.appendChild(box);
    }
    container.appendChild(col);
  }
}


const gridDimension = 16
createGrid(gridDimension);
