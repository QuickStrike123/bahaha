Webcam.set({

    width: 350,

    height: 300,

    img_format: "png",

    png_quality: 90

})

Camera = document.getElementById("Camera");

Webcam.attach(Camera)

function TakeSnapshot() {

    Webcam.snap(function(data_uri){

        document.getElementById("Result").innerHTML = '<img id="ZooWeeMama" src=' + data_uri + ' >'

    })
    
}

console.log("ml5 Version:",ml5.version);

Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/MqRTmMARr/model.json",ModelLoaded);

function ModelLoaded() {

    console.log("Model Loaded");
    
}

function Check() {

    img = document.getElementById("ZooWeeMama");

    Classifier.classify( img , GotResult);
    
}

function GotResult(error,result) {

    if (error) {

        console.log(error);
        
    } else {

        console.log(result);

        document.getElementById("ResultHumanName").innerHTML = result[0].label;

        document.getElementById("ResultHumanAccuracy").innerHTML = result[0].confidence.toFixed(3);
        
    }
    
}