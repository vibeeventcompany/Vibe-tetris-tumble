
let spinning = false;
let interval;

const pieces = [
    "images/i.png",
    "images/o.png",
    "images/t.png",
    "images/l.png",
    "images/j.png",
    "images/s.png",
    "images/z.png"
];

const pieceDisplay = document.getElementById("piece");


function spin() {

    if (spinning) return;

    spinning = true;

    interval = setInterval(function() {

        let randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

        pieceDisplay.innerHTML =
        `<img src="${randomPiece}" width="200">`;

    }, 100);

}


function stopSpin() {

    if (!spinning) return;

    clearInterval(interval);

    let finalPiece = pieces[Math.floor(Math.random() * pieces.length)];

    pieceDisplay.innerHTML =
    `<img src="${finalPiece}" width="200">`;

    spinning = false;

}
