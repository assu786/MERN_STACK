const box = document.getElementById("box");

let x = 0;
let y = 150;

// Button Functions
function moveright() {
    x += 20;
    box.style.left = x + "px";
}

function moveleft() {
    x -= 20;
    box.style.left = x + "px";
}

function moveup() {
    y -= 20;
    box.style.top = y + "px";
}

function movedown() {
    y += 20;
    box.style.top = y + "px";
}

// Keyboard Events
document.addEventListener("keydown", (event) => {

    switch (event.key) {
        case "ArrowUp":
            moveup();
            break;

        case "ArrowDown":
            movedown();
            break;

        case "ArrowLeft":
            moveleft();
            break;

        case "ArrowRight":
            moveright();
            break;
    }
});

// Mouse Events
box.addEventListener("click", () => {
    box.style.backgroundColor = "green";
});

box.addEventListener("dblclick", () => {
    box.style.backgroundColor = "blue";
});

box.addEventListener("mouseover", () => {
    box.style.transform = "scale(1.1)";
});

box.addEventListener("mouseout", () => {
    box.style.transform = "scale(1)";
});

box.addEventListener("mousedown", () => {
    box.style.backgroundColor = "orange";
});

box.addEventListener("mouseup", () => {
    box.style.backgroundColor = "tomato";
});