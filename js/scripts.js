
//Back End
function Player(playerName, turnScore, totalScore) {
  this.playerName = playerName;
  this.turnScore = 0;
  this.totalScore = 0;
}

function Game(player1, player2, totalGameScore) {
  this.player1 = player1;
  this.player2 = player2;
  this.totalGameScore;
  this.playerTurn = true;
}

var diceRoll = function() {
  var roll = Math.floor((Math.random() * 6) + 1);
  return roll;
}

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
  }); // end of play button click

  $("#roll-button").click(function(){
    var diceTemp = diceRoll();
    $("#current-dice-roll").text(diceTemp);
    var result = [];

    if (diceTemp === 1) {
      player1.turnScore = 0;
    } else {
      player1.turnScore += diceTemp;
      result.push(player1.turnScore += diceTemp);
    }
    return result;
  });
  $("#player-one-turn-score").text.val(); 

});
