var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');

// canvas dimensions
can.width = 1350;
can.height = 470;


// building source
var img = new Image();
img.src = "buildings.jpg";
// sprite source
var spriteReady = false;
var sprite = new Image();
sprite.src = "sprite3.png";

// keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


// drawing the canvas
window.onload = function () {
	var scrollSpeed = 3;
	var imgXPos = 0;

	function loop() {
		//looping background
		ctx.drawImage(img, imgXPos, 0, can.width, can.height);

		ctx.drawImage(img, imgXPos + can.width, 0, can.width, can.height);

		imgXPos -= scrollSpeed;

		if (imgXPos == -can.width)
			imgXPos = 0;

		// sprite 
		if (32 in keysDown == false) {
			ctx.drawImage(sprite, 40, 290, 120, 160)
		}
		if (32 in keysDown) {
			ctx.drawImage(sprite, 40, 200, 120, 160)
		}


		window.requestAnimationFrame(loop);
	}
	// reduce window system load time
	window.requestAnimationFrame(loop);
} 
