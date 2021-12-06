//! click button = nothing displayed

// our calculator class defines to browser what a calculator does
class Calculator {
	constuctor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear();
	}

	clear() {
		this.currentOperand = '';
		this.previousOperand = '';
		this.operation = undefined;
	}

	delete() {}

	appendNumber(number) {
		this.currentOperand = number;
		// this.currentOperand.toString() + number.toString();
	}

	chooseOperation(operation) {}

	compute() {}

	updateDisplay() {
		this.currentOperandTextElement.innerText = this.currentOperand;
	}
}

const numberButtons = document.getElementsByClassName('number-button');
// console.log('numberButtons:');
// console.log(numberButtons);
Array.from(numberButtons).forEach((button) => console.log(button.innerText));
const operationButtons = document.getElementsByClassName('operation-button');
const equalsButton = document.getElementsByClassName('equals-button');
const allClearButton = document.getElementsByClassName('all-clear-button');
const deleteButton = document.getElementsByClassName('delete-button');
const previousOperandTextElement = document.getElementById('previous-operand');
const currentOperandTextElement = document.querySelector(
	'[data-current-operand]'
);
console.log('currentOperandTextElement:');
console.log(currentOperandTextElement);

// here we build a single calculator from the pieces above
const calculator = new Calculator(
	previousOperandTextElement,
	currentOperandTextElement
);

// first we turn the HTMLcollection into an array
// and then for each button, we add a click listener
// then we tell the calculator to take the clicked button's text (single digit)
// and append it to the end of the number on the screen
Array.from(numberButtons).forEach((button) => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	});
});
