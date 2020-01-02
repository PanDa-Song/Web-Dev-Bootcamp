// However, these whole bunch of code should be designed as OOD mode,
// Not like this in function and signle variables.


var numSquares = 6;
var colors =[];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
	for (var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			// if (this.textContent === "Easy"){
			// 	numSquares = 3;
			// } else {
			// 	numSquares = 6;
			this.textContent === "Esay" ? numSquares = 3 : numSquares = 6;
			reset();
		})
	}

	for (var i = 0; i < squares.length; i++) {
		//add click listener to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!";
			}
		})
	}

	resetButton.addEventListener("click", function(){
		reset();
	})


	reset();
}





function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Color";
	messageDisplay.textContent = "";
}

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
		// if (colors[i]) {
		// 	squares[i].style.backgroundColor = colors[i];
		// } else {
		// 	squares[i].style.display = "none";
		// }
// 	}
// 	resetButton.textContent = "New Color";
// })
// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}
// 	resetButton.textContent = "New Color";
// })







function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
		//get random color and push into array

	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0-255
	var red = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var green = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var blue = Math.floor(Math.random() * 256)
	return "rgb(" + red +", "+ green + ", " + blue+ ")";
}