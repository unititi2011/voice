var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
    }

recognition.onresult=function(event){
    console.log (event);
    var Content =event.results[0][0].transcript;
    console.log (Content);
document.getElementById("textbox").innerHTML=Content;
if(Content=="tire minha selfie"){
    speaki();
}
}
function speaki(){
    var synth=window.speechSynthesis;
    speakdata="tirando sua selfie em 5 segundos..";
    var utterThis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        tirar_selfie();
        save();
    },5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
image_format: 'png',
png_quality:90
});
function tirar_selfie() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfimage"src="'+data_uri+'"/>'
});

}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfimage").scr;
    link.href=image;
    link.click();
}