$(document).ready(function () {
  var nowHour = moment().format("h");

  console.log(nowHour);

  $(".textinput").each(function () {
    if (parseInt($(this).attr("value")) == nowHour) {
      $(this).attr("style", "background-color:tomato");
    } else if (parseInt($(this).attr("value")) < nowHour) {
      $(this).attr("style", "background-color:lightgrey");
    } else {
      $(this).attr("style", "background-color:grey");
    }
  });

  var savedText9 = localStorage.getItem("savedInput9");
  $("#input9").val(savedText9);

  var savedText10 = localStorage.getItem("savedInput10");
  $("#input10").val(savedText10);

  var savedText11 = localStorage.getItem("savedInput11");
  $("#input11").val(savedText11);

  var savedText12 = localStorage.getItem("savedInput12");
  $("#input12").val(savedText12);

  var savedText1 = localStorage.getItem("savedInput1");
  $("#input1").val(savedText1);

  var savedText2 = localStorage.getItem("savedInput2");
  $("#input2").val(savedText2);

  var savedText3 = localStorage.getItem("savedInput3");
  $("#input3").val(savedText3);

  var savedText4 = localStorage.getItem("savedInput4");
  $("#input4").val(savedText4);

  var savedText5 = localStorage.getItem("savedInput5");
  $("#input5").val(savedText5);

  var nowTime = moment().format("MMMM Do YYYY");

  var $currentDayEl = $("#currentDay");

  $currentDayEl.text(nowTime);

  // var $testTimeEl = $("#testTime");
  // var nowHour = moment().format("H");
  var $textInputEl = $("#textinput");

  // if (($(testTimeEl).value = nowHour)) {

  // }

  //Save Button Events
  $("#saveBtn9").on("click", function () {
    localStorage.setItem("savedInput9", $("#input9").val());
  });

  $("#saveBtn10").on("click", function () {
    localStorage.setItem("savedInput10", $("#input10").val());
  });

  $("#saveBtn11").on("click", function () {
    localStorage.setItem("savedInput11", $("#input11").val());
  });

  $("#saveBtn12").on("click", function () {
    localStorage.setItem("savedInput12", $("#input12").val());
  });

  $("#saveBtn1").on("click", function () {
    localStorage.setItem("savedInput1", $("#input1").val());
  });

  $("#saveBtn2").on("click", function () {
    localStorage.setItem("savedInput2", $("#input2").val());
  });

  $("#saveBtn3").on("click", function () {
    localStorage.setItem("savedInput3", $("#input3").val());
  });

  $("#saveBtn4").on("click", function () {
    localStorage.setItem("savedInput4", $("#input4").val());
  });

  $("#saveBtn5").on("click", function () {
    localStorage.setItem("savedInput5", $("#input5").val());
  });
});
