(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#999999",
	manifest: [
		{src:"images/_300x250_FR1_BGphoto.jpg", id:"_300x250_FR1_BGphoto"},
		{src:"images/_300x250_FR2_BGphoto.jpg", id:"_300x250_FR2_BGphoto"},
		{src:"images/_300x250_FR3_BGphoto.jpg", id:"_300x250_FR3_BGphoto"}
	]
};



// symbols:



(lib._300x250_FR1_BGphoto = function() {
	this.initialize(img._300x250_FR1_BGphoto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._300x250_FR2_BGphoto = function() {
	this.initialize(img._300x250_FR2_BGphoto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._300x250_FR3_BGphoto = function() {
	this.initialize(img._300x250_FR3_BGphoto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.TEXTFit = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABsBsQgCgUAFgUIAUhcIgaAAIgCgEIAKgMIAVAAIAIgiIAlgZIAEAEIgNA3IApAAIgKAOIgjACIgTBbQgDAMABAFQABAFADgBQAFAAAZgTIAGAIQgLAPgSAMIgSAKQgKAFgHAAQgJgBgEgKgAADBvQgDgJAFgVIAUhTQADgMgDAAQgFAAgSANIgDgJQAQgQASgLQARgKAJAAQAHAAACAJQABAIgEAQIgWBYQgDANAEgBQAHAAARgPIAGAIQgXAWgLAHQgRALgJAAQgIAAgDgIgAjSByIADgLQATgCAGgGQAFgFAEgWIAciMQAEgWgEgGQgDgEgVgCIACgMICjAAIgGA4IgMABQgCgZgEgHQgDgGgHgDQgHgBgSAAIgXAAQgIAAgDACQgDACgCAKIgPBPIAhAAQAXAAAGgEQAGgEAIgSIALAAIgOBFIgMAAQAAgUgEgEQgFgFgXAAIggAAIgPBRQAAAIADACQAEAFAZADIgDALgAAqhOQgFgFAAgJQAAgJAHgIQAHgIALgBQAIABAFAGQAFAFAAAJQAAAJgHAIQgHAIgKgBQgJABgFgGg");
	this.shape.setTransform(23.4,16.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51,40);


(lib.TEXT_week = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACNA5IgVg8IAAAAIgQAZIAAAjIgMAAIAAhxIAMAAIAAA5IABAAIAgg5IANAAIgWAoIAbBJgAAWA5IAAhxIA1AAIAAAKIgoAAIAAAoIAeAAIAAAIIgeAAIAAAtIAqAAIAAAKgAgvA5IAAhxIAzAAIAAAKIgmAAIAAAoIAeAAIAAAIIgeAAIAAAtIAoAAIAAAKgAhXA5IgShYIAAAAIgTBYIgLAAIgThxIAMAAIAOBYIARhYIAKAAIASBYIABAAIANhYIALAAIgSBxg");
	this.shape.setTransform(17.6,7.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43.3,19.2);


(lib.TEXT_Style = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQCZQAagRASgQIABgBQASgQAOgSQAAgUgEgkQgDgggEgYQgEgRgEAAQgFAAgNASIgHgJQAKgQAMgLQANgMAKAAQAHAAAFAKQAFAKADAXQAEAjADArIABAAQARgbAJgQIAKgUQAEgLAAgJQgBgGgEgLQgBgGACgFQAGgKALAAQAHAAAEAFQAFAGABAKQAAAHgDAJQgEAKgGALQgnA6gTAbIgjAzQgPATgLAMIgpALgAkXBQIgSgFQgPgGgHgHIgBg1IALgBQAGAbAIAMQAIAKAJAGQAKAGANAAQAJAAAIgDQAHgDAEgFQAFgFADgIQADgHgBgIQAAgNgHgLQgGgIgPgMIgKgHQgTgOgIgMQgGgIgDgJQgEgJAAgKQAAgOAFgMQAGgMAKgIQAJgJANgEQAOgFAPAAQAUAAARAHIAOAFIgCAzIgKABIgEgSQgDgKgEgGQgFgIgIgEQgHgFgLAAQgIAAgHADQgGADgFAGQgIAKgBAPQABAMAHALQAHAIAOALIAbAVQAJAHAFAHQAFAIADAJQAEAIgBAKQAAAQgFAMQgHANgLAIQgLAJgOAFQgPAEgQAAQgKAAgKgCgADdBPQgHgCgFgGQgHgGgDgJQgDgLgBgOQABgMACgMQADgKAEgMQAGgMAHgJQAIgKAKgIQAKgIAOgGQAPgGANAAQAHAAAHACQAHACADAEQAJAIAAAMQAAAMgJALQgIAJgOAIQgMAGgRAFIgcAIIgBAJQABAPAFAJQADAFAFADQAFADAGAAQAKAAAOgHQAOgHALgMIAGAKQgLALgKAIQgLAIgKAFQgIAEgKACQgIACgIAAQgIAAgHgCgAEGg4QgIAFgHANQgKAXgDAQQAQgDAKgFQAKgFAGgFQAHgGACgGQADgFAAgHQAAgJgEgFQgEgFgGAAQgHAAgFAEgABuBJQgDgKAFgZIAgicQADgNgCgDQgCgEgLAAIgJgBIABgKQATgBATgGIAUgFQAFAAgCAMIgnC9QgDAMAEAAQAHAAAQgPIAGAJQgWAUgKAGQgPAJgKAAQgHAAgCgIgAiRBHQgCgTAEgSIAThXIgYAAIgCgEIAJgMIAVAAIAHgfIAjgYIAEADIgMA0IAmAAIgKAOIggACIgTBWQgCALABAFQAAAEADAAQAFAAAYgSIAFAIQgKANgSAMIgQAKQgJADgHAAQgJAAgDgKg");
	this.shape.setTransform(35.4,18.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74,39.8);


(lib.TEXT_seven = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AicA4QgGgCgDgEQgEgFgCgFQgCgHAAgHIAMAAIABAJQABAFACACQACADAEACQAEABAFAAIAHgBIAFgEIAEgGIABgIQAAgEgDgFIgFgHQgEgEgMgIIgJgFIgHgHQgDgEgCgFQgCgFAAgGQAAgGACgFQACgFADgEQAFgDAEgCQAGgCAGAAQAGAAAGACQAEACAEAEQAEAEACAGQACAGABAHIgMAAIgCgIIgDgGQgCgDgDgCQgEgBgEAAIgGABIgGADQgEAEAAAHQAAAFACAEIAGAHIAPAMQAMAGAEAFQAEAFACAFQACAGAAAGQAAAHgCAGQgCAFgEAEQgEAEgGACQgFACgHAAQgGAAgGgDgAChA5IgkhiIAAAAIAABiIgNAAIAAhxIATAAIAeBTIABAAIAAhTIAMAAIAABxgAArA5IAAhxIA0AAIAAAKIgoAAIAAAoIAeAAIAAAIIgeAAIAAAtIArAAIAAAKgAgHA5IgbhxIAMAAIAUBZIAThZIAMAAIgbBxgAhhA5IAAhxIA1AAIAAAKIgpAAIAAAoIAeAAIAAAIIgeAAIAAAtIArAAIAAAKg");
	this.shape.setTransform(20.1,7.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.4,19.2);


(lib.TEXT_perfect = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADfBcQgJgDgGgHQgGgHgDgIQgDgJAAgKIAAheQAAgLADgIQADgJAGgHQAGgGAJgEQAKgEAMAAQAMAAAJAFQAJADAGAHQAGAIADAJQADAJAAAKIAAAPIggAAIAAgPQAAgLgFgHQgEgEgHAAQgJAAgEAEQgEAFAAALIAABdQAAALAEAFQAEAFAJAAQAJAAADgFQAEgFAAgJIAAgXIAgAAIAAAWQAAAKgDAJQgDAIgGAHQgGAHgJADQgJAEgMAAQgMAAgKgEgAFZBeIAAieIggAAIAAgcIBfAAIAAAcIgfAAIAACegABRBeIAAi6IBWAAIAAAcIg2AAIAAAwIAqAAIAAAaIgqAAIAAA3IA6AAIAAAdgAggBeIAAi6IBYAAIAAAcIg4AAIAAAwIApAAIAAAaIgpAAIAABUgAhaBeIgXhOIgRABIAABNIggAAIAAi6IAtAAQAOgBAKAEQAKADAHAGQAHAHADAKQAEALAAAPQAAALgCAIQgCAJgEAFQgDAEgEADQgDADgFACIAbBWgAiCgIIAMAAQAGAAAFgBQAEgCADgDQADgEABgFIABgOIgBgOQgBgFgDgEQgDgDgEgBIgLgBIgMAAgAkVBeIAAi6IBWAAIAAAcIg2AAIAAAwIAqAAIAAAaIgqAAIAAA3IA6AAIAAAdgAmXBeIAAi6IAuAAQAPgBALAEQALADAHAGQAHAHAEAKQADALAAAPQAAAPgDALQgEAKgHAFQgHAGgLAEQgLADgPAAIgOAAIAABNgAl3gIIANAAQAIAAAFgBQAFgCADgDQADgDACgGQABgGAAgIQAAgIgBgGQgCgFgDgEQgDgDgFgBIgNgBIgNAAg");
	this.shape.setTransform(44.4,11.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,94,28.1);


(lib.TEXT_modernSkinny = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+AuQgEgCgDgEQgDgDgCgFIgCgLIAKAAIABAHIADAGIAFAEIAGABIAGgBIAEgDIADgFIABgGQAAgEgBgEIgFgGIgNgKIgHgDIgGgGIgEgHQgCgEAAgFQAAgFACgEQACgEADgDQADgDAEgBQAEgCAFAAQAFAAAEACQAEABADAEQADADACAFIACALIgJAAIgBgHIgDgGIgEgDIgHgBIgFABIgEACQgDAEAAAFIABAHIAEAGIANAJQAKAFADAFQADADACAFQABAEAAAGQAAAFgBAFQgCAEgDADQgDADgEACQgFACgGAAQgFAAgFgCgAkXAtQgFgDgDgFQgCgEgDgLQgCgHAAgPQAAgHACgOQABgGAEgJQADgGAFgCQAFgDAGAAQAGAAAFADQAFACADAGQAFAJABAGQACAOAAAHQgBAPgBAHQgDALgDAEQgDAFgFADQgFADgGAAQgGAAgFgDgAkSglQgDACgCAFQgDAEgBAIQgBAIAAAKQAAALABAIQABAHADAFQACAEADACQADACADAAQAEAAADgCQADgCACgEQACgFABgHQACgIAAgLQAAgKgCgIQgBgIgCgEQgCgFgDgCQgDgBgEAAQgDAAgDABgAFVAuIAAgoIgWg0IALAAIAQAqIAQgqIALAAIgWA0IAAAogAErAuIgdhPIAABPIgKAAIAAhcIAPAAIAZBEIAAhEIAKAAIAABcgADqAuIgdhPIAABPIgKAAIAAhcIAPAAIAZBEIAAhEIAKAAIAABcgACoAuIAAhcIAKAAIAABcgACVAuIgSgwIAAAAIgMATIAAAdIgKAAIAAhcIAKAAIAAAuIAaguIALAAIgSAhIAVA7gAgBAuIgdhPIAABPIgKAAIAAhcIAPAAIAZBEIAAhEIAIAAIAABcgAhCAuIgPgsIgNAAIAAAsIgKAAIAAhcIAWAAQAGAAAFACQAFACADADQADADACAEQACAFAAAGIgBAHIgCAHIgFAFIgHACIAQAugAhegEIAJAAQAFAAAEgCQAEgBACgCQACgCABgDIABgHIgBgHQgBgDgCgCQgCgCgEgBIgJgBIgJAAgAiiAuIAAhcIArAAIAAAJIghAAIAAAgIAZAAIAAAGIgZAAIAAAlIAjAAIAAAIgAjjAuIAAhcIASAAQAHAAAGADIAGADIAEAEIAEAHIACAIQACANAAAIQAAAQgCAGIgCAIIgEAGIgEAFIgGADQgGACgHAAgAjZAmIAGAAQAGAAAEgCQAEgBADgEQADgFACgHQABgIAAgLQAAgKgBgIQgCgIgDgEQgDgEgEgCIgKgBIgGAAgAk8AuIAAhUIgBAAIgTBUIgHAAIgThUIgBAAIAABUIgJAAIAAhcIAQAAIARBFIAQhFIAQAAIAABcg");
	this.shape.setTransform(40.1,6.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,15.6);


(lib.TEXT_jeans = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD0BxQgLgFgIgJQgHgJgFgLQgEgMAAgNIAlgFQACARAGAJQAGAJAKgBQAKAAAHgEQAGgHAAgKQAAgIgDgIQgEgGgFgHQgGgGgWgTIgPgMQgIgHgFgIQgGgIgDgKQgEgLAAgMQAAgNAFgLQAEgLAHgHQAIgHALgFQAMgDAOAAQANAAAKAEQAJAEAHAIQAHAHAFAKQADALABALIglAFQgBgNgHgIQgFgEgIAAQgJAAgGAFQgFAGAAALQAAAHAEAHQACAGAHAGIAbAaQAUAQAIALQAGAJADAJQAEALAAALQAAAOgFALQgFALgHAIQgJAHgMAFQgLADgOAAQgNAAgLgFgAlKB2IAAgjIAIAAQALABAGgFQAEgEAAgLIAAiyIAnAAIAAC3QAAAMgCAIQgDAJgGAHQgGAHgLADQgLADgQAAgACSBzIgziOIgBAAIAACOIgkAAIAAjlIAlAAIAxCCIABAAIAAiCIAkAAIAADlgAgBBzIgGgzIgsAAIgIAzIglAAIAqjlIAxAAIApDlgAgOAdIgPhhIgBAAIgQBhIAgAAgAjfBzIAAjlIBqAAIAAAjIhDAAIAAA7IA0AAIAAAgIg0AAIAABFIBIAAIAAAig");
	this.shape.setTransform(35.3,13.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.3,63);


(lib.TEXT_days = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABgA4QgFgCgEgEQgEgFgCgFQgCgHAAgHIALAAIABAJQACAFADACQACADADACQAEABAEAAIAHgBIAGgEIADgGIABgIQAAgEgCgFIgFgHQgDgEgNgIIgIgFIgIgHQgDgEgCgFQgCgFAAgGQAAgGACgFQACgFADgEQAFgDAEgCQAFgCAHAAQAGAAAGACQAFACADAEQAEAEACAGQACAGAAAHIgLAAIgBgIIgEgGQgCgDgDgCQgEgBgEAAIgHABIgEADQgFAEAAAHQAAAFACAEIAFAHIARAMQALAGAFAFQADAFABAFQACAGABAGQgBAHgCAGQgBAFgEAEQgEAEgFACQgGACgHAAQgHAAgFgDgAAgA5IAAgxIgbhAIANAAIAUAyIATgyIANAAIgaBAIAAAxgAgKA5IgHgiIgdAAIgHAiIgMAAIAZhxIARAAIAXBxgAgTAMIgMg8IgOA8IAaAAgAiIA5IAAhxIAVAAQAJAAAHADIAHADIAFAGIAFAIIADAKQADAQAAAKQgBAUgCAHIgDAKIgFAIIgFAGIgHADQgHADgJAAgAh8AvIAHAAQAHAAAFgCQAGgCADgFQAEgFACgJQABgKAAgOQAAgNgBgKQgCgJgEgFQgDgFgGgCQgFgCgHAAIgHAAg");
	this.shape.setTransform(16.9,7.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37.7,19.2);


(lib.TEXT_curvySkinny = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUAuQgEgCgEgEQgDgDgBgFIgCgLIAJAAIABAHIADAGIAFAEIAHABIAFgBIAFgDIADgFIABgGQAAgEgCgEIgEgGIgNgKIgHgDIgGgGIgEgHQgCgEAAgFQAAgFACgEQABgEADgDQADgDAEgBQAFgCAFAAQAFAAAEACQAEABADAEQADADACAFIACALIgKAAIgBgHIgCgGIgFgDIgGgBIgFABIgEACQgEAEAAAFIACAHIAEAGIANAJQAJAFAEAFQADADABAFQACAEAAAGQAAAFgCAFQgBAEgDADQgEADgEACQgFACgFAAQgGAAgEgCgAj5AuQgEgCgDgEQgDgDgBgFQgCgFAAgFIAAhEIAKAAIAABDQABAJACAEIAEAEIAHABIAHgBIAEgEQACgEABgJIAAhDIAKAAIAABEQAAAFgBAFQgCAFgCADQgDAEgFACQgFACgGAAQgGAAgFgCgAk5AtQgGgDgDgFQgCgEgDgLQgCgGAAgQQAAgIACgNQABgGAEgJQADgGAGgCQAEgDAHAAQAFAAAEACQAFACADADQADAEABAGQACAFABAIIgKAAIgCgKQgBgEgCgCIgEgEIgFgBQgFAAgDACQgDACgCAFQgCAEgBAIIgBARIABASQABAHACAFQACAFADACQADACAFAAIAGgBQADgCACgCIADgIIABgLIAKAAQAAAIgCAGQgBAGgEAEQgDAEgEACQgFADgGAAQgHAAgEgDgAErAuIAAgoIgWg0IALAAIAQAqIAQgqIAKAAIgVA0IAAAogAEBAuIgehPIAABPIgKAAIAAhcIAQAAIAYBEIAAhEIAKAAIAABcgADAAuIgehPIAABPIgKAAIAAhcIAQAAIAYBEIAAhEIAKAAIAABcgAB+AuIAAhcIAKAAIAABcgABqAuIgRgwIgBAAIgMATIAAAdIgKAAIAAhcIAKAAIAAAuIAbguIALAAIgTAhIAWA7gAg7AuIAAgoIgWg0IALAAIAQAqIAQgqIALAAIgWA0IAAAogAh0AuIgWhcIAKAAIARBJIAQhJIAKAAIgWBcgAieAuIgPgsIgOAAIAAAsIgKAAIAAhcIAXAAQAGAAAEACQAFACADADQAEADACAEQACAFAAAGIgBAHIgDAHIgFAFIgGACIAPAugAi7gEIAJAAQAGAAADgCQAEgBACgCQADgCABgDIABgHIgBgHQgBgDgDgCQgCgCgEgBIgJgBIgJAAg");
	this.shape.setTransform(35.7,6.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75.2,15.6);


(lib.TEXT_a = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVA5IgHgiIgbAAIgHAiIgMAAIAZhxIAPAAIAZBxgAAMAMIgMg8IgMA8IAYAAg");
	this.shape.setTransform(5.6,7.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.6,19.2);


(lib.findYourFitCTA = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACqAvQAAgDAEgDIADAAQAEADAEAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABgBQABgBAEgXIAGgiIgJAAIAAgBIADgDIAHAAQABgNAKgKQAKgHAJAAQANAAAAAIQAAAGgGABQgFABgBgCQgBgJgFAAQgHAAgEAZIAGAAQANgBAHgBQAEAAgCAJIgHAZQAAAFABAAQABAAAGgFIACADQgKAMgKAAQgGAAACgLIAHgXQABgGgBgBQgBgCgEAAIgKAAQgEATgDAMQgGAXgLAJQgHAGgGAAQgHAAAAgFgAg/AyQARgMAHgKQABgQgFgTQAAgFgCAAQgCAAgEAFIgCgDQAIgNAIAAQAFAAADAPIACAXQAMgQAAgJIgCgGQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQACgDAEAAQAGAAAAAHQAAAGgFAHIgSAZQgLAPgKAMIgOADgAkgAvQAAgEAEgCQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAEADAEAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBQACgDADgVIAGgiIgJAAIAAgBIAEgDIAGAAQADgOAJgJQAJgHAKAAQAMAAAAAIQAAAGgFABQgGABAAgCQgCgJgFAAQgHAAgEAZIAGAAQANgBAHgBQAEAAgBAJIgHAZQgCAFADAAIAHgFIABADQgKAMgKAAQgGAAADgLIAGgXIAAgHQgBgCgEAAIgKAAIgHAfQgFAXgMAJQgGAGgGAAQgHAAAAgFgAEBALIAGgbIgIAAIAAgBIADgEIAGAAIADgKIANgJIABABIgDASIALAAIgDAEIgKABIgGAaQgBAGACAAQACABAHgGIABADQgDAEgGAEQgGAFgFgBQgHAAADgPgAB3AZIAIghQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQgDgBgEAEIgCgCQAMgMAHAAQAFAAgDAMIgBAGIAAAAQAKgSAHAAQADAAACADQACADgDAEIgEAEQAAAAAAAAQgBABAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgCAAgDADQgFAIgBADIgEAVQgGAAgGACgABYAPIABgHIAAAAQgIALgJAFQgDACgFAAQgHAAADgPIAFgTQABgFgBAAIgHAEIgBgDQAMgLAHAAQAFAAgDALIgFAVQgCAIADgBQADAAAGgGIAIgKIAFgUIAMgDIABAAIgIAiIAAAFQACAAAFgFIACAEQgMALgHAAQgGAAADgLgAAAAIQAAgSAQgKQAIgDAGAAQARAAAAASQAAAPgMAKQgJAGgKAAQgQAAAAgSgAAXgSQgDABgCAHQgEAJAAAKQAAAMAGABIADgBQAEgBADgIQADgJAAgJQAAgMgHAAgAhvAQIABgIIAAAAQgGAIgHAGQgFAEgFAAQgJAAAAgNQAAgQAMgLQAKgJAKAAIAHABIACgPQAAgBABgBQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAgCgFAAIgBAAIAAgDIAVgEQAAAAABAAQAAAAAAABQAAAAAAABQAAABgBABIgMA7QAAABAAAAQAAABAAABQAAAAAAABQAAAAABAAIAGgFIACAEQgKALgJAAQgFAAACgKgAh1gRQgFAEgDAJQgDAGAAAIQAAAGADAAQAHAAAKgQIADgPQgDgDgFAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAgAitAPIAFgWQACgGgDAAQgCAAgGAGQgGAHgDADIgFAVQgFAAgHACIgBgBIAIgiIAAgEQgDAAgEAEIgCgDQANgLAGAAQAGAAgEANIgBAGIABAAQAHgKAJgGQAEgDAFAAQAIAAgEARIgFASQAAABAAABQAAABAAAAQAAABAAAAQAAAAABAAIAHgEIABADQgLALgIAAQgGAAADgLg");
	this.shape.setTransform(29,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1001C").s().p("AgmgoIBNAoIhNApg");
	this.shape_1.setTransform(66.7,4.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.7,10.5);


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


(lib.mcESlogo = function() {
	this.initialize();

	// ESlogo.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(262.6,256.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.7,121.9,566.6,269);


(lib.ClipGroup = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0mLyIAA3jMApNAAAIAAXjg");
	mask.setTransform(131.9,75.4);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C41230").s().p("AomC3IAAlsIRNAAIAAFsgAE0BLQAaAZA0gBQA4ABAcgXQAVgQABgZQAAghgmgMQgJgDg8gKQgbgGAAgJQAAgQAiAAQAMABAMAGQAFACADAFQACAEAAAEIA7AAQABgRgVgRQgdgXgzgBQgpAAgbARQgdASAAAfQAAAcAiAOQATAIAuAGQAPADAFACQAJADAAAJQAAANgeAAQgMAAgIgDQgGgDgGgFQgEgGAAgEIg7AAQAAAQARARgAkWhAQghAZAAAsQAAArAhAaQAfAZA0AAQAqAAAagMQAcgNAOggIg8AAQgOASgbAAQgTAAgNgLQgOgMAAgRICYAAIAAgNQAAglgdgbQggggg2AAQg1AAgeAZgAgFBfIBAAAIBZiyIg1AAIg0BrIgBADIg5huIhYAAgACcBeIBLAAIAAiyIhLAAgAnoBeICvAAIAAgxIheAAIAAiAIhRAAIAAAoIAJgBQAKAAAJAEQAIAEAHAGQAIAIADAIQAEAHAAAKQAAAKgEAJQgDAHgIAJQgIAHgHADQgJADgKAAIgJgBgAnoArIAJABQAIAAAHgDQAJgEAFgFQAEgFAEgIQACgIAAgIQAAgHgCgHQgDgIgFgGQgGgFgIgDQgGgDgJAAIgJABIAAAMIAMAAQAKAAAFADQAEAEAAAJQAAAHgDACQgFAEgGAAIAQAaIgKAAIgPgaIgIAAgAnoAAIAOAAIAFAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAAAAAQACgCAAgEIgBgEIgDgDIgEgBIgPgBgAD1hAIAVAAIgLAbIAKAAIAWgZIAAgmIgqAAgAjogOQABgPAIgKQALgLAPAAQASAAALAKQAKAJAAARg");
	this.shape.setTransform(140.9,94.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#102C52").s().p("AghAiQgOgOAAgUQAAgSAOgPQAOgOATAAIAAAAQAUAAAPAOQANAPAAASQAAAUgNAOQgPAOgUAAQgSAAgPgOgAgdgdQgNAMAAARQAAASANAMQAMANARAAQASAAANgNQAMgNAAgRQAAgRgMgMQgNgNgSgBIAAAAQgRABgMANgAAMAYIgMgSIAAAAIgIAAIAAASIgKAAIAAgyIASAAIACAAQAKABAGAFQAFAFAAAGIAAAAQAAAJgNAFIAOATgAgIAAIAIAAIACAAQALAAgBgJQABgIgLAAIgCAAIgIAAg");
	this.shape_1.setTransform(51.8,45.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AE1FoQgRgQAAgRIA6AAQAAAFAFAFQAFAFAGADQAIADAMAAQAeAAAAgNQAAgIgIgEQgGgCgPgDQgugGgTgIQgigOAAgeQAAgfAegSQAbgQAoAAQA0AAAcAXQAVARAAARIg7AAQAAgDgCgFQgEgFgFgCQgMgGgMAAQgiAAAAAPQAAAKAbAFQA8AKAJADQAmAOAAAhQAAAZgWARQgcAWg4AAQgzAAgagZgAkWFnQghgaAAgrQAAguAhgZQAegYA1AAQA2AAAgAfQAdAbAAAnIAAANIiXAAQAAARANAMQANAMAUAAQAbAAANgTIA9AAQgOAggdAOQgaAMgqAAQgzAAgggagAjeD0QgJAKAAAPIBJAAQAAgRgKgJQgKgKgSAAQgQAAgKALgAgFF8Ihhi0IBYAAIA4BwIABgDIA0htIA1AAIhZC0gACdF7IAAi0IBKAAIAAC0gAnoF7IAAgsIAJABQAKAAAJgDQAIgDAHgHQAIgIADgIQAEgIAAgLQAAgLgEgIQgDgIgIgIQgHgGgIgEQgJgDgKAAIgJABIAAgpIBRAAIAACCIBfAAIAAAxgAnoFIIAAgkIAIAAIAQAZIAJAAIgQgaQAGAAAFgEQAEgDAAgIQAAgIgFgEQgFgEgKAAIgMAAIAAgMIAJgBQAJAAAHADQAIAEAFAFQAFAFADAIQADAIAAAIQAAAIgDAIQgDAIgFAFQgFAFgIAEQgIADgIAAIgJgBgAnoEdIAAgSIAPAAIAEABIADADIABAFQAAADgBACQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgFACgAEAD2IAKgaIgUAAIAAgkIAqAAIAAAmIgXAYgAACAjQAAgUAPAAQAQAAAAAUQAAAUgQAAQgPAAAAgUgAAJAjQAAANAIAAQAJAAAAgNQAAgNgJAAQgIAAAAANgABKA2IAAgYIgIAYIgFAAIgHgYIAAAYIgHAAIAAgmIAJAAIAIAZIAIgZIAIAAIAAAmgAgPA2IgHgQIgHAAIAAAQIgGAAIAAgmIANAAQANAAAAALQAAAHgHADIAIARgAgdAgIAGAAQAHAAAAgFQAAgFgHAAIgGAAgAhIA2IAAgmIAXAAIAAAGIgQAAIAAAJIAMAAIAAAGIgMAAIAAARgABmAnQgEAAAAgEQAAgEAEAAIB1AAQADAAAAAEQAAAEgDAAgAjZAnQgEAAAAgEQAAgEAEAAIB6AAQAEAAAAAEQAAAEgEAAgAM/glQgFAAgFgDQgFgDgCgEIiHjpQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAFIAADmQAAAEgEAEQgDADgFAAIgqAAQgEAAgDgDQgEgEAAgEIAAlFQAAgEAEgDQADgEAEAAIAyAAQAFAAAFADQAFADACAEICFDqQADAEACgBQABAAAAgFIAAjnQAAgEAEgDQADgEAEAAIAqAAQAFAAADAEQADADAAAEIAAFFQAAAEgDAEQgDADgFAAgAF9glQgFAAgDgDQgDgEAAgEIAAlFQAAgEADgDQADgEAFAAICkAAQAFAAADAEQADADAAAEIAAAoQAAAFgDADQgDAEgFAAIhkAAQgEAAgDADQgEADAAAFIAAA5QAAAFAEADQADADAEAAIBfAAQAEAAAEAEQADADAAAFIAAAoQAAAEgDAEQgEADgEAAIhfAAQgEAAgDADQgEADAAAFIAAA5QAAAFAEADQADAEAEAAIBkAAQAFAAADADQADADAAAFIAAAoQAAAEgDAEQgDADgFAAgAB+glQgFAAgDgDQgEgEAAgEIAAggQAAgMAGgKIB5jSQACgDgCgEQgCgCgEAAIhmAAQgFAAgDgEQgDgDAAgFIAAgoQAAgEADgDQADgEAFAAICyAAQAFAAADAEQADADAAAEIAAAkQAAAMgFAJIh4DPQgCAEABADQACADAEAAIB2AAQAEAAAEADQADADAAAFIAAAoQAAAEgDAEQgEADgEAAgAASglQgFAAgDgDQgDgEAAgEIAAlFQAAgEADgDQADgEAFAAIApAAQAFAAAEAEQADADAAAEIAAFFQAAAEgDAEQgEADgFAAgAhqglQgFAAgFgDQgFgDgCgEIiGjpQgBgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgCAAAAAFIAADmQAAAEgDAEQgEADgEAAIgqAAQgFAAgDgDQgEgEAAgEIAAlFQAAgEAEgDQADgEAFAAIAxAAQAFAAAFADQAFADACAEICGDqQACAEACgBQACAAAAgFIAAjnQAAgEADgDQADgEAFAAIApAAQAFAAAEAEQADADAAAEIAAFFQAAAEgDAEQgEADgFAAgAorglQgFAAgEgDQgDgEAAgEIAAlFQAAgEADgDQAEgEAFAAICjAAQAFAAADAEQAEADAAAEIAAAoQAAAFgEADQgDAEgFAAIhjAAQgFAAgDADQgEADAAAFIAAA5QAAAFAEADQADADAFAAIBeAAQAFAAADAEQADADAAAFIAAAoQAAAEgDAEQgDADgFAAIheAAQgFAAgDADQgEADAAAFIAAA5QAAAFAEADQADAEAFAAIBjAAQAFAAADADQAEADAAAFIAAAoQAAAEgEAEQgDADgFAAgAtuglQgEAAgEgDQgDgEAAgEIAAhyQAUAAAPgOQANgOAAgUQAAgUgNgOQgPgPgUAAIAAAAIAAhyQAAgEADgDQAEgEAEAAIBJABIA0AHQA5ALAZAWQAcAXAQAlQAQAkAAAmQAAAlgQAjQgQAkgcAYQgcAZgoAIQgcAHgwAAgAs5k2IAADHQAAAFADADQACAEADAAQAiAAATgEQAbgFAUgPQAUgPALgXQALgWAAgaQAAgbgMgZQgNgYgWgQQgTgNgcgFQgSgCghAAQgFAAAAALgAt5jMIABAAIAMASIALAAIgNgTQAMgEAAgMIAAAAQAAgGgFgFQgFgFgKAAIgDAAIAAgRIAAAAQATAAAMANQAMAMAAATQAAASgMAMQgNANgSAAgAt5jUIAAgRIACAAQALAAAAAJQAAAIgLAAg");
	this.shape_2.setTransform(140.8,66.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(46.9,27.8,183,85.4);


(lib.mcGirl3 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib._300x250_FR3_BGphoto();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,479);


(lib.mcGirl2 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib._300x250_FR2_BGphoto();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,479);


(lib.mcDenizenLogo = function() {
	this.initialize();

	// DenizenLogo.ai
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(137.3,74.8,1.068,1.068,0,0,0,131.9,75.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-5.7,281.7,161);


// stage content:
(lib.DENIZEN_YW_300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// stroke
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAAAAnDMAu3AAAMAAAgnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(270));

	// TEXT Jeans
	this.instance = new lib.TEXT_jeans();
	this.instance.setTransform(221.6,142.3,0.215,0.215,0,0,0,35.3,13.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(233).to({_off:false},0).to({regX:35.2,scaleX:1.1,scaleY:1.1,alpha:1},8,cjs.Ease.get(-1)).to({scaleX:0.93,scaleY:0.93},2).to({scaleX:1,scaleY:1},2).wait(25));

	// TEXT_week
	this.instance_1 = new lib.TEXT_week();
	this.instance_1.setTransform(265.7,117.8,1,1,0,0,0,17.6,7.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(227).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(-1)).wait(36));

	// TEXT_a
	this.instance_2 = new lib.TEXT_a();
	this.instance_2.setTransform(241.5,117.8,1,1,0,0,0,5.5,7.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(221).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(-1)).wait(42));

	// TEXT_days
	this.instance_3 = new lib.TEXT_days();
	this.instance_3.setTransform(219.9,117.8,1,1,0,0,0,16.9,7.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(217).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(-1)).wait(46));

	// TEXT_seven
	this.instance_4 = new lib.TEXT_seven();
	this.instance_4.setTransform(181.7,117.8,1,1,0,0,0,20.1,7.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(211).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(-1)).wait(52));

	// TEXT Fit
	this.instance_5 = new lib.TEXTFit();
	this.instance_5.setTransform(220.3,131.4,0.333,0.333,0,0,0,23.4,16.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(134).to({_off:false},0).to({regY:16.7,scaleX:1.18,scaleY:1.18,x:220.4,alpha:1},9,cjs.Ease.get(-1)).to({regX:23.3,scaleX:0.87,scaleY:0.87,x:220.3},2).to({regX:23.4,scaleX:1,scaleY:1,x:220.4},2).wait(46).to({alpha:0},7).wait(70));

	// TEXT Curvy Skinny
	this.instance_6 = new lib.TEXT_curvySkinny();
	this.instance_6.setTransform(99.4,200,1,1,0,0,0,37.6,7.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(129).to({_off:false},0).to({x:119.4,alpha:1},26,cjs.Ease.get(1)).wait(38).to({y:210,alpha:0},7,cjs.Ease.get(-1)).wait(70));

	// mcDenizenLogo
	this.mcDenizenLogo = new lib.mcDenizenLogo();
	this.mcDenizenLogo.setTransform(80.4,562.6,0.609,0.609,0,0,0,131.9,75.5);

	this.timeline.addTween(cjs.Tween.get(this.mcDenizenLogo).wait(32).to({regX:144.2,regY:69.5,x:220.9,y:284.9},0).to({y:36.9},12,cjs.Ease.get(0.77)).to({y:44.9},2).to({y:40.9},2).wait(222));

	// find Your Fit MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_258 = new cjs.Graphics().p("ANfS0IAAjDIA1AAIAADDg");
	var mask_graphics_259 = new cjs.Graphics().p("AMdS0IAAjDIC5AAIAADDg");
	var mask_graphics_260 = new cjs.Graphics().p("ALhS0IAAjDIExAAIAADDg");
	var mask_graphics_261 = new cjs.Graphics().p("AKrS0IAAjDIGdAAIAADDg");
	var mask_graphics_262 = new cjs.Graphics().p("AJ7S0IAAjDIH8AAIAADDg");
	var mask_graphics_263 = new cjs.Graphics().p("AJSS0IAAjDIJOAAIAADDg");
	var mask_graphics_264 = new cjs.Graphics().p("AIvS0IAAjDIKUAAIAADDg");
	var mask_graphics_265 = new cjs.Graphics().p("AITS0IAAjDILMAAIAADDg");
	var mask_graphics_266 = new cjs.Graphics().p("AH9S0IAAjDIL5AAIAADDg");
	var mask_graphics_267 = new cjs.Graphics().p("AHtS0IAAjDIMYAAIAADDg");
	var mask_graphics_268 = new cjs.Graphics().p("AHkS0IAAjDIMrAAIAADDg");
	var mask_graphics_269 = new cjs.Graphics().p("AHgS0IAAjDIMyAAIAADDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(258).to({graphics:mask_graphics_258,x:91.6,y:120.4}).wait(1).to({graphics:mask_graphics_259,x:98.2,y:120.4}).wait(1).to({graphics:mask_graphics_260,x:104.2,y:120.4}).wait(1).to({graphics:mask_graphics_261,x:109.6,y:120.4}).wait(1).to({graphics:mask_graphics_262,x:114.4,y:120.4}).wait(1).to({graphics:mask_graphics_263,x:118.5,y:120.4}).wait(1).to({graphics:mask_graphics_264,x:122,y:120.4}).wait(1).to({graphics:mask_graphics_265,x:124.8,y:120.4}).wait(1).to({graphics:mask_graphics_266,x:127,y:120.4}).wait(1).to({graphics:mask_graphics_267,x:128.6,y:120.4}).wait(1).to({graphics:mask_graphics_268,x:129.5,y:120.4}).wait(1).to({graphics:mask_graphics_269,x:129.9,y:120.4}).wait(1));

	// findYourFit.ai
	this.instance_7 = new lib.findYourFitCTA();
	this.instance_7.setTransform(219.4,233.3,1,1,0,0,0,35.3,5.2);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(258).to({_off:false},0).wait(12));

	// target logo
	this.mcTargetLogo = new lib.mcTargetLogo();
	this.mcTargetLogo.setTransform(217.8,210.5,0.2,0.2,0,0,0,66,13);
	this.mcTargetLogo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTargetLogo).wait(249).to({_off:false},0).to({regX:66.1,regY:13.1,scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},3).wait(9));

	// essential Stretch
	this.mcESlogo = new lib.mcESlogo();
	this.mcESlogo.setTransform(217,272.6,0.16,0.16,0,0,0,231,110);
	this.mcESlogo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcESlogo).wait(59).to({_off:false},0).to({y:187.6},11,cjs.Ease.get(1)).to({y:189.6},3).wait(172).to({regX:230.5,regY:109.5,scaleX:0.1,scaleY:0.1,x:216.5,y:161.2},8,cjs.Ease.get(1)).to({regX:230.7,regY:109.9,scaleX:0.11,scaleY:0.11,y:163.3},3).wait(14));

	// TEXT Modern Skinny
	this.instance_8 = new lib.TEXT_modernSkinny();
	this.instance_8.setTransform(99.5,194.1,1,1,0,0,0,41,7.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(32).to({_off:false},0).to({x:120,alpha:1},34,cjs.Ease.get(1)).wait(56).to({y:204.1,alpha:0},7,cjs.Ease.get(-1)).wait(141));

	// TEXT Style
	this.instance_9 = new lib.TEXT_Style();
	this.instance_9.setTransform(224,135.1,0.114,0.114,0,0,0,37,19.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50).to({_off:false},0).to({regY:19.9,scaleX:1.09,scaleY:1.09,y:135.2,alpha:1},9,cjs.Ease.get(-1)).to({regY:19.8,scaleX:0.93,scaleY:0.93,y:135.1},2).to({regY:19.9,scaleX:1,scaleY:1,y:135.2},2).wait(59).to({alpha:0},7,cjs.Ease.get(-1)).wait(141));

	// TEXT PERFECT
	this.instance_10 = new lib.TEXT_perfect();
	this.instance_10.setTransform(222.4,102.4,0.114,0.114,0,0,0,44.3,11.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(41).to({_off:false},0).to({regX:44.4,regY:11.3,scaleX:1.12,scaleY:1.12,x:222.1,y:102,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.98,scaleY:0.98,x:222.4,y:102.4},2).to({scaleX:1,scaleY:1,y:102.3},2).wait(150).to({scaleX:1.22,scaleY:1.22,y:92.8},9,cjs.Ease.get(1)).wait(57));

	// blue LOGO BG
	this.instance_11 = new lib.blueBG();
	this.instance_11.setTransform(306,125,1,1,0,0,0,150,125);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({_off:false},0).wait(30).to({regX:0,regY:0,x:156,y:-8},0).to({scaleX:0.44,y:-200},11,cjs.Ease.get(1)).wait(224));

	// BG 3
	this.mcGirl3 = new lib.mcGirl3();
	this.mcGirl3.setTransform(80,239.5,1,1,0,0,0,80,239.5);
	this.mcGirl3.alpha = 0;
	this.mcGirl3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcGirl3).wait(204).to({_off:false},0).to({alpha:1},13).wait(53));

	// BG 2
	this.mcGirl2 = new lib.mcGirl2();
	this.mcGirl2.setTransform(80,239.5,1,1,0,0,0,80,239.5);
	this.mcGirl2.alpha = 0;
	this.mcGirl2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcGirl2).wait(129).to({_off:false},0).to({alpha:1},13).wait(128));

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

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_1_graphics_25,x:150,y:-126.5}).wait(1).to({graphics:mask_1_graphics_26,x:150,y:-125.5}).wait(1).to({graphics:mask_1_graphics_27,x:150,y:-115.7}).wait(1).to({graphics:mask_1_graphics_28,x:150,y:-98.7}).wait(1).to({graphics:mask_1_graphics_29,x:150,y:-74.9}).wait(1).to({graphics:mask_1_graphics_30,x:150,y:-44.3}).wait(1).to({graphics:mask_1_graphics_31,x:150,y:-6.9}).wait(1).to({graphics:mask_1_graphics_32,x:150,y:37.3}).wait(1).to({graphics:mask_1_graphics_33,x:150,y:88.2}).wait(1).to({graphics:mask_1_graphics_34,x:150,y:146}).wait(1).to({graphics:mask_1_graphics_35,x:150,y:210.6}).wait(1).to({graphics:mask_1_graphics_36,x:150,y:281.9}).wait(234));

	// mcGirl1
	this.instance_12 = new lib._300x250_FR1_BGphoto();
	this.instance_12._off = true;

	this.instance_12.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({_off:false},0).wait(245));

	// Layer 15
	this.instance_13 = new lib.blueBG();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},33).wait(237));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).dr(-150,-125,300,250);
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(270));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.9,124,303.2,612.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;