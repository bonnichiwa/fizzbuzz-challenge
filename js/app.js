$(document).ready(function() {
  playGame();
  clearGame();
});

function playGame() {
  $('#play-game').click(function() {
    var unparsedEntry = $("#max-number").val();
    var parsedEntry = parseInt(unparsedEntry);
      if (parsedEntry === NaN) {
        alert("You have to provide a number.");
        $('input#max-number').val('');
        
      } else {
        fizzBuzz(parsedEntry);
        $('input#max-number').val('');
        
      }
  });
}

function clearGame() {
  $('#clear-game').click(function() {
    $('#fizzbuzz-numbers').empty();
  });
}

function fizzBuzz(fbRange) {

  for (var fbNumber = 1; fbNumber <= fbRange; fbNumber++) {
    switch (true) {
      case (fbNumber % 3 == 0 && fbNumber % 5 == 0) :
        $('#fizzbuzz-numbers').append("Fizz Buzz"+"<br><br>");
        break;
      case (fbNumber % 3 == 0) :
        $('#fizzbuzz-numbers').append("Fizz"+"<br><br>");
        break;
      case (fbNumber % 5 == 0) :
        $('#fizzbuzz-numbers').append("Buzz"+"<br><br>");
        break;
      default:
        $('#fizzbuzz-numbers').append(fbNumber+"<br><br>");
    }
  }
}
