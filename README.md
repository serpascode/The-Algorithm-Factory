# The-Algorithm-Factory
A Website Written by Luis Serpas
with the help of Spring and Thymeleaf.
It visualizes a set of Sorting Algorithms.

Using a set of Thymeleaf 'fragments' as the front end
for each of the Sorting Sequences. 

This web app that incorporates Thymeleaf
https://www.thymeleaf.org/
as a templating engine.

Here is an Example of 
Another implemenation of sorting animations. I used this for visual comparison
https://www.toptal.com/developers/sorting-algorithms

Using Bootstrap4, along with HTML5 & css3 It will be a visual representation of sorting algorithms 
and will allow the user to cycle through the offered Algorithms. 

![The Algorithm Factory Insertion Sort Demo](the_algorithm_factory_demo.gif)

In order to animate the sorting sequences. I use a javascript object called Sorter 
that contains all the necessary methods to access the html canvas elements.
Each instance of the sorter 'class' is created within the html <script> element.

Each Sorting Algorithm is implemened as a seperate method. 

A tricky part in animating the algorithms was figuring out where to place the setTimeout() function

https://www.freecodecamp.org/news/thrown-for-a-loop-understanding-for-loops-and-timeouts-in-javascript-558d8255d8a4/

Explains in further detail the 3 main components that work in conjunction with Javascript. 
i.e. The Call Stack, the Web Api's, and the Event Queue.
