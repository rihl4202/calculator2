var a = 0
var b = 0
var calculate
var gamestate = 1
var result=0

function preload(){
  oneImg = loadImage("one.png")
  twoImg = loadImage("two.png")
  threeImg = loadImage("three.png")
  fourImg = loadImage("four.png")
  fiveImg = loadImage("five.png")
  sixImg = loadImage("six.png")
  sevenImg = loadImage("seven.png")
  eightImg = loadImage("eight.png")
  nineImg = loadImage("nine.png")
  zeroImg = loadImage("zero.png")
  addImg = loadImage("addition.png")
  subImg = loadImage("subtraction.png")
  mulImg = loadImage("multiplication.png")
  divImg = loadImage("division.png")
  equalsImg = loadImage("equals.png")
}

function setup() {
  createCanvas(800,600);
  one = createSprite(100, 100, 50, 50);
  one.addImage(oneImg)
  one.scale = 0.03
  two = createSprite(200, 100, 50, 50);
  two.addImage(twoImg)
  two.scale = 0.1
  three = createSprite(300, 100, 50, 50);
  three.addImage(threeImg)
  three.scale = 0.1
  four = createSprite(400, 100, 50, 50);
  four.addImage(fourImg)
  four.scale = 0.22
  five = createSprite(100, 200, 50, 50);
  five.addImage(fiveImg)
  five.scale = 0.1
  six = createSprite(200, 200, 50, 50);
  six.addImage(sixImg)
  six.scale = 0.26
  seven = createSprite(300, 200, 50, 50);
  seven.addImage(sevenImg)
  seven.scale = 0.26
  eight = createSprite(400, 200, 50, 50);
  eight.addImage(eightImg)
  eight.scale = 0.26
  nine = createSprite(200, 300, 50, 50);
  nine.addImage(nineImg)
  nine.scale = 0.26
  zero = createSprite(300, 300, 50, 50);
  zero.addImage(zeroImg)
  zero.scale = 0.26
  add = createSprite(100, 300, 50, 50);
  add.addImage(addImg)
  add.scale = 0.22
  sub = createSprite(410, 300, 50, 50);
  sub.addImage(subImg)
  sub.scale = 0.17
  mul = createSprite(130, 400, 50, 50);
  mul.addImage(mulImg)
  mul.scale = 0.2
  div = createSprite(250, 400, 50, 50);
  div.addImage(divImg)
  div.scale = 0.15
  equals = createSprite(370, 400, 50, 50);
  equals.addImage(equalsImg)
  equals.scale = 0.13
  
  reset = createButton("Reset")
  reset.position(250, 550)
}

function draw() {
  background(0);
  reset.mouseClicked(()=>{
    location.reload()
  })
  if(gamestate === 1){
    text("Select first number", 50, 30)
    if(mousePressedOver(one)){
       a = 1
      gamestate = 2
    }
    if(mousePressedOver(two)){
       a = 2
      gamestate = 2
    }
    if(mousePressedOver(three)){
       a = 3
      gamestate = 2
    }
    if(mousePressedOver(four)){
       a = 4
      gamestate = 2
    }
    if(mousePressedOver(five)){
       a = 5
      gamestate = 2
    }
    if(mousePressedOver(six)){
       a = 6
      gamestate = 2
    }
    if(mousePressedOver(seven)){
       a = 7
      gamestate = 2
    }
    if(mousePressedOver(eight)){
       a = 8
      gamestate = 2
    }
    if(mousePressedOver(nine)){
       a = 9
      gamestate = 2
    }
    if(mousePressedOver(zero)){
       a = 0
      gamestate = 2
    }
  }
  if(gamestate === 2){
    text("Select operation.", 50, 30)
    text(a,50,60)
    if(mousePressedOver(add)){
      calculate = "add"
      gamestate = 3
    }
    if(mousePressedOver(sub)){
      calculate = "sub"
      gamestate = 3
    }
    if(mousePressedOver(mul)){
      calculate = "mul"
      gamestate = 3
    }
    if(mousePressedOver(div)){
      calculate = "div"
      gamestate = 3
    }
  }
  if(gamestate === 3){
    text("Select second number", 50, 30)
    text(a,50,60)
    text(calculate,80,60)
    if(mousePressedOver(one)){
       b = 1
      gamestate = 4
    }
    if(mousePressedOver(two)){
       b = 2
      gamestate = 4
    }
    if(mousePressedOver(three)){
       b = 3
      gamestate = 4
    }
    if(mousePressedOver(four)){
       b = 4
      gamestate = 4
    }
    if(mousePressedOver(five)){
       b = 5
      gamestate = 4
    }
    if(mousePressedOver(six)){
       b = 6
      gamestate = 4
    }
    if(mousePressedOver(seven)){
       b = 7
      gamestate = 4
    }
    if(mousePressedOver(eight)){
       b = 8
      gamestate = 4
    }
    if(mousePressedOver(nine)){
       b = 9
      gamestate = 4
    }
    if(mousePressedOver(zero)){
       b = 0
      gamestate = 4
    }
  }
  if(gamestate === 4 ){
    text("Press '=' ", 50, 30)
    text(a,50,60)
    text(calculate,80,60)
    text(b,120,60)
    if(mousePressedOver(equals)){
    if(calculate === "add"){
      result = a+b
    }
    if(calculate === "sub"){
      result = a-b
    }
    if(calculate === "mul"){
      result = a*b
    }
    if(calculate === "div"){
      result = a/b
    }
  }
  }
  textSize(20)
  text("Result ="+result, 500, 50)
  drawSprites();
}