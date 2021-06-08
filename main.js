Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';

    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier(' https://teachablemachine.withgoogle.com/models/3OxysXD7e/ model.json ', modelLoaded);
function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function speak() {
    var sythn = window.speechSynthesis;
    speak_data_1 = "  " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 );
    utterThis.rate = 0.5;
    synth.speak(utterThis);
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = result[1].label;
        predicition_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if (results[0].label == "up") {
            document.getElementById("update_emoji").innerHTML = "&#9757;";
        }
        if (results[0].label == "down") {
            document.getElementById("update_emoji").inner.html = "&#128071;";
        }
        if (results[0].label = "ok"){
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if (results[0].label == "no") {
            document.getElementById("update_emoji2").innerHTML = "&#128078;";
        }
        if (results[0 ].label == "amazing") 
        {
            document.getElementById("update_emoji2").innerHTML = "&#128076;";
        }

        if (results[1].label == "up") {
            document.getElementById("update_emoji").innerHTML = "&#9757;";
        }
        if (results[1].label == "down") {
            document.getElementById("update_emoji").inner.html = "&#128071;";
        }
        if (results[1].label = "ok"){
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if (results[1].label == "no") {
            document.getElementById("update_emoji2").innerHTML = "&#128078;";
        }
        if (results[1].label == "amazing") 
        {
            document.getElementById("update_emoji2").innerHTML = "&#128076;";
        }

    }

}