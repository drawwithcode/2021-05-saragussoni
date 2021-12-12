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
  rect(data.x, data.y, 10)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
}

function draw() {
  noStroke()
  fill("white");
  rect(mouseX, mouseY, 7);
}

function mouseMoved(){

  let message = {
    x:mouseX,
    y:mouseY,
  };

  clientSocket.emit("mouse", message);
}
