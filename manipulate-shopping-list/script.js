let list = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");

// NOTE: Using a declared function did not remove the correct listItem
// function addElement() {
//   let inputValue = input.value;
//   input.value = "";

//   let listItem = document.createElement("li");
//   let span = document.createElement("span");
//   let listButton = document.createElement("button");

//   span.textContent = inputValue;
//   listButton.textContent = "Delete";

//   span.style.marginRight = "20px";
//   listItem.style.marginBottom = "20px";

//   listItem.appendChild(span);
//   listItem.appendChild(listButton);
//   list.appendChild(listItem);

//   listButton.addEventListener("click", function() {
//     list.removeChild(listItem);
//   })

//   input.focus()
// }

btn.addEventListener("click", function () {
  let inputValue = input.value;
  input.value = "";

  let listItem = document.createElement("li");
  let span = document.createElement("span");
  let listButton = document.createElement("button");

  span.textContent = inputValue;
  listButton.textContent = "Delete";

  span.style.marginRight = "20px";
  listItem.style.marginBottom = "20px";

  listItem.appendChild(span);
  listItem.appendChild(listButton);
  list.appendChild(listItem);

  listButton.addEventListener("click", function () {
    list.removeChild(listItem);
  });

  input.focus();
});
