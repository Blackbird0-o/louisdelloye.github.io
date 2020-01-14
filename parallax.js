/*
 Takes care of the button that appears to scroll back to the top
 */
//Get the button:
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
 Takes care of the parallax effect
 */
// Function that will change the scrolling speed of a specific element
function parallax(element, distance, speed) {
  const item = document.querySelector(element);

  item.style.transform = `translateY(${distance * speed}px)`;
}

// Vary speed based on scroll
window.addEventListener('scroll', function () {
  parallax('#green', window.scrollY, -0.3);
  parallax('#blue', window.scrollY, -0.2);
  //parallax('#yellow', window.scrollY, -0.1);
});

// TODO : Add scroll change to right part when click in menu