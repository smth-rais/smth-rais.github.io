// Function to toggle navigation menu
function toggleNav() {
    var navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('active');
}

// Function to apply scroll effects
function applyScrollEffects() {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header nav');
        const heroHeight = document.querySelector('.hero-section') ? document.querySelector('.hero-section').offsetHeight : 0;
        const fromTop = window.scrollY;

        header.classList.toggle('scrolled', window.scrollY > 0);
        header.classList.toggle('solid', fromTop > heroHeight);
    });
}

// Carousel functionality
function setupCarousel() {
    let currentIndex = 0;
    let autoPlayId;
    const slides = document.querySelectorAll('.carousel-images img');
    const dotsContainer = document.querySelector('.carousel-dots');

    // Create dots
    function createDots() {
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    // Update Carousel
    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.style.opacity = index === currentIndex ? '1' : '0';
        });
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.style.backgroundColor = index === currentIndex ? 'var(--button-color)' : '#bbb';
        });
    }

    // Change Slide
    function changeSlide(movement) {
        currentIndex = (currentIndex + movement + slides.length) % slides.length;
        updateCarousel();
    }

    // Go to Specific Slide
    function goToSlide(slideIndex) {
        currentIndex = slideIndex;
        updateCarousel();
    }

    // Autoplay
    function startAutoplay() {
        autoPlayId = setInterval(() => changeSlide(1), 3000);
    }

    // Stop Autoplay
    function pauseAutoplay() {
        clearInterval(autoPlayId);
    }

    createDots();
    updateCarousel();
    startAutoplay();

    document.getElementById('carousel').addEventListener('mouseenter', pauseAutoplay);
    document.getElementById('carousel').addEventListener('mouseleave', startAutoplay);
}

// Video player setup
function setupVideoPlayer() {
    document.addEventListener("DOMContentLoaded", function () {
        const video = document.getElementById("videoElement");
        if (!video) return; // Exit if videoElement not found

        const playPauseBtn = document.getElementById("playPause");
        const progress = document.getElementById("progress");
        const volumeControl = document.getElementById("volume");
        const currentTimeDisplay = document.getElementById("currentTime");
        const durationDisplay = document.getElementById("duration");
        const fullscreenBtn = document.getElementById("fullscreenBtn");

        // Play/Pause Toggle
        function togglePlayPause() {
            if (video.paused || video.ended) {
                video.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        }

        // Update video progress
        video.addEventListener("timeupdate", function () {
            const progressValue = (video.currentTime / video.duration) * 100;
            progress.value = progressValue;

            let currentMinutes = Math.floor(video.currentTime / 60);
            let currentSeconds = Math.floor(video.currentTime % 60);
            currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, "0")}`;
        });

        // Seek video
        progress.addEventListener("input", function () {
            const time = (progress.value * video.duration) / 100;
            video.currentTime = time;
        });

        // Volume control
        volumeControl.addEventListener("input", function () {
            video.volume = volumeControl.value;
        });

        // Fullscreen toggle
        fullscreenBtn.addEventListener("click", function () {
            if (!document.fullscreenElement) {
                if (video.requestFullscreen) video.requestFullscreen();
                fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
            } else {
                if (document.exitFullscreen) document.exitFullscreen();
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
            }
        });

        playPauseBtn.addEventListener("click", togglePlayPause);
        video.addEventListener("click", togglePlayPause);
    });
}

// Initialize functions based on the current page
document.addEventListener("DOMContentLoaded", function() {
    applyScrollEffects(); // Always apply scroll effects

    // Check if on index.html or equivalent functionality
    if (document.querySelector('.hero-section')) {
        setupCarousel();
    }

    setupVideoPlayer(); // Setup video player if on a page with a video player
});
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("videoElement");
    // Make sure video and related elements are present
    if (!video) return;

    const playPauseBtn = document.getElementById("playPause");
    const progress = document.getElementById("progress");
    const volumeControl = document.getElementById("volume");
    const currentTimeDisplay = document.getElementById("currentTime");
    const durationDisplay = document.getElementById("duration");
    const fullscreenBtn = document.getElementById("fullscreenBtn");
    const videoControls = document.querySelector('.video-controls');

    function updateControlsVisibility() {
        if (video.paused) {
            videoControls.classList.add('video-controls-visible');
        } else {
            videoControls.classList.remove('video-controls-visible');
        }
    }

    function togglePlayPause() {
        if (video.paused || video.ended) {
            video.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
        updateControlsVisibility();
    }

    // Attach event listeners
    playPauseBtn.addEventListener("click", togglePlayPause);
    video.addEventListener("click", togglePlayPause);
    video.addEventListener("timeupdate", function() {
        const progressValue = (video.currentTime / video.duration) * 100;
        progress.value = progressValue;
        let currentMinutes = Math.floor(video.currentTime / 60);
        let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
        currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;
    });

    progress.addEventListener("input", function() {
        const time = (progress.value * video.duration) / 100;
        video.currentTime = time;
    });

    volumeControl.addEventListener("input", function() {
        video.volume = volumeControl.value;
    });

    video.addEventListener("loadedmetadata", function() {
        const durationMinutes = Math.floor(video.duration / 60);
        const durationSeconds = Math.floor(video.duration - durationMinutes * 60);
        durationDisplay.textContent = `${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
    });

    fullscreenBtn.addEventListener("click", function() {
        if (!document.fullscreenElement) {
            video.requestFullscreen ? video.requestFullscreen() : video.webkitRequestFullscreen();
            fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
        } else {
            document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen();
            fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
        }
    });

    video.addEventListener('play', updateControlsVisibility);
    video.addEventListener('pause', updateControlsVisibility);
    video.addEventListener('ended', function() {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        updateControlsVisibility();
    });

    updateControlsVisibility(); // Initial call to set visibility
});
