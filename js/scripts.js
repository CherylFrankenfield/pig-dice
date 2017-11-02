
//Back End
function Player(name, score) { //player object constructor
  this.name = name;
  this.score = 0;
}

var diceRoll = function() {
  var roll = Math.floor((Math.random() * 6) + 1);
  return roll;
}

var playerArray = [];
var rollArray = [];



var player1 = new Player()
var player2 = new Player()

//Front End
$(document).ready(function() {
  $("form#player-form").submit(function(event) {
      event.preventDefault();
    $("#button-start-game").click(function() {
      $("#player-one-name").text(player1.name);
      $("#player-two-name").text(player2.name);
    });
    player1.name = $("input#player-one").val();
    player2.name = $("input#player-two").val();
  }); // end of play button click

  $("#roll-button").click(function(){
    var diceTemp = diceRoll();
    $("#current-dice-roll").text(diceTemp);
    var result = [];

    if (diceTemp <= 2) {
      result.push(player1.turnScore);
      alert("Your turn is over!");
    } else if (diceTemp >= 2) {
      player1.turnScore += diceTemp;
      result.push(player1.turnScore += diceTemp);
    }
    return result;
  });
  $("#player-one-turn-score").text.val();

});
