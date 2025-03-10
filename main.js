let images = document.querySelectorAll(".row img");
let currentIndex = 0;
let lightbox = document.getElementById("lightbox");
let lightboxImage = document.getElementById("lightboxImage");

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "block";
  lightboxImage.src = images[currentIndex].src;
}

function closeLightbox(event) {
  if (!event || event.target === lightbox || event.target.classList.contains("close")) {
    lightbox.style.display = "none";
  }
}

function changeImage(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  lightboxImage.src = images[currentIndex].src;
}

//hover media function
function setupHoverEffect() {
    const links = document.querySelectorAll('.hover-link');

    function handleMouseEnter(event) {
        if (window.innerWidth >= 800) {
            const targetId = event.target.getAttribute('data-target');
            const targetMedia = document.getElementById(targetId);
            if (targetMedia) {
                targetMedia.style.display = 'inline-block';

                if (targetMedia.tagName === 'VIDEO') {
                    targetMedia.play();
                }
            }
        }
    }

    function handleMouseLeave(event) {
        if (window.innerWidth >= 800) {
            const targetId = event.target.getAttribute('data-target');
            const targetMedia = document.getElementById(targetId);
            if (targetMedia) {
                if (targetMedia.tagName === 'VIDEO') {
                    targetMedia.pause();
                    targetMedia.currentTime = 0;
                }
                targetMedia.style.display = 'none';
            }
        }
    }

    links.forEach(link => {
        link.addEventListener('mouseenter', handleMouseEnter);
        link.addEventListener('mouseleave', handleMouseLeave);
    });
}

// Initialize hover effects
setupHoverEffect();
