
//window.alert("This page is in spanish, if you want to continue with english please try with the Google translate option")
//PRACTICE IN DIFFERENT CONTEXTS II

function init() {
    var count = 1; // set secconds
    var counter = setInterval(timer, 5000 * count);

    function timer() {
        alert("This page is in spanish, if you want to continue with english please try with the translation option")
        window.location = "#";
        clearInterval(counter) // stop interval
    }

}

window.onload = init;

var fullimgbox = document.getElementById("fullimgbox");
var fullimg = document.getElementById("fullimg");

function openfullimg(pic){
    fullimgbox.style.display = "flex";
    fullimg.src = pic;
}

function closefullimg(){
    fullimgbox.style.display = "none";
    
}

////////////////////

