(function (window) {
  "use strict"
  function define_openHours () {

    var OpenHours = {}

    var insertColon = function (time) {
      var center = time.length - 2
      var timeWithColon = [time.slice(0, center), ":", time.slice(center)].join("")
      return timeWithColon
    }

    var formatTime = function (time) {
      if (time) {
        if (time >= 1200) {
          var formattedTime = time === 1200 ? 1200 : time - 1200
          return `${insertColon(formattedTime.toString())} PM`
        } else {
          return `${insertColon(time.toString())} AM`
        }
      }
    }

    const weekIndex = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday"
    }

    var determineDay = function (day, dayDiv) {
      var now = new Date()
      if (day === weekIndex[now.getDay()]) {
        dayDiv.style["font-weight"] = "bold"
      }
    }

    OpenHours["generateTime"] = function (hours) {
      var rootElement = document.getElementById("open-hours")
      var table = document.createElement("table")
      if (rootElement) {
        for (var day in hours) {
          var dayDiv = document.createElement("tr")

          determineDay(day, dayDiv)

          var dayTitleElement = document.createElement("td")
          var dayTimesElement = document.createElement("td")

          var dayTitle = document.createTextNode(day)
          dayTitleElement.appendChild(dayTitle)
          dayDiv.appendChild(dayTitleElement)

          var dayHours = ""

          if (Object.keys(hours[day]).length === 0) {
            dayHours = `Closed`
          } else {
            dayHours = `${formatTime(hours[day]["start"])} - ${formatTime(hours[day]["end"])}`
          }

          var dayTimes = document.createTextNode(dayHours)
          dayTimesElement.appendChild(dayTimes)
          dayDiv.appendChild(dayTimesElement)
          table.appendChild(dayDiv)
        }
        rootElement.appendChild(table)
      }
    }

    return OpenHours
  }

  if (typeof OpenHours === "undefined") {
    window.OpenHours = define_openHours()
  }
}(window))
