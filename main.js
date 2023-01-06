nose_x = ""
nose_y = ""
reye_x = ""
reye_y = ""

function preload(){
    mustache = loadImage('https://i.postimg.cc/fRPKKLYr/th-removebg-preview.png')
    goggles = loadImage('https://i.postimg.cc/x8Crm8v1/Red-Sunglasses-removebg-preview.png')
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

    image(mustache,nose_x,nose_y,100,50)
    image(goggles,reye_x,reye_y,130,50)
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
        console.log("X of Place Where Goggles Are : " + results[0].pose.rightEye.x)
        console.log("Y of Place Where Goggles Are : " + results[0].pose.rightEye.y)

        nose_x = results[0].pose.nose.x-48
        nose_y = results[0].pose.nose.y+5
        reye_x = results[0].pose.rightEye.x-33
        reye_y = results[0].pose.rightEye.y-20
    }
}