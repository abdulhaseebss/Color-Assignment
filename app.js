const div = document.querySelector("div");
const body = document.querySelector("body");

let color = ["orange", "yellow", "blue", "purple", "pink"];

for (let i = 0; i < color.length; i++) {
    div.innerHTML += `<button onclick = "changeColor(${i})">${color[i]}</button>`
}

function changeColor(i){
    body.style.backgroundColor = color[i]
}
