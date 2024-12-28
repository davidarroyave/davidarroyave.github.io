function openfullimg(src) {
    const fullImg = document.createElement('div');
    fullImg.style.position = 'fixed';
    fullImg.style.top = '0';
    fullImg.style.left = '0';
    fullImg.style.width = '100vw';
    fullImg.style.height = '100vh';
    fullImg.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    fullImg.style.display = 'flex';
    fullImg.style.justifyContent = 'center';
    fullImg.style.alignItems = 'center';
    fullImg.style.zIndex = '10000';

    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.border = '5px solid white';
    img.style.borderRadius = '10px';
    img.style.cursor = 'pointer';

    img.onclick = () => {
        document.body.removeChild(fullImg);
    };

    fullImg.appendChild(img);
    document.body.appendChild(fullImg);
}



let currentIndex1 = 0;
const carouselImages1 = document.querySelector('.carousel-images');
const images1 = document.querySelectorAll('.carousel-images .gallery-image');

function showSlide1(index) {
    if (index < 0) {
        currentIndex1 = images1.length - 1; 
    } else if (index >= images1.length) {
        currentIndex1 = 0; 
    } else {
        currentIndex1 = index; 
    }

    
    const translateX = -currentIndex1 * 100;
    carouselImages1.style.transform = `translateX(${translateX}%)`;
}

function prevSlide1() {
    showSlide1(currentIndex1 - 1); 
}

function nextSlide1() {
    showSlide1(currentIndex1 + 1); 
}


showSlide1(currentIndex1);


let currentIndex2 = 0;
const carouselImages2 = document.querySelector('.carousel-images2');
const images2 = document.querySelectorAll('.carousel-images2 .gallery-image2');

function showSlide2(index) {
    if (index < 0) {
        currentIndex2 = images2.length - 1; 
    } else if (index >= images2.length) {
        currentIndex2 = 0; 
    } else {
        currentIndex2 = index; 
    }


    const translateX = -currentIndex2 * 100;
    carouselImages2.style.transform = `translateX(${translateX}%)`;
}

function prevSlide2() {
    showSlide2(currentIndex2 - 1); 
}

function nextSlide2() {
    showSlide2(currentIndex2 + 1); 
}


showSlide2(currentIndex2);


document.addEventListener('DOMContentLoaded', () => {
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        const video = item.querySelector('.project-video');
        const overlay = item.querySelector('.video-overlay');

        // Toggle play/pause when clicking the video item
        item.addEventListener('click', () => {
            if (video.paused) {
                video.play(); // Play video
                overlay.style.opacity = 0; // Hide overlay when playing
            } else {
                video.pause(); // Pause video
                overlay.style.opacity = 1; // Show overlay again when paused
            }
        });

        // Optionally: pause the video when clicking on the overlay
        overlay.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent overlay click from bubbling up to the item
            video.pause();
            overlay.style.opacity = 1; // Show overlay again
        });
    });
});

//accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    console.log("Acordeón clickeado"); // Verificar si el clic está funcionando
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      console.log("Panel ScrollHeight: ", panel.scrollHeight); // Verifica el valor de scrollHeight
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

  
