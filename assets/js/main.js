new Splide(document.querySelector(".mdl-banner"), {
  type: "loop",
  autoWidth: true,
  autoHeight: true,
  autoplay: true,
  pagination: false,
  arrows: false,
}).mount();

new Splide(document.querySelector(".mdl-stack__slider"), {
  perPage: 1,
  parMove: 1,
  focus: "center",
  pagination: false,
  arrows: false,
  autoHeight: true,
  autoWidth: true,
  speed: 1000,
  easing: "cubic-bezier(0.5, .6, 0.5, 1)",

  breakpoints: {
    1080: {
      autoplay: true,
    },
  },
}).mount();
