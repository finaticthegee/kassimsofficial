// Get all buttons with the class 'animatedButton'
const buttons = document.querySelectorAll('.animatedButton');

// Loop through each button and add event listeners
buttons.forEach(function(button) {
  button.addEventListener('mousedown', function() {
    // Scale down the button when pressed
    this.style.transform = 'scale(0.9)';
  });

  button.addEventListener('mouseup', function() {
    // Return the button to its original size
    this.style.transform = 'scale(1)';
  });

  button.addEventListener('mouseleave', function() {
    // Reset size if mouse leaves the button area
    this.style.transform = 'scale(1)';
  });
});
