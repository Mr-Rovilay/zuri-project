// Get current day
let day1 = new Date().toLocaleString("en-US", { weekday: "long" });
document.getElementById("day-of-week").innerHTML = day1; //

// current UTC time

var now = new Date();
var utc_timestamp = Date.UTC(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  now.getHours(),
  now.getMinutes(),
  now.getSeconds(),
  now.getMilliseconds()
);

document.getElementById("current-time").innerHTML = utc_timestamp;
