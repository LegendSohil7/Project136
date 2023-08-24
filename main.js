noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function preload() {
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(650, 90);
}

function draw() {
    background('#42f5a4');

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialised!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWrist);
    }

    function draw() {
        background('#969A97');
        fill('#F90093');
        stroke('#F90093');
        square(noseX, noseY, difference);
    }
}