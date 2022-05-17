function preload(){

}

function setup(){
    canvas=createCanvas(650,500);
    canvas.position(100,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,250,150,220,200);
    fill(123,78,44);
    stroke(123,78,44);
    circle(50,50,80);
    circle(50, 430, 80);
    circle(590, 50, 80);
    circle(590, 430, 80);
    fill(56,12,72);
    stroke(56,12,72);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(580, 90, 20, 300);
}

function take_snapshot(){
    save('akshiti.png');
}