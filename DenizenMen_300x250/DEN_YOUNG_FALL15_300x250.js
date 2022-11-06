(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/DEN_YOUNG_300x250_photo1.jpg", id:"DEN_YOUNG_300x250_photo1"},
		{src:"images/DEN_YOUNG_300x250_photo2.jpg", id:"DEN_YOUNG_300x250_photo2"},
		{src:"images/DEN_YOUNG_300x250_photo3.jpg", id:"DEN_YOUNG_300x250_photo3"},
		{src:"images/strongArmBug.png", id:"strongArmBug"},
		{src:"images/TEXT_216SkinnyFit.png", id:"TEXT_216SkinnyFit"},
		{src:"images/TEXT_216SlimStraightFit.png", id:"TEXT_216SlimStraightFit"},
		{src:"images/TEXT_231athleticFit.png", id:"TEXT_231athleticFit"}
	]
};



// symbols:



(lib.DEN_YOUNG_300x250_photo1 = function() {
	this.initialize(img.DEN_YOUNG_300x250_photo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,239);


(lib.DEN_YOUNG_300x250_photo2 = function() {
	this.initialize(img.DEN_YOUNG_300x250_photo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,230);


(lib.DEN_YOUNG_300x250_photo3 = function() {
	this.initialize(img.DEN_YOUNG_300x250_photo3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,240);


(lib.strongArmBug = function() {
	this.initialize(img.strongArmBug);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.TEXT_216SkinnyFit = function() {
	this.initialize(img.TEXT_216SkinnyFit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,11);


(lib.TEXT_216SlimStraightFit = function() {
	this.initialize(img.TEXT_216SlimStraightFit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,11);


(lib.TEXT_231athleticFit = function() {
	this.initialize(img.TEXT_231athleticFit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,12);


(lib.whiteOverlay = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bBjIAAjGMAu2AAAIAADGg");
	this.shape.setTransform(150,10);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,20);


(lib.TEXTPremium = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADZBjQgKgEgHgHQgHgHgDgKQgEgKAAgNIAAiVIAjAAIAACXQAAALAEAFQAFAGAJAAQAKAAAEgGQAFgFAAgLIAAiXIAiAAIAACVQAAANgDAKQgEAKgHAHQgHAHgJAEQgKADgNAAQgMAAgKgDgAGzBjIAAicIgBAAIgfCcIgRAAIgficIgBAAIAACcIgeAAIAAjIIAuAAIAYB0IABAAIAZh0IAtAAIAADIgABxBjIAAjIIAjAAIAADIgAAvBjIAAicIgBAAIgfCcIgPAAIggicIAAAAIAACcIgeAAIAAjIIAtAAIAXB0IAAAAIAZh0IAuAAIAADIgAi4BjIAAjIIBdAAIAAAeIg7AAIAAA0IAtAAIAAAdIgtAAIAAA7IA+AAIAAAegAj3BjIgZhTIgSAAIAABTIgiAAIAAjIIAwAAQAPAAALADQALAEAHAHQAIAHADALQAEAMAAAQQAAALgCAKQgCAIgEAGQgDAGgFACIgIAGIAdBbgAkigKIANAAQAHAAAEgCQAGgBADgEQADgDABgGQABgGAAgJQAAgJgBgGQgBgGgDgEQgDgDgGgCQgEgBgHAAIgNAAgAnQBjIAAjIIAxAAQARAAALADQAMAEAIAHQAIAHADALQAEAMAAAQQAAAQgEALQgDAMgIAFQgIAHgMADQgLADgRAAIgPAAIAABTgAmugKIAOAAQAIAAAGgCQAGgBADgEQADgDACgGQABgGAAgJQAAgKgBgFQgCgGgDgEQgDgDgGgCQgGgBgIAAIgOAAg");
	this.shape.setTransform(50.3,12.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106,29);


(lib.TEXT_withYou = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGVBkQgKgDgHgHQgHgHgDgKQgEgKAAgNIAAiVIAjAAIAACWQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLIAAiWIAiAAIAACVQAAANgDAKQgEAKgHAHQgHAHgJADQgKADgNAAQgMAAgKgDgAEIBkQgKgEgHgIQgHgHgDgJQgDgJAAgLIAAhmQAAgLADgKQADgJAHgHQAHgHAKgEQAKgEANAAQAOAAAKAEQAKAEAGAHQAHAHADAJQADAKAAALIAABmQAAALgDAJQgDAJgHAHQgGAIgKAEQgKADgOAAQgNAAgKgDgAERhCQgEAFAAALIAABlQAAAMAEAFQAEAFAKAAQALAAAEgFQAEgFAAgMIAAhlQAAgLgEgFQgEgGgLAAQgKAAgEAGgACKBlIAAhUIgqh0IAjAAIAZBNIAAAAIAYhNIAjAAIgqB0IAABUgAgSBlIAAhaIglAAIAABaIgjAAIAAjIIAjAAIAABSIAlAAIAAhSIAgAAIAADIgAiyBlIAAiqIgiAAIAAgeIBmAAIAAAeIgiAAIAACqgAkPBlIAAjIIAjAAIAADIgAlqBlIgaiEIAAAAIgYCEIgdAAIgmjIIAgAAIAVB+IABAAIAXh+IAcAAIAYB+IAAAAIAUh+IAgAAIgjDIg");
	this.shape.setTransform(50.1,12.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,29);


(lib.TEXT_week = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al0BjQgKgEgHgHQgHgHgDgKQgEgKAAgNIAAiVIAjAAIAACXQAAALAEAFQAFAGAJAAQAKAAAEgGQAFgFAAgLIAAiXIAiAAIAACVQAAANgDAKQgEAKgHAHQgHAHgJAEQgKADgNAAQgMAAgKgDgAHTBjIAAhUIgnhqIAAAUIgiAAIAACqIgiAAIAAiqIgiAAIAAgeICGAAIAZBNIAAAAIAYhNIAjAAIgqB0IAABUgAEgBjIAAjIIAjAAIAADIgACwBjIAAjIIAjAAIAACqIA2AAIAAAegAB7BjIAAjIIAjAAIAADIgAgOBjIAAjIIAyAAQANAAALAEQAKADAGAHQAHAHADAKQADAKAAANQAAAOgFALQgDAGgFAEQgFAEgGADIAMAFQAFAEAEAGQADAGACAHQACAIAAAKQAAANgDAKQgDALgGAHQgHAJgKAEQgLAEgOAAgAATBHIAOAAQAHAAAFgCQAFgCADgEQADgEABgGIACgNQAAgIgCgGQgCgGgDgEQgDgEgGgBQgFgDgIAAIgLAAgAATgSIAMAAQALAAAGgHQAHgHAAgMQAAgOgGgHQgGgHgLAAIgNAAgAhDBjIgHgtIgmAAIgGAtIghAAIAljIIArAAIAlDIgAhPAYIgNhVIgBAAIgOBVIAcAAgAi9BjIgYhTIgSAAIAABTIgjAAIAAjIIAxAAQAPAAAKADQAMAEAHAHQAHAHAEALQAEAMAAAQQAAALgDAKQgCAIgDAGQgDAGgFACIgJAGIAeBbgAjngKIAMAAQAHAAAFgCQAFgBADgEQADgDABgGQACgGAAgJQAAgJgCgGQgBgGgDgEQgDgDgFgCQgFgBgHAAIgMAAgAofBjIAAjIIA0AAQANAAAKAEQALAEAGAHQAHAIAEALQADAMAAAPIAABOQAAAQgDALQgEAMgHAHQgGAIgLAEQgKADgNAAgAn8BHIAMAAQAHAAAEgCQAFgBADgDQADgEABgFIACgOIAAhWIgCgNQgBgGgDgDQgDgDgFgCQgEgBgHAAIgMAAg");
	this.shape.setTransform(61.4,12.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123.5,29);


(lib.TEXT_toFitYou = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHJBkQgJgDgIgHQgGgHgEgKQgEgKABgNIAAiVIAiAAIAACWQAAALAEAGQAFAFAKAAQAJAAAEgFQAFgGAAgLIAAiWIAjAAIAACVQAAANgEAKQgEAKgHAHQgHAHgJADQgKADgMAAQgNAAgKgDgAE8BkQgKgEgGgIQgIgHgCgJQgEgJAAgLIAAhmQAAgLAEgKQACgJAIgHQAGgHAKgEQAKgEANAAQAOAAAKAEQAKAEAHAHQAGAHAEAJQACAKAAALIAABmQAAALgCAJQgEAJgGAHQgHAIgKAEQgKADgOAAQgNAAgKgDgAFFhCQgEAFAAALIAABlQAAAMAEAFQAEAFAKAAQALAAAEgFQAEgFAAgMIAAhlQAAgLgEgFQgEgGgLAAQgKAAgEAGgAl8BkQgKgEgHgIQgGgHgEgJQgCgJAAgLIAAhmQAAgLACgKQAEgJAGgHQAHgHAKgEQAKgEAOAAQANAAAKAEQAKAEAHAHQAHAHACAJQADAKAAALIAABmQAAALgDAJQgCAJgHAHQgHAIgKAEQgKADgNAAQgOAAgKgDgAlzhCQgEAFAAALIAABlQAAAMAEAFQAEAFALAAQAKAAAEgFQAEgFAAgMIAAhlQAAgLgEgFQgEgGgKAAQgLAAgEAGgAC/BlIAAhUIgrh0IAkAAIAYBNIABAAIAXhNIAjAAIgqB0IAABUgAAMBlIAAiqIggAAIAAgeIBkAAIAAAeIghAAIAACqgAhPBlIAAjIIAjAAIAADIgAjQBlIAAjIIBhAAIAAAeIg+AAIAAA0IAuAAIAAAcIguAAIAABagAnyBlIAAiqIgiAAIAAgeIBmAAIAAAeIghAAIAACqg");
	this.shape.setTransform(55.7,12.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,118.3,33.2);


(lib.TEXT_style = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj9BjQgKgEgGgIQgHgIgEgKQgDgKgBgLIAhgFQABAPAGAIQAFAHAJAAQAJAAAFgEQAGgFAAgJQAAgHgDgHQgDgGgFgGQgFgFgTgRIgNgKQgHgGgEgHQgGgIgDgIQgDgJAAgLQAAgMAEgJQAEgKAHgGQAGgGAKgEQAKgDANAAQALAAAIAEQAJADAGAHQAGAGAEAJQADAJABALIghADQgBgLgFgGQgFgFgHAAQgJAAgEAFQgEAFAAAKQAAAGADAGQACAFAFAGIAZAWQARAOAHAKQAFAIADAIQADAJAAAKQAAAMgEAKQgEAJgHAHQgHAHgLADQgKADgMAAQgMAAgJgEgAC8BlIAAjIIBdAAIAAAeIg6AAIAAA0IAtAAIAAAcIgtAAIAAA8IA+AAIAAAegABOBlIAAjIIAjAAIAACqIA2AAIAAAegAgOBlIAAhUIgrh0IAkAAIAWBNIABAAIAXhNIAjAAIgqB0IAABUgAiDBlIAAiqIghAAIAAgeIBmAAIAAAeIgiAAIAACqg");
	this.shape.setTransform(31.3,12.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.5,29);


(lib.TEXT_seven = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEFBkQgKgEgHgIQgHgHgDgJQgDgJAAgLIAAhmQAAgLADgKQADgJAHgHQAHgHAKgEQAJgEAOAAQAOAAAKAEQAKAEAGAHQAHAHADAJQADAKAAALIAABmQAAALgDAJQgDAJgHAHQgGAIgKAEQgKADgOAAQgOAAgJgDgAEOhCQgFAFAAALIAABlQAAAMAFAFQADAFALAAQAKAAAFgFQADgFAAgMIAAhlQAAgLgDgFQgFgGgKAAQgLAAgDAGgAk/BkQgJgDgIgHQgGgHgEgKQgDgKAAgNIAAiVIAiAAIAACWQAAALAFAGQAEAFAJAAQAKAAAEgFQAFgGAAgLIAAiWIAiAAIAACVQABANgEAKQgEAKgGAHQgIAHgJADQgKADgNAAQgMAAgKgDgAnEBjQgKgEgGgIQgHgIgEgKQgDgKAAgLIAggFQACAPAFAIQAGAHAIAAQAKAAAEgEQAHgFgBgJQAAgHgCgHQgEgGgFgGQgEgFgUgRIgNgKQgGgGgFgHQgGgIgDgIQgDgJAAgLQAAgMAFgJQADgKAHgGQAHgGAKgEQAJgDANAAQALAAAIAEQAJADAGAHQAGAGAEAJQAEAJAAALIggADQgBgLgGgGQgFgFgHAAQgIAAgFAFQgEAFAAAKQAAAGADAGIAIALIAYAWQASAOAGAKQAGAIACAIQAEAJAAAKQAAAMgFAKQgEAJgHAHQgHAHgLADQgKADgLAAQgNAAgJgEgAHABlIgYhUIgSABIAABTIgjAAIAAjIIAwAAQAPAAALADQALADAHAHQAIAHADAMQAFALAAAQQgBAMgCAJQgCAJgDAGQgEAEgEAEIgJAFIAdBcgAGWgJIAMAAQAHAAAEgBQAGgCADgDQADgEABgGQABgGABgJQgBgJgBgGQgBgGgDgDQgDgEgGgBQgEgCgHAAIgMAAgACzBlIAAjIIAjAAIAADIgABwBlIgZhUIgSABIAABTIgjAAIAAjIIAxAAQAPAAALADQALADAHAHQAIAHADAMQAEALAAAQQAAAMgDAJQgCAJgDAGQgDAEgFAEIgIAFIAdBcgABFgJIANAAQAGAAAFgBQAGgCADgDQACgEABgGQACgGAAgJQAAgJgCgGQgBgGgCgDQgDgEgGgBQgFgCgGAAIgNAAgAhLBlIAAjIIBaAAIAAAeIg4AAIAAA0IArAAIAAAcIgrAAIAAA8IA8AAIAAAegAjUBlIAAjIIAxAAQAQAAAMADQAMADAIAHQAHAHAEAMQAEALAAAQQAAAQgEAMQgEALgHAFQgIAHgMAEQgMADgQAAIgPAAIAABTgAiygJIANAAQAJAAAGgBQAFgCAEgDQADgEABgGQACgGAAgJQAAgJgCgGQgBgGgDgDQgEgEgFgBQgGgCgJAAIgNAAg");
	this.shape.setTransform(52.7,12.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,116,29);


(lib.TEXT_modernSkinny = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.TEXT_216SkinnyFit();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,163,15.6);


(lib.TEXT_Modern = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjPBkQgLgEgGgIQgHgHgDgJQgDgJAAgLIAAhmQAAgLADgKQADgJAHgHQAGgHALgEQAKgEANAAQANAAAKAEQALAEAGAHQAHAHADAJQADAKAAALIAABmQAAALgDAJQgDAJgHAHQgGAIgLAEQgKADgNAAQgNAAgKgDgAjGhCQgEAFgBALIAABlQABAMAEAFQADAFALAAQALAAADgFQAEgFABgMIAAhlQgBgLgEgFQgDgGgLAAQgLAAgDAGgAF9BlIgsh9IgBAAIAAB9IgfAAIAAjIIAgAAIAqBxIABAAIAAhxIAfAAIAADIgADyBlIgZhUIgSABIAABTIgiAAIAAjIIAxAAQAOAAALADQALADAIAHQAHAHADAMQAEALAAAQQAAAMgCAJQgCAJgDAGQgEAEgEAEIgJAFIAdBcgADHgJIANAAQAHAAAEgBQAGgCADgDQADgEABgGQACgGAAgJQAAgJgCgGQgBgGgDgDQgDgEgGgBQgEgCgHAAIgNAAgAApBlIAAjIIBdAAIAAAeIg6AAIAAA0IAtAAIAAAcIgtAAIAAA8IA9AAIAAAegAhhBlIAAjIIA0AAQANAAAKADQAKAEAHAIQAFAHAEAMQADALAAAQIAABOQAAAPgDAMQgEALgFAIQgHAHgKAEQgKAEgNAAgAg+BIIALAAQAIAAAEgBQAFgCADgDQADgDABgGIABgNIAAhXIgBgNQgBgFgDgEQgDgDgFgBQgEgCgIAAIgLAAgAkrBlIAAicIgBAAIgfCcIgRAAIgficIgBAAIAACcIgeAAIAAjIIAtAAIAZB0IAAAAIAah0IAtAAIAADIg");
	this.shape.setTransform(44.7,12.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,29);


(lib.TEXT_made = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACqBlIAAjJIBdAAIAAAfIg7AAIAAAzIAtAAIAAAdIgtAAIAAA7IA+AAIAAAfgAAeBlIAAjJIAzAAQAOABAKADQAKAEAHAIQAHAHADAMQAEALAAAPIAABPQAAAPgEAMQgDALgHAHQgHAIgKAEQgKAEgOAAgABABIIAMAAQAHAAAFgCQAFgBADgDQADgDABgGIABgOIAAhWIgBgNQgBgGgDgDQgDgDgFgBQgFgCgHAAIgMAAgAgWBlIgGgtIgmAAIgGAtIgiAAIAljJIArAAIAkDJgAghAZIgOhUIAAAAIgOBUIAcAAgAiaBlIAAidIgBAAIgfCdIgRAAIggidIAAAAIAACdIgeAAIAAjJIAtAAIAZB0IAAAAIAZh0IAuAAIAADJg");
	this.shape.setTransform(30.2,12.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.3,63);


(lib.TEXT_flexes = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AESBjQgJgEgHgIQgHgIgDgKQgEgKAAgLIAhgFQABAPAFAIQAGAHAIAAQAKAAAFgEQAGgFAAgJQAAgHgDgHQgDgGgGgGQgEgFgUgRIgNgKQgGgGgFgHQgFgIgDgIQgDgJAAgLQAAgMAEgJQADgKAHgGQAHgGAKgEQAKgDANAAQAKAAAJAEQAIADAGAHQAGAGAEAJQAEAJABALIghADQgBgLgGgGQgFgFgHAAQgIAAgFAFQgEAFAAAKQAAAGADAGQADAFAFAGIAYAWQASAOAHAKQAFAIACAIQAEAJAAAKQAAAMgFAKQgDAJgIAHQgHAHgKADQgKADgMAAQgMAAgKgEgACBBlIAAjIIBdAAIAAAeIg7AAIAAA0IAtAAIAAAcIgtAAIAAA8IA+AAIAAAegABKBlIgXhKIgBAAIgYBKIggAAIAlhoIgjhgIAhAAIAVBAIABAAIAThAIAiAAIgjBgIAnBogAh1BlIAAjIIBdAAIAAAeIg7AAIAAA0IAtAAIAAAcIgtAAIAAA8IA+AAIAAAegAjkBlIAAjIIAjAAIAACqIA3AAIAAAegAleBlIAAjIIBhAAIAAAeIg+AAIAAA0IAuAAIAAAcIguAAIAABag");
	this.shape.setTransform(38.8,12.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,29);


(lib.TEXT_denim = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEYBlIAAidIgBAAIgfCdIgRAAIggidIAAAAIAACdIgeAAIAAjJIAtAAIAZB0IAAAAIAZh0IAuAAIAADJgABiBlIAAjJIAjAAIAADJgAAdBlIgqh9IgBAAIAAB9IgfAAIAAjJIAgAAIApByIAAAAIAAhyIAfAAIAADJgAipBlIAAjJIBdAAIAAAfIg6AAIAAAzIAtAAIAAAdIgtAAIAAA7IA+AAIAAAfgAk1BlIAAjJIA0AAQANABAKADQALAEAGAIQAHAHAEAMQADALAAAPIAABPQAAAPgDAMQgEALgHAHQgGAIgLAEQgKAEgNAAgAkSBIIAMAAQAHAAAEgCQAFgBADgDQADgDABgGIACgOIAAhWIgCgNQgBgGgDgDQgDgDgFgBQgEgCgHAAIgMAAg");
	this.shape.setTransform(34.7,12.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78,29);


(lib.TEXT_days = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkUBqQgIgDgJgMQgGADgHACQgHABgJAAQgNAAgKgDQgKgFgGgHQgIgHgCgKQgDgIgBgMIAAhlQABgLADgKQACgKAIgGQAGgHAKgFQAKgDANAAQAOAAAKADQAKAFAHAHQAGAGAEAKQACAKAAALIAABlQABAPgGALQAIAIAIAAIAAAeQgLAAgHgDgAlQhIQgEAEAAAMIAABkQAAANAEAEQAEAGAKAAQAIAAAFgDQgEgHgGgEIAAgeQAJAEAHAHIAAhaQAAgMgEgEQgEgGgLAAQgKAAgEAGgAjMBeQgKgDgGgIQgIgHgDgJQgDgKgBgNIAAiWIAjAAIAACXQAAALAEAFQAFAGAKAAQAJAAAEgGQAFgFAAgLIAAiXIAjAAIAACWQgBANgDAKQgDAJgIAHQgGAIgKADQgKADgMAAQgNAAgKgDgAErBfIAAhVIgnhqIAAAVIgiAAIAACqIgiAAIAAiqIgiAAIAAgfICGAAIAYBOIABAAIAXhOIAkAAIgrB0IAABVgAB0BfIAAjJIAjAAIAADJgAAKBfIAAjJIAjAAIAACqIA3AAIAAAfgAgnBfIgHgtIglAAIgHAtIghAAIAljJIArAAIAlDJgAgzATIgNhUIAAAAIgPBUIAcAAg");
	this.shape.setTransform(44.3,12.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87,34.5);


(lib.TEXT_curvySkinny = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.TEXT_216SlimStraightFit();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143,15.6);


(lib.TEXT_Authentic = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHRBkQgKgEgHgIQgHgHgDgJQgDgJAAgLIAAhmQAAgLADgKQADgJAHgHQAHgHAKgEQAKgEANAAQANAAAKAEQAJAEAHAIQAGAIAEAKQADAKAAALIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgKAAgEAGQgEAFAAALIAABlQAAAMAEAFQAEAFAKAAQAJAAAEgFQAEgFAAgKIAAgYIAjAAIAAAXQAAALgDAJQgEAJgGAHQgHAIgJAEQgKADgNAAQgNAAgKgDgAlzBkQgJgDgHgHQgHgHgEgKQgDgKAAgNIAAiVIAiAAIAACWQAAALAFAGQAEAFAKAAQAJAAAFgFQAEgGAAgLIAAiWIAjAAIAACVQAAANgEAKQgDAKgHAHQgHAHgKADQgKADgMAAQgNAAgKgDgAFqBlIAAjIIAjAAIAADIgAENBlIAAiqIghAAIAAgeIBmAAIAAAeIgiAAIAACqgAC5BlIgsh9IgBAAIAAB9IgfAAIAAjIIAgAAIArBxIAAAAIAAhxIAfAAIAADIgAgNBlIAAjIIBbAAIAAAeIg6AAIAAA0IAtAAIAAAcIgtAAIAAA8IA+AAIAAAegAhRBlIAAhaIglAAIAABaIgjAAIAAjIIAjAAIAABSIAlAAIAAhSIAiAAIAADIgAjxBlIAAiqIgiAAIAAgeIBmAAIAAAeIgiAAIAACqgAnHBlIgGgtIgmAAIgGAtIgiAAIAljIIArAAIAmDIgAnSAaIgOhVIAAAAIgOBVIAcAAg");
	this.shape.setTransform(54,10.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,0,124.6,41.5);


(lib.TEXT_a = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIsBjQgLgEgHgHQgJAIgJAEQgJADgNAAQgLAAgJgDQgJgDgGgHQgGgGgEgJQgDgIgBgLQAAgHACgIQACgIAEgIQAIgNALgMQgHgOgDgMQgGgRAAgMQAAgKADgJQADgIAFgHQAGgGAIgEQAIgDALAAQAKAAAHADQAIADAGAFQAEAGADAIQAEAHAAAKQgBAJgDAJQgDAHgFAIQgFAIgSATQAPAcAKAMQAJgYADgNIAcAHQgCAMgGAPIgLAaQAKAIAKACIAAAeQgLAAgKgEgAHkAnQgCAFAAAIQgBAJAGAGQAGAGAJAAQAJAAAHgGIgPgTQgHgLgGgKIgGAMgAHthNQgEAFgBAKQABAJADALIAHATIALgSQAFgKAAgJQAAgMgDgFQgEgFgGAAQgGAAgDAFgABEBkQgIgDgHgHQgGgHgEgKQgCgJAAgMIAAhmQAAgLACgKQADgJAHgHQAHgHAJgEQAJgEANAAQANAAAKAEQAJAEAIAIQAFAIAEAKQADAKAAALIAAANIghAAIgBgTQgBgHgCgEQgDgEgEgCQgDgCgGAAQgGAAgFAFQgEAFAAAMIAABmQAAAKAEAGQAEAFAIAAQALAAAEgGQAFgGgBgQIAAgTIgWAAIAAgaIA5AAIAABlIgRAAIgGgPQgIAJgHAEQgJAEgLAAQgKAAgJgDgAoiBjQgJgEgGgIQgIgIgDgKQgDgKgBgLIAhgFQABAPAFAIQAGAHAJAAQAJAAAFgEQAGgFAAgJQAAgHgDgHQgDgGgFgGQgFgFgUgRIgMgKQgHgGgEgHQgGgIgDgIQgDgJAAgLQAAgMAEgJQADgKAIgGQAGgGAKgEQAKgDANAAQALAAAIAEQAJADAFAHQAGAGAEAJQAEAJABALIghADQgBgLgGgGQgFgFgGAAQgJAAgFAFQgEAFAAAKQABAGACAGQADAFAFAGIAZAWQARAOAHAKQAFAIACAIQAEAJAAAKQAAAMgFAKQgDAJgIAHQgHAHgKADQgKADgMAAQgMAAgKgEgAFdBlIAAhaIglAAIAABaIgjAAIAAjIIAjAAIAABSIAlAAIAAhSIAiAAIAADIgADDBlIAAiqIgiAAIAAgeIBmAAIAAAeIgiAAIAACqgAgVBlIgth9IAAAAIAAB9IggAAIAAjIIAhAAIAqBxIAAAAIAAhxIAeAAIAADIgAjOBlIAAjIIBcAAIAAAeIg6AAIAAA0IAtAAIAAAcIgtAAIAAA8IA+AAIAAAegAkNBlIgZhUIgSABIAABTIgjAAIAAjIIAxAAQAPAAALADQALADAHAHQAIAHADAMQAEALAAAQQAAAMgDAJQgCAJgDAGQgDAEgFAEIgIAFIAdBcgAk4gJIANAAQAGAAAFgBQAGgCADgDQACgEABgGQACgGAAgJQAAgJgCgGQgBgGgCgDQgDgEgGgBQgFgCgGAAIgNAAgAmnBlIAAiqIgiAAIAAgeIBnAAIAAAeIgiAAIAACqg");
	this.shape.setTransform(63.6,12.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,139.5,55.9);


(lib.TEXT_231athleticFit_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TEXT_231athleticFit();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,12);


(lib.strongArmBug_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.strongArmBug();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.newBug = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AingZIAcgGIA0BDIgRhMIAXgEIAeCAIgYAGIg6hMIAAAAIATBUIgXAFgAg6gzIBDgPIAFAXIgqAKIAIAdIAegIIAGAVIggAIIAIAhIAsgKIAFAWIhEARgAAYhGIAXgFIAmBPIgChXIAYgFIAmBRIAAAAIgChaIAXgGIACCIIgZAFIgmhSIAABbIgYAGg");
	this.shape.setTransform(16.9,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1001C").s().p("AjogoIGnhjIArC1ImoBigAixgWIAeCAIAXgFIgThUIAAAAIA5BLIAZgFIgeiBIgXAFIARBMIg1hDgAhEgwIAfCBIBEgQIgFgWIgsAKIgIgiIAggIIgGgUIgfAIIgHgeIApgKIgDgWgAANhDIA6B6IAYgFIgBhcIAnBTIAYgFIgBiIIgXAGIACBZIAAAAIgmhRIgZAGIACBXIglhPg");
	this.shape_1.setTransform(17.9,12.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-1.9,46.8,28.2);


(lib.findYourFitCTA = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#213052").s().p("ADIA5QgFgDgEgEQgEgEgBgFQgDgGAAgGIAAg5QAAgGADgGQABgFAEgEQAEgEAFgDQAHgCAHAAQAIAAAFACQAGADAEAEQAEAEACAFQABAGAAAGIAAA5QAAAGgBAGQgCAFgEAEQgEAEgGADQgFACgIAAQgHAAgHgCgADOglQgCADAAAGIAAA5QAAAGACADQACAEAGAAQAGAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgGAAQgGAAgCAEgAncA4QgGgCgEgFQgEgEgCgGQgCgGAAgGIATgDQAAAJADAEQAEAFAEAAQAGAAADgDQADgDAAgFQAAgEgCgEIgEgHIgOgMIgIgFIgGgIIgFgJQgBgFAAgGQAAgHACgFQACgGAEgDQAEgEAFgCQAGgCAHAAQAGAAAGACQAEACAEAEQADAEACAFQACAFABAGIgTACQgBgHgDgDQgCgDgFAAQgEAAgDADQgCADAAAGIABAHIAFAGIAOANQAKAHAEAFIAEAJQACAGAAAFQAAAHgCAGQgCAFgEAEQgFAEgFACQgGACgIAAQgGAAgFgDgAFBA5IgPhKIAAAAIgOBKIgQAAIgWhxIASAAIANBHIAAAAIANhHIARAAIANBHIALhHIATAAIgVBxgACTA5IgZhGIgBAAIAABGIgSAAIAAhxIATAAIAYBAIAAAAIAAhAIASAAIAABxgAAhA5IAAhYIAAAAIgSBYIgKAAIgQhYIAABYIgRAAIAAhxIAZAAIANBBIAAAAIAOhBIAaAAIAABxgAhiA5IAAhxIA1AAIAAARIgiAAIAAAeIAaAAIAAAPIgaAAIAAAiIAkAAIAAARgAiKA5IAAgzIgVAAIAAAzIgTAAIAAhxIATAAIAAAvIAVAAIAAgvIAVAAIAABxgAjlA5IAAhgIgTAAIAAgRIA6AAIAAARIgTAAIAABggAlbA5IAAhxIA1AAIAAARIghAAIAAAeIAZAAIAAAPIgZAAIAAAiIAjAAIAAARgAmiA5IAAhxIA1AAIAAARIghAAIAAAeIAZAAIAAAPIgZAAIAAAiIAjAAIAAARgAGVgzIBaAyIhaAwg");
	this.shape.setTransform(44,2.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-3.3,99.1,11.9);


(lib.blueBG = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#102C52").s().p("EgUfBUhMAAAipBMAo/AAAMAAACpBg");
	this.shape.setTransform(150,125,1.143,0.231);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mcTargetLogo = function() {
	this.initialize();

	// targetLogo.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D71B32").s().p("Ag4A7QgYgZAAgiQAAghAYgYQAYgZAhABQAigBAZAZQAYAYAAAhQAAAigYAZQgZAXgiAAQghAAgYgXgAgkglQgRAPAAAWQAAAXARAQQAQAQAVAAQAXAAAQgQQAQgQAAgXQAAgWgQgPQgQgRgXAAQgVAAgQARgAEPAUQgHgJAAgLQAAgMAHgIQAIgJANAAQAJAAAHAFQAHAGABAJIgMAAQgCgJgKAAQgIAAgEAFQgEAGAAAHQAAAHAEAFQAEAGAIAAQAMAAABgMIgMAAIAAgHIAYAAIAAAcIgIAAIgBgHQgGAJgKgBQgNAAgIgIgAgRAUQgJgJAAgLQAAgLAJgHQAIgJAKAAQAMAAAIAJQAIAHAAALQAAALgIAJQgIAIgMAAQgKAAgIgIgAmdATQgGgIAAgLQAAgMAGgIQAIgKANABQANgBAHAKQAHAIAAAMQAAALgHAIQgHAJgNAAQgNAAgIgJgAmXgQQgFAHAAAJQAAAIAFAHQAFAHAKAAQAJAAAGgHQAEgHAAgIQAAgJgEgHQgGgHgJAAQgKAAgFAHgAGZAXQAAgFAFAAQAEAAAAAFQAAAEgEAAQgFAAAAgEgAGaAXQAAADAEAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgEAAAAAEgAGHAbIAAgsIgRAAIAAgLIAuAAIAAALIgRAAIAAAsgAFFAbIAAg3IArAAIAAALIgeAAIAAAMIAbAAIAAAHIgbAAIAAAPIAeAAIAAAKgAD3AbIgBgHIgBgGQAAgGgDgBQgBgCgFAAIgNAAIAAAWIgMAAIAAg3IAeAAQAIAAAFAEQAEAFAAAHQAAAKgJACQAIACAAAMIABAGQAAAFACACgADfgCIAOAAQAJAAAAgIQAAgIgJAAIgOAAgADBAbIgEgMIgWAAIgEAMIgMAAIAVg3IANAAIAVA3gACrAFIAPAAIgIgTgAB+AbIAAgsIgQAAIAAgLIAuAAIAAALIgRAAIAAAsgAiEAbIAAgxIgTAAIAAgGIAtAAIAAAGIgTAAIAAAxgAiYAbIgGgSIgYAAIgGASIgIAAIAWg3IAIAAIAWA3gAi0ADIAUAAIgKgYgAj3AbIAAgYIgWgfIAJAAIARAcIAQgcIAJAAIgWAfIAAAYgAkqAbIAAg3IAHAAIAAAwIAeAAIAAAHgAk/AbIgegsIAAAsIgHAAIAAg3IAIAAIAeAsIAAAAIAAgsIAHAAIAAA3gAGfAZIgBgBIAAgBIgBAAIAAACIgBAAIAAgFIACAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIgBACIABABIAAABgAGdAXIABAAIAAgBIAAgBIgBAAg");
	this.shape.setTransform(66.2,13.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(24.1,4.8,84.2,16.6);


(lib.ClipGroup = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0mLyIAA3jMApNAAAIAAXjg");
	mask.setTransform(131.9,75.4);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C41230").s().p("AqwDkIAAnHIVhAAIAAHHgAGBBdQAhAgA/gBQBHABAjgcQAbgWAAgeQAAgpgvgPQgMgEhKgOQgigGAAgMQAAgTArAAQAOAAAPAIQAHADAEAGQADAGAAADIBJAAQAAgUgZgWQgkgdhAAAQgzAAghAUQglAXAAAmQAAAjAqATQAXAJA6AIQASADAIAEQAKAEAAAKQAAAQglAAQgQAAgJgDQgHgEgHgGQgHgHAAgGIhIAAQAAAVAVAUgAlchRQgpAgAAA2QAAA3ApAhQAoAfBAAAQA1ABAfgPQAlgSARgoIhLAAQgRAXgiABQgYAAgQgPQgRgPAAgWIC9AAIAAgPQAAgvgkgiQgognhEAAQhCAAgmAegAgHB2IBRAAIBvjeIhCAAIhCCGIgBAEIhGiKIhuAAgADEB1IBdAAIAAjfIhdAAgApiB1IDcAAIAAg9Ih3AAIAAigIhlAAIAAAyQAFgBAHAAQAMAAALAFQAKAFAJAHQAKAKADAJQAFALAAALQAAAOgFAKQgDAKgKAKQgJAJgKADQgLAEgMAAIgMAAgApiA1IAMACQAJAAAKgEQALgFAFgGQAHgGADgKQAEgKAAgLQAAgIgEgKQgDgJgHgHQgGgGgKgEQgIgFgLAAQgHABgFABIAAAOIAPAAQANAAAGAFQAGAFAAALQAAAJgFADQgGAEgHAAIAUAhIgMAAIgUggIgKAAgApiAAIASAAQACAAAEgBQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQACgCAAgFQAAgDgBgDIgEgDIgFgBIgTgBgAEzhQIAZAAIgNAiIAMAAIAcgfIAAgwIg0AAgAkhgTQAAgRALgOQAMgOAUAAQAXAAANANQAMAMAAAUg");
	this.shape.setTransform(134.1,113.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#102C52").s().p("AgpAqQgSgRAAgZQAAgYASgRQASgSAXAAIAAAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAQgXAAgSgSgAglglQgQAPAAAWQAAAXAQAOQAQARAVAAQAWAAARgRQAPgPAAgWQAAgWgPgPQgQgQgXAAIAAAAQgVAAgQAQgAAPAdIgOgVIgBAAIgLAAIAAAVIgMAAIAAg9IAXAAIAEAAQALAAAHAHQAGAFAAAIIAAAAQAAAMgPAGIARAXgAgLgBIALAAIADAAQANAAgBgKQABgLgNAAIgDAAIgLAAg");
	this.shape_1.setTransform(22.9,51.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(134.1,78.1);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16.9,30,228.5,106.6);


(lib.mcGirl3 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.DEN_YOUNG_300x250_photo3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,240);


(lib.mcGirl2 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.DEN_YOUNG_300x250_photo2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,230);


(lib.mcDenizenLogo = function() {
	this.initialize();

	// DenizenLogo.ai
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(137.3,74.8,1.068,1.068,0,0,0,131.9,75.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-5.7,281.7,161);


// stage content:
(lib.DEN_YOUNG_FALL15_300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// stroke
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAAAAnDMAu3AAAMAAAgnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(345));

	// TEXT 231 Athletic Fit
	this.instance = new lib.TEXT_231athleticFit_1();
	this.instance.setTransform(181.4,239.1,1,1,0,0,0,53.5,6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(227).to({_off:false},0).to({x:218.9,alpha:1},27,cjs.Ease.get(1)).wait(41).to({y:259.1,alpha:0},7,cjs.Ease.get(-1)).wait(43));

	// TEXT Modern Skinny
	this.instance_1 = new lib.TEXT_modernSkinny();
	this.instance_1.setTransform(190.5,242.1,1,1,0,0,0,41,7.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).to({x:211,alpha:1},34,cjs.Ease.get(1)).wait(56).to({y:252.1,alpha:0},7,cjs.Ease.get(-1)).wait(216));

	// TEXT Curvy Skinny
	this.instance_2 = new lib.TEXT_curvySkinny();
	this.instance_2.setTransform(163.9,242,1,1,0,0,0,37.6,7.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(129).to({_off:false},0).to({x:183.9,alpha:1},26,cjs.Ease.get(1)).wait(53).to({y:252,alpha:0},7,cjs.Ease.get(-1)).wait(130));

	// find Your Fit MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_322 = new cjs.Graphics().p("AAPThIAAjDIA1AAIAADDg");
	var mask_graphics_323 = new cjs.Graphics().p("AhGThIAAjDIDhAAIAADDg");
	var mask_graphics_324 = new cjs.Graphics().p("AiVThIAAjDIF/AAIAADDg");
	var mask_graphics_325 = new cjs.Graphics().p("AjbThIAAjDIIMAAIAADDg");
	var mask_graphics_326 = new cjs.Graphics().p("AkZThIAAjDIKIAAIAADDg");
	var mask_graphics_327 = new cjs.Graphics().p("AlPThIAAjDIL0AAIAADDg");
	var mask_graphics_328 = new cjs.Graphics().p("Al9ThIAAjDINQAAIAADDg");
	var mask_graphics_329 = new cjs.Graphics().p("AmiThIAAjDIOaAAIAADDg");
	var mask_graphics_330 = new cjs.Graphics().p("Am/ThIAAjDIPUAAIAADDg");
	var mask_graphics_331 = new cjs.Graphics().p("AnUThIAAjDIP+AAIAADDg");
	var mask_graphics_332 = new cjs.Graphics().p("AnhThIAAjDIQXAAIAADDg");
	var mask_graphics_333 = new cjs.Graphics().p("AnlThIAAjDIQfAAIAADDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(322).to({graphics:mask_graphics_322,x:6.9,y:124.9}).wait(1).to({graphics:mask_graphics_323,x:15.6,y:124.9}).wait(1).to({graphics:mask_graphics_324,x:23.5,y:124.9}).wait(1).to({graphics:mask_graphics_325,x:30.5,y:124.9}).wait(1).to({graphics:mask_graphics_326,x:36.7,y:124.9}).wait(1).to({graphics:mask_graphics_327,x:42.1,y:124.9}).wait(1).to({graphics:mask_graphics_328,x:46.7,y:124.9}).wait(1).to({graphics:mask_graphics_329,x:50.4,y:124.9}).wait(1).to({graphics:mask_graphics_330,x:53.3,y:124.9}).wait(1).to({graphics:mask_graphics_331,x:55.4,y:124.9}).wait(1).to({graphics:mask_graphics_332,x:56.7,y:124.9}).wait(1).to({graphics:mask_graphics_333,x:57.1,y:124.9}).wait(12));

	// findYourFit.ai
	this.instance_3 = new lib.findYourFitCTA();
	this.instance_3.setTransform(55.9,242.3,1,1,0,0,0,35.3,5.2);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(322).to({_off:false},0).wait(23));

	// target logo
	this.mcTargetLogo = new lib.mcTargetLogo();
	this.mcTargetLogo.setTransform(219.8,239.6,0.2,0.2,0,0,0,66,13);
	this.mcTargetLogo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTargetLogo).wait(325).to({_off:false},0).to({regX:66.1,regY:13.1,scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},3).wait(8));

	// white overlay
	this.instance_4 = new lib.whiteOverlay();
	this.instance_4.setTransform(150,240,1,1,0,0,0,150,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(345));

	// TEXT To Fit You
	this.instance_5 = new lib.TEXT_toFitYou();
	this.instance_5.setTransform(215.9,157.5,0.263,0.263,0,0,0,55.6,12);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(232).to({_off:false},0).to({regX:55.7,scaleX:1.1,scaleY:1.1,x:216,alpha:1},10,cjs.Ease.get(-1)).to({regX:55.6,regY:12.1,scaleX:0.9,scaleY:0.9,x:215.9,y:157.6},2).to({scaleX:1,scaleY:1},2).wait(48).to({alpha:0},6,cjs.Ease.get(-1)).wait(45));

	// TEXT Made
	this.instance_6 = new lib.TEXT_made();
	this.instance_6.setTransform(215.3,128.9,0.234,0.234,0,0,0,30.1,12.2);
	this.instance_6.alpha = 0;
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(225).to({_off:false},0).to({regX:30.2,scaleX:1.1,scaleY:1.1,x:215.4,y:129,alpha:1},8,cjs.Ease.get(-1)).to({regX:30.1,scaleX:0.9,scaleY:0.9,x:215.3},2).to({regX:30.2,regY:12.1,scaleX:1,scaleY:1,x:215.4,y:128.9},2).wait(55).to({alpha:0},6,cjs.Ease.get(-1)).wait(47));

	// strong arm bug
	this.instance_7 = new lib.strongArmBug_1();
	this.instance_7.setTransform(160,138,1.368,1.368,0,0,0,17,17);
	this.instance_7.alpha = 0;
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(322).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,alpha:1},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},2).wait(13));

	// TEXT_durability
	this.instance_8 = new lib.TEXT_week();
	this.instance_8.setTransform(220.5,199.7,0.284,0.284,0,0,0,61.3,12.2);
	this.instance_8.alpha = 0;
	this.instance_8.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(316).to({_off:false},0).to({regX:61.4,scaleX:1.1,scaleY:1.1,alpha:1},9,cjs.Ease.get(-1)).to({regX:61.5,scaleX:0.9,scaleY:0.9,x:220.6},2).to({regX:61.4,scaleX:1,scaleY:1,x:220.5},2).wait(16));

	// TEXT_strength &
	this.instance_9 = new lib.TEXT_a();
	this.instance_9.setTransform(219.1,170.6,0.214,0.214,0,0,0,63.6,12.2);
	this.instance_9.alpha = 0;
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(312).to({_off:false},0).to({regY:12.1,scaleX:1.1,scaleY:1.1,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.9,scaleY:0.9},2).to({scaleX:1,scaleY:1},2).wait(20));

	// TEXT_quality
	this.instance_10 = new lib.TEXT_days();
	this.instance_10.setTransform(220.8,143.2,0.199,0.199,0,0,0,44.4,12.8);
	this.instance_10.alpha = 0;
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(308).to({_off:false},0).to({regX:44.3,regY:12.7,scaleX:1.1,scaleY:1.1,alpha:1},9,cjs.Ease.get(-1)).to({regX:44.4,scaleX:0.9,scaleY:0.9},2).to({regX:44.3,scaleX:1,scaleY:1},2).wait(24));

	// TEXT_superior
	this.instance_11 = new lib.TEXT_seven();
	this.instance_11.setTransform(219.8,113.4,0.136,0.136,0,0,0,52.8,12.5);
	this.instance_11.alpha = 0;
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(304).to({_off:false},0).to({regX:52.6,regY:12.3,scaleX:1.1,scaleY:1.1,y:113.3,alpha:1},9,cjs.Ease.get(-1)).to({regX:52.7,regY:12.4,scaleX:0.9,scaleY:0.9,y:113.4},2).to({regY:12.3,scaleX:1,scaleY:1,y:113.3},2).wait(28));

	// TEXT With You
	this.instance_12 = new lib.TEXT_withYou();
	this.instance_12.setTransform(216,200.9,0.116,0.116,0,0,0,50.1,12.1);
	this.instance_12.alpha = 0;
	this.instance_12.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(144).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:216.1,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.9,scaleY:0.9,x:216},2).to({scaleX:1,scaleY:1,x:216.1},2).wait(57).to({alpha:0},7,cjs.Ease.get(-1)).wait(124));

	// TEXT Flexes
	this.instance_13 = new lib.TEXT_flexes();
	this.instance_13.setTransform(212.8,171.9,0.188,0.188,0,0,0,38.8,12);
	this.instance_13.alpha = 0;
	this.instance_13.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(140).to({_off:false},0).to({regY:12.1,scaleX:1.1,scaleY:1.1,alpha:1},8,cjs.Ease.get(-1)).to({regY:12,scaleX:0.91,scaleY:0.91,y:171.8},2).to({regY:12.1,scaleX:1,scaleY:1,y:171.9},2).wait(60).to({alpha:0},7,cjs.Ease.get(-1)).wait(126));

	// TEXT Denim
	this.instance_14 = new lib.TEXT_denim();
	this.instance_14.setTransform(215.7,143.9,0.216,0.216,0,0,0,34.8,12.1);
	this.instance_14.alpha = 0;
	this.instance_14.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(136).to({_off:false},0).to({regX:34.7,scaleX:1.1,scaleY:1.1,alpha:1},8,cjs.Ease.get(-1)).to({regY:12,scaleX:0.9,scaleY:0.9},2).to({regY:12.1,scaleX:1,scaleY:1},2).wait(62).to({alpha:0},7,cjs.Ease.get(-1)).wait(128));

	// NEW.ai
	this.instance_15 = new lib.newBug();
	this.instance_15.setTransform(146.5,143.9,0.112,0.112,15,0,0,17.8,11);
	this.instance_15.alpha = 0;
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(136).to({_off:false},0).to({regX:17.6,scaleX:1.18,scaleY:1.18,rotation:-4.2,x:146.6,y:144,alpha:1},8).to({regX:17.5,scaleX:1,scaleY:1,rotation:0,x:146.5},2).wait(68).to({x:150.5,y:123},12,cjs.Ease.get(1)).wait(72).to({x:140.5,y:106},9,cjs.Ease.get(1)).wait(38));

	// TEXT Premium
	this.instance_16 = new lib.TEXTPremium();
	this.instance_16.setTransform(216.2,115.4,0.132,0.132,0,0,0,50.2,12.1);
	this.instance_16.alpha = 0;
	this.instance_16.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(132).to({_off:false},0).to({regX:50.3,regY:12.2,scaleX:1.1,scaleY:1.1,x:216.3,y:115.3,alpha:1},8,cjs.Ease.get(-1)).to({regX:50.2,scaleX:0.9,scaleY:0.9,x:216.2,y:115.4},2).to({scaleX:1,scaleY:1},2).wait(64).to({alpha:0},7,cjs.Ease.get(-1)).wait(130));

	// mcDenizenLogo
	this.mcDenizenLogo = new lib.mcDenizenLogo();
	this.mcDenizenLogo.setTransform(80.4,562.6,0.609,0.609,0,0,0,131.9,75.5);

	this.timeline.addTween(cjs.Tween.get(this.mcDenizenLogo).wait(32).to({regX:144.2,regY:69.5,x:220.9,y:284.9},0).to({y:36.9},12,cjs.Ease.get(0.77)).to({y:44.9},2).to({y:40.9},2).wait(297));

	// TEXT Style
	this.instance_17 = new lib.TEXT_style();
	this.instance_17.setTransform(219.7,173,0.313,0.313,0,0,0,31.4,12);
	this.instance_17.alpha = 0;
	this.instance_17.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(52).to({_off:false},0).to({regX:31.3,scaleX:1.12,scaleY:1.12,x:218,y:170.9,alpha:1},10).to({regY:12.2,scaleX:0.99,scaleY:0.99,x:218.6,y:171.8},2).to({regY:12.1,scaleX:1,scaleY:1,x:218.5,y:171.6},2).wait(58).to({alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(213));

	// TEXT Modern
	this.instance_18 = new lib.TEXT_Modern();
	this.instance_18.setTransform(211.8,150.7,0.114,0.114,0,0,0,44.4,11.8);
	this.instance_18.alpha = 0;
	this.instance_18.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(48).to({_off:false},0).to({regX:44.7,regY:12.1,scaleX:1.06,scaleY:1.06,x:219.3,y:143.2,alpha:1},9,cjs.Ease.get(-1)).to({regX:44.6,scaleX:0.93,scaleY:0.93,x:218.1,y:144.4},2).to({scaleX:1,scaleY:1,x:218.6,y:143.9},2).wait(61).to({alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(215));

	// TEXT Authentic
	this.instance_19 = new lib.TEXT_Authentic();
	this.instance_19.setTransform(209.5,116.7,0.114,0.114,0,0,0,54,10.1);
	this.instance_19.alpha = 0;
	this.instance_19.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(44).to({_off:false},0).to({regX:54.1,regY:10.3,scaleX:1.12,scaleY:1.12,x:218.9,y:115.4,alpha:1},9,cjs.Ease.get(-1)).to({regX:54,regY:10.4,scaleX:0.98,scaleY:0.98,x:217.8,y:116},2).to({regY:10.3,scaleX:1,scaleY:1,x:218,y:115.8},2).wait(63).to({alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(217));

	// blue LOGO BG
	this.instance_20 = new lib.blueBG();
	this.instance_20.setTransform(285,125,1,1,0,0,0,150,125);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(5).to({_off:false},0).wait(30).to({regX:0,regY:0,x:135,y:-8},0).to({scaleX:0.56,y:-190},11,cjs.Ease.get(1)).wait(299));

	// BG 3
	this.mcGirl3 = new lib.mcGirl3();
	this.mcGirl3.setTransform(80,239.5,1,1,0,0,0,80,239.5);
	this.mcGirl3.alpha = 0;
	this.mcGirl3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcGirl3).wait(219).to({_off:false},0).to({alpha:1},13).wait(113));

	// BG 2
	this.mcGirl2 = new lib.mcGirl2();
	this.mcGirl2.setTransform(80,239.5,1,1,0,0,0,80,239.5);
	this.mcGirl2.alpha = 0;
	this.mcGirl2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcGirl2).wait(129).to({_off:false},0).to({alpha:1},13).wait(203));

	// girl1 mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_25 = new cjs.Graphics().p("A3aS6MAAAgmpMAu1AAAMAAAAmpg");
	var mask_1_graphics_26 = new cjs.Graphics().p("A3aTeMAAAgnDMAu1AAAMAAAAnDg");
	var mask_1_graphics_27 = new cjs.Graphics().p("A3aUJMAAAgoRMAu1AAAMAAAAoRg");
	var mask_1_graphics_28 = new cjs.Graphics().p("A3aVLMAAAgqVMAu1AAAMAAAAqVg");
	var mask_1_graphics_29 = new cjs.Graphics().p("A3aWmMAAAgtLMAu1AAAMAAAAtLg");
	var mask_1_graphics_30 = new cjs.Graphics().p("A3aYcMAAAgw3MAu1AAAMAAAAw3g");
	var mask_1_graphics_31 = new cjs.Graphics().p("A3aasMAAAg1XMAu1AAAMAAAA1Xg");
	var mask_1_graphics_32 = new cjs.Graphics().p("A3adWMAAAg6rMAu1AAAMAAAA6rg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EgXaAgaMAAAhAzMAu1AAAMAAABAzg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgXaAj4MAAAhHvMAu1AAAMAAABHvg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EgXaAnwMAAAhPfMAu1AAAMAAABPfg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgXaAsDMAAAhYFMAu1AAAMAAABYFg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_1_graphics_25,x:150,y:-126.5}).wait(1).to({graphics:mask_1_graphics_26,x:150,y:-125.5}).wait(1).to({graphics:mask_1_graphics_27,x:150,y:-115.7}).wait(1).to({graphics:mask_1_graphics_28,x:150,y:-98.7}).wait(1).to({graphics:mask_1_graphics_29,x:150,y:-74.9}).wait(1).to({graphics:mask_1_graphics_30,x:150,y:-44.3}).wait(1).to({graphics:mask_1_graphics_31,x:150,y:-6.9}).wait(1).to({graphics:mask_1_graphics_32,x:150,y:37.3}).wait(1).to({graphics:mask_1_graphics_33,x:150,y:88.2}).wait(1).to({graphics:mask_1_graphics_34,x:150,y:146}).wait(1).to({graphics:mask_1_graphics_35,x:150,y:210.6}).wait(1).to({graphics:mask_1_graphics_36,x:150,y:281.9}).wait(309));

	// mcGirl1
	this.instance_21 = new lib.DEN_YOUNG_300x250_photo1();
	this.instance_21._off = true;

	this.instance_21.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(25).to({_off:false},0).wait(320));

	// Layer 15
	this.instance_22 = new lib.blueBG();
	this.instance_22.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({_off:true},33).wait(312));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.9,124,303.2,612.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;