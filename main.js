noseX = 0;
noseY = 0;

function preload(){
    mustache_image=loadImage("https://i.postimg.cc/tCSSjV9F/mustache.png");
}

function setup(){
    canvas=createCanvas(500, 400);
    canvas.position(435,175);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x+55;
        noseY = results[0].pose.nose.y + 50;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
    image(video, 0,0,500,400);
    image(mustache_image, noseX, noseY, 100,40);
}

function takeSnapshot(){
    save('Mustache-selfie.png');
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}