
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


var add = function(a,b) {
  return a + b;
}

// var condense = function() {
//   rollArray.reduce(add, 0);
// }

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
      if (diceTemp <= 2) {
        rollArray.push(0);
      } else if (diceTemp >= 2) {
        rollArray.push(diceTemp);
      }
      return rollArray;
  });


  $("#hold-button").click(function() {
    $("#turn-score").text(rollArray.reduce(add, 0));
  });



});
