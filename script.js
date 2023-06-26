// Wait for the DOM to finish loading
document.addEventListener('DOMContentLoaded', function() 
{
  // Smooth scroll function
  function scrollToSection(section) {
    var scrollOptions = {
      behavior: 'smooth',
      block: 'start'
    };
    section.scrollIntoView(scrollOptions);
  }
});
