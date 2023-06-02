//base
var stage = "input first name";
var player = "player1";
var player1 = "";
var player2 = "";

var dice1 = 0;
var dice2 = 0;

var player1Number = "";
var player2Number = "";

var winner = "";

var getRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var resultInteger = Math.ceil(randomDecimal);
  return resultInteger;
};

var rollDice = function (playername) {
  dice1 = getRandomInteger(6);
  dice2 = getRandomInteger(6);
  return `${playername} rolled ${dice1} and ${dice2}. Time to choose which number goes first. Please input your choice.`;
};

var checkChoice = function (input) {
  if (Number.isInteger(Number(input)) && (input == dice1 || input == dice2)) {
    return true;
  } else return false;
};

//

var playerNumber = function (input) {
  if (input == dice1) {
    return "" + dice1 + dice2;
  } else return "" + dice2 + dice1;
};

var winLose = function () {
  if (player1Number > player2Number) {
    winner = player1;
  } else winner = player2;
  return winner;
};

var main = function (input) {
  input = input.trim();
  if (stage == "input first name") {
    if (input != "") {
      stage = "input second name";
      player1 = input;
      return `Hi ${input}! Player 2, your name`;
    } else {
      return "To start, player 1 input your name";
    }
  }

  if (stage == "input second name") {
    if (input != "") {
      stage = "roll dice";
      player2 = input;
      return `Let's start ${player1} and ${player2}. ${player1}'s turn to roll the dice`;
    } else {
      return `Hi ${player1}! Player 2, your name`;
    }
  }

  if (stage == "roll dice") {
    if (player == "player1") {
      stage = "choose order";
      return rollDice(player1);
    } else if (player == "player2") {
      stage = "choose order";
      return rollDice(player2);
    }
  }

  if (stage == "choose order") {
    if (player == "player1") {
      if (checkChoice(input)) {
        player1Number = playerNumber(input);
        stage = "roll dice";
        player = "player2";
        return `${player1} chose ${input} as the first number. Your final number will be ${player1Number}.<br> ${player2}'s turn to roll the dice`;
      } else return `Please choose either ${dice1} or ${dice2}`;
    } else if (player == "player2") {
      if (checkChoice(input)) {
        player2Number = playerNumber(input);
        winner = winLose();
        return `${player2} chose ${input} as the first number. Your final number will be ${player2Number}.<br><br> ${player1}'s final number is ${player1Number}.<br><br> ${winner} won. `;
      } else return `Please choose either ${dice1} or ${dice2}`;
    }
  }
};
