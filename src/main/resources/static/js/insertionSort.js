/**
 * Insertion Sort Algorithm
 */


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width =  Math.floor(canvas.width);
var height = Math.floor(canvas.height);

for(var a=[], i=0; i<width/5; ++i) a[i] =  Math.floor(Math.random()*height);	

function displayElements(array){
	for(var i=1; i<width/5; i++)
	{
		ctx.beginPath();
		ctx.moveTo(i*5, height);
		ctx.lineTo(i*5, array[i]);
		ctx.stroke();
	}
}

var b = new Array();

function insertionSort(){
	for(var j=1; j<a.length; j++)
	{
		var key = a[j];
		var i = j-1;
		for(var i= j-1; i>=0 && a[i]<key; i--){
			a[i+1] = a[i];
		}
		a[i+1] = key;
		return a;
	}
}


displayElements(a);
