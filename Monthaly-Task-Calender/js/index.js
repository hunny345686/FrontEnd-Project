$(document).ready(function () {
  var eventData = [
    {
      date: "2023-03-16",
      startTime: "10:00 AM",
      endTime: "12:00 AM",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Meeting with John",
      eventType: "non-trading-day",
    },
    {
      date: "2023-03-15",
      startTime: "10:00 AM",
      endTime: "12:00 AM",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Meeting with John",
      eventType: "ipo",
    },
    {
      date: "2023-03-16",
      startTime: "13:00 PM",
      endTime: "15:00 PM",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Meeting with John",
      eventType: "webinar",
    },
    {
      date: "2023-03-16",
      startTime: "10:00 AM",
      endTime: "12:00 AM",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "meeting with prem",
      eventType: "stock-right-offer",
    },
    {
      date: "2023-04-16",
      startTime: "10:00 AM",
      endTime: "12:00 AM",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Meeting with John",
      eventType: "ipo",
    },
    {
      date: "2023-03-16",
      startTime: "10:00 AM",
      endTime: "12:00 AM",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Meeting with John",
      eventType: "ipo",
    },
    {
      date: "2023-02-16",
      startTime: "10:00 AM",
      endTime: "12:00 AM",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Meeting with John",
      eventType: "webinar",
    },
  ];

  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  var currentYear = currentDate.getFullYear();
  var currentDay = currentDate.getDate();
  function renderCalendar(month, year) {
    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    var numDays = lastDay.getDate();
    var firstDayOfWeek = firstDay.getDay();
    var numRows = Math.ceil((numDays + firstDayOfWeek) / 7);
    var calendar = $("#calendar");
    calendar.empty();
    // Render calendar header
    var header = $("<div class='calendar-header'></div>");
    var prevMonth = $("<span class='prev-month'>&#10094;</span>");
    prevMonth.click(function () {
      month == 0
        ? renderCalendar(11, year - 1)
        : renderCalendar(month - 1, year);
      getEventDetail();
    });
    var nextMonth = $("<span class='next-month'>&#10095;</span>");
    nextMonth.click(function () {
      month == 11
        ? renderCalendar(0, year + 1)
        : renderCalendar(month + 1, year);
      getEventDetail();
    });

    var monthYear = $(
      "<span class='month-year'>" + monthName(month) + " " + year + "</span>"
    );
    header.append(prevMonth);
    header.append(monthYear);
    header.append(nextMonth);
    calendar.append(header);
    // Render calendar body=========
    var body = $("<div class='calendar-body'></div>");
    for (var i = 0; i < numRows; i++) {
      var row = $("<div class='calendar-row'></div>");
      for (var j = 0; j < 7; j++) {
        var dateNum = i * 7 + j - firstDayOfWeek + 1;
        var date = new Date(year, month, dateNum);
        var dateString = formatDate(date);
        var dateElem = $("<div class='calendar-date'></div>");
        if (dateNum > 0 && dateNum <= numDays) {
          dateElem.text(dateNum).addClass("is_not_empty_date");
          dateElem.attr("data-date", dateString);
          if (
            month == currentMonth &&
            year == currentYear &&
            dateNum == currentDay
          ) {
            dateElem.addClass("today");
          }
          var events = getEventsByDate(dateString);
          if (events.length > 0) {
            var eventList = $("<ul class='event-list'></ul>");
            for (var k = 0; k < events.length; k++) {
              var event = events[k];
              var eventItem = $(
                `<li class='event-item ${event.eventType}'></li>`
              );
              $(dateElem).addClass("event-date");
              eventList.append(eventItem);
            }
            dateElem.append(eventList);
            dateElem.click(function () {
              $(".calendar-date").removeClass("selected");
              $(this).addClass("selected");
              $("#event-details").empty();
              var date = new Date($(this).attr("data-date"));
              var events = getEventsByDate(formatDate(date));
              for (var k = 0; k < events.length; k++) {
                var eventItem = $("<div class='event-item'></div>");
                $("#event-details").append(eventItem);
              }
            });
          }
        }
        row.append(dateElem);
      }
      body.append(row);
    }
    calendar.append(body);
  }
  function formatDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    var day = date.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    return year + "-" + month + "-" + day;
  }
  function getEventsByDate(date) {
    var events = [];
    for (var i = 0; i < eventData.length; i++) {
      if (eventData[i].date == date) {
        events.push(eventData[i]);
      }
    }
    return events;
  }
  function monthName(month) {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month];
  }
  renderCalendar(currentMonth, currentYear);
  // get Event Detail
  function getEventDetail() {
    $(".event-date").on("click", function (e) {
      console.log($(e.target).data("date"));
      let filterData = eventData
        .filter((item) => {
          return item.date.includes($(e.target).data("date"));
        })
        .map((mapItem) => {
          let data = mapItem.title.split(" ").map((item) => item.charAt(0));
          let eventDetailHtml = `<div class="event_detail">
          <div class="event_detail_left ${mapItem.eventType}">${data.join(
            ""
          )}</div>
          <div class="event_detail_right" >
            <div class="date_and_time">
              <p><strong>Date </strong><span>${mapItem.date}</span></p>
              <p><strong>Time </strong><span>${mapItem.startTime} To ${
            mapItem.endTime
          }</span></p>
            </div>
            <h4 class="event_desc">${mapItem.title}</h4>
            <p >${mapItem.desc}</p>
            <p class="event_type">${mapItem.eventType}</p>
          </div>
        </div>`;
          return eventDetailHtml;
        });
      $(".all_event_detail").html(filterData);
    });
  }
  getEventDetail();
});
