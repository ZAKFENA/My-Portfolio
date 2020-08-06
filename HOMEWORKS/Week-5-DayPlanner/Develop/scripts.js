$(document).ready(function () {
  var savedText = localStorage.getItem("savedInput");

  $("#textInput1").val(savedText);

  var nowTime = moment().format("MMMM Do YYYY");

  var $currentDayEl = $("#currentDay");

  $currentDayEl.text(nowTime);

  // var $testTimeEl = $("#testTime");
  // var nowHour = moment().format("H");
  var $textInputEl = $("#textinput1");

  // if (($(testTimeEl).value = nowHour)) {

  // }

  let nowHour = moment().format("h");

  console.log(nowHour);

  $(".textinput").each(function () {
    if (parseInt($(this).attr("value")) == nowHour) {
      $(this).attr("style", "background-color:tomato");
    } else if (parseInt($(this).attr("value")) > nowHour) {
      $(this).attr("style", "background-color:gray");
    } else {
      $(this).attr("style", "background-color:blue");
    }
  });

  //   if (parseInt($(".textinput").val()) === nowHour) {
  //     $(".textinput").css("background-color", "tomato");
  //     // $(".text").css("background-color", "tomato");
  //     // } else if (parseInt($(".textinput").name) < nowHour) {
  //     //   $(".textinput").css("background-color", "gray");
  //     //   $(".text").css("background-color", "gray");
  //     // } else {
  //     //   $(".textinput").css("background-color", "gray");
  //     //   $(".text").css("background-color", "gray");
  //   } else {
  //     $(".textinput").css("background-color", "gray");
  //   }
  // });

  $(".saveBtn1").on("click", function () {
    localStorage.setItem("savedInput", $("#textInput1").val());
  });

  //   if (($(".time-block").value = nowHour24)) {
  //     $(".textinput").css("background-color", "grey");
  //   } else {
  //     $(".textinput").css("background-color", "green");
  //   }
});
