new Splide(document.querySelector(".mdl-banner"), {
  type: "loop",
  autoWidth: true,
  autoHeight: true,
  autoplay: true,
  pagination: false,
  arrows: false,
}).mount();

new Splide(document.querySelector(".mdl-stack__slider"), {
  type: "loop",
  perPage: 8,
  parMove: 1,
  gap: 52,
  pagination: false,
  arrows: false,
  autoplay: true,
  speed: 1000,
  easing: "cubic-bezier(0.5, .6, 0.5, 1)",

  breakpoints: {
    1080: {
      perPage: 7,
    },
    920: {
      perPage: 6,
    },
    760: {
      perPage: 5,
    },
    620: {
      perPage: 4,
      gap: 36,
    },
    500: {
      perPage: 3,
    },
  },
}).mount();
