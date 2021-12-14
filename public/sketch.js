let clientSocket= io();

//preload the images
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
  //console.log(data);
  //Drawing bees (smaller than the cursor) with data from the other clients
image(beetrail, data.x, data.y,37,30)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
}

//title or instructions
function draw() {
  push();
  noStroke();
  fill("white");
  textSize(30);
  textAlign(CENTER);
  text("write your message and fill the sky with bees", width / 2, height / 9 - 40);
  pop();
}

//when i move my cursor i leave behind a trail and send a message to the Server
function mouseMoved(){
  push();
  fill(255, 255, 255, 170);
  noStroke(8);
  rect(mouseX, mouseY, 5, 5);
  pop();

  let message = {
    x:mouseX,
    y:mouseY,
  };

  clientSocket.emit("mouse", message);
}
