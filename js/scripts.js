$(function() {
  $("#survey").submit(function(event) {
    var music = $("#music").val();
    var favFood = $("input:radio[name=food]:checked").val();
    var favDate = $("#favorite").val();
    var favoriteColor = $("#color").val();
    var nameFirst = $("#nameFirst").val();
    var nameLast = $("#nameLast").val();
    var secret = $("#secret").val();

    $(".nameFirst").text(nameFirst);
    $(".nameLast").text(nameLast);
    $(".music").text(music);
    $(".food").text(favFood);
    $(".favDate").text(favDate);
    $(".favColor").text(favoriteColor);
    $(".secret").text(secret);

    $(".story").slideToggle().removeClass("hidden");
    event.preventDefault();
  });
});
