
//Back End
function Player(playerName, turnScore, totalScore, playerTurn) {
  this.playerName = playerName;
  this.turnScore;
  this.totalScore;
  this.playerTurn;
}

function Game(player1, player2, totalGameScore) {
  this.player1 = player1;
  this.player2 = player2;
  this.totalGameScore;
}

function Turn(currentRoll, totalRoll) {
  this.currentRoll = currentRoll;
  this.totalRoll = totalRoll;
}

var diceRoll = function() {
  var roll = Math.floor((Math.random() * 6) + 1);
  return roll;
}

Player.prototype.setTurnScore = function(rollTally.currentRoll) {
  if (rollTally.currentRoll === 1) {
    this.turnScore = 0;
  } else (rollTally.currentRoll >= 2) {
    this.turnScore += rollTally.currentRoll;
  }
};

var player1 = new Player()
var player2 = new Player()
var rollTally = new Turn()

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
    rollTally.currentRoll = diceRoll();
    $("#current-dice-roll").text(rollTally.currentRoll);
  });

});
