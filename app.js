const btn = document.getElementById("btn");
const inputBox = document.getElementById("input");
const ul = document.getElementById("ul");

btn.addEventListener("click", () => {
  console.log("btn clicked");
  console.log(inputBox.value);
  if (inputBox.value != "") {
    const li = document.createElement("li");
    li.textContent = inputBox.value;
    ul.appendChild(li);
    inputBox.value = "";
  }
});

//