const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg) {
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
     fill(255);
     text("Time:"+hour, 100, 100);
     fontsize = 40;
    


}

async function getBackgroundImg(){

    // write code to fetch time from API
    
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Singapore");
        var responseJSON = await response.json();
        var datetime = responseJSON.datetime;
        hour = datetime.slice(11, 13);
        if (hour >= 4 && hour <= 6) {
            backgroundImg = loadImage("sunrise1.png")
        }
        else if(hour >= 6 && hour <= 8) {
            backgroundImg = loadImage("sunrise2.png")
        }
        else if(hour >= 6 && hour <= 8) {
            backgroundImg = loadImage("sunrise3.png")
        }
        else if(hour >= 8 && hour <= 10) {
            backgroundImg = loadImage("sunrise4.png")
        }
        else if(hour >= 10 && hour <= 12) {
            backgroundImg = loadImage("sunrise5.png")
        }
        else if(hour >= 12 && hour <= 14) {
            backgroundImg = loadImage("sunrise6.png")
        }
        else if(hour >= 14 && hour <= 16) {
            backgroundImg = loadImage("sunset7.png")
        }
        else if(hour >= 16 && hour <= 18) {
            backgroundImg = loadImage("sunset8.png")
        }
        else if(hour >= 18 && hour <= 20) {
            backgroundImg = loadImage("sunset9.png")
        }
        else if(hour >= 20 && hour <= 22) {
            backgroundImg = loadImage("sunset10.png")
        }
        else if(hour >= 22 && hour <= 00) {
            backgroundImg = loadImage("sunset11.png")
        }
        else if(hour >= 00 && hour <= 2) {
            backgroundImg = loadImage("sunset12.png")
        }
        else if(hour >= 2 && hour <= 4) {
            backgroundImg = loadImage("sunset12.png")
        }
        console.log(datetime);
    
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
