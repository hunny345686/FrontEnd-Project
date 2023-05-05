(function () {
  var section = document.querySelectorAll(".section");
  var sections = {};
  $(section).each(function (e, v) {
    sections[$(v).attr("id")] = $(v).offset().top;
  });
  window.onscroll = function () {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    $.each(sections, function (i, v) {
      if (v <= scrollPosition) {
        $(".active").removeClass("active");
        $(`a[href*= ${i}]`).addClass("active");
      }
    });
  };
})();
