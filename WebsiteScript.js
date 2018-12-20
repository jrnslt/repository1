




function getReady () {
var rightElement = document.getElementById("topTitle");
rightElement.addEventListener("click", 
                              () => 
                              window.open("https://www.youtube.com/watch?v=9NcPvmk4vfo"));



}

//function annoyMe() {
//    var secondpargr = document.getElementById("SecondPar");
//    secondpargr.addEventListener("mouseover", 
//                                 
//                 makeBigger);             
//                
//}


function activatePaperclip() {
      var paperClip = document.getElementById("paperclipImage");
    
    function getInput() {
        var input = window.alert("Check out our music!");
        
    }
    
    paperClip.addEventListener("click", getInput);
    console.log("GELUKT!")
}
window.addEventListener("load", function() { 
getReady();
activatePaperclip();


});


