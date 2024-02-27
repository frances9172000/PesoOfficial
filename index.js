$("document").ready(function () {
  $(".home-link").click(function (e) {
    let that = this;
    $(".home-link").removeClass("active");
    $(this).addClass("active");
    $(".home-link").each(function (i, e) {
      if (that == e) {
        $(".home-link-content").eq(i).addClass("active");
      } else {
        $(".home-link-content").eq(i).removeClass("active");
      }
    });
  });

  $(".close-side-nav").click(function () {
    $(".side-nav").css("transform", "translateX(-100%)");
    $(".side-nav-backdrop").css("display", "none");
  });

  $(".side-nav-backdrop").click(function () {
    $(".side-nav").css("transform", "translateX(-100%)");
    $(".side-nav-backdrop").css("display", "none");
  });

  $(".menu").click(function () {
    $(".side-nav").css("transform", "translateX(0)");
    $(".side-nav-backdrop").css("display", "block");
  });
});
