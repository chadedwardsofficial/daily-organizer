var currentHour = parseInt(dayjs().format("HH"));  // Used HH in formatting to display back military time. This will help with keeping track of time regardless of AM/PM. 
$(document).ready(function () {
  function updateTime() {
    var currentTimeElement = document.getElementById("current-time");
    var currentTime = dayjs().format("dddd, MMMM D, YYYY h:mm:ss A");
    currentTimeElement.innerHTML = currentTime;
  }
  setInterval(updateTime, 1000);
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    console.log(time, text);
    localStorage.setItem(time, text);
  });
  
  $(".time-block").each(function () {
    var sectionHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(currentHour)
    if (sectionHour < currentHour) {
      $(this).addClass("past");
    } else if (sectionHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }});
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
});


