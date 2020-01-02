// version ONE
// var answer = prompt("are we there yet?");

// while (answer !== "yes") {
// 	var answer = prompt("are we there yet?")
// }

// alert("We made it!");


// version TWO
var answer = prompt("are we there yet?");

while (answer.indexOf("yes") == -1) {
	var answer = prompt("are we there yet?")
}

alert("We made it!");