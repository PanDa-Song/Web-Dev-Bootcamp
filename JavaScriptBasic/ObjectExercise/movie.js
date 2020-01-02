
var movie = [
	{
		name:"Wolf of the Wall Street",
		rate:7.8,
		watched:true
	},
	{
		name:"Eight Miles",
		rate:8.2,
		watched:true
	},
	{
		name:"Ye Wen",
		rate:7.3,
		watched:false
	}
]

movie.forEach(function(object){
	var watchStr = "watched";

	if (!object.watched) {
		watchStr = "not seen";
	}
	console.log("You have " + watchStr + " " + '"' + object.name + '"' 
		+ " - " + object.rate + " stars");
})
