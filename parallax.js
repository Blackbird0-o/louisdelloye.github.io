// Function that will change the scrolling speed of a specific element
function parallax(element, distance, speed) {
  const item = document.querySelector(element);

  item.style.transform = `translateY(${distance * speed}px)`;
}

// Vary speed based on scroll
window.addEventListener('scroll', function () {
  parallax('#green', window.scrollY, 0.2);
  parallax('#blue', window.scrollY, -0.3);
  parallax('#yellow', window.scrollY, -0.1);
});

// TODO : Add scroll change to right part when click in menu