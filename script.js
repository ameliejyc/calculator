var operands = ['÷', 'x', '+', '-']
var keys = document.querySelectorAll('button');

// redo all of this not using innerHTML

for (i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function(){
    var answer = document.getElementById('answer');
    var answerValue = answer.innerHTML;
    var buttonValue = this.innerHTML;

    // if AC is pressed, clear the display completely
    if (buttonValue === 'AC') {
      answer.createTextNode('0');
    }

    // if CE is pressed, clear the last value
    else if (buttonValue === 'CE') {
      if (answerValue.length > 1) {
        answerValue = answerValue.slice(0, -1);
      }
      answer.createTextNode('0');
    }

    // if = is pressed, remove any values that might cause an error in the calculation
    else if (buttonValue === '=') {
      var lastChar = answerValue[answerValue.length-1];
      if (lastChar === '.' || lastChar === '÷' || lastChar === '+' || lastChar === '-' || lastChar === 'x') {
        answerValue = answerValue.slice(0, -1);
      }
    // and then make operands mathematically functional
      answerValue = answerValue.replace(/x/g, '*').replace(/÷/g, '/');
      console.log(answerValue);
      if (answerValue !== '') {
        var evaluation = eval(answerValue);
        answer.createTextNode(evaluation);
      }
    }

    // if an operand is pressed
		else if (operands.indexOf(buttonValue) !== -1) {
			var lastChar = answerValue[answerValue.length-1];
			//If display is not empty and the last character in the display is not an operator, add btnValue to display
			if (answerValue !== '' && operands.indexOf(lastChar) === -1) {
				answer.innerHTML += buttonValue;
			}
			// If display is empty and buttonValue is -, add buttonValue to display
			else if (answerValue === '' && buttonValue === '-') {
				answer.innerHTML += buttonValue;
			}
		}

		// if other button is pressed, add button's innerHTML to the screen
		else {
			answer.innerHTML += buttonValue;
		}

    // Make sure there are not multiple decimal places
    // Cut answer to appropriate number of digits
    // Remove zeros from start of calculation
    // Reset answer to zero when calculation finished
    // Decimals aren't working. Why?

  }, false);
}
