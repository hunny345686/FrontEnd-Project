// nested dropdown js

function nestedDropdown(container) {
  $(".nested-dropdown-select").click(function () {
    $(this).parent().addClass("active");
  })
  $(".nav__list li a").click(function () {
    $(this).closest(".nested-dropdown-wrapper").find(".nested-dropdown-select span").text($(this).text())
    $(this).closest(".nested-dropdown-wrapper").removeClass("active");
  });
  $(document).click(function (e) {
    console.log()
    if (!($(e.target).closest(".nested-dropdown-select").length > 0 || $(e.target).closest(".nav__list label").length > 0 || $(e.target).closest(".nav__list input").length > 0)) {
      $(".nested-dropdown-wrapper").removeClass("active");
    }
  })
}
nestedDropdown($(".nested-dropdown"))

