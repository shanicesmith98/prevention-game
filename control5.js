// inside main_javascript.js 

var can = document.getElementById('canvas1'); 

// The 2D Context for the HTML canvas element. It 
// provides objects, methods, and properties to draw and 
// manipulate graphics on a canvas drawing surface. 
var ctx = can.getContext('2d'); 

// canvas width and height 
can.width = 1920; 
can.height = 550; 

// create an image element 
var img = new Image(); 
img.src = "buildings.jpg"; 

// window.onload is an event that occurs when all the assets 
// have been succesfuly loaded( in this case only the spacebg.png) 
window.onload = function() { 
	// the initial image height 
	var imgWidth = 0; 

	// the scroll speed 
	// an important thing to ensure here is that can.height 
	// is divisible by scrollSpeed 
	var scrollSpeed = 3; 

	// this is the primary animation loop that is called 60 times 
	// per second 
	function loop() 
	{ 
		// draw image 1 
		ctx.drawImage(img, imgWidth, 0, can.width, can.height); 

		// draw image 2 
		ctx.drawImage(img, imgWidth - can.width, 0, can.width, can.height); 

		// update image height 
		imgWidth += scrollSpeed; 

		// reseting the images when the first image entirely exits the screen 
		if (imgWidth == can.width) 
            imgWidth = 0; 

		// this function creates a 60fps animation by scheduling a 
		// loop function call before the 
		// next redraw every time it is called 
		window.requestAnimationFrame(loop); 
	} 

	// this initiates the animation by calling the loop function 
	// for the first time 
	loop(); 

} 
