

function updateTime() {
  var currentTimeElement = document.getElementById('current-time');
  var currentTime = dayjs().format('dddd, MMMM D, YYYY h:mm:ss A');
  currentTimeElement.innerHTML =   currentTime;
}

setInterval(updateTime, 1000);












$(function () {


});


















