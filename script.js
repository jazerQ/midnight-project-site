const captionLogo = document.getElementById("captionOfLogo")

setThreeDot()
var time = 0;
function setThreeDot(){
    let str =  '.'.repeat(time % 3)
    captionLogo.innerText='MidNight project' + str;
    time++
    
    setTimeout(setThreeDot, 500);
}