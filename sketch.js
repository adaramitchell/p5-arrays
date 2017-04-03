var numbers = [15, 22, 48, 37];
var habbits = ["choice", "voice", "hustle", "grit", "growth", "optimism", "consideration", "bad and boujee"]
var j = 0;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(232, 109, 203);
    
    for(var i = 0; i < 4; i++){
        ellipse((i+1)*100,200,numbers[i], numbers[i]);
            
    }
    
    fill(255);
    textSize(50);
    text(habbits[j], 230, 150);
    
}

function mousePressed(){
    j++;
    if(j==habbits.length){
        j=0;
    }
}