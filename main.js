import "./style.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Mouse effect ------------------------------------------------------------------------------------
const $bigBall = document.querySelector(".cursor__ball--big");
const $smallBall = document.querySelector(".cursor__ball--small");
const $hoverables = document.querySelectorAll(".hoverable");

if (window.innerWidth > 990) {
  // Listeners
  document.addEventListener("mousemove", onMouseMove);
  for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener("mouseenter", onMouseHover);
    $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
  }

  // Move the cursor
  function onMouseMove(e) {
    gsap.to($bigBall, {
      duration: 0.4,
      x: e.clientX - 15,
      y: e.clientY - 15,
    });
    gsap.to($smallBall, {
      duration: 0.1,
      x: e.clientX - 5,
      y: e.clientY - 15,
    });
  }

  // Hover an element
  function onMouseHover() {
    gsap.to($bigBall, {
      duration: 0.3,
      scale: 4,
    });
  }
  function onMouseHoverOut() {
    gsap.to($bigBall, {
      duration: 0.3,
      scale: 1,
    });
  }
}

// Movement and Details ------------------------------------------------------------------------------------
function percentToPixel(_elem, _perc) {
  return (_elem.parentElement.clientWidth / 100) * parseFloat(_perc);
}

const projects = document.querySelectorAll("section");
//  Show-Hide details
projects.forEach((project) => {
  const title = project.querySelector("h2");
  const details = project.querySelector(".project-details");
  const toShow = project.querySelectorAll(".toShow");
  const closeBtn = project.querySelector(".closeDetails");
  let delay;

  title.addEventListener("click", () => {
    delay = 1;
    gsap.to(details, {
      duration: 1,
      display: "block",
      height: window.innerWidth > 990 ? 440 : percentToPixel(details, 150),
      padding: window.innerWidth > 990 ? 20 : 0,
    });

    for (let i = 0; i < toShow.length; i++) {
      const element = toShow[i];

      gsap.to(element, {
        duration: 0.5,
        delay,
        display: "block",
        opacity: 1,
        y: 0,
      });

      delay += 0.1;
    }
  });

  closeBtn.addEventListener("click", () => {
    delay = 0.3;

    for (let i = toShow.length; i >= 0; i--) {
      const element = toShow[i];

      gsap.to(element, {
        duration: 0.5,
        display: "none",
        opacity: 0,
        y: -100,
      });
    }

    gsap.to(details, {
      duration: 1,
      display: "none",
      delay,
      height: 0,
      padding: 0,
    });
  });
});

// movement animation
if (window.innerWidth > 990) {
  gsap.to("#first", {
    x: 80,
    scrollTrigger: {
      trigger: "section:nth-child(1)",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    },
  });

  gsap.to("#second", {
    x: -80,
    scrollTrigger: {
      trigger: "section:nth-child(2)",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    },
  });
  gsap.to("#third", {
    x: 80,
    scrollTrigger: {
      trigger: "section:nth-child(3)",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    },
  });
  gsap.to("#fourth", {
    x: -80,
    scrollTrigger: {
      trigger: "section:nth-child(4)",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    },
  });
  gsap.to("#fifth", {
    x: 80,
    scrollTrigger: {
      trigger: "section:nth-child(5)",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    },
  });
  gsap.to("#sixth", {
    x: -80,
    scrollTrigger: {
      trigger: "section:nth-child(6)",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    },
  });
}
