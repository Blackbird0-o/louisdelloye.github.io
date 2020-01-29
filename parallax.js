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

// Define smooth scroll function
function scrollIt(destination, duration = 200, easing = 'linear', callback) {

  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop - 100;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

// Select all nav-links
nav_links = document.querySelectorAll(".nav-link")

// Add click event listener
for (var i = 0; i < nav_links.length; i++) {
  nav_link = nav_links[i];
  nav_link.addEventListener("click", () => {

    // Collapse nav menu
    document.getElementById('hamb-btn').click();

    // Smooth scroll to element
    scrollIt(
      document.querySelector('#projects'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );


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