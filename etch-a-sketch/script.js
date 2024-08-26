let container = document.querySelector(".container");
let html = document.querySelector("html");
let body = document.querySelector("body");

html.style.margin = 0;
body.style.margin = 0;

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "1vw";
container.style.backgroundColor = "#F7F3E3";

function resetGrid() {
  let newGridDimension = window.prompt(
    "What is the number of squares per side for the new grid: "
  );

  if (newGridDimension > 100) {
    newGridDimension = 16;
    window.alert("Grid dimension should be less than 100 per side, set to 16.");
  }

  container.replaceChildren();
  createGrid(newGridDimension);
}

function addMenu() {
  menu = document.createElement("div");
  menu.style.backgroundColor = "#F7F3E3";
  menu.style.display = "flex";
  menu.style.justifyContent = "center";

  btn = document.createElement("button");
  btn.style.margin = "10px";
  btn.style.padding = "3px 10px";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
  btn.textContent = "New grid";
  menu.append(btn);
  body.prepend(menu);

  btn.addEventListener("click", resetGrid);
}

function createGrid(gridDimension = 16) {
  console.log("creating new grid");
  let boxWidth = Math.floor(100 / gridDimension);

  for (let i = 0; i < gridDimension; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "space-around";
    row.style.gap = "1vw";

    for (let j = 0; j < gridDimension; j++) {
      // add boxes to row
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

function main() {
    addMenu();
    createGrid();
}

main()
