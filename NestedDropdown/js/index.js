// nested dropdown js

function nestedDropdown(container) {
  $('.nested-dropdown-select').click(function () {
    $(this).parent().addClass('active')
  })
  $('.nav__list li a').click(function () {
    let val = ""
    let lavelno = +$(this).parent().attr("class").split("-")[1]
    for (let i = lavelno - 1; i > 1; i--) {
      val += `${$(this).closest(`.level-${i}`).attr("data-name")}`
    }
    val += `/${$(this).text()}`
    $(this)
      .closest('.nested-dropdown-wrapper')
      .find('.nested-dropdown-select span')
      .text(val)
    $(this).closest('.nested-dropdown-wrapper').removeClass('active')
  })
  $(document).click(function (e) {
    if (
      !(
        $(e.target).closest('.nested-dropdown-select').length > 0 ||
        $(e.target).closest('.nav__list label').length > 0 ||
        $(e.target).closest('.nav__list input').length > 0
      )
    ) {
      $('.nested-dropdown-wrapper').removeClass('active')
    }
  })
}
nestedDropdown($('.nested-dropdown'))

