var operands = ['÷', 'x', '+', '-'];
var keys = document.querySelectorAll('button');

for (i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function(){
    var answer = document.getElementById('answer');
    var answerValue = answer.innerHTML;
    var buttonValue = this.innerHTML;
    var history = document.getElementById('history');
    var historyValue = history.innerHTML;

    // if AC is pressed, clear the display completely
    if (buttonValue === 'AC') {
      answer.innerHTML = '0';
    }

    // if CE is pressed, clear the last value only
    else if (buttonValue === 'CE') {
      if (answerValue.length > 1) {
        answerValue = answerValue.slice(0, -1);
        answer.innerHTML = answerValue;
      }
      answer.innerHTML = '0';
    }

    // if '=' is pressed, remove any values that might cause an error in the calculation
    else if (buttonValue === '=') {
      var lastChar = answerValue[answerValue.length-1];
      if (lastChar === '.' || lastChar === '÷' || lastChar === '+' || lastChar === '-' || lastChar === 'x') {
        answerValue = answerValue.slice(0, -1);
      }
    // and then make operands mathematically functional so that they can be evaluated
      answerValue = answerValue.replace(/x/g, '*').replace(/÷/g, '/');
      console.log(answerValue);
      history.innerHTML = answerValue;
      if (answerValue !== '') {
        var evaluation = eval(answerValue);
        answer.innerHTML = evaluation;
        // get the display to remove the calculation now
      }
    }
    // if an operand is pressed
		else if (operands.indexOf(buttonValue) !== -1) {
			var lastChar = answerValue[answerValue.length-1];
			// if display is not empty and the last character in the display is not an operator, add buttonValue to display
			if (answerValue !== '' && operands.indexOf(lastChar) === -1) {
				answer.innerHTML += buttonValue;
			}
			// allow display to begin with '-' for negative numbers
			else if (answerValue === '' && buttonValue === '-') {
				answer.innerHTML += buttonValue;
			}
		}

		// for any other button that is pressed, add button's innerHTML to the screen
		else {
			answer.innerHTML += buttonValue;
		}
  }, false);
}
// redo all of this not using innerHTML?
// Make sure there are not multiple decimal places
// Cut answer to appropriate number of digits
// Remove zeros from start of calculation
// Reset answer to zero when calculation finished
// Decimals aren't working. Why?
// Reset display after equals if a number is pressed, otherwise keep it if an operand is pressed
