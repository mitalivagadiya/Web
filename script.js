// Wait for the DOM to finish loading
document.addEventListener('DOMContentLoaded', function() {
  // Project click events
  var projects = document.getElementById('projects');
  var projectItems = projects.querySelectorAll('li');
  projectItems.forEach(function(item) {
    item.addEventListener('click', function() {
      var projectId = item.getAttribute('data-project-id');
      if (projectId) {
        redirectToProjectPage(projectId);
      }
    });
  });

  // Update the contact number
  var contactNumber = document.getElementById('contactNumber');
  contactNumber.textContent = '+1 123-456-7890'; // Replace with your actual contact number

  // Smooth scroll to section
  var navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var targetSection = document.querySelector(link.getAttribute('href'));
      scrollToSection(targetSection);
    });
  });

  // Smooth scroll function
  function scrollToSection(section) {
    var scrollOptions = {
      behavior: 'smooth',
      block: 'start'
    };
    section.scrollIntoView(scrollOptions);
  }

  // Redirect to project page
  function redirectToProjectPage(projectId) {
    // Define the project URLs
    var projectURLs = {
      project1: 'https://crccalc.com',
      project2: 'https://www.fileformat.info/tool/hash.htm',
      // Add more project URLs here
    };

    // Check if the project URL exists
    if (projectURLs.hasOwnProperty(projectId)) {
      window.location.href = projectURLs[projectId];
    }
  }
});
