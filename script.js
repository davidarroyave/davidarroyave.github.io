

function init() {
    if (window.location.pathname === 'contextII.html') { //validate the result of this on GITHUB
    var count = 1; // set secconds
    var counter = setInterval(timer, 5000 * count);

    function timer() {
        alert("This page is in spanish, if you want to continue with english please try with the translation option")
        window.location = "#";
        clearInterval(counter) // stop interval
        }

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

//////accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
