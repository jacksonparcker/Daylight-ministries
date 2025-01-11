const videoUrls = [
    'PASTOR VIDEO_x264.mp4',
    'video/joint_youth_13.mp4',
    'video/joint_youth_13.mp4'
];

const videoTitles = [
    'minister',
    'prayertune',
    'youth gathering'
];

let currentSlide = 0;
let slideInterval = 5000; // Time between slides (in milliseconds)
let videoElement; // Store the current video element

function createVideoElements() {
    const videoSlider = document.getElementById('video-slider');

    // Create the video element only once
    videoElement = document.createElement('video');
    videoElement.src = videoUrls[currentSlide]; // Set the initial video source
    videoElement.autoplay = true;
    videoElement.muted = true; // Mute to allow autoplay
    videoElement.className = 'slider-video';
    videoElement.setAttribute('loop', 'false'); // No looping required here

    videoSlider.appendChild(videoElement);

    // Update the video title on load
    updateVideoTitle(currentSlide);
    
    // Highlight the corresponding row(s) based on the first video
    highlightRow(currentSlide);
}

function updateVideoTitle(index) {
    const videoTitle = document.getElementById('video-title');
    videoTitle.textContent = videoTitles[index];
}

function highlightRow(index) {
    // Remove the "highlighted" class from all rows
    const rows = document.querySelectorAll('tr');
    rows.forEach(row => row.classList.remove('highlighted'));

    // Adjust indices according to your requirements
    if (index === 0) {
        // Highlight tr1 for the first video
        document.getElementById('tr1').classList.add('highlighted');
    } else if (index === 1) {
        // Highlight tr2 for the second video
        document.getElementById('tr2').classList.add('highlighted');
    } else if (index === 2) {
        // Highlight multiple rows for the third video
        document.getElementById('tr3').classList.add('highlighted');
        document.getElementById('trc').classList.add('highlighted'); // Additional highlight if needed
    } else if (index === 3) {
        // Highlight tr4 for additional case
        document.getElementById('tr4').classList.add('highlighted');
    } else if (index === 4) {
        // Highlight tr5 for additional case
        document.getElementById('tr5').classList.add('highlighted');
        document.getElementById('tre').classList.add('highlighted'); // Additional highlight if needed
    } else if (index === 5) {
        // Highlight tr6 for additional case
        document.getElementById('tr6').classList.add('highlighted');
    } else if (index === 6) {
        // Highlight tr7 for additional case
        document.getElementById('tr7').classList.add('highlighted');
        document.getElementById('trc').classList.add('highlighted'); // Additional highlight if needed
    }
}

function nextSlide() {
    // Pause the current video before transitioning
    videoElement.pause();

    // Transition to the next slide
    currentSlide = (currentSlide + 1) % videoUrls.length; // Loop back to 0 after the last video

    // Update video source and play
    videoElement.src = videoUrls[currentSlide];
    videoElement.currentTime = 0; // Reset video to the beginning
    videoElement.play(); // Play the new video

    // Update video title and highlight the corresponding row
    updateVideoTitle(currentSlide);
    highlightRow(currentSlide);
}

// Automatically switch slides every 'slideInterval' seconds
setInterval(nextSlide, slideInterval);

// Create video elements on page load
window.onload = createVideoElements;
