
function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i --) {
		console.log(array[i]);
	}
}


// function isUniform(array) {
// 	for (i = 0; i < array.length; i++) {
// 		for (j = i + 1; j < array.length; j++) {
// 			if (array[i] !== array[j]) {
// 				return false;
// 			}
// 		}
// 	}
// 	return true;
// }

function isUniform(array) {
	var first = array[0];
	array.forEach(function(element){
		if(element !== first) {
			return false;
		}
	});
	return true;
}


function sumArray(array) {
	sum = 0;
	count = 0;
	while (count < array.length) {
		sum += array[count];
		count ++;
	}
	return sum;
}


function max(array) {
	max = array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i] >= max) {
			max = array[i];
		}
	}
	return max;
}