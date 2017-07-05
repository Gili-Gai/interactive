(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"WhatJuice_atlas_", frames: [[1922,2280,1024,678],[3430,0,663,1024],[3558,3420,350,233],[3430,1026,570,667],[2948,2280,350,233],[1922,2960,640,426],[0,0,3428,2278],[2564,2995,640,426],[1922,3388,640,426],[3848,2869,198,310],[3558,3655,196,308],[3756,3655,194,309],[2564,3423,194,308],[3430,2139,640,426],[3206,3420,350,525],[0,2280,1920,1920],[3206,2995,640,423],[3430,1695,640,442],[3590,2567,420,300],[2948,2567,640,426]]}
];


// symbols:



(lib._13902382703_cd11c7971f_b = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._8736253990_78b91a3dd8_b = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.apple = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BeetCarrotandLemonDetoxJuice = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.beetweightloss = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.carrotjuice1623157_640 = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cherryjuice = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.drink1835327_640 = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.fruitjuice1332072_640 = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.glass1 = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.glass2 = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.glass3 = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.glass4 = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.greenjuice769129_640 = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.green = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.juice344435_1920 = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.juice412161_640 = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.juice851403_640 = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.OhSweetBroccoliJuice1jpgcopy = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.smothie886986_640 = function() {
	this.spriteSheet = ss["WhatJuice_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.weight_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("ירידה במשקל", "25px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(75.4,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-304.6,-144.3,609.2,288.6,144.3);
	this.shape.setTransform(75.4,33.2,0.247,0.23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,152.7,72.6);


(lib.students = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("סטודנטים", "25px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(76,16.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-304.6,-144.3,609.2,288.6,144.3);
	this.shape.setTransform(75.4,33.2,0.247,0.23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,152.7,87.4);


(lib.sport_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("ספורטאים", "25px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(71.9,18.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s("#000000").ss(1,1,1).rr(-304.6,-144.3,609.2,288.6,144.3);
	this.shape.setTransform(75.4,33.2,0.247,0.23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sport_green, new cjs.Rectangle(-1,-1,152.7,89.2), null);


(lib.sport = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("ספורטאים", "25px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(71.9,18.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-304.6,-144.3,609.2,288.6,144.3);
	this.shape.setTransform(75.4,33.2,0.247,0.23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,152.7,89.2);


(lib.sakeret = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("סוכרתיים", "25px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(77.8,16.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-304.6,-144.3,609.2,288.6,144.3);
	this.shape.setTransform(75.4,33.2,0.247,0.23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,152.7,68.3);


(lib.Juice20_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smothie886986_640();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.219,0.27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice20_2, new cjs.Rectangle(0,0,139.9,115), null);


(lib.Juice19_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.juice851403_640();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.199,0.267);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice19_2, new cjs.Rectangle(0,0,127.5,118), null);


(lib.Juice18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.juice412161_640();
	this.instance.parent = this;
	this.instance.setTransform(0,1.8,0.2,0.249,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice18, new cjs.Rectangle(0,0,128.1,107.2), null);


(lib.Juice17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.juice344435_1920();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.072,0.062,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice17, new cjs.Rectangle(0,0,138.7,120), null);


(lib.Juice16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glass4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.68,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice16, new cjs.Rectangle(0,0,131.9,127.8), null);


(lib.Juice15_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glass3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.68,0.413);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice15_2, new cjs.Rectangle(0,0,131.9,127.8), null);


(lib.Juice14_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glass2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.673,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice14_2, new cjs.Rectangle(0,0,131.9,127.9), null);


(lib.Juice13_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glass1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.666,0.412);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice13_2, new cjs.Rectangle(0,0,131.9,127.8), null);


(lib.Juice12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.greenjuice769129_640();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.206,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice12_2, new cjs.Rectangle(0,0,131.9,127.7), null);


(lib.Juice11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fruitjuice1332072_640();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.206,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice11_2, new cjs.Rectangle(0,0,131.9,127.8), null);


(lib.Juice10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drink1835327_640();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.206,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.9,127.8);


(lib.Juice9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.carrotjuice1623157_640();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.206,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice9_2, new cjs.Rectangle(0,0,131.9,127.8), null);


(lib.Juice8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._13902382703_cd11c7971f_b();
	this.instance.parent = this;
	this.instance.setTransform(10,0,0.129,0.188);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice8_2, new cjs.Rectangle(10,0,131.9,127.8), null);


(lib.Juice7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._8736253990_78b91a3dd8_b();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.199,0.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice7_2, new cjs.Rectangle(0,0,131.9,127.8), null);


(lib.Juice6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.apple();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.377,0.548);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice6_2, new cjs.Rectangle(0,0,131.9,127.8), null);


(lib.Juice5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.green();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.377,0.243);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice5_2, new cjs.Rectangle(0,0,131.9,127.8), null);


(lib.Juice4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.beetweightloss();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.377,0.548);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.9,127.8);


(lib.Juice3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.OhSweetBroccoliJuice1jpgcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.314,0.426);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.9,127.8);


(lib.Juice2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cherryjuice();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.039,0.059);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133.8,134.2);


(lib.Juice1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BeetCarrotandLemonDetoxJuice();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.231,0.191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.9,127.8);


(lib.close1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("X", "96px 'Varela Round'");
	this.text.textAlign = "right";
	this.text.lineHeight = 128;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(82.3,17.7,0.645,0.645);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AJFAAQAADwiqCrQirCqjwAAQjvAAiriqQiqirAAjwQAAjvCqirQCHiGCygcQAwgIAxAAQAzAAAvAIQCyAcCHCGQCqCrAADvg");
	this.shape.setTransform(58.1,58.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AmZGaQiripAAjxQAAjwCripQCGiHCygcQAwgHAxgBQAyABAwAHQCyAcCGCHQCrCpgBDwQABDxirCpQipCrjxgBQjwABipirg");
	this.shape_1.setTransform(58.1,58.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.close1, new cjs.Rectangle(-1,-1,118.1,118.1), null);


(lib.Babies = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("פעוטות", "25px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(74.2,16.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-304.6,-144.3,609.2,288.6,144.3);
	this.shape.setTransform(75.4,33.2,0.247,0.23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,152.7,68.3);


(lib.Juice4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Juice4 = new lib.Juice4();
	this.Juice4.parent = this;
	this.Juice4.setTransform(66,63.9,1,1,0,0,0,66,63.9);
	new cjs.ButtonHelper(this.Juice4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Juice4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice4_2, new cjs.Rectangle(0,0,131.9,127.8), null);


(lib.Juice3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Juice3 = new lib.Juice3();
	this.Juice3.parent = this;
	this.Juice3.setTransform(66,63.9,1,1,0,0,0,66,63.9);
	new cjs.ButtonHelper(this.Juice3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Juice3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice3_2, new cjs.Rectangle(0,0,131.9,127.8), null);


(lib.Juice1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Juice1 = new lib.Juice1();
	this.Juice1.parent = this;
	this.Juice1.setTransform(66,63.9,1,1,0,0,0,66,63.9);
	new cjs.ButtonHelper(this.Juice1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Juice1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Juice1_2, new cjs.Rectangle(0,0,131.9,127.8), null);


(lib.BROCOLI_JUICE_REC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Juice3 = new lib.Juice3();
	this.Juice3.parent = this;
	this.Juice3.setTransform(193.7,458.3,2.127,2.127,0,0,0,65.8,64);
	new cjs.ButtonHelper(this.Juice3, 0, 1, 1);

	this.text = new cjs.Text("X", "96px 'Varela Round'");
	this.text.textAlign = "right";
	this.text.lineHeight = 128;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(725.7,55.3,0.645,0.645);

	this.text_1 = new cjs.Text("מיץ ברוקולי- לפיתוח השרירים", "40px 'Varela Round'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 54;
	this.text_1.lineWidth = 418;
	this.text_1.parent = this;
	this.text_1.setTransform(590.4,41.7);

	this.text_2 = new cjs.Text("\n\nמרכיבים:\n15 דובדבנים\n3 שזיפים\n2 וחצי כוסות של אבטיח חתוך לקוביות\n4 קוביות קרח\nאופן ההכנה:\nלחצות את הדובדבנים ולהוציא את הגלעינים\nלסחוט יחד את כל המרכיבים \nלפני ההגשה להוסיף את קוביות הקרח.\n.", "25px 'Varela Round'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 35;
	this.text_2.lineWidth = 383;
	this.text_2.parent = this;
	this.text_2.setTransform(752,197.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg8xg8xMB5jAAAMAAAB5jMh5jAAAg");
	this.shape.setTransform(389,389);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1,1,1).p("AJFAAQAADwiqCrQiqCqjxAAQjvAAiqiqQiqirAAjwQAAjvCqirQCGiGCygcQAwgIAxAAQAzAAAvAIQCyAcCHCGQCqCrAADvg");
	this.shape_1.setTransform(702.9,96.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AmaGbQipirgBjwQABjvCpirQCHiGCygcQAwgIAxAAQAzAAAvAIQCyAcCHCGQCpCrAADvQAADwipCrQirCpjwAAQjvAAiripg");
	this.shape_2.setTransform(702.9,96.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Eg8xA8yMAAAh5jMB5jAAAMAAAB5jgEAvhg2rQiyAciHCGQiqCqAADxQAADwCqCqQCqCqDxAAQDwAACqiqQCqiqAAjwQAAjxiqiqQiGiGiygcQgwgIgyAAQgzAAgvAIg");
	this.shape_3.setTransform(389,389);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.Juice3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BROCOLI_JUICE_REC, new cjs.Rectangle(-1,-1,780,780), null);


(lib.beetrootjuice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close1 = new lib.close1();
	this.close1.parent = this;
	this.close1.setTransform(702.9,95.4,1,1,0,0,0,58.1,58.1);

	this.text = new cjs.Text("\nמיץ סלק- לשיפור הסיבולת ", "40px 'Varela Round'");
	this.text.textAlign = "right";
	this.text.lineHeight = 54;
	this.text.lineWidth = 458;
	this.text.parent = this;
	this.text.setTransform(590.4,41.7);

	this.Juice1 = new lib.Juice1();
	this.Juice1.parent = this;
	this.Juice1.setTransform(183.8,464.7,2.367,2.377,0,0,0,65.8,63.9);
	new cjs.ButtonHelper(this.Juice1, 0, 1, 1);

	this.text_1 = new cjs.Text(" \nמרכיבים:\n 2    סלקים      \n   1    לימון \nפרוסת ג'ינג'ר קלוף\n1 גזר קלוף\n3 עלי כרוב\nאופן ההכנה:\nסחטו יחד את כל המרכיבים, הגישו צונן.", "25px 'Varela Round'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 35;
	this.text_1.lineWidth = 383;
	this.text_1.parent = this;
	this.text_1.setTransform(752,197.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg8xg8xMB5jAAAMAAAB5jMh5jAAAg");
	this.shape.setTransform(389,389);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Eg8xA8yMAAAh5jMB5jAAAMAAAB5jgEAvhg2rQiyAciHCGQiqCqAADxQAADwCqCqQCqCqDxAAQDwAACqiqQCqiqAAjwQAAjxiqiqQiGiGiygcQgwgIgyAAQgzAAgvAIg");
	this.shape_1.setTransform(389,389);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.Juice1},{t:this.text},{t:this.close1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.beetrootjuice, new cjs.Rectangle(-1,-1,780,780), null);


(lib.beetroot_weight_rec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Juice4 = new lib.Juice4();
	this.Juice4.parent = this;
	this.Juice4.setTransform(186.3,464.7,2.213,2.354,0,0,0,66,64);
	new cjs.ButtonHelper(this.Juice4, 0, 1, 1);

	this.text = new cjs.Text("X", "96px 'Varela Round'");
	this.text.textAlign = "right";
	this.text.lineHeight = 128;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(725.7,55.3,0.645,0.645);

	this.text_1 = new cjs.Text("מיץ סלק (ועוד)", "40px 'Varela Round'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 54;
	this.text_1.lineWidth = 418;
	this.text_1.parent = this;
	this.text_1.setTransform(590.4,41.7);

	this.text_2 = new cjs.Text("רכיבים:\n1 סלק\n2 עלים של כרוב אדום\n3 גזרים בינוניים\n½ לימון\n1 תפוז\n¼  אננס\n\n2 חופנים של תרד\nאופן ההכנה:\nלסחוט את כל הרכיבים ביחד, לנער או לערבב ולהגיש.", "25px 'Varela Round'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 35;
	this.text_2.lineWidth = 383;
	this.text_2.parent = this;
	this.text_2.setTransform(752,197.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg8xg8xMB5jAAAMAAAB5jMh5jAAAg");
	this.shape.setTransform(389,389);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1,1,1).p("AJFAAQAADwiqCrQiqCqjxAAQjvAAiqiqQiqirAAjwQAAjvCqirQCGiGCygcQAwgIAxAAQAzAAAvAIQCyAcCHCGQCqCrAADvg");
	this.shape_1.setTransform(702.9,96.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AmaGbQipirgBjwQABjvCpirQCHiGCygcQAwgIAxAAQAzAAAvAIQCyAcCHCGQCpCrAADvQAADwipCrQirCpjwAAQjvAAiripg");
	this.shape_2.setTransform(702.9,96.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Eg8xA8yMAAAh5jMB5jAAAMAAAB5jgEAvhg2rQiyAciHCGQiqCqAADxQAADwCqCqQCqCqDxAAQDwAACqiqQCqiqAAjwQAAjxiqiqQiGiGiygcQgwgIgyAAQgzAAgvAIg");
	this.shape_3.setTransform(389,389);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.Juice4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.beetroot_weight_rec, new cjs.Rectangle(-1,-1,780,780), null);


(lib.apple_juice_rec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Juice6 = new lib.Juice6_2();
	this.Juice6.parent = this;
	this.Juice6.setTransform(184.3,505.2,2.398,2.489,0,0,0,65.8,64);
	new cjs.ButtonHelper(this.Juice6, 0, 1, 1);

	this.text = new cjs.Text("X", "96px 'Varela Round'");
	this.text.textAlign = "right";
	this.text.lineHeight = 128;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(725.7,55.3,0.645,0.645);

	this.text_1 = new cjs.Text("\nמיץ תפוחים (ועוד) ", "40px 'Varela Round'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 54;
	this.text_1.lineWidth = 458;
	this.text_1.parent = this;
	this.text_1.setTransform(590.4,41.7);

	this.text_2 = new cjs.Text("רכיבים:\n2 תפוחים בינוניים\n1 סלק\n4 גזרים בינוניים\n3 מקלות סלרי\n½ מלפפון\n½   \"אגודל\" ג'ינג'ר\n\nאופן ההכנה:\nלסחוט את כל הרכיבים ביחד, לנער או לערבב ולהגיש.", "25px 'Varela Round'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 35;
	this.text_2.lineWidth = 383;
	this.text_2.parent = this;
	this.text_2.setTransform(752,197.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg8xg8xMB5jAAAMAAAB5jMh5jAAAg");
	this.shape.setTransform(389,389);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1,1,1).p("AJFAAQAADwiqCrQiqCqjxAAQjvAAiqiqQiqirAAjwQAAjvCqirQCGiGCygcQAwgIAxAAQAzAAAvAIQCyAcCHCGQCqCrAADvg");
	this.shape_1.setTransform(702.9,96.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AmaGbQipirgBjwQABjvCpirQCHiGCygcQAwgIAxAAQAzAAAvAIQCyAcCHCGQCpCrAADvQAADwipCrQirCpjwAAQjvAAiripg");
	this.shape_2.setTransform(702.9,96.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Eg8xA8yMAAAh5jMB5jAAAMAAAB5jgEAvhg2rQiyAciHCGQiqCqAADxQAADwCqCqQCqCqDxAAQDwAACqiqQCqiqAAjwQAAjxiqiqQiGiGiygcQgwgIgyAAQgzAAgvAIg");
	this.shape_3.setTransform(389,389);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.Juice6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.apple_juice_rec, new cjs.Rectangle(-1,-1,780,780), null);


// stage content:
(lib.WhatJuice3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.juice_info.visible = false;
		
		this.Juice1_2.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			this.juice_info.visible = true;
		}
		
		this.juice_info.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			this.juice_info.visible = false;
		}
		
		//   - הוספת ארוע  מעבר עכברירידה במשקל
		this.sport_green.alpha = 0;
		var frequency = 15;
		stage.enableMouseOver(frequency);
		this.sport_btn.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler() {
		
			this.sport_green.alpha = 1;
		
			this.Juice4_2.alpha = 0.1;
			this.Juice5_2.alpha = 0.1;
			this.Juice6_2.alpha = 0.1;
			this.Juice7_2.alpha = 0.1;
			this.Juice8_2.alpha = 0.1;
			this.Juice9_2.alpha = 0.1;
			this.Juice10_2.alpha = 0.1;
			this.Juice11_2.alpha = 0.1;
			this.Juice12_2.alpha = 0.1;
			this.Juice13_2.alpha = 0.1;
			this.Juice14_2.alpha = 0.1;
			this.Juice15_2.alpha = 0.1;
			this.Juice16_2.alpha = 0.1;
			this.Juice17_2.alpha = 0.1;
			this.Juice18_2.alpha = 0.1;
			this.Juice19_2.alpha = 0.1;
			this.Juice20_2.alpha = 0.1;
			console.log("in");
		
		}
		
		
		
		// הוספת ארוע יציאת עכבר
		this.sport_btn.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOutHandler() {
		
			this.sport_green.alpha = 0
			this.Juice4_2.alpha = 1;
			this.Juice5_2.alpha = 1;
			this.Juice6_2.alpha = 1;
			this.Juice7_2.alpha = 1;
			this.Juice8_2.alpha = 1;
			this.Juice9_2.alpha = 1;
			this.Juice10_2.alpha = 1;
			this.Juice11_2.alpha = 1;
			this.Juice12_2.alpha = 1;
			this.Juice13_2.alpha = 1;
			this.Juice14_2.alpha = 1;
			this.Juice15_2.alpha = 1;
			this.Juice16_2.alpha = 1;
			this.Juice17_2.alpha = 1;
			this.Juice18_2.alpha = 1;
			this.Juice19_2.alpha = 1;
			this.Juice20_2.alpha = 1;
			
		
			console.log("out");
		
		}
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 5
	this.juice_info = new lib.beetrootjuice();
	this.juice_info.parent = this;
	this.juice_info.setTransform(712.6,797.1,1,1,0,0,0,388.9,388.9);

	this.timeline.addTween(cjs.Tween.get(this.juice_info).wait(1));

	// actions
	this.Juice3_2 = new lib.Juice3_2();
	this.Juice3_2.parent = this;
	this.Juice3_2.setTransform(909.1,366,1,1,0,0,0,66,63.9);

	this.Juice2_2 = new lib.Juice2_2();
	this.Juice2_2.parent = this;
	this.Juice2_2.setTransform(673.6,363.4,1,1,0,0,0,66.8,67);

	this.Juice1_2 = new lib.Juice1_2();
	this.Juice1_2.parent = this;
	this.Juice1_2.setTransform(389.1,366.7,1,1,0,0,0,66,63.9);

	this.Juice4_2 = new lib.Juice4_2();
	this.Juice4_2.parent = this;
	this.Juice4_2.setTransform(1166,365.4,1,1,0,0,0,66,63.9);

	this.sport_green = new lib.sport_green();
	this.sport_green.parent = this;
	this.sport_green.setTransform(1168.5,239.4,1,1,0,0,0,75.4,43.9);

	this.weight_btn = new lib.weight_btn();
	this.weight_btn.parent = this;
	this.weight_btn.setTransform(899.4,197.3);
	new cjs.ButtonHelper(this.weight_btn, 0, 1, 1);

	this.sport_btn = new lib.sport();
	this.sport_btn.parent = this;
	this.sport_btn.setTransform(1168.5,239.4,1,1,0,0,0,75.4,43.9);
	new cjs.ButtonHelper(this.sport_btn, 0, 1, 1);

	this.instance = new lib.apple_juice_rec();
	this.instance.parent = this;
	this.instance.setTransform(-1688.4,1766.4,1,1,0,0,0,388.9,388.9);

	this.beetroot_weight_rec = new lib.beetroot_weight_rec();
	this.beetroot_weight_rec.parent = this;
	this.beetroot_weight_rec.setTransform(-3308.8,797.1,1,1,0,0,0,388.9,388.9);

	this.instance_1 = new lib.BROCOLI_JUICE_REC();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2396.6,805.2,1,1,0,0,0,388.9,388.9);

	this.Juice2_2_1 = new lib.Juice2_2();
	this.Juice2_2_1.parent = this;
	this.Juice2_2_1.setTransform(-1709.8,853.2,2.195,1.955,0,0,0,66.6,67);
	new cjs.ButtonHelper(this.Juice2_2_1, 0, 1, 1);

	this.text = new cjs.Text("X", "96px 'Varela Round'");
	this.text.textAlign = "right";
	this.text.lineHeight = 128;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-1177.4,471.6,0.645,0.645);

	this.text_1 = new cjs.Text("מיץ דובדבנים- להתאוששות מהירה  ", "40px 'Varela Round'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 54;
	this.text_1.lineWidth = 418;
	this.text_1.parent = this;
	this.text_1.setTransform(-1312.6,458);

	this.text_2 = new cjs.Text("\n\nמרכיבים:\n דובדבנים\n3 שזיפים\n2 וחצי כוסות של אבטיח חתוך לקוביות\n4 קוביות קרח\nאופן ההכנה:\nלחצות את הדובדבנים ולהוציא את הגלעינים\nלסחוט יחד את כל המרכיבים \nלפני ההגשה להוסיף את קוביות הקרח.\n.", "25px 'Varela Round'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 35;
	this.text_2.lineWidth = 383;
	this.text_2.parent = this;
	this.text_2.setTransform(-1151.1,614.1);

	this.Babies = new lib.Babies();
	this.Babies.parent = this;
	this.Babies.setTransform(390.1,230.4,1,1,0,0,0,75.4,33.1);
	new cjs.ButtonHelper(this.Babies, 0, 1, 1);

	this.Juice20_2 = new lib.Juice20_2();
	this.Juice20_2.parent = this;
	this.Juice20_2.setTransform(1173.9,1176.1,1,1,0,0,0,70,57.5);

	this.Juice19_2 = new lib.Juice19_2();
	this.Juice19_2.parent = this;
	this.Juice19_2.setTransform(915.6,1172.1,1,1,0,0,0,63.8,59);

	this.Juice18_2 = new lib.Juice18();
	this.Juice18_2.parent = this;
	this.Juice18_2.setTransform(674.3,1166.9,1,1,0,0,0,64,53.6);

	this.Juice17_2 = new lib.Juice17();
	this.Juice17_2.parent = this;
	this.Juice17_2.setTransform(386,1164.1,1,1,0,0,0,69.4,60);

	this.Juice16_2 = new lib.Juice16();
	this.Juice16_2.parent = this;
	this.Juice16_2.setTransform(1166,968.9,1,1,0,0,0,66,63.9);

	this.Juice15_2 = new lib.Juice15_2();
	this.Juice15_2.parent = this;
	this.Juice15_2.setTransform(920,970,1,1,0,0,0,66,63.9);

	this.Juice14_2 = new lib.Juice14_2();
	this.Juice14_2.parent = this;
	this.Juice14_2.setTransform(674.6,971,1,1,0,0,0,66,63.9);

	this.Juice13_2 = new lib.Juice13_2();
	this.Juice13_2.parent = this;
	this.Juice13_2.setTransform(389.1,970,1,1,0,0,0,66,63.9);

	this.Juice12_2 = new lib.Juice12_2();
	this.Juice12_2.parent = this;
	this.Juice12_2.setTransform(1166,752,1,1,0,0,0,66,63.9);

	this.Juice11_2 = new lib.Juice11_2();
	this.Juice11_2.parent = this;
	this.Juice11_2.setTransform(920,752,1,1,0,0,0,66,63.9);

	this.Juice10_2 = new lib.Juice10_2();
	this.Juice10_2.parent = this;
	this.Juice10_2.setTransform(667.1,752,1,1,0,0,0,66,63.9);

	this.Juice9_2 = new lib.Juice9_2();
	this.Juice9_2.parent = this;
	this.Juice9_2.setTransform(389.4,752,1,1,0,0,0,66,63.9);

	this.Juice7_2 = new lib.Juice7_2();
	this.Juice7_2.parent = this;
	this.Juice7_2.setTransform(913.4,568,1,1,0,0,0,66,63.9);

	this.Juice6_2 = new lib.Juice6_2();
	this.Juice6_2.parent = this;
	this.Juice6_2.setTransform(674.6,568,1,1,0,0,0,66,63.9);

	this.Juice5_2 = new lib.Juice5_2();
	this.Juice5_2.parent = this;
	this.Juice5_2.setTransform(389.3,572.9,1,1,0,0,0,66,63.9);

	this.text_3 = new cjs.Text("6", "15px 'Varela Round'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 22;
	this.text_3.lineWidth = 100;
	this.text_3.parent = this;
	this.text_3.setTransform(675.3,506.5);

	this.text_4 = new cjs.Text("3", "15px 'Varela Round'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 22;
	this.text_4.lineWidth = 100;
	this.text_4.parent = this;
	this.text_4.setTransform(895.1,304.1);

	this.text_5 = new cjs.Text("אבוקדו-ליים", "15px 'Varela Round'");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 22;
	this.text_5.lineWidth = 128;
	this.text_5.parent = this;
	this.text_5.setTransform(453.3,1226.1);

	this.text_6 = new cjs.Text("סלק-טחינה-תפוח", "15px 'Varela Round'");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 22;
	this.text_6.lineWidth = 128;
	this.text_6.parent = this;
	this.text_6.setTransform(736.4,1222.5);

	this.text_7 = new cjs.Text("גזר", "15px 'Varela Round'");
	this.text_7.textAlign = "right";
	this.text_7.lineHeight = 22;
	this.text_7.lineWidth = 128;
	this.text_7.parent = this;
	this.text_7.setTransform(453,819.4);

	this.text_8 = new cjs.Text("אגס ועוד", "15px 'Varela Round'");
	this.text_8.textAlign = "right";
	this.text_8.lineHeight = 22;
	this.text_8.lineWidth = 128;
	this.text_8.parent = this;
	this.text_8.setTransform(731,817.9);

	this.text_9 = new cjs.Text("בחרו את קהל היעד לסינון המיצים", "22px 'Varela Round'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 31;
	this.text_9.lineWidth = 462;
	this.text_9.parent = this;
	this.text_9.setTransform(698.2,102);

	this.text_10 = new cjs.Text("?איזה מיץ מתאים לי\n", "30px 'Varela Round'", "#FF6600");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 41;
	this.text_10.lineWidth = 405;
	this.text_10.parent = this;
	this.text_10.setTransform(695,42.6);

	this.text_11 = new cjs.Text("תפוז-גזר", "15px 'Varela Round'");
	this.text_11.textAlign = "right";
	this.text_11.lineHeight = 22;
	this.text_11.lineWidth = 127;
	this.text_11.parent = this;
	this.text_11.setTransform(735.9,1037);

	this.text_12 = new cjs.Text("עגבניות", "15px 'Varela Round'");
	this.text_12.textAlign = "right";
	this.text_12.lineHeight = 22;
	this.text_12.lineWidth = 68;
	this.text_12.parent = this;
	this.text_12.setTransform(453,1035.9);

	this.text_13 = new cjs.Text(" תפוחים ועוד", "15px 'Varela Round'");
	this.text_13.textAlign = "right";
	this.text_13.lineHeight = 22;
	this.text_13.lineWidth = 100;
	this.text_13.parent = this;
	this.text_13.setTransform(736.4,633.9);

	this.text_14 = new cjs.Text(" ירוק", "15px 'Varela Round'");
	this.text_14.textAlign = "right";
	this.text_14.lineHeight = 22;
	this.text_14.lineWidth = 68;
	this.text_14.parent = this;
	this.text_14.setTransform(453.3,633.9);

	this.text_15 = new cjs.Text(" דובדבנים", "15px 'Varela Round'");
	this.text_15.textAlign = "right";
	this.text_15.lineHeight = 22;
	this.text_15.lineWidth = 127;
	this.text_15.parent = this;
	this.text_15.setTransform(738.1,432.6);

	this.text_16 = new cjs.Text("סלק-גזר", "15px 'Varela Round'");
	this.text_16.textAlign = "right";
	this.text_16.lineHeight = 22;
	this.text_16.lineWidth = 144;
	this.text_16.parent = this;
	this.text_16.setTransform(453.2,431.3);

	this.students = new lib.students();
	this.students.parent = this;
	this.students.setTransform(778.7,240.2,1,1,0,0,0,75.4,42.9);
	new cjs.ButtonHelper(this.students, 0, 1, 1);

	this.sakeret = new lib.sakeret();
	this.sakeret.parent = this;
	this.sakeret.setTransform(582.5,230.4,1,1,0,0,0,75.4,33.1);
	new cjs.ButtonHelper(this.sakeret, 0, 1, 1);

	this.Babies_1 = new lib.Babies();
	this.Babies_1.parent = this;
	this.Babies_1.setTransform(390.1,230.4,1,1,0,0,0,75.4,33.1);
	new cjs.ButtonHelper(this.Babies_1, 0, 1, 1);

	this.Juice8_2 = new lib.Juice8_2();
	this.Juice8_2.parent = this;
	this.Juice8_2.setTransform(1156,572.9,1,1,0,0,0,66,63.9);

	this.Juice3 = new lib.Juice3();
	this.Juice3.parent = this;
	this.Juice3.setTransform(909.1,366,1,1,0,0,0,66,63.9);
	new cjs.ButtonHelper(this.Juice3, 0, 1, 1);

	this.text_17 = new cjs.Text("8", "15px 'Varela Round'");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 22;
	this.text_17.lineWidth = 100;
	this.text_17.parent = this;
	this.text_17.setTransform(1175.4,511);

	this.text_18 = new cjs.Text("6", "15px 'Varela Round'");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 22;
	this.text_18.lineWidth = 100;
	this.text_18.parent = this;
	this.text_18.setTransform(675.3,506.5);

	this.text_19 = new cjs.Text("3", "15px 'Varela Round'");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 22;
	this.text_19.lineWidth = 100;
	this.text_19.parent = this;
	this.text_19.setTransform(895.1,304.1);

	this.text_20 = new cjs.Text("אבטיח", "15px 'Varela Round'");
	this.text_20.textAlign = "right";
	this.text_20.lineHeight = 22;
	this.text_20.lineWidth = 128;
	this.text_20.parent = this;
	this.text_20.setTransform(977.3,1235.5);

	this.text_21 = new cjs.Text("אפרסק-מנגו", "15px 'Varela Round'");
	this.text_21.textAlign = "right";
	this.text_21.lineHeight = 22;
	this.text_21.lineWidth = 128;
	this.text_21.parent = this;
	this.text_21.setTransform(1241.8,1235.5);

	this.text_22 = new cjs.Text("תפוח-ירוק", "15px 'Varela Round'");
	this.text_22.textAlign = "right";
	this.text_22.lineHeight = 22;
	this.text_22.lineWidth = 127;
	this.text_22.parent = this;
	this.text_22.setTransform(1225.4,1034.8);

	this.text_23 = new cjs.Text("לימונדה", "15px 'Varela Round'");
	this.text_23.textAlign = "right";
	this.text_23.lineHeight = 22;
	this.text_23.lineWidth = 128;
	this.text_23.parent = this;
	this.text_23.setTransform(983.7,818.3);

	this.text_24 = new cjs.Text("סלרי-כרוב-תפוח", "15px 'Varela Round'");
	this.text_24.textAlign = "right";
	this.text_24.lineHeight = 22;
	this.text_24.lineWidth = 128;
	this.text_24.parent = this;
	this.text_24.setTransform(1225.4,818.3);

	this.text_25 = new cjs.Text(" דלעת מתובל", "15px 'Varela Round'");
	this.text_25.textAlign = "right";
	this.text_25.lineHeight = 22;
	this.text_25.lineWidth = 100;
	this.text_25.parent = this;
	this.text_25.setTransform(973,633.9);

	this.text_26 = new cjs.Text("ענבים", "15px 'Varela Round'");
	this.text_26.textAlign = "right";
	this.text_26.lineHeight = 22;
	this.text_26.lineWidth = 128;
	this.text_26.parent = this;
	this.text_26.setTransform(977,1035.9);

	this.text_27 = new cjs.Text("מלפפון תפוח", "15px 'Varela Round'");
	this.text_27.textAlign = "right";
	this.text_27.lineHeight = 22;
	this.text_27.lineWidth = 100;
	this.text_27.parent = this;
	this.text_27.setTransform(1225,633.9);

	this.text_28 = new cjs.Text(" ברוקולי", "15px 'Varela Round'");
	this.text_28.textAlign = "right";
	this.text_28.lineHeight = 22;
	this.text_28.lineWidth = 126;
	this.text_28.parent = this;
	this.text_28.setTransform(971,432.6);

	this.text_29 = new cjs.Text(" סלק ", "15px 'Varela Round'");
	this.text_29.textAlign = "right";
	this.text_29.lineHeight = 22;
	this.text_29.lineWidth = 121;
	this.text_29.parent = this;
	this.text_29.setTransform(1222.8,432);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AJEAAQAADwiqCqQiqCqjwAAQjvAAiqiqQiqiqAAjwQAAjwCqiqQCGiGCygcQAwgIAxAAQAyAAAwAIQCyAcCGCGQCqCqAADwg");
	this.shape.setTransform(-1200.2,512.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ECVFA/xIAABNEiVEhA9MB5kAAAMAAAB5iMh5kAAAg");
	this.shape_1.setTransform(-949,832.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AmaGbQiqirAAjwQAAjvCqirQCHiGCygcQAvgIAyAAQAyAAAwAIQCyAcCHCGQCpCrAADvQAADwipCrQirCpjwAAQjvAAiripg");
	this.shape_2.setTransform(-1200.2,512.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Eg8xA8yMAAAh5jMB5jAAAMAAAB5jgEAvhg2rQiyAciHCGQiqCqAADxQAADwCqCqQCqCqDxAAQDwAACqiqQCqiqAAjwQAAjxiqiqQiGiGiygcQgwgIgyAAQgzAAgvAIg");
	this.shape_3.setTransform(-1514.1,805.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_29},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.Juice3},{t:this.Juice8_2},{t:this.Babies_1},{t:this.sakeret},{t:this.students},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.Juice5_2},{t:this.Juice6_2},{t:this.Juice7_2},{t:this.Juice9_2},{t:this.Juice10_2},{t:this.Juice11_2},{t:this.Juice12_2},{t:this.Juice13_2},{t:this.Juice14_2},{t:this.Juice15_2},{t:this.Juice16_2},{t:this.Juice17_2},{t:this.Juice18_2},{t:this.Juice19_2},{t:this.Juice20_2},{t:this.Babies},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.Juice2_2_1},{t:this.instance_1},{t:this.beetroot_weight_rec},{t:this.instance},{t:this.sport_btn},{t:this.weight_btn},{t:this.sport_green},{t:this.Juice4_2},{t:this.Juice1_2},{t:this.Juice2_2},{t:this.Juice3_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2971.7,690.6,4943.1,2115.4);
// library properties:
lib.properties = {
	width: 1453,
	height: 1300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/WhatJuice_atlas_.png?1499281931207", id:"WhatJuice_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;