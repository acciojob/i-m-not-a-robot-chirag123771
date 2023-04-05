//your JS code here. If required.
// Get all the image elements
const images = document.querySelectorAll('img');

// Get the reset button element
const resetButton = document.getElementById('reset');

// Get the verify button element
const verifyButton = document.getElementById('verify');

// Get the paragraph element
const para = document.getElementById('para');

// Set the initial state
let state = 1;

// Set the initial score
let score = 0;

// Shuffle the images randomly
function shuffleImages() {
    const imageUrls = [
        'https://picsum.photos/200',
        'https://picsum.photos/201',
        'https://picsum.photos/202',
        'https://picsum.photos/203',
        'https://picsum.photos/204'
    ];
    const randomIndex = Math.floor(Math.random() * 5);
    const repeatIndex = Math.floor(Math.random() * 5);
    for (let i = 0; i < images.length; i++) {
        if (i === repeatIndex) {
            images[i].src = imageUrls[randomIndex];
            images[i].classList.add(`img${repeatIndex + 1}`);
        } else {
            images[i].src = imageUrls[Math.floor(Math.random() * 5)];
            images[i].classList.add(`img${i + 1}`);
        }
    }
}

// Reset the state and score
function reset() {
    state = 1;
    score = 0;
    resetButton.style.display = 'none';
    verifyButton.style.display = 'none';
    para.style.display = 'none';
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('selected');
    }
}

// Check if the two selected images are identical
function checkIdentical() {
    const selectedImages = document.querySelectorAll('.selected');
    if (
