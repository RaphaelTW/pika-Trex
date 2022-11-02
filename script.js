const pika = document.querySelector(".pika");
const cacto = document.querySelector(".cacto");
const score = document.querySelector(".score");

let alreadyJump = false;
let count = 0;

document.addEventListener("keydown", (e) => {
    if ((e.code === "ArrowUP") | (e.code === "Space")) {
        jump();
    }
});

function jump() {
    if (!pika.classList.contains("jump")) {
        pika.classList.add("jump");
        alreadyJump = true;

        setTimeout(() => {
            pika.classList.remove("jump");
            alreadyJump = false;
        }, 1100);
    }
}

setInterval(() => {
    let pikaBottom = parseInt(window.getComputedStyle(pika).getPropertyValue("bottom"));
    let cactoLeft = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"));

    if (cactoLeft > 40 && cactoLeft < 270 && pikaBottom <= 50 && !alreadyJump) {
        alert(`GAME OVER! Sua Pontuação foi: ${count}`);
        count = 0;
    }

    count++;
    score.innerHTML = `score: ${count}`;
}, 10);