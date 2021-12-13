let clientSocket= io();

function preload(){

bg= loadImage("assets/flowers.jpeg")
}

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection(){
console.log(clientSocket.id);
}

function newBroadcast(data){
  console.log(data);
  fill("pink");
  rect(data.x, data.y, 3)
  rect(data.x+10, data.y+10, 3)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
}

function draw() {

  push();
  noStroke();

  fill("yellow");
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
  fill("white");
  noStroke(8);
  rect(mouseX, mouseY, 7);
  pop();


  let message = {
    x:mouseX,
    y:mouseY,
  };

  clientSocket.emit("mouse", message);
}
