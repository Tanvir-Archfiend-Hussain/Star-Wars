const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
    x: 200,
    y: 150,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 0, 
    speed: 9,
    moving: false
};

const playerSprite = new Image();
playerSprite.src = "killer.png";
const background = new Image();
background.src = "background.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, 0, 0, player.width, player.height, player.x, player.y, player.width, player.height);
    movePlayer();
    requestAnimationFrame(animate);  
}

animate();

window.addEventListener("keydown", function (e) {
   keys[e.keyCode] = true; 
});

window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode];
});

function movePlayer() {
    if (keys[38] && player.y > 100) {
        player.y -= player.speed;
    }
}


