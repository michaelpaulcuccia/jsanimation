// gsap.to(".text", {
//   y: 200,
//   opacity: 0,
//   duration: 5,
// });

// gsap.fromTo(
//   ".text",
//   {
//     opacity: 0,
//   },
//   {
//     opacity: 1,
//     duration: 10,
//   }
// );

gsap.fromTo(
  ".text",
  {
    opacity: 0,
    y: 20,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
  }
);
