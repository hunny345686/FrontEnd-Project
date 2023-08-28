

(function () {
  function handalATMlocator(container) {
    let config = {
      searchInput: $(container).find(".nested-dropdown-select-input"),
      lis: $(container).find(".nav-menu .area-list li"),
      levels: $(container).find(".nav-menu li label"),
      allAncer: $(container).find(".nav-menu li a"),
      dropdownContainer: ".nested-dropdown-container",
      toggleDropDown() {
        $(this).parent().children("ul").toggleClass("show")
        $(this).toggleClass("arrow")
        $(this).parent().children("ul").children("li").removeClass("visible")
      },
      handleSeachedText(text, searchVal) {
        return text.replace(" ", "").search(RegExp("\\b" + searchVal, "i"))
      },
      handleHideShow(data) {
        $(data).each(function () {
          if ($(this).find(".visible").length < 1) $(this).hide()
          else $(this).show()
        })
      },

      handleSearch() {
        let filter = $(this).val();
        $(config.lis).each(function () {
          let province = $(this).closest(".nav-menu");
          if (config.handleSeachedText($(this).text(), filter) < 0) {
            $(this).removeClass("visible").fadeOut(100)
          } else {
            $(province).find("ul").addClass("show")
            $(province).find("label").addClass("arrow")
            // $(container).find(".nav-menu_first-level").removeClass("visible").fadeOut(100)
            $(this).addClass("visible").fadeIn(100)
          }
        });
        config.handleHideShow($(container).find(".province"))
        config.handleHideShow($(container).find(".region"))
        if ($(container).find(".visible").length < 1 && filter != "") $(".nav-menu p").show()
        else $(".nav-menu p").hide()

        if (filter == "") config.resetDropDow();
      },
      resetDropDow() {
        $(container).find(".region").show()
        $(container).find(".visible").removeClass("visible")
        $(container).find(".show").removeClass("show")
        $(container).find(".arrow").removeClass("arrow")
      },
      handleOpenDropdown() {
        $(this).parent().addClass("open")
        $(this).val("")
        config.resetDropDow()
      },
      handleInputVal() {
        let parentEl = $($(this).closest("ul").parent().find("label")[0]).text()
        $(this).closest(config.dropdownContainer).find("input").val(`${parentEl} (${$(this).text()})`)
        $(this).closest(config.dropdownContainer).removeClass("open")
      },
      handalOutsideClick(e) {
        if (!(
          $(e.target).closest(config.dropdownContainer).length > 0 ||
          $(e.target).closest('.nav-menu label').length > 0
        )
        ) {
          $(config.dropdownContainer).removeClass('open')
        }

      },
      events() {
        $(config.searchInput).keyup(config.handleSearch)
        $(config.searchInput).on("focus", config.handleOpenDropdown)
        $(config.levels).click(config.toggleDropDown)
        $(config.allAncer).click(config.handleInputVal)
        $(document).click(config.handalOutsideClick)
      },
      init() {
        config.events()
      }
    }
    config.init()
  }
  $(".branch-locator_container").each(function () {
    handalATMlocator(this)
  })
})()







