/*
 MIT License
 Copyright (c) 2025 Juan David Arroyave Ramirez
 See LICENSE file in the project root for full license text.
*/


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



// ============================================
// REUSABLE CAROUSEL CLASS
// ============================================

class ImageCarousel {
    constructor(containerElement) {
        this.container = containerElement;
        this.images = this.container.querySelectorAll('img');
        this.currentIndex = 0;
        this.prevBtn = this.container.parentElement.querySelector('.prev-btn');
        this.nextBtn = this.container.parentElement.querySelector('.next-btn');
        
        this.init();
    }

    init() {
        if (this.images.length === 0) return;
        
        // Auto-attach event listeners
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
        
        this.showSlide(0);
    }

    showSlide(index) {
        if (index < 0) {
            this.currentIndex = this.images.length - 1;
        } else if (index >= this.images.length) {
            this.currentIndex = 0;
        } else {
            this.currentIndex = index;
        }

        const translateX = -this.currentIndex * 100;
        this.container.style.transform = `translateX(${translateX}%)`;
    }

    prev() {
        this.showSlide(this.currentIndex - 1);
    }

    next() {
        this.showSlide(this.currentIndex + 1);
    }
}

// ============================================
// AUTO-DISCOVER AND INITIALIZE ALL CAROUSELS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Find all carousel containers
    const carouselContainers = document.querySelectorAll(
        '.carousel-images, .carousel-images2, .carousel-images3'
    );
    
    // Create a carousel instance for each
    carouselContainers.forEach(container => {
        new ImageCarousel(container);
    });

    // ========================================
    // REST OF YOUR CODE
    // ========================================

    // Video play/pause functionality
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => {
        const video = item.querySelector('.project-video');
        const overlay = item.querySelector('.video-overlay');

        item.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                overlay.style.opacity = 0;
            } else {
                video.pause();
                overlay.style.opacity = 1;
            }
        });

        overlay.addEventListener('click', (e) => {
            e.stopPropagation();
            video.pause();
            overlay.style.opacity = 1;
        });
    });

    // Accordion functionality
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // Phone input - numbers only
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
        phoneInput.addEventListener("input", function(event) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }
});

// ============================================
// FULL IMAGE VIEWER
// ============================================

function openfullimg(src) {
    const fullImg = document.createElement('div');
    Object.assign(fullImg.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '10000'
    });

    const img = document.createElement('img');
    img.src = src;
    Object.assign(img.style, {
        maxWidth: '90%',
        maxHeight: '90%',
        border: '5px solid white',
        borderRadius: '10px',
        cursor: 'pointer'
    });

    img.onclick = () => {
        document.body.removeChild(fullImg);
    };

    fullImg.appendChild(img);
    document.body.appendChild(fullImg);
}





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
    console.log("Accordion clicked"); // validate if clic is working
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      console.log("Panel ScrollHeight: ", panel.scrollHeight); // Validate scrollHeight value
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.getElementById("phone").addEventListener("input", function (event) {
    // Replace anything that's not a number
    this.value = this.value.replace(/[^0-9]/g, '');
});
  
