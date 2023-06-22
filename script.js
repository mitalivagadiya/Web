// Example JavaScript code
console.log("Hello, world!");

// Add an event listener to the header
// var header = document.querySelector('header');
// header.addEventListener('click', function() {
//   alert('You clicked the header!');
// });

fetch('https://api.example.com/data')
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .then(function (data) {
    // Handle the data here
    console.log(data);
  })
  .catch(function (error) {
    // Handle any errors here
    console.error(error);
  });

