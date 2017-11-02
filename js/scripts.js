
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

var diceRoll = function() {
  var roll = Math.floor((Math.random() * 6) + 1);
  return roll;
}

var playerArray = [];
var rollArray = [];

var add = function(a,b) {
  return a + b;
}

var switchTurn = function(newGame) {
  if (newGame.turn === player1) {
    newGame.turn = player2;
  } else {
    newGame.turn = player1;
  }
  return newGame;
}

var player1 = new Player()
var player2 = new Player()
var newGame = new Game()

//Front End
$(document).ready(function() {
  $("form#player-form").submit(function(event) {
      event.preventDefault();
    $("#button-play").click(function() {
      newGame = {};
      debugger;
      player1.name = $("input#player-one").val();
      player2.name = $("input#player-two").val();
      $("#player-one-name").text(player1.name);
      $("#player-two-name").text(player2.name);
      newGame.turn = player1;

      $("#roll-button").click(function(){
        var diceTemp = diceRoll();
        $("#current-dice-roll").text(diceTemp);
          if (diceTemp < 2) {
            rollArray.push(0);
            $("#turn-score").text(rollArray.reduce(add, 0));
            alert("Your Turn is Over!")
            switchTurn(newGame);
            console.log(newGame);
          } else {
            rollArray.push(diceTemp);
          }
          return rollArray;
      });

      $("#hold-button").click(function() {
        $("#turn-score").text(rollArray.reduce(add, 0));

      });
    }); // end of play button click
  });
});
