//ENTRANCE ANIMATIONS
const tl = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: "power1.out",
  },
});

tl.from(
  ".cookie-container",
  {
    scale: 0,
  },
  {
    scale: 1,
  }
);

tl.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotation: "-45deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);

tl.fromTo(
  ".text",
  {
    x: 30,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
  },
  //syncs with previous animation
  "<"
);

//DOM ELEMENT
const button = document.querySelector("button");

//BUTTON
button.addEventListener("click", () => {
  const tl = gsap.timeline({
    defaults: {
      duration: 0.75,
    },
  });

  tl.fromTo(
    ".cookie",
    {
      y: 0,
      rotation: "0deg",
    },
    {
      rotation: "-270deg",
      y: -10,
      yoyo: true,
      repeat: 2,
    }
  );

  tl.to(".cookie-container", {
    opacity: 0,
    y: 100,
    duration: 0.5,
  });
});
