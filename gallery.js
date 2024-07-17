document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const expandedView = document.querySelector('.expanded-view');
    const expandedImage = expandedView.querySelector('img');
    const expandedTitle = expandedView.querySelector('.title');
    const expandedText = expandedView.querySelector('.text');
    const closeButton = expandedView.querySelector('.close-button');
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        const largeImageSrc = thumbnail.getAttribute('data-large-image');
        const description = thumbnail.getAttribute('data-description');
        expandedImage.src = largeImageSrc;
        expandedTitle.textContent = thumbnail.querySelector('.title').textContent;
        expandedText.textContent = description;
        expandedView.style.display = 'block';
      });
    });
  
    closeButton.addEventListener('click', function() {
      expandedView.style.display = 'none';
    });
  });
// Get the close button element
const closeButton = document.getElementById('close-button');

// Get the expanded view container
const expandedView = document.getElementById('expanded-view');

// Add a click event listener to the close button
closeButton.addEventListener('click', function() {
    // Hide the expanded view when the close button is clicked
    expandedView.style.display = 'none';
});

document.getElementById('fontInput').addEventListener('change', function() {
  var font = this.value;
  document.getElementById('description').style.fontFamily = font;
});

document.getElementById('colorInput').addEventListener('input', function() {
  var color = this.value;
  document.getElementById('description').style.color = color;
});
