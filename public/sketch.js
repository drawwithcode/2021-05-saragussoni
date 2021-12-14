let clientSocket= io();


function preload(){

bg= loadImage("assets/skyline.png")
beetrail= loadImage ("assets/bee.png")
}

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection(){
console.log(clientSocket.id);
}

function newBroadcast(data){
  console.log(data);
  //noStroke();
  //fill("pink");
  image(beetrail, data.x, data.y,20,20)

  //rect(data.x, data.y, 3)
  //rect(data.x+3, data.y+3, 3)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
  frameRate(600)
}

function draw() {

  push();
  noStroke();

  fill("white");
  textSize(30);
  textAlign(CENTER);
  text("write your message and fill the sky with bees", width / 2, height / 9 - 40);
  pop();

  //noStroke()
  //textSize(30);
  //textAlign(CENTER);
  //text("write your message and fill the sky with bees", width / 2, height / 9 - 40);
  //fill("white");
  //rect(mouseX, mouseY, 7);
}

function mouseMoved(){

  push();
  fill(255, 255, 255, 170);
  noStroke(8);
  rect(mouseX, mouseY, 5, 5);
  //image(beetrail, mouseX, mouseY,20,20)
  pop();


  let message = {
    x:mouseX,
    y:mouseY,
  };

  clientSocket.emit("mouse", message);
}
