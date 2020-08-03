var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');

// canvas dimensions
can.width = 1350;
can.height = 470;

/* ----------- Images ---------------- */

// building source
var img = new Image();
img.src = "./assets/buildings.jpg";
// sprite source
var spriteReady = false;
var sprite = new Image();
sprite.src = "./assets/sprite3.png";
// mask source
var mask = new Image();
mask.src = "./assets/mask.png";
//masked sprite
var sprmask = new Image();
sprmask = "./assets/SPRITE6.png"

// keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


// drawing the canvas

var scrollSpeed = 5;
var imgXPos = 0;

var counter = 0;

var vector_x = 1350
var vector_y = 370


function loop() {
	//looping background
	ctx.drawImage(img, imgXPos, 0, can.width, can.height);

	ctx.drawImage(img, imgXPos + can.width, 0, can.width, can.height);

	imgXPos -= scrollSpeed;
	counter += scrollSpeed

	if (imgXPos == -can.width)
		imgXPos = 0;


	window.requestAnimationFrame(loop);
}


function player() {
	counter += scrollSpeed
	// sprite	
	var sprite_y = 290
	if (32 in keysDown == false) {
		ctx.drawImage(sprite, 40, sprite_y, 120, 160)
	}
	if (32 in keysDown) {
		ctx.drawImage(sprite, 40, 200, 120, 160)
	}


	ctx.drawImage(mask, vector_x, vector_y, 70, 70)
	vector_x -= scrollSpeed

	if (vector_x == 40) {
		ctx.drawImage(sprmask, 40, sprite_y, 120, 160)
	}
	window.requestAnimationFrame(player);
}

window.onload = function () {
	// reduce window system load time
	window.requestAnimationFrame(loop);
	window.requestAnimationFrame(player);
} 
