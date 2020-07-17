var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');

// canvas dimensions
can.width = 1920;
can.height = 550;



//pictures
var img = new Image();
img.src = "buildings.jpg";


window.onload = function () {

	var imgWidth = 0;

	var scrollSpeed = 3;


	function loop() {
		ctx.drawImage(img, imgWidth, 0, can.width, can.height);
		ctx.drawImage(img, imgWidth + can.width, 0, can.width, can.height);



		// update image width 
		imgWidth -= scrollSpeed;

		if (imgWidth == -can.width)
			imgWidth = 0;


		window.requestAnimationFrame(loop);
	}

	loop();
} 
