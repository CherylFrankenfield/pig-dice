
//Back End
function Player(playerName) {
  this.playerName = playerName;
  this.turnScore;
  this.totalScore;
}

function Game(player1, player2, diceRoll, totalGameScore) {
  this.player1 = player1;
  this.player2 = player2;
  this.diceRoll;
  this.totalGameScore;
}

var diceRoll = function() {
  var roll = Math.floor((Math.random() * 6) + 1);
  return roll;
}

// Player.prototype.setTurnScore = function() {
//   if (this.diceRoll === 1) {
//     this.turnScore = 0;
//   } else { (index = 2; index <= 6; index++)
//       if (this.diceroll === 2)
//   }
// });

var player1 = new Player()
var player2 = new Player()

//Front End
$(document).ready(function() {
  $("form#player-form").submit(function(event) {
      event.preventDefault();

      player1.playerName = $("input#player-one").val();
      player2.playerName = $("input#player-two").val();

      $("#button-start-game").click(function() {
        $("#player-one-name").text(player1.playerName);
        $("#player-two-name").text(player2.playerName);
      });
  });


});
