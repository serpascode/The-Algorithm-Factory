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
		a[i] = i*(this.height/this.numberOfElements);
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
		for(var i=1; i<array.length; i++){
			this.context.beginPath();
			this.context.moveTo(i*(this.pixelSpace), this.height);
			this.context.lineTo(i*(this.pixelSpace), this.height-array[i]);
			this.context.stroke();
	}}, t*this.timeDelay);
}

//***************************
// Sorting Specific Functions
//***************************

//Insertion Sort (For loop Implementation)
Sorter.prototype.insertionSort = function(){
	this.draw([...this.values], 0);
	var i, j, key;
	for(i = 0; i<this.values.length; i++)
	{
		key = this.values[i];
		for(j = i-1; j>=0 && key<this.values[j]; j--)
			this.values[j+1] = this.values[j];
		this.values[j+1] = key;
		this.draw([...this.values], i+1);
	}
}

//Bubble Sort
Sorter.prototype.bubbleSort = function(){
	this.draw([...this.values], 0);
	for(var i= this.values.length; --i>=0;)
	{	
		
		for(var j=0; j<i; ++j)
		{
			
			if(this.values[j]>this.values[j+1])
			{
				var  temp = this.values[j];
				this.values[j] = this.values[j+1];
				this.values[j+1] = temp;
			
			}
		}	this.draw([...this.values], this.values.length-i+1);
		
	}
}




