let container = document.querySelector(".container");
let html = document.querySelector("html");
let body = document.querySelector("body");

html.style.margin = 0;
body.style.margin = 0;
body.style.display = "flex";
body.style.flexDirection = "column"
body.style.justifyContent = "space-between"
body.style.height = "100vh";
// body.style.fontFamily = "Helvetica" 

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.backgroundColor = "#F7F3E3";
container.style.width = "50%"
container.style.alignSelf = "center"
container.style.margin = "30px"

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
  menu.style.justifyContent = "space-around";
  menu.style.alignItems = "center"

  title = document.createElement("span")
  title.textContent = "L'Ecran Magique"
  title.style.fontWeight = 700
  menu.appendChild(title)

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
  let boxWidth = 100 / gridDimension;

  for (let i = 0; i < gridDimension; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";
    row.style.flexBasis = 1

    for (let j = 0; j < gridDimension; j++) {
      // add boxes to row
      let box = document.createElement("div");
      box.style.width = `${boxWidth}%`;
      box.style.aspectRatio = 1 / 1;
      box.style.backgroundColor = "#AF9164";
      box.style.border = "thin solid #96705B"
      box.style
      row.appendChild(box);

      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "#6F1A07";
      });
    }
    container.appendChild(row);
  }
}

function addFooter() {
    footer = document.createElement("div")
    footer.style.display = "flex"
    footer.style.justifyContent = "center"
    footer.textContent = "@ 2024 by Sebastian A."
    body.appendChild(footer)
}

function main() {
    addMenu();
    createGrid();
    addFooter();
}

main()
