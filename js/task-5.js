function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const button = document.querySelector("button.change-color");
const text = document.querySelector("span.color");

button.addEventListener("click", handleSubmit);

function handleSubmit(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  text.textContent = color;
}