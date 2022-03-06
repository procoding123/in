var aestroid;
var nitro, nitro_max, nitrosGroup;
var planet, planet1, planet2, planet3, planetsGroup;
var rocket, player;
var gameState = "play";
var restart;
var space;
var startingbg,bg;
var play;
var title;
var star,starGroup;
var text;



function preload(){
   bg = loadImage("bg.jpg");
   rocket = loadImage("rocket.png");
   planet1 = loadImage("planet1.png");
   planet2 = loadImage("planet2.png");
   planet3 = loadImage("planet3.png");
   aestroid = loadImage("aestroid.png");
   restartImg = loadImage("restart.png");
   restart_textImg = loadImage("restart_text.png");
   playImg = loadImage("play_button.png");
   play_textImg = loadImage("play_text.png");
   startingbg = loadImage("starting bg.jpg");
   starsImg = loadImage("stars.png");
   gametitle = loadImage("gametitle.png");
    




}

function setup() {

    createCanvas(windowWidth, windowHeight);
  
    space = createSprite(600,600);
    space.addImage(bg);
    space.scale = 1.2;
    space.visible = false;

    player = createSprite(675,495);
    player.addImage(rocket);
    player.scale = 0.7;
    player.setCollider("rectangle",0,0,40,40,50);
    player.visible = false;

    play = createSprite(width/2,height/1.6);
    play.addImage(playImg);

    playtext = createSprite(width/2,height/2.2);
    playtext.addImage(play_textImg);
    playtext.scale = 0.3;

    title = createSprite(650,180);
    title.addImage(gametitle);
    title.scale = 0.8;

   
    
  
   
    
}

function draw() {
    background(startingbg);

   

    if(space.y < 0){
        space.y = height/2;
    }
    

    if(gameState === "play"){

        if(mousePressedOver(play)){
            space.visible = true;
            space.velocityY = -2;
            player.visible = true;
            play.visible = false;
            playtext.visible = false;
            title.visible = false;
            
        }
       
        if(keyDown("up")||keyDown("w")||touches.length>0){
            player.y = player.y - 9;
            touches = {}
        }

       

        if(keyDown("down")||keyDown("s")||touches.length>0){
            player.y = player.y + 9;
            touches = {}
        }

        if(keyDown("left")||keyDown("a")||touches.length>0){
            player.x = player.x - 9;
            touches = {}
        }

        if(keyDown("right")||keyDown("d")||touches.length>0){
            player.x = player.x + 9;
            touches = {}
        }
        
    }

    drawSprites();

}

    


    


    