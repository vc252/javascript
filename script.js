let div = document.createElement("div");
div.innerHTML = "i have been insulted by <strong>harry</strong>";
div.setAttribute("class","created");
document.querySelector(".container").append(div);
const box = document.querySelector(".box");
box.insertAdjacentHTML("beforeend","<strong>did you get inserted</strong>")
console.log(box.classList);
console.log(box.className);

