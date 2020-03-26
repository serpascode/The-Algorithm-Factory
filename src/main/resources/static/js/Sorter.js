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
Sorter.prototype.drawQueue = function(){
	for(let i = 0; i<displayQueue.length; i++){
		this.draw(displayQueue[i], i);
	}
}

//***************************
// Sorting Specific Functions
//***************************

//Insertion Sort
Sorter.prototype.insertionSort = function(){
	this.draw(this.values, 0);
	var i, j, key;
	for(j = 0; j<this.values.length; j++)
	{
		key = this.values[j];
		i = j-1;
		while(i>=0 && key<this.values[i])
		{
			this.values[i+1] = this.values[i];
			this.values[i] = key; 
			//Extra swap with key, allows the visual traversal of key to be displayed
			i--;
			displayQueue.push([...this.values]);
		}
		this.values[i+1] = key;
	}
	displayQueue.push([...this.values]);
	this.drawQueue();
}

//Bubble Sort
Sorter.prototype.bubbleSort = function(){
	this.draw(this.values, 0);
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
	this.drawQueue();
}

//Quick Sort
Sorter.prototype.quickSort = function(){
	this.draw(this.values, 0);
	Sorter.prototype.recursiveQuickSort = function(low, high){
		var lowIndex = low;
		var highIndex = high;
		var mid;
		
		if(high>low){
			mid = this.values[Math.floor((low+high)/2)];
			
			while(lowIndex<=highIndex){
				while((lowIndex<high)&&(this.values[lowIndex]<mid))
					lowIndex++;
				
				while((highIndex>low)&&(this.values[highIndex]>mid))
					highIndex--;
				
				if(lowIndex<=highIndex){
					var temp = this.values[highIndex];
					this.values[highIndex] = this.values[lowIndex];
					this.values[lowIndex] = temp;
					
					displayQueue.push([...this.values]);
					lowIndex++;
					highIndex--;
				}
			}
			if(low<highIndex)
				this.recursiveQuickSort(low, highIndex);
			if(lowIndex<high)
				this.recursiveQuickSort(lowIndex, high);
		}
	}
	this.recursiveQuickSort(0, this.values.length-1);
	this.drawQueue();
}

//Merge Sort
Sorter.prototype.mergeSort = function(){
	this.draw(this.values, 0);
	console.log(this.values.toString()+"sss");
	Sorter.prototype.recursiveMergeSort = function(low, high){
		if(low<high){
			var mid = Math.floor((low+high)/2);
			this.recursiveMergeSort(low,mid);
			this.recursiveMergeSort(mid+1,high);
			this.merge(low, mid, high);
		}
	}
	Sorter.prototype.merge = function(low, mid, high){
		var indexOne = mid - low +1;
		var indexTwo = high - mid;
		var leftArray = [];
		var rightArray = [];
		var i,j,k;
		for(i = 0; i<indexOne; i++)
			leftArray.push(this.values[low+i]);
		for(j = 0; j<indexTwo; j++)
			rightArray.push(this.values[mid+j+1]);
		//**************
		i=0; j=0; k=low;//Reinitialize Variables to begin merge sequence
		
		while(i<indexOne && j<indexTwo){
			if(leftArray[i]<=rightArray[j]){
				this.values[k] = leftArray[i];
				i++;
				displayQueue.push([...this.values]);
			}else{
				this.values[k] = rightArray[j];
				j++;
				displayQueue.push([...this.values]);
			}
			k++;
		}
		while(i<indexOne){
			this.values[k] = leftArray[i];
			i++;
			k++;
			displayQueue.push([...this.values]);
		}
		while(j<indexTwo){
			this.values[k] = rightArray[j];
			j++;
			k++;
			displayQueue.push([...this.values]);
		}
	}
	this.recursiveMergeSort(0, this.values.length-1);
	this.drawQueue();
}