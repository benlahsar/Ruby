$("document").ready(() => {
  $("h1").css("color", "red");
  $("button").on("click", function () {
    $("body").css("background-color", "yellow");
  });
  $("h1").on("hover", () => {
    $("h1").css("background-color", "green");
  });
});
