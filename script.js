$(window).scroll(function () {
  $(".js-fade").each(function () {
    const position = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > position - windowHeight + 100) {
      $(this).addClass("js-show");
    }
  });
});

$(".js-nav-link").on("click", function () {
  const adjust = -20,
    speed = 400,
    href = $(this).attr("href"),
    target = $(href == "#" || href == "" ? "html" : href),
    position = target.offset().top + adjust;
  $("html").animate({ scrollTop: position }, speed, "swing");
  return false;
});
