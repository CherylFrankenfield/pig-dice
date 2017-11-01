
//Back End
function Player(name, turnScore, totalScore) {
  this.name = name;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}


//Front End
$(document).ready(function() {
  $("form#player-form").submit(function(event) {
      event.preventDefault();

      var playerOneName = $("input#player-one").val();
      var playerTwoName = $("input#player-two").val();

      var newPlayerOne = new Player(PlayerOneName, turnScore, totalScore)
      var newPlayerTwo = new Player(PlayerTwoName, turnScore, totalScore)
      debugger;

      // $("#button-start-game").click(function() {
      //   $("#player-one-name").text(playerOneName);
      //   $("#player-two-name").text(playerTwoName);
      });


  });
});
