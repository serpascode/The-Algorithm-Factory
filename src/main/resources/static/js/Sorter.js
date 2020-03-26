/**
 * The Common Javascript Functions to deal with the visualization of the animation 
 * of all sorting algorithms,
 * Input includes the particular canvas id and space between vertical lines
 * include this class and create a new instance of sorter.
 */

///*********************
/// Common Functionality
///*********************
var Sorter = function(canvasId, pixelSpace, timeDelay){
	this.canvas = document.getElementById(canvasId);
	this.width = this.canvas.width;
	this.height = this.canvas.height;
	this.context = this.canvas.getContext("2d");
	this.pixelSpace = pixelSpace;
	this.numberOfElements = this.width/this.pixelSpace;
	this.lineWidth = 1;
	this.strokeStyle = 'black';
	this.values = this.getValues(this.numberOfElements);
	this.timeDelay = timeDelay;
}

//Fill an Array with Values based of the height of canvas
Sorter.prototype.getValues = function(numberOfElements){
	//Produce Random Array of Numbers
	for(var a=[], i=0; i<this.numberOfElements; i++){
		a[i] = Math.floor((i+1)*(this.height/this.numberOfElements));
	}
	return this.shuffle(a);
}

//Simple swap to randomize order of values in array
Sorter.prototype.shuffle = function(array){
	for(var i=0; i<array.length; i++){
		var a = Math.floor(Math.random()*array.length);
		var b = Math.floor(Math.random()*array.length);
		var temp = array[a];
		array[a] = array[b];
		array[b] = temp;
	}
	return array;
}

//Draw function that updates canvas dependent on an increasing delay
Sorter.prototype.draw = function(array, t){
	setTimeout(()=>{
		this.context.clearRect(0, 0, this.width, this.height);
		for(var i=0; i<array.length; i++){
			this.context.beginPath();
			this.context.moveTo(i*(this.pixelSpace)+2, this.height);
			this.context.lineTo(i*(this.pixelSpace)+2, this.height-array[i]);
			this.context.stroke();
	}}, t*this.timeDelay);
}

//Using a Queue Store each step / swap and 
//Then display all Steps after algorithm completes
var displayQueue=[];
//
Sorter.prototype.drawQueue = function(array, t){
	setTimeout(()=>{
		for(let i = 0; i<displayQueue.length; i++){
			this.draw(displayQueue[i], i);
		}
	}, t);
}

//***************************
// Sorting Specific Functions
//***************************

//Insertion Sort
Sorter.prototype.insertionSort = function(){
	this.draw([...this.values], 0);
	console.log("og"+this.values.toString());
	var i, j, key;
	for(j = 0; j<this.values.length; j++)
	{
		key = this.values[j];
		i = j-1;
		while(i>=0 && key<this.values[i])
		{
			this.values[i+1] = this.values[i];
			this.values[i] = key; 
			//Extra swap with key, allows the visual traversal of it to be displayed
			i--;
			displayQueue.push([...this.values]);
		}
		this.values[i+1] = key;
	}
	displayQueue.push([...this.values]);
	this.drawQueue(displayQueue, this.timeDelay);
}

//Bubble Sort
Sorter.prototype.bubbleSort = function(){
	this.draw([...this.values], 0);
	for(var i= this.values.length; i>=0; i--)
	{	
		for(var j=0; j<i; j++)
		{	
			if(this.values[j]>this.values[j+1])
			{
				var  temp = this.values[j];
				this.values[j] = this.values[j+1];
				this.values[j+1] = temp;	
				displayQueue.push([...this.values]);
			}
		}	
	}
	this.drawQueue(displayQueue, this.timeDelay);
}

//Quick Sort
//Sorter.protoype.quickSort = function(){
//	
//console.log("quick sort method");
//}