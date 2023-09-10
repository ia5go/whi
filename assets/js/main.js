new Splide(document.querySelector(".banner"), {
  type: "loop",
  autoWidth: true,
  autoHeight: true,
  autoplay: true,
  pagination: false,
  arrows: false,
}).mount();

new Splide(document.querySelector(".stack__carousel"), {
  type: "loop",
  perPage: 4,
  parMove: 4,
  autoplay: false,
  pagination: true,
  arrows: false,
  speed: 1800,
  easing: "cubic-bezier(0.5, .6, 0.5, 1)",
}).mount();
