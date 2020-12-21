var smallball, database;
var position;

function setup() {
    database = firebase.database();
    createCanvas(500, 500);

    smallball = createSprite(250, 250, 10, 10);
    smallball.shapeColor = "red";

    var smallballpos = database.ref("ball/position");
    smallballpos.on("value", readPosition, showError);

}

function draw() {
    background("white");

    if (keyDown("LEFT")) {
        writePosition(-1, 0);
    }

    if (keyDown("RIGHT")) {
        writePosition(1, 0);
    }

    if (keyDown("UP")) {
        writePosition(0, -1);
    }

    if (keyDown("DOWN")) {
        writePosition(0, 1);
    }

    drawSprites();

}
function readPosition(data) {
    position = data.val();
    smallball.x = position.x;
    smallball.y = position.y;
}

function showError() {
    console.log("error in writing to the database");
}

function writePosition(x, y) {
    database.ref("ball/position").set({
        "x": position.x + x,
        "y": position.y + y
    })
}


