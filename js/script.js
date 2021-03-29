$(document).ready(() => {
  $(".search-btn").click(() => {
    $(".search-btn").addClass("active");
    $("input").addClass("active");
    $(".right-nav ul").addClass("display-none");
    $(".close-btn").addClass("active");
  });

  $(".close-btn").click(() => {
    $(".search-btn").removeClass("active");
    $("input").removeClass("active");
    $(".right-nav ul").removeClass("display-none");
    $(".close-btn").removeClass("active");
  });

  $(".mobile-btn").click(() => {
    $(".mobile-links").toggleClass("active");
    $(".mobile-btn").toggleClass("active");
  });
});
