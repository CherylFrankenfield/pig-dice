$(document).ready(function() {
  $("form#playerForm").submit(function(event) {
      event.preventDefault();

      $("#player-one-name").show();
      $("#playerTwoName").show();


  });
});
