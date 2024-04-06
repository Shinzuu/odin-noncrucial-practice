// your JavaScript file
const container = document.querySelector("#container");


const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red!";
redParagraph.classList.add("red-text");
container.appendChild(redParagraph);

const blueHeading = document.createElement("h3");
blueHeading.textContent = "I'm a blue H3!";
blueHeading.classList.add("blue-text");
container.appendChild(blueHeading);

const newDiv = document.createElement("div");
newDiv.style.border = "2px solid black";
newDiv.style.backgroundColor = "pink";

    const divHeading = document.createElement("h1");
    divHeading.textContent = "I'm in a div"
    newDiv.appendChild(divHeading);

    const divParagrapph = document.createElement("p");
    divParagrapph.textContent = "ME TOO!";
    newDiv.appendChild(divParagrapph);

container.appendChild(newDiv);



btn.addEventListener("click", function (e) {
    console.log(e.target);
  });

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });




const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
