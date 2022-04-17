
// textarea.innerHTML = "Hello World!";
// textarea.style.color= "blue";
// textarea.style.fontSize=""
// textarea.setAttribute("name", "helloButton");
// let p=document.getElementById("p").innerHTML
// textarea.innerHTML=p;
let textarea= document.getElementById("textarea");
let speechBtn=document.getElementById("btn");
function textToSpeech(text){
    var msg = new SpeechSynthesisUtterance()
    msg.text=text;
    window.speechSynthesis.speak(msg);
}
speechBtn.addEventListener("click", e=> {
    e.preventDefault();
    if(textarea.value !=""){
        textToSpeech(textarea.value);
        console.log(speechSynthesis.getVoices());
    }
    
})
