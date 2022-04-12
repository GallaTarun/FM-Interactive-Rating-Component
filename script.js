var currentRating = null;
$(".rating-btn").on("click", function(){
  if(currentRating !== null)
    $("#r"+currentRating).removeClass("clicked");
  currentRating = this.innerHTML;
  $("#r"+currentRating).addClass("clicked");
});

$(".submit").on("click", function(){
  if(currentRating===null)
    return;
  else {
    var content = "You selected "+currentRating+" out of 5";
    $(".rating-result").append(content);
    $(".rating-content").addClass("hidden");
    $(".thankyou-content").removeClass("hidden");
  }
});
