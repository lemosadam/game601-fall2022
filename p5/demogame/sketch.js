let apples = [];
let arrows = [];
let arrow1;
let apple1;
let archer1;
let archerX;
let archerY;

function preload(){
	arrow1 = loadImage('arrow1.png');
	apple1 = loadImage('apple1.png');
	archer1 = loadImage('archer.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	apple1.resize(50,50);
	archer1.resize(200,200);
	arrow1.resize(50,50);
}

function draw() {
	background(255);
	
	archer(100, mouseY);
	if (frameCount % 30 === 0) {
		let apple = new Apple();
		apples.push(apple);
		}
	
	for (var i = 0; i < apples.length; i++){
		apples[i].update();
	}
	
	for (let i = 0; i<arrows.length; i++) {
		arrows[i].update();
	}
}

function mousePressed(){
	let arrow = new Arrow();
	arrows.push(arrow);
}

class Apple {
		constructor() {
			this.x = random(width/2, width-50)
			this.y = 5
			this.velY = random (1,5)
			this.hit = false;
		}
	
	update() {
		image(apple1,this.x,this.y)
		this.y = this.y + this.velY
	}
}

class Arrow {
	constructor() {
		this.x = 100;
		this.y = mouseY+70;
		this.velX = 20
	}
	update() {
		image(arrow1, this.x, this.y)
		this.x = this.x + this.velX;
		for (let i = 0; i < apples.length; i = i + 1) {
			let d = dist(this.x, this.y, apples[i].x, apples[i].y);
			if (d < 25) {
				this.hit = true;
				apples[i].x = windowWidth-15;
				apples[i].velY = 0
				this.x = windowWidth-20;
				this.velX = 0;
			}
		}
	}
}

function archer(archerX, archerY){
	image(archer1, archerX, archerY);
}