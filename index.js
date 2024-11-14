import { Image } from "./src/components/image/index";

console.log("mmm");

const imgComponent = new Image();
imgComponent.render();
const buttonComponent = document.createElement("button");
buttonComponent.textContent = "Click";
document.body.appendChild(buttonComponent);
let count = 0;
buttonComponent.addEventListener("click", () => {
  count++;
  console.log("click");
  const createdDiv = document.createElement("div");
  createdDiv.textContent = `${count}div`;
  createdDiv.style.border = "1px solid black";
  createdDiv.style.margin = "5px";
  createdDiv.style.padding = "10px";
  document.body.appendChild(createdDiv)
});
