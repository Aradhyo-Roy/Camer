function send(){
    myslef=document.getElementById("myself").value;
    window.alert("<input type='text' id='myself' placehorlder'plese type what you wanna save'><br><br><button type='submit' onclick='submit()'>")
}
function submit(){
    document.getElementById("downloader").innerHTML=myslef;
}
Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="caputered_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version :", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MBkqEBdEK/model.json',modelLoaded);