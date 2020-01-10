const moonPath = "M14 24C14 37.2548 24 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C24 0 14 10.7452 14 24Z";
const sunPath = "M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z";

const darkMode = document.querySelector('#darkMode');
let toggle = false;

// Switch between light and dark mode
darkMode.addEventListener('click', () => {
  //We need to use anime.js
  //Here we set up the timeline
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });

  //Add different animations to the timeline
  timeline.add({
      targets: ".sun",
      d: [{
        value: toggle ? sunPath : moonPath
      }]
    })
    .add({
      targets: '#darkMode',
      rotate: toggle ? 0 : 320
    }, '-= 350')
    .add({
      targets: ["body", "nav"],
      backgroundColor: toggle ? "#EEEEEE" : "#252525"
    }, "-= 700")
    .add({
      targets: "footer",
      backgroundColor: toggle ? "#F8F8F8" : "#1f1f1f"
    }, "-= 700")
    .add({
      targets: ['h1', 'h4', 'h3', 'p'],
      color: toggle ? "#252525" : "#EEEEEE"
    }, "-=700")
    .add({
      targets: ".nav-link",
      color: toggle ? "#252525" : "#EEEEEE"
    }, "-=700")
    .add({
      targets: "#contact",
      color: toggle ? "#2240E7" : "#FFD12F"
    }, "-=700")
    .add({
      targets: ".profile-svg",
      filter: toggle ? "invert(100%) sepia(30%) saturate(3198%) hue-rotate(335deg) brightness(153%) contrast(85%)" : "invert(0%)"
    }, "-=700")
    .add({
      targets: '.bar',
      backgroundColor: !toggle ? "#EEEEEE" : "#252525"
    }, "-=1400")

  //Everytime we click on the sun we want toggle to switch between true and false
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});

// TODO : Add scroll parallax animations
// TODO : Add scroll change to right part when click in menu