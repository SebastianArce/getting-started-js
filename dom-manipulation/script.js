const container = document.querySelector("#container");

// Example
const content = document.createElement('div');
content.classList.add("content");
content.textContent = "This is the glorious text-contentttt!";
container.appendChild(content);

// Exercise 1
const content2 = document.createElement('p');
content2.classList.add("content2")
content2.textContent = "Hey I'm red!"
content2.style.color = "red"
container.appendChild(content2)

// Exercise 2
const header = document.createElement('h3');
header.classList.add("header")
header.textContent = "I'm a blue h3!"
header.style.color = "blue"
container.appendChild(header)

// Exercise 3
const box = document.createElement('div');
box.classList.add("box");
box.style.backgroundColor = "pink";
box.style.borderColor = "black";

const header1 = document.createElement("h1");
header1.classList.add("header1")
header1.textContent = "I'm in a div"
box.appendChild(header1)

const content3 = document.createElement("p")
content3.textContent = "ME TOO"
box.appendChild(content3)

container.appendChild(box)

// Exercise 4
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", alertFunction);


// Exercise 5
const btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", function(e) {
    console.log(e.target);
    e.target.style.backgroundColor = "blue";
})

