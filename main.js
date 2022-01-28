function preload(){
    clownNose= loadImage("https://postimg.cc/TKxwzQPn");
}

noseX=0;
noseY=0;


function setup(){
 canvas=createCanvas(400,500);
 canvas.center();
 canvas.position(550,180);
 video= createCapture(VIDEO);
 video.size(400,500);
 video.hide()
 poseNet= ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses)

}

function gotPoses(results){
    if ( results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nosex="+ noseX);
        console.log("noseY="+ noseY);
        
    }


}

function modelLoaded(){
    console.log("modelLoaded");
}

function draw(){
    image(video, 0,0 , 400,500);
    fill(245, 7, 19);
    stroke(13, 0, 1);
    circle( noseX,noseY,30);
    
}


function takeSnapshot(){
    save("myClownNose.jpg");
}

