var bg1;
var land,landimage,intro,introimage,play,playimage,ball,ballimage,enemy,enemyImage,texts,textimage,laugh,laughimage;
var gamestate="intro"
var over,overimage,restart,restartimage
function preload() {
bg1=loadImage("Bg1.jpg")
landimage=loadImage("land.jpg")
introimage=loadImage("Title.png");
playimage=loadImage("play.png")
ballimage=loadImage("Ballimage.png")
enemyImage=loadImage("Enemyimage.png")
textimage=loadImage("Text.png");
laughimage=loadImage("Laugh.png")
overimage=loadImage("Gameover.jpg");

restartimage=loadImage("restart.png")

}

function setup(){
    var canvas = createCanvas(1024,576);
    land=createSprite(5000,526,20,20);
    land.addImage(landimage)
    play=createSprite(512,300,20,20);
    play.addImage(playimage);
    play.scale=0.1;
    intro=createSprite(512,50,20,20);
    intro.addImage(introimage);
    intro.velocityY=5
    intro.scale=0.3
    ball=createSprite(100,300,20,200);
    ball.addImage(ballimage);
    ball.scale=0.1;
    ball.setCollider("circle",0,0,500)
    for(var i=800;i<100000;i=i+1000){
    enemy=createSprite(i,420,20,20);
    enemy.addImage(enemyImage);
    enemy.scale=0.03;
    }
    texts=createSprite(80,50);
    texts.addImage(textimage);
    texts.scale=0.05;
    texts.visible=false;
    laugh=createSprite(200,80,10,10);
    laugh.addImage(laughimage);
    laugh.scale=0.1;
    laugh.visible=false
    over=createSprite(512,288);
    over.addImage(overimage);
    over.scale=1.5;
    over.visible=false;
}

function draw(){
        background(bg1);
    if(gamestate==="intro"){
            intro.collide(play)
            if(touches.length>0||mousePressedOver(play)){
            gamestate="play"
            touches=[];
            intro.visible=false;
            play.visible=false;
            }
        }
        if(gamestate==="play"){
            over.x=camera.x;
            textSize(30);
            fill(rgb(random(0,255),random(0,255),random(0,255)))
            stroke("red");
            strokeWeight(3);
            text("distance travelled = "+ball.x+"m",texts.x+100,30)
            texts.visible=true;
            texts.x=texts.x+10
            laugh.x=laugh.x+10
            ball.velocityY=ball.velocityY+1
            ball.collide(land)
            camera.x=camera.x+10
            ball.x=ball.x+10;
            ball.rotationSpeed=10
            if(touches.length>0&&ball.y>400||keyDown("space")&&ball.y>400){
                ball.velocityY=-22
                touches=[];
            }
            if(ball.x>10000){
                laugh.visible=true;
            }
            if(ball.y>=500){
                over.visible=true;
            }
        }
        drawSprites();
        console.log(ball.y)
}
