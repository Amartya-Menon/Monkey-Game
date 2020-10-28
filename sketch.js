
var monkey , monkey_running , moving
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20)
 monkey.addAnimation("moving",monkey_running) 
 monkey.scale=0.1

  foodGroup = createGroup()
  obstacleGroup = createGroup();
}


function draw() {
  background("cyan")
drawSprites();  

ground=createSprite(450,350,900,10)
ground.velocityX=-4
ground.x=ground.width/2;
//console.log(ground.x)
  monkey.collide(ground)

if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }

monkey.velocityY = monkey.velocityY + 1


stroke("white");  
textSize(20)
fill("white")  
text("Score:"+score,500,50)
  
stroke("black")  
textSize(20) 
fill("black")
survivalTime=Math.ceil(frameCount/frameRate())  
text("SurvivalTime:"+survivalTime,100,50)  
  
  
  
  food();
obstacles();
}


function food(){
if(frameCount%80===0){
banana = createSprite(400,150,20,20);
banana.scale=0.080
banana.y=Math.round(random(120,200)) 
banana.addImage(bananaImage)
banana.velocityX=-10
banana.lifetime=150
foodGroup.add(banana)
}
}
 
  function obstacles(){
if(frameCount%300===0){
obstacle = createSprite(400,315,20,20);
obstacle.scale=0.2
obstacle.addImage(obstacleImage)
obstacle.velocityX=-12
obstacle.lifetime=150
obstacleGroup.add(obstacle)
}
}
  
  
  
  
  
  
  






