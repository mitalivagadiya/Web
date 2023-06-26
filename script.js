// script.js

// Example: Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var targetId = link.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

var headerTitle = document.querySelector('.header-title');
// Add a click event listener to the header title
headerTitle.addEventListener('click', function() {
  // Perform the desired action when the header title is clicked
  alert('Welcome to the introductory website of Mitali Vagadiya!');
});

document.getElementById("myform").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Submit the form data to Google Forms
  var form = document.getElementById("myform");
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", form.action);
  xhr.send(formData);

  // Show the success message
  document.getElementById("successMessage").style.display = "block";

  // Optionally, you can clear the form fields after submission
  form.reset();
});
