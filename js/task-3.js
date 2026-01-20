const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

nameInput.addEventListener("input", (event) => {
    let textInput = event.currentTarget.value.trim();
    if (textInput === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = textInput;
    }
    
});