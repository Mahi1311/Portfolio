// Array of image filenames
const images = [
    'painting1.jpg', // Replace with your actual image paths
    'painting2.jpg',
    'painting3.jpg',
    'painting4.jpg'
];

let currentIndex = 0; // To keep track of the current image

// Function to change the image
function changeImage() {
    const sliderImg = document.getElementById('slider-img');
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    sliderImg.src = images[currentIndex]; // Change the image source
}

// Change image every 2 seconds (2000 milliseconds)
setInterval(changeImage, 2000);

