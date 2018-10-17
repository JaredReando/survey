$(function() {
  $("#survey").submit(function(event) {
    var music = $("#music").val();
    var favFood = $("input:radio[name=food]:checked").val();
    var favDate = $("#favorite").val();
    var favoriteColor = $("#color").val();
    var nameFirst = $("#nameFirst").val();
    var nameLast = $("#nameLast").val();
    var secret = $("#secret").val();

    event.preventDefault();
  });
});
