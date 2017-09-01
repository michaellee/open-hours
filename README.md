# Open Hours
_Add business hours of operation to your site_

Open Hours lets you simply add your business' hours of operation to your site by defining a simple JavaScript object. It also determines the current day and highlights the day on visit. Open Hours doesn't have any dependencies and is written in plain JavaScript.

## What's it look like?
![Open Hours rendered table](https://user-images.githubusercontent.com/1329644/29952820-d59d6ac0-8e99-11e7-9d92-62af28256cdc.png)

## How to use Open Hours

### Download
Download Open Hours into your project folder.

### Usage
Link the file before the closing `</body>` body tag in your markup.

``` html
...
<!-- This assumes that the file is on the same level as the HTML file -->
  <script src="./open-hours.js" charset="utf-8"></script>
</body>
```

Add an element with the `id` of `open-hours` to the document

``` html
...
  <div id="open-hours"></div>
  <script src="./open-hours.js" charset="utf-8"></script>
</body>
```

Then define your hours in a simple JavaScript object and pass it to `OpenHours`' `generateTime()` function. The keys must be in the format seen in the example below, where the first letter of the day of the week is capitalized. Open Hours also assumes that the order defined in the object is the order in which to render the hours of operation.

``` html
...
  <div id="open-hours"></div>
  <script src="./open-hours.js" charset="utf-8"></script>
  <script>
    const hours = {
      "Monday":     { start: 1000, end: 1800 },
      "Tuesday":    { start: 1400, end: 1800 },
      "Wednesday":  { start: 1100, end: 1900 },
      "Thursday":   { start: 1300, end: 1800 },
      "Friday":     { start: 1000, end: 1700 },
      "Saturday":   { start: 900, end: 1700 },
      "Sunday":     {}
    }

    OpenHours.generateTime(hours)
  </script>
</body>
```

### Time format
The values for start and end accept `Number` values, it also assumes that the time is in 24 hour format.

So if your business starts at 9:00 AM and ends at 5:30 PM, you'll use something like this:

``` javascript
{
  start:  900,
  end:    1730
}
```

If your business is closed certain days, simply pass an object for that day without any keys.

---

Open Hours is by [Michael Lee](https://michaelsoolee.com/about). If you enjoy Open Hours, [tip Michael some :beer: beer money](https://goo.gl/5tXJXv).
