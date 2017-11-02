
//Back End
function Player(name, score) { //player object constructor
  this.name = name;
  this.score = 0;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.turn = 0;
}

Game.prototype.switchTurn = function(){
  if (this.turn === player1) {
    this.turn = player2;
  } else { this.turn = player1;
  }
}

var diceRoll = function() {
  var roll = Math.floor((Math.random() * 6) + 1);
  return roll;
}

var add = function(a,b) {
  return a + b;
}

var rollArray = [];
var player1 = new Player()
var player2 = new Player()
var newGame = new Game()

//Front End
$(document).ready(function() {
  $("form#player-form").submit(function(event) {
      event.preventDefault();
    $("#button-play").click(function() {
      newGame = {};
      player1.name = $("input#player-one").val();
      player2.name = $("input#player-two").val();
      $("#player-one-name").text(player1.name);
      $("#player-two-name").text(player2.name);

      newGame.turn = player1;

      // var turnScore = rollArray.reduce(add, 0);

      $("#roll-button").click(function(){
        var diceTemp = diceRoll();
        $("#current-dice-roll").text(diceTemp);
          if (diceTemp < 2) {
            rollArray.push(0);
            $("#turn-score").text(rollArray.reduce(add, 0));
            alert("Your Turn is Over!")
            newGame.switchTurn();
          } else {
            rollArray.push(diceTemp);
          }
          return rollArray;
      });

      $("#hold-button").click(function() {
        $("#turn-score").text(rollArray.reduce(add, 0));
        player1.score += rollArray[0];
        $("#player-one-total-score").text(player1.score);
      });

    }); // end of play button click
  });
});
