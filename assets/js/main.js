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
  autoHeight: true,
  autoWidth: true,
  focus: "center",
  pagination: false,
  arrows: false,
  speed: 1000,
  easing: "cubic-bezier(0.5, .6, 0.5, 1)",

  breakpoints: {
    1080: {
      autoplay: true,
    },
  },
}).mount();

const projectsSlider = new Splide(document.querySelector(".mdl-projects__slider"), {
  perPage: 3,
  perMove: 3,
  focus: "center",
  pagination: false,
  arrows: false,
  easing: "cubic-bezier(0.5, .6, 0.5, 1)",

  breakpoints: {
    990: {
      perPage: 2,
      perMove: 2,
    },
    520: {
      perPage: 1,
      perMove: 1,
    },
  },
});

const projectsSliderNav = new Splide(document.querySelector(".mdl-projects__slider-nav"), {
  perPage: 1,
  perMove: 1,
  pagination: false,
  arrows: false,
  rewind: true,
  gap: 10,
  autoHeight: true,
  autoWidth: true,
  autoplay: true,
  focus: "center",
  isNavigation: true,
});

projectsSlider.sync(projectsSliderNav);
projectsSlider.mount();
projectsSliderNav.mount();
