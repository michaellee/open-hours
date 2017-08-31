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

var generateTime = function (hours) {
  var rootElement = document.getElementById("open-hours")
  if (rootElement) {
    for (var day in hours) {
      var dayDiv = document.createElement("div")
      var dayHours = ""

      if (Object.keys(hours[day]).length === 0) {
        dayHours = `${day} Closed`
      } else {
        dayHours = `${day} ${formatTime(hours[day]["start"])} - ${formatTime(hours[day]["end"])}`
      }

      var dayContent = document.createTextNode(dayHours)
      dayDiv.appendChild(dayContent)
      rootElement.appendChild(dayDiv)
    }
  }
}
