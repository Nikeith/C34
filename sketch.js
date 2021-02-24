var ball;
var database,position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition = database.ref("ball/position");
    ballposition.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data) {
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function changePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
    database.ref("ball/position").set({
        'x':position.x+x,
        'y':position.y+y,
    })
}
