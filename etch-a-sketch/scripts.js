const palatte = document.querySelector("#palatte");

/* Makes reset button turn background white */
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    const eachBox = document.querySelectorAll(".box");
    eachBox.forEach(element => {
         element.style.backgroundColor = 'white';
    });
});

/* Makes number box that asks how many boxes to change width/height to*/
const numBox = document.querySelector("#numBox");
numBox.addEventListener("click", () => {
    const eachBox = document.querySelectorAll(".box");
    eachBox.forEach(element => {
         element.remove();
    });
/* Changes width of this palatte and creates new cells*/
    let numb = prompt("How many boxes wide?");
    palatte.style.gridTemplateColumns = "repeat(" + numb + ", auto)";
    makeCell(numb * numb);
});

/* Generates random rgb number for color*/
function randoColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let backColor = "rgb(" + x + "," + y + "," + z + ")";
    return backColor;
}

function makeCell(num) {
    for (let i = 0; i < num; i++) {
        const div = document.createElement("div");
        div.classList.add('box');
        div.textContent = '';
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = randoColor();
        })
        palatte.appendChild(div);
    }
}

makeCell(256);


