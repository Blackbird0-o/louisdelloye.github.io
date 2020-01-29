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
  //parallax('#slower', window.scrollY, -0.5);
});



/*
 * Takes care of navigation smooth scrolling
 */

// Select all nav-links
nav_links = document.querySelectorAll(".nav-link")

// Add click ecent listener
for (var i = 0; i < nav_links.length; i++) {
  nav_links[i].addEventListener("click", () => {
    document.getElementById('hamb-btn').click(); // collapses the nav menu
    window.scroll(0, 0);

    // document.querySelector('a[href*=#]').addEventListener('click', function (e) {
    //   e.preventDefault(); // prevent hard jump, the default behavior

    //   document.getElementById("#projects").scrollIntoView();

    //   // var target = this.attr("href"); // Set the target as variable

    //   // // perform animated scrolling by getting top-position of target-element and set it as scroll target
    //   // document.querySelector('html, body').stop().animate({
    //   //   scrollTop: $(target).offset().top
    //   // }, 600, function () {

    //   //   location.hash = target; //attach the hash (#jumptarget) to the pageurl
    //   // });

    //   return false;
    // });

  });
}



// TODO : Add scroll change to right part when click in menu
//if (typeof window.orientation !== 'undefined') { ... }