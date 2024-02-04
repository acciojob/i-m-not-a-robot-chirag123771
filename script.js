document.addEventListener('DOMContentLoaded', function () {
  // Array to store the class names of images
  const classNames = ['img1', 'img2', 'img3', 'img4', 'img5'];

  // Function to shuffle the classNames array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Function to render images with classNames
  function renderImages() {
    shuffleArray(classNames);

    const container = document.getElementById('image-container');
    container.innerHTML = ''; // Clear previous images

    classNames.forEach((className, index) => {
      const image = document.createElement('img');
      image.src = `https://source.unsplash.com/100x100/?${className}`;
      image.alt = `Image ${index + 1}`;
      image.className = className;
      image.addEventListener('click', handleClick);
      container.appendChild(image);
    });
  }

  // Function to handle image click events
  function handleClick(event) {
    const clickedImage = event.target;

    // Toggle the selected class on the clicked image
    clickedImage.classList.toggle('selected');

    // Check if at least one image is selected
    const selectedImages = document.querySelectorAll('.selected');
    const resetButton = document.getElementById('reset');

    if (selectedImages.length > 0) {
      // State 2: At least one tile is selected
      resetButton.style.display = 'block';
    } else {
      // State 1: No tiles are selected
      resetButton.style.display = 'none';
    }

    if (selectedImages.length === 2) {
      // State 3: Both tiles are selected
      const verifyButton = document.getElementById('verify');
      verifyButton.style.display = 'block';
    }
  }

  // Function to handle reset button click event
  function handleReset() {
    // Reset all selected images
    const selectedImages = document.querySelectorAll('.selected');
    selectedImages.forEach(image => image.classList.remove('selected'));

    // Hide reset and verify buttons
    document.getElementById('reset').style.display = 'none';
    document.getElementById('verify').style.display = 'none';

    // Hide the result message
    document.getElementById('para').textContent = '';

    // State 1: No tiles are selected
  }

  // Function to handle verify button click event
  function handleVerify() {
    const selectedImages = document.querySelectorAll('.selected');
    const resetButton = document.getElementById('reset');
    const verifyButton = document.getElementById('verify');
    const resultMessage = document.getElementById('para');

    // State 4: Verify button is clicked
    verifyButton.style.display = 'none';
    resetButton.style.display = 'none';

    if (selectedImages[0].className === selectedImages[1].className) {
      // Identical tiles are selected
      resultMessage.textContent = 'You are a human. Congratulations!';
    } else {
      // Non-identical tiles are selected
      resultMessage.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
    }
  }

  // Render initial images
  renderImages();

  // Event listener for the reset button
  document.getElementById('reset').addEventListener('click', handleReset);

  // Event listener for the verify button
  document.getElementById('verify').addEventListener('click', handleVerify);
});
