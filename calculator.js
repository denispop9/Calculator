function addNumberToDisplay(number) {
	const displayScreen = document.getElementById('displayScreen');
	const displayScreenValue = displayScreen.value;
	displayScreen.value = displayScreenValue + number;
}
function buttonClickedCalculate(operator) {
	const displayScreen = document.getElementById('displayScreen');
	const displayScreenValue = displayScreen.value;
	displayScreen.value = displayScreenValue + operator;
}
function evaluateEquation() {
	const displayScreen = document.getElementById('displayScreen');
	const evaluateEquation = eval(displayScreen.value);
	displayScreen.value = evaluateEquation;
}
function deleteFromDisplay() {
	const displayScreen = document.getElementById('displayScreen');
	displayScreen.value = '';
}