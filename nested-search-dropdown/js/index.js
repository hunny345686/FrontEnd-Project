// nested dropdown js
let locationData = [
  {
    parent: 'Local Region',
    children: [
      {
        parent: 'all',
        children: null,
      },
      {
        parent: 'Luzon',
        children: [
          {
            parent: 'Abra',
            children: null,
          },
          {
            parent: 'Baguio',
            children: null,
          },
          {
            parent: 'Batangas',
            children: null,
          },
          {
            parent: 'Cavite',
            children: null,
          },
          {
            parent: 'Isabela',
            children: null,
          },
          {
            parent: 'Laguna',
            children: null,
          },
          {
            parent: 'Rizal',
            children: null,
          },
        ],
      },
      {
        parent: 'Metro Manila',
        children: [
          {
            parent: 'Caloocan',
            children: null,
          },
          {
            parent: 'Greenhills',
            children: null,
          },
          {
            parent: 'Las Piñas',
            children: null,
          },
          {
            parent: 'Makati',
            children: null,
          },
          {
            parent: 'Malabon',
            children: null,
          },
          {
            parent: 'Navotas',
            children: null,
          },
        ],
      },
      {
        parent: 'Visayas',
        children: [
          {
            parent: 'Bohol',
            children: null,
          },
          {
            parent: 'Capiz',
            children: null,
          },
          {
            parent: 'Test',
            children: null,
          },
          {
            parent: 'Cebu',
            children: null,
          },
          {
            parent: 'Leyte',
            children: null,
          },
          {
            parent: 'Samar',
            children: null,
          },
        ],
      },
      {
        parent: 'Mindanao',
        children: [
          {
            parent: 'Cotabato',
            children: null,
          },
          {
            parent: 'Davao del Sur',
            children: null,
          },
          {
            parent: 'Zamboanga del Norte',
            children: null,
          },
          {
            parent: 'Zamboanga del Sur',
            children: null,
          },
          {
            parent: 'Bukidnon',
            children: null,
          },
          {
            parent: 'Davao',
            children: null,
          },
        ],
      },
    ],
  },
  {
    parent: 'International',
    children: [
      {
        parent: 'All',
        children: null,
      },
      {
        parent: 'Singapore',
        children: null,
      },
      {
        parent: 'Hongkong',
        children: null,
      },
    ],
  },
]

function nestedDropdown(container) {
  const searchBox = $(container).find('.nested-dropdown-select-input')
  const WrapperContainer = $(container).find('.nested-dropdown-wrapper')
  const allLI = $(container).find('.nav__list li a')
  const LiWrapper = $(container).find('.nav__list')

  $(searchBox).on('focus', (e) => {
    $(e.target).closest(WrapperContainer).addClass('active')
  })

  $(searchBox).on('input', function (e) {
    let Lihtml = ''
    let searchString = $(e.target).val().toLowerCase()
    if (searchString.length > 0) {
      $(e.target).closest(WrapperContainer).addClass('active')
    } else {
      $(e.target).closest(WrapperContainer).removeClass('active')
    }

    let data = []
    let data2 = $(allLI).map(function (i, item) {
      if ($(item).text().toLowerCase().includes(searchString)) {
        data.push({
          subChild: $(item).text(),
          child: $(item).closest(".level-2").attr("data-name"),
          parent: $(item).closest(".level-1").attr("data-name")
        })

      }
    })
    for (const iterator of data) {

      console.log(iterator)


    }
    // $(allLI).each(function (i, item) {
    //    if($(item).text().toLowerCase().includes(searchString)){
    //       data += $(item).parent().parent().html()
    //    }
    // })

    // LiWrapper.html(data)
    console.log(data2)
    // $(LiWrapper).html(data)
  })


  // `<li class="level-1" data-name="Local Region">
  // <input id="g-1" type="checkbox" chacked hidden />
  // <label for="g-1">
  //   <img src="./img/dwonArrwo.svg" alt="" />Local Region</label>
  // <ul class="group-list">
  //   <li class="level-2"><a href="#">All</a></li>`

  $(document).click(function (e) {
    if (
      !(
        $(e.target).closest('.nested-dropdown-select').length > 0 ||
        $(e.target).closest('.nav__list label').length > 0 ||
        $(e.target).closest('.nav__list input').length > 0
      )
    ) {
      $(WrapperContainer).removeClass('active')
    }
  })
}
nestedDropdown($('.nested-dropdown'))


// function matchExact(r, str) {
//    var match = str.match(r);
//    return match && str === match;
// }

// console.log(matchExact("ab","ba"))
