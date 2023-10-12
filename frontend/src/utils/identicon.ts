import md5 from "./md5";

var lenX = 7;
var lenY = 7;
var squares = [...new Array(lenX)].map((a, i) => [...new Array(lenY)].map((a, i) => { return { colour: "#FFFFFF" }; }));

function createIdenticon(nickname: string, canvas: HTMLCanvasElement) {

    if (canvas == null) {
        return;
    }

    squares = [...new Array(lenX)].map((a, i) => [...new Array(lenY)].map((a, i) => { return { colour: "#FFFFFF" }; }));

    if (nickname == "") {
        return;
    }

    var hashNick = md5(nickname.toLowerCase());
    var color = "#" + hashNick.slice(0, 6);
    var color1 = "#" + hashNick.slice(6, 12);
    var algo = hashNick;
    var y = 0;
    var x = 0;
    squares = [...new Array(lenX)].map((a, i) => [...new Array(lenY)].map((a, i) => { return { colour: "#FFFFFF" }; }));

    for (let i = 0; i < algo.length; i++) {
        if (i >= lenX * lenY / 2) {
            break;
        }
        if (algo[i] >= '2' && algo[i] <= '9') {
            if (parseInt(algo[i]) % 2 == 1) {
                squares[y][x].colour = color;
                squares[y][lenX - x - 1].colour = color;
            } else {
                squares[y][x].colour = color1;
                squares[y][lenX - x - 1].colour = color1;
            }
        }
        y = y + 1;
        if (y >= lenY) {
            y = 0;
            x = x + 1;
        }
        if (x >= lenX) {
            x = 0;
        }
    }
    drawIcon(canvas);
}

function drawIcon(canvas: HTMLCanvasElement) {
    var context = canvas.getContext("2d")
    var bw = canvas.width;
    var bh = canvas.height;
    var stepX = bw / lenX;
    var stepY = bh / lenY;
    context!.fillStyle = 'black';
    context!.fillRect(0, 0, bw, bh);
    squares.forEach((line, i) => {
        line.forEach((square, j) => {
            context!.fillStyle = square.colour;
            context!.fillRect(stepX * j, stepY * i, stepX, stepY);
        });
    });

}