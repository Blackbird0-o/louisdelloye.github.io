/*
 * Takes care of the button that appears to scroll back to the top
 */
// Get the button:
mybuttonL = document.getElementById("myBtnL");
mybuttonD = document.getElementById("myBtnD");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction(mybuttonL);
  scrollFunction(mybuttonD);
};

function scrollFunction(myb) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myb.style.display = "block";
  } else {
    myb.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/*
 * Takes care of the parallax effect
 */
// Function that will change the scrolling speed of a specific element
function parallax(element, distance, speed) {
  const item = document.querySelector(element);

  item.style.transform = `translateY(${distance * speed}px)`;
}

// Vary speed based on scroll
window.addEventListener('scroll', function () {
  parallax('#fast', window.scrollY - 700, -0.3); // - 700 is here to compensate for all the stuff before one arrives at the projects section
  parallax('#slowest', window.scrollY - 700, 0.33);
  parallax('#faster', window.scrollY - 700, -0.4);
  //console.log(window.scrollY);
  //parallax('#slower', window.scrollY, -0.5);
});

// TODO : Add scroll change to right part when click in menu
//if (typeof window.orientation !== 'undefined') { ... }