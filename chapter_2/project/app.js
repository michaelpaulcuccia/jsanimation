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
    //ease: "elastic.out(1, 0.4)",
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
