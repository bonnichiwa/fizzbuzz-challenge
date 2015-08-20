$(document).ready(function() {
  alert("Welcome to Fizz Buzz!");
  playGame();
  clearGame();
});

function playGame() {
  $('#play-game').click(function() {
    fizzBuzz();
  });
}

function clearGame() {
  $('#clear-game').click(function() {
    $('#fizzbuzz-numbers').empty();
  });
}

function fizzBuzz() {
  var startNumber = 1;
  while (startNumber <= 100) {
    if (startNumber % 15 == 0) {
      $('#fizzbuzz-numbers').append("FizzBuzz"+"<br>");
    } else if (startNumber % 3 == 0) {
      $('#fizzbuzz-numbers').append("Fizz"+"<br>");
    } else if (startNumber % 5 == 0) {
      $('#fizzbuzz-numbers').append("Buzz"+"<br>");
    } else {
    $('#fizzbuzz-numbers').append(startNumber+"<br>");
  }
    startNumber++;
  }
}