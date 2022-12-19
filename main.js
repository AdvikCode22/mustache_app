function preload(){

}

function setup(){
    myCanvas = createCanvas(400,400)
    myCanvas.center()
    cam = createCapture(VIDEO)
    cam.size(400,400)
    cam.hide()

    poseNet = ml5.poseNet(cam, modelLoaded)
    poseNet.on('pose', gotResults)
}

function draw(){
    image(cam,0,0,400,400)
}

function capture(){
    save("moustache image.png")
}

function modelLoaded(){
    console.log("Model is loaded.")
}

function gotResults(results){
    if(results.length > 0){
        console.log(results)
        console.log("X of Place Where Mustache is : " + results[0].pose.nose.x)
        console.log("Y of Place Where Mustache is : " + results[0].pose.nose.y)
    }
}