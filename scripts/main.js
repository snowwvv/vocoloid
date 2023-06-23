let audio = document.getElementById("audio");    
let time = document.querySelector(".time");      
let btnPlay = document.querySelector(".play");   
let btnPause = document.querySelector(".pause"); 
let btnPrev = document.querySelector(".prev");   
let btnNext = document.querySelector(".next");   

let playlist = [
    '/1.mp3',
    '/2.mp3',
    '/3.mp3',
    '/4.mp3',
    '/5.mp3',
    '/6.mp3',
    '/7.mp3',
    '/8.mp3',
    '/9.mp3',
    '/10.mp3',
    '/11.mp3',
    '/12.mp3',
    '/13.mp3',
    '/14.mp3',
];
let treck; 
 

window.onload = function() {
    treck = 0;
}
function switchTreck (numTreck) {
   
    audio.src = 'music' + playlist[numTreck];
    
    audio.currentTime = 0;
 
    audio.play();
}
btnPlay.addEventListener("click", function() {
    audio.play(); 
    audioPlay = setInterval(function() {
       
        let audioTime = Math.round(audio.currentTime);
       
        let audioLength = Math.round(audio.duration)
       
        time.style.width = (audioTime * 100) / audioLength + '%';
        
        if (audioTime == audioLength && treck < 13) {
            treck++;
            switchTreck(treck); 
        } else if (audioTime == audioLength && treck >= 13) {
            treck = 0; // 
            switchTreck(treck); 
        }
    }, 10)
});
btnPause.addEventListener("click", function() {
    audio.pause(); 
    clearInterval(audioPlay) 
});
btnPrev.addEventListener("click", function() {
    
    if (treck > 0) {
        treck--; 
        switchTreck(treck); 
    } else { 
        treck = 13; 
        switchTreck(treck); 
    }
});
btnNext.addEventListener("click", function() {
   
    if (treck < 13) { 
        treck++; 
        switchTreck(treck);  
    } else { 
        treck = 0; 
        switchTreck(treck); 
    }
});