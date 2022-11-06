(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
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
p.nominalBounds = new cjs.Rectangle(0,0,107,12);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.whiteOverlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bBkIAAjHMAu3AAAIAADHg");
	this.shape.setTransform(150,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whiteOverlay, new cjs.Rectangle(0,0,300,20), null);


(lib.TEXTPremium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADZBjQgJgDgHgHQgHgHgEgKQgDgKAAgNIAAiWIAiAAIAACXQAAALAFAGQAEAFAKAAQAJAAAFgFQAEgGAAgLIAAiXIAjAAIAACWQAAANgEAKQgDAKgHAHQgHAHgKADQgKADgMAAQgNAAgKgDgAG0BkIAAidIgBAAIgfCdIgRAAIggidIAAAAIAACdIgeAAIAAjJIAtAAIAZB1IAAAAIAZh1IAuAAIAADJgAByBkIAAjJIAjAAIAADJgAAvBkIAAidIgBAAIgfCdIgQAAIgfidIgBAAIAACdIgeAAIAAjJIAuAAIAXB1IABAAIAZh1IAtAAIAADJgAi5BkIAAjJIBdAAIAAAeIg6AAIAAA0IAtAAIAAAdIgtAAIAAA8IA+AAIAAAegAj4BkIgYhUIgSABIAABTIgjAAIAAjJIAxAAQAPAAAKADQAMADAHAHQAHAHAEAMQAEALAAAQQAAAMgDAJQgCAJgDAGQgDAGgFADIgJAFIAeBcgAkigLIAMAAQAHAAAFgBQAFgCADgDQADgEABgGQACgGAAgJQAAgJgCgGQgBgGgDgDQgDgEgFgBQgFgCgHAAIgMAAgAnRBkIAAjJIAyAAQAQAAAMADQAMADAHAHQAIAHAEAMQAEALAAAQQAAAQgEAMQgEALgIAGQgHAHgMAEQgMADgQAAIgPAAIAABTgAmugLIANAAQAJAAAFgBQAGgCAEgDQADgEABgGQACgGAAgJQAAgJgCgGQgBgGgDgDQgEgEgGgBQgFgCgJAAIgNAAg");
	this.shape.setTransform(50.275,12.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXTPremium, new cjs.Rectangle(0,0,106,68.6), null);


(lib.TEXT_withYou = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGVBlQgJgEgHgHQgHgHgEgKQgDgKAAgNIAAiWIAiAAIAACYQAAALAFAFQAEAGAKAAQAJAAAFgGQAEgFAAgLIAAiYIAjAAIAACWQAAANgEAKQgDAKgHAHQgHAHgKAEQgKADgMAAQgNAAgKgDgAEIBkQgKgEgGgHQgHgHgDgKQgDgJAAgLIAAhnQAAgLADgJQADgKAHgHQAGgHAKgEQAKgEAOAAQANAAAKAEQAKAEAHAHQAHAHADAKQADAJAAALIAABnQAAALgDAJQgDAKgHAHQgHAHgKAEQgKAEgNAAQgOAAgKgEgAERhDQgEAFAAAMIAABlQAAAMAEAFQAEAGALAAQAKAAAEgGQAEgFAAgMIAAhlQAAgMgEgFQgEgFgKAAQgLAAgEAFgACLBlIAAhUIgrh1IAkAAIAYBNIABAAIAXhNIAjAAIgqB1IAABUgAgTBlIAAhZIglAAIAABZIgiAAIAAjJIAiAAIAABSIAlAAIAAhSIAiAAIAADJgAizBlIAAirIghAAIAAgeIBmAAIAAAeIgiAAIAACrgAkQBlIAAjJIAjAAIAADJgAlrBlIgZiEIgBAAIgXCEIgdAAIgnjJIAhAAIAVCAIABAAIAWiAIAdAAIAXCAIABAAIATiAIAhAAIgkDJg");
	this.shape.setTransform(50.075,12.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_withYou, new cjs.Rectangle(0,0,104,68.6), null);


(lib.TEXT_week = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al1BjQgJgDgHgHQgHgHgEgKQgDgKAAgNIAAiWIAiAAIAACXQAAALAFAGQAEAFAKAAQAJAAAFgFQAEgGAAgLIAAiXIAjAAIAACWQAAANgEAKQgDAKgHAHQgHAHgKADQgKADgMAAQgNAAgKgDgAHUBkIAAhUIgnhrIAAAUIgiAAIAACrIgjAAIAAirIghAAIAAgeICGAAIAYBNIABAAIAXhNIAjAAIgqB1IAABUgAEgBkIAAjJIAjAAIAADJgACwBkIAAjJIAjAAIAACrIA3AAIAAAegAB7BkIAAjJIAjAAIAADJgAgOBkIAAjJIAyAAQAOAAAKADQAKAEAHAGQAGAHAEAKQADAKAAANQAAAOgGALQgDAGgEAEQgFAFgGACIAMAGQAFAFADAFQAEAGACAIQACAIAAAJQAAANgDAKQgDALgHAIQgGAIgKAEQgLAFgPAAgAATBHIAPAAQAHAAAFgCQAEgCADgEQADgEACgFIABgOQAAgIgCgGQgBgFgDgEQgEgEgFgCQgGgCgHAAIgMAAgAATgSIANAAQAKAAAGgHQAHgHAAgMQAAgPgFgHQgGgHgMAAIgNAAgAhEBkIgGgtIgmAAIgGAtIgiAAIAljJIArAAIAmDJgAhPAZIgOhWIAAAAIgOBWIAcAAgAi9BkIgZhUIgSABIAABTIgiAAIAAjJIAwAAQAPAAALADQALADAHAHQAIAHADAMQAEALAAAQQAAAMgCAJQgCAJgEAGQgDAGgFADIgIAFIAdBcgAjogLIANAAQAHAAAEgBQAGgCADgDQADgEABgGQABgGAAgJQAAgJgBgGQgBgGgDgDQgDgEgGgBQgEgCgHAAIgNAAgAofBkIAAjJIAzAAQAOAAAKADQAKAEAHAIQAHAHADAMQAEALAAAQIAABPQAAAPgEAMQgDALgHAIQgHAHgKAEQgKAEgOAAgAn9BHIAMAAQAHAAAFgBQAFgCADgDQADgDABgGIABgNIAAhYIgBgNQgBgFgDgEQgDgDgFgBQgFgCgHAAIgMAAg");
	this.shape.setTransform(61.425,12.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_week, new cjs.Rectangle(0,0,123.5,68.6), null);


(lib.TEXT_toFitYou = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHKBlQgKgEgHgHQgHgHgDgKQgEgKAAgNIAAiWIAiAAIAACYQABALAEAFQAEAGAKAAQAJAAAFgGQAFgFgBgLIAAiYIAjAAIAACWQAAANgDAKQgEAKgHAHQgHAHgJAEQgKADgNAAQgNAAgJgDgAE8BkQgKgEgGgHQgHgHgDgKQgDgJAAgLIAAhnQAAgLADgJQADgKAHgHQAGgHAKgEQALgEANAAQANAAAKAEQAKAEAHAHQAHAHADAKQADAJAAALIAABnQAAALgDAJQgDAKgHAHQgHAHgKAEQgKAEgNAAQgNAAgLgEgAFFhDQgDAFAAAMIAABlQAAAMADAFQAEAGALAAQALAAADgGQAFgFAAgMIAAhlQAAgMgFgFQgDgFgLAAQgLAAgEAFgAl9BkQgJgEgHgHQgHgHgDgKQgDgJAAgLIAAhnQAAgLADgJQADgKAHgHQAHgHAJgEQALgEANAAQAOAAAKAEQAJAEAHAHQAHAHADAKQADAJAAALIAABnQAAALgDAJQgDAKgHAHQgHAHgJAEQgKAEgOAAQgNAAgLgEgAl0hDQgEAFAAAMIAABlQAAAMAEAFQAFAGAKAAQAKAAAFgGQADgFAAgMIAAhlQAAgMgDgFQgFgFgKAAQgKAAgFAFgAC/BlIAAhUIgrh1IAkAAIAZBNIAAAAIAYhNIAjAAIgqB1IAABUgAAMBlIAAirIggAAIAAgeIBlAAIAAAeIgiAAIAACrgAhPBlIAAjJIAjAAIAADJgAjQBlIAAjJIBgAAIAAAeIg+AAIAAA0IAvAAIAAAeIgvAAIAABZgAnzBlIAAirIghAAIAAgeIBmAAIAAAeIgiAAIAACrg");
	this.shape.setTransform(55.65,12.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_toFitYou, new cjs.Rectangle(0,0,118.3,68.6), null);


(lib.TEXT_style = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj+BkQgJgFgHgIQgHgHgDgKQgEgKAAgMIAhgFQABAPAFAIQAGAIAIAAQAKAAAFgFQAGgFAAgJQAAgHgDgGQgDgGgGgGQgEgGgUgQIgNgLQgGgHgFgHQgFgHgDgJQgDgJAAgKQAAgMAEgKQADgJAHgHQAHgGAKgDQAKgEANAAQAKAAAJAEQAIADAGAHQAGAHAEAJQAEAIABALIghAEQgBgMgGgGQgFgEgHAAQgIAAgFAFQgEAFAAAJQAAAHADAGQADAFAFAGIAYAWQASAPAHAJQAFAIACAIQAEAJAAAKQAAAMgFAKQgDAKgIAHQgHAGgKAEQgKADgMAAQgMAAgKgEgAC9BlIAAjJIBdAAIAAAeIg7AAIAAA0IAtAAIAAAeIgtAAIAAA7IA+AAIAAAegABOBlIAAjJIAjAAIAACrIA3AAIAAAegAgPBlIAAhUIgqh1IAjAAIAYBNIAAAAIAYhNIAjAAIgqB1IAABUgAiDBlIAAirIgiAAIAAgeIBmAAIAAAeIgiAAIAACrg");
	this.shape.setTransform(31.325,12.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_style, new cjs.Rectangle(0,0,66.5,68.6), null);


(lib.TEXT_seven = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEFBkQgKgEgHgHQgGgHgEgKQgCgJAAgLIAAhnQAAgLACgJQAEgKAGgHQAHgHAKgEQAKgEAOAAQANAAAKAEQAKAEAGAHQAIAHACAKQADAJABALIAABnQgBALgDAJQgCAKgIAHQgGAHgKAEQgKAEgNAAQgOAAgKgEgAEOhDQgEAFAAAMIAABlQAAAMAEAFQAEAGALAAQAKAAAEgGQAEgFAAgMIAAhlQAAgMgEgFQgEgFgKAAQgLAAgEAFgAlABlQgJgEgHgHQgHgHgEgKQgDgKAAgNIAAiWIAjAAIAACYQAAALAEAFQAFAGAJAAQAKAAAEgGQAEgFABgLIAAiYIAiAAIAACWQAAANgEAKQgDAKgHAHQgHAHgKAEQgJADgNAAQgMAAgLgDgAnEBkQgKgFgGgIQgIgHgDgKQgDgKgBgMIAhgFQABAPAGAIQAFAIAIAAQAKAAAFgFQAGgFAAgJQAAgHgDgGQgDgGgGgGQgEgGgTgQIgOgLQgGgHgEgHQgGgHgDgJQgDgJAAgKQAAgMAEgKQAEgJAGgHQAHgGAKgDQAKgEANAAQALAAAIAEQAJADAFAHQAHAHADAJQAEAIABALIghAEQgBgMgFgGQgGgEgHAAQgIAAgEAFQgFAFAAAJQAAAHAEAGIAHALIAYAWQASAPAHAJQAFAIADAIQADAJAAAKQAAAMgEAKQgEAKgIAHQgGAGgLAEQgKADgMAAQgMAAgJgEgAHBBlIgZhTIgSAAIAABTIgjAAIAAjJIAxAAQAPAAALADQALAEAHAHQAIAHADALQAEAMAAAQQAAALgDAKQgCAIgDAGQgDAFgFAEIgIAGIAdBbgAGWgJIANAAQAGAAAFgCQAGgBADgEQACgDABgGQACgGAAgJQAAgJgCgGQgBgGgCgEQgDgDgGgCQgFgBgGAAIgNAAgAC0BlIAAjJIAjAAIAADJgABwBlIgYhTIgSAAIAABTIgjAAIAAjJIAwAAQAPAAALADQAMAEAGAHQAIAHADALQAFAMAAAQQgBALgCAKQgCAIgDAGQgEAFgFAEIgIAGIAdBbgABGgJIAMAAQAHAAAEgCQAGgBADgEQADgDABgGQABgGABgJQgBgJgBgGQgBgGgDgEQgDgDgGgCQgEgBgHAAIgMAAgAhMBlIAAjJIBcAAIAAAeIg6AAIAAA0IAsAAIAAAeIgsAAIAAA7IA9AAIAAAegAjVBlIAAjJIAyAAQAQAAAMADQAMAEAHAHQAIAHADALQAFAMAAAQQAAAQgFALQgDAMgIAGQgHAHgMADQgMADgQAAIgQAAIAABTgAizgJIAOAAQAIAAAGgCQAGgBADgEQADgDACgGQABgGABgJQgBgKgBgFQgCgGgDgEQgDgDgGgCQgGgBgIAAIgOAAg");
	this.shape.setTransform(52.7,12.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_seven, new cjs.Rectangle(0,0,116,68.6), null);


(lib.TEXT_modernSkinny = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.instance = new lib.TEXT_216SkinnyFit();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_modernSkinny, new cjs.Rectangle(0,0,163,18.5), null);


(lib.TEXT_Modern = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjQBkQgKgEgGgHQgHgHgEgKQgDgJAAgLIAAhnQAAgLADgJQAEgKAHgHQAGgHAKgEQAKgEAOAAQANAAAKAEQAKAEAGAHQAHAHAEAKQADAJAAALIAABnQAAALgDAJQgEAKgHAHQgGAHgKAEQgKAEgNAAQgOAAgKgEgAjHhDQgEAFAAAMIAABlQAAAMAEAFQAEAGALAAQAKAAAEgGQAEgFAAgMIAAhlQAAgMgEgFQgEgFgKAAQgLAAgEAFgAF9BlIgsh9IgBAAIAAB9IgeAAIAAjJIAfAAIArBzIABAAIAAhzIAeAAIAADJgADzBlIgZhTIgSAAIAABTIgiAAIAAjJIAwAAQAPAAAKADQAMAEAHAHQAHAHAEALQAEAMAAAQQAAALgCAKQgCAIgEAGQgDAFgFAEIgJAGIAeBbgADIgJIAMAAQAIAAAEgCQAFgBADgEQAEgDABgGQABgGAAgJQAAgJgBgGQgBgGgEgEQgDgDgFgCQgEgBgIAAIgMAAgAApBlIAAjJIBeAAIAAAeIg7AAIAAA0IAtAAIAAAeIgtAAIAAA7IA+AAIAAAegAhhBlIAAjJIAzAAQANAAAKAEQALAEAHAHQAFAIAEALQADAMAAAPIAABPQAAAQgDALQgEAMgFAHQgHAIgLAEQgKADgNAAgAg/BJIAMAAQAHAAAEgCQAFgBADgDQADgEABgFIACgOIAAhXIgCgNQgBgGgDgDQgDgDgFgCQgEgBgHAAIgMAAgAksBlIAAidIgBAAIgeCdIgRAAIggidIgBAAIAACdIgdAAIAAjJIAtAAIAZB1IAAAAIAZh1IAuAAIAADJg");
	this.shape.setTransform(44.65,12.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_Modern, new cjs.Rectangle(0,0,93,68.6), null);


(lib.TEXT_made = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACqBlIAAjJIBdAAIAAAeIg6AAIAAA0IAtAAIAAAdIgtAAIAAA8IA+AAIAAAegAAeBlIAAjJIA0AAQANAAAKADQALAEAGAIQAHAHAEAMQADAMAAAPIAABPQAAAPgDAMQgEALgHAIQgGAHgLAFQgKADgNAAgABBBJIAMAAQAHgBAEgBQAFgBADgEQADgDABgGIACgNIAAhXIgCgNQgBgGgDgDQgDgEgFgBQgEgCgHABIgMAAgAgWBlIgHgtIgmAAIgGAtIghAAIAljJIArAAIAkDJgAgiAaIgNhWIgBAAIgOBWIAcAAgAibBlIAAidIgBAAIgfCdIgRAAIgfidIgBAAIAACdIgeAAIAAjJIAuAAIAYB1IABAAIAZh1IAtAAIAADJg");
	this.shape.setTransform(30.175,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_made, new cjs.Rectangle(0,0,71.3,77.5), null);


(lib.TEXT_flexes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AETBkQgKgFgGgIQgHgHgEgKQgDgKgBgMIAhgFQABAPAGAIQAFAIAJAAQAJAAAFgFQAGgFAAgJQAAgHgDgGQgDgGgFgGQgFgGgTgQIgNgLQgHgHgEgHQgGgHgDgJQgDgJAAgKQAAgMAEgKQAEgJAHgHQAGgGAKgDQAKgEANAAQALAAAIAEQAJADAGAHQAGAHAEAJQADAIABALIghAEQgBgMgFgGQgFgEgHAAQgJAAgEAFQgEAFAAAJQAAAHADAGQACAFAFAGIAZAWQARAPAHAJQAFAIADAIQADAJAAAKQAAAMgEAKQgEAKgHAHQgHAGgLAEQgKADgMAAQgMAAgJgEgACBBlIAAjJIBdAAIAAAeIg6AAIAAA0IAtAAIAAAeIgtAAIAAA7IA+AAIAAAegABLBlIgYhJIgBAAIgYBJIghAAIAnhpIgkhgIAhAAIAVBAIABAAIAThAIAiAAIgjBgIAoBpgAh2BlIAAjJIBdAAIAAAeIg6AAIAAA0IAtAAIAAAeIgtAAIAAA7IA+AAIAAAegAjkBlIAAjJIAjAAIAACrIA2AAIAAAegAleBlIAAjJIBgAAIAAAeIg+AAIAAA0IAvAAIAAAeIgvAAIAABZg");
	this.shape.setTransform(38.825,12.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_flexes, new cjs.Rectangle(0,0,104,68.6), null);


(lib.TEXT_denim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEYBlIAAidIgBAAIgfCdIgRAAIgfidIgBAAIAACdIgeAAIAAjJIAuAAIAYB1IABAAIAZh1IAtAAIAADJgABiBlIAAjJIAjAAIAADJgAAeBlIgsh+IAAAAIAAB+IgfAAIAAjJIAgAAIApBzIABAAIAAhzIAfAAIAADJgAipBlIAAjJIBdAAIAAAeIg7AAIAAA0IAtAAIAAAdIgtAAIAAA8IA+AAIAAAegAk1BlIAAjJIAzAAQAOAAAKADQAKAEAHAIQAHAHADAMQAEAMAAAPIAABPQAAAPgEAMQgDALgHAIQgHAHgKAFQgKADgOAAgAkTBJIAMAAQAHgBAFgBQAFgBADgEQADgDABgGIABgNIAAhXIgBgNQgBgGgDgDQgDgEgFgBQgFgCgHABIgMAAg");
	this.shape.setTransform(34.725,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_denim, new cjs.Rectangle(0,0,78,68.6), null);


(lib.TEXT_days = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkUBrQgJgEgJgLQgFADgHABQgIABgIAAQgOAAgKgDQgKgEgGgHQgHgIgDgJQgDgJAAgLIAAhnQAAgLADgJQADgKAHgHQAGgHAKgEQAKgEAOAAQAOAAAJAEQAKAEAHAHQAHAHADAKQADAJAAALIAABnQAAAOgGAMQAJAIAIAAIAAAeQgMAAgGgDgAlRhJQgDAFAAALIAABmQAAAMADAFQAFAFAKAAQAIAAAEgCQgEgHgGgEIAAgfQAKAFAHAHIAAhcQAAgLgFgFQgEgGgKABQgKgBgFAGgAjMBeQgKgDgHgHQgHgHgDgKQgEgKAAgNIAAiWIAiAAIAACYQAAAKAFAGQAFAFAJAAQAKAAAEgFQAFgGgBgKIAAiYIAjAAIAACWQAAANgDAKQgEAKgHAHQgHAHgJADQgLADgMAAQgMAAgKgDgAErBfIAAhUIgmhrIAAAUIgiAAIAACrIgjAAIAAirIgiAAIAAgeICGAAIAZBNIAAAAIAYhNIAjAAIgqB1IAABUgAB1BfIAAjJIAjAAIAADJgAALBfIAAjJIAjAAIAACrIA3AAIAAAegAgoBfIgGgtIgmAAIgGAtIghAAIAkjJIAsAAIAlDJgAgzAUIgOhWIAAAAIgOBWIAcAAg");
	this.shape.setTransform(44.3,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_days, new cjs.Rectangle(0,0,87,68.6), null);


(lib.TEXT_curvySkinny = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.instance = new lib.TEXT_216SlimStraightFit();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_curvySkinny, new cjs.Rectangle(0,0,143,35), null);


(lib.TEXT_Authentic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHRBkQgKgEgGgHQgHgHgDgKQgDgJAAgLIAAhnQAAgLADgJQADgKAHgHQAGgHAKgEQAKgEAOAAQAMAAAKAFQAKAEAHAIQAGAHADAKQADAKAAAMIAAAPIgiAAIAAgQQAAgMgFgHQgFgFgHAAQgLAAgEAFQgEAFAAAMIAABlQAAAMAEAFQAEAGALAAQAJAAAEgFQAEgFAAgLIAAgYIAiAAIAAAXQAAALgDAJQgDAKgGAHQgHAHgKAEQgKAEgMAAQgOAAgKgEgAlzBlQgKgEgHgHQgHgHgDgKQgEgKAAgNIAAiWIAjAAIAACYQAAALAEAFQAFAGAJAAQAKAAAEgGQAFgFAAgLIAAiYIAiAAIAACWQAAANgDAKQgEAKgHAHQgHAHgJAEQgKADgNAAQgMAAgKgDgAFrBlIAAjJIAjAAIAADJgAEOBlIAAirIgiAAIAAgeIBmAAIAAAeIgiAAIAACrgAC6BlIgth9IAAAAIAAB9IgfAAIAAjJIAgAAIAqBzIABAAIAAhzIAfAAIAADJgAgNBlIAAjJIBcAAIAAAeIg7AAIAAA0IAtAAIAAAeIgtAAIAAA7IA+AAIAAAegAhSBlIAAhZIglAAIAABZIgiAAIAAjJIAiAAIAABSIAlAAIAAhSIAjAAIAADJgAjyBlIAAirIghAAIAAgeIBmAAIAAAeIgiAAIAACrgAnHBlIgHgtIgmAAIgGAtIghAAIAljJIArAAIAlDJgAnTAaIgNhWIgBAAIgOBWIAcAAg");
	this.shape.setTransform(54.025,10.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_Authentic, new cjs.Rectangle(-16.5,0,124.6,81.1), null);


(lib.TEXT_a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIsBkQgKgEgIgHQgIAIgKADQgIAEgNAAQgMAAgIgDQgJgEgHgGQgGgGgDgJQgEgJAAgKQAAgIACgIQACgHAEgIQAHgOAMgMQgIgPgDgMQgGgQABgMQAAgLACgIQAEgJAEgGQAGgHAJgDQAIgEALAAQAJAAAIADQAIADAFAGQAFAFADAIQADAIAAAJQAAAJgDAJQgDAIgFAIQgGAIgSATQAPAcAKANQAKgZADgNIAcAIQgCAMgGAPIgLAaQAJAIALABIAAAfQgLAAgLgEgAHkAnQgCAGAAAHQAAAJAGAGQAGAHAIAAQAKAAAGgGIgOgUQgIgKgGgLIgGAMgAHthNQgEAFAAAJQAAAJADALIAHATIALgRQAGgKAAgKQAAgLgDgGQgEgFgGAAQgGAAgEAGgABEBkQgIgDgGgHQgGgHgEgJQgDgKAAgMIAAhnQAAgLADgJQADgKAHgHQAGgHAJgEQAKgEANAAQANAAAJAFQAKAEAHAIQAGAHADAKQAEAKAAAMIAAANIghAAIgBgTQgBgHgDgFQgDgEgDgCQgDgBgGAAQgHAAgEAEQgEAGgBAMIAABnQABAKADAFQAEAGAJAAQAKAAAEgHQAFgGAAgPIAAgUIgXAAIAAgaIA6AAIAABlIgRAAIgHgPQgIAKgHAEQgIAEgMAAQgKAAgJgEgAoiBkQgJgFgHgIQgHgHgDgKQgEgKgBgMIAhgFQACAPAFAIQAGAIAIAAQAKAAAEgFQAGgFABgJQAAgHgEgGQgDgGgFgGQgEgGgUgQIgNgLQgHgHgEgHQgGgHgDgJQgCgJAAgKQAAgMADgKQAEgJAHgHQAGgGAKgDQALgEANAAQAKAAAJAEQAIADAGAHQAGAHAEAJQADAIABALIghAEQAAgMgGgGQgFgEgHAAQgIAAgFAFQgEAFAAAJQAAAHADAGQADAFAFAGIAYAWQASAPAGAJQAFAIADAIQAEAJgBAKQABAMgFAKQgDAKgIAHQgHAGgKAEQgLADgMAAQgMAAgJgEgAFdBlIAAhZIglAAIAABZIgjAAIAAjJIAjAAIAABSIAlAAIAAhSIAiAAIAADJgADDBlIAAirIghAAIAAgeIBmAAIAAAeIgjAAIAACrgAgWBlIgth9IAAAAIAAB9IgfAAIAAjJIAgAAIArBzIAAAAIAAhzIAeAAIAADJgAjPBlIAAjJIBdAAIAAAeIg7AAIAAA0IAtAAIAAAeIgtAAIAAA7IA+AAIAAAegAkOBlIgYhTIgSAAIAABTIgjAAIAAjJIAwAAQAPAAALADQAMAEAGAHQAIAHADALQAFAMAAAQQgBALgCAKQgCAIgDAGQgEAFgFAEIgIAGIAdBbgAk4gJIAMAAQAHAAAEgCQAGgBADgEQADgDABgGQABgGAAgJQAAgJgBgGQgBgGgDgEQgDgDgGgCQgEgBgHAAIgMAAgAmoBlIAAirIghAAIAAgeIBmAAIAAAeIgiAAIAACrg");
	this.shape.setTransform(63.55,12.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_a, new cjs.Rectangle(0,0,139.5,68.6), null);


(lib.TEXT_231athleticFit_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.TEXT_231athleticFit();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT_231athleticFit_1, new cjs.Rectangle(0,0,107,12), null);


(lib.strongArmBug_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.strongArmBug();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.strongArmBug_1, new cjs.Rectangle(0,0,34,34), null);


(lib.newBug = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AingaIAbgFIA1BDIgRhMIAWgFIAeCCIgYAFIg5hLIgBAAIAUBTIgXAGgAg6gzIBEgPIAEAWIgqAKIAHAeIAggIIAFAVIggAIIAIAiIAsgKIAGAVIhGARgAAYhHIAYgEIAlBQIgChYIAYgGIAmBRIABAAIgDhaIAYgFIABCJIgYAFIgnhUIABBdIgYAFg");
	this.shape.setTransform(16.875,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1001C").s().p("AjpgpIGphjIAqC2ImpBjgAixgXIAeCCIAWgGIgThUIAAAAIA6BMIAYgGIgeiBIgWAFIAQBMIg0hEgAhEgwIAeCCIBGgRIgGgWIgtALIgIgiIAhgIIgGgVIgfAIIgIgeIArgKIgEgXgAAOhEIA5B8IAYgGIAAhcIAmBUIAZgGIgBiIIgYAFIACBaIAAAAIgmhRIgYAFIACBZIglhRg");
	this.shape_1.setTransform(17.9,12.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.newBug, new cjs.Rectangle(-5.5,-1.9,46.8,28.099999999999998), null);


(lib.findYourFitCTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#213052").s().p("ADJA5QgFgCgEgEQgEgEgCgGQgCgFAAgGIAAg7QAAgGACgFQACgGAEgEQAEgEAFgCQAGgCAHAAQAIAAAGACQAFACAFAEQADAEACAGQACAFAAAGIAAA7QAAAGgCAFQgCAGgDAEQgFAEgFACQgGACgIAAQgHAAgGgCgADOgmQgCADAAAHIAAA5QAAAHACADQADADAFAAQAGAAADgDQACgDAAgHIAAg5QAAgHgCgDQgDgDgGAAQgFAAgDADgAndA5QgFgDgFgEQgDgFgCgFQgCgGgBgHIATgCQABAIADAFQADAEAFAAQAFAAAEgDQACgCAAgFQAAgFgBgDIgFgHIgNgNIgIgFIgHgIIgEgJQgBgGAAgGQAAgGACgGQABgFAEgEQAFgEAFgBQAGgCAHAAQAGAAAFACQAFACADAEQAEADACAFQACAFAAAHIgSACQgBgHgDgDQgDgDgEAAQgEAAgDADQgCADAAAFIABAHIAEAHIAPAMQAKAIADAGIAFAJQACAFgBAGQAAAHgBAFQgDAGgEAEQgFADgFACQgGACgHAAQgGAAgGgCgAFBA6IgOhMIgBAAIgNBMIgRAAIgVhzIASAAIAMBJIAAAAIAOhJIAQAAIAOBJIAKhJIATAAIgUBzgACUA6IgZhHIgBAAIAABHIgSAAIAAhzIATAAIAYBBIAAAAIAAhBIASAAIAABzgAAhA6IAAhZIAAAAIgSBZIgKAAIgRhZIAABZIgRAAIAAhzIAaAAIANBDIABAAIANhDIAaAAIAABzgAhjA6IAAhzIA1AAIAAASIghAAIAAAdIAZAAIAAARIgZAAIAAAhIAjAAIAAASgAiKA6IAAgzIgVAAIAAAzIgUAAIAAhzIAUAAIAAAvIAVAAIAAgvIAUAAIAABzgAjlA6IAAhhIgTAAIAAgSIA5AAIAAASIgTAAIAABhgAlbA6IAAhzIA1AAIAAASIghAAIAAAdIAZAAIAAARIgZAAIAAAhIAjAAIAAASgAmiA6IAAhzIA1AAIAAASIgiAAIAAAdIAaAAIAAARIgaAAIAAAhIAkAAIAAASgAGVgzIBaAyIhaAxg");
	this.shape.setTransform(44,2.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.findYourFitCTA, new cjs.Rectangle(-5.5,-3.3,99.1,11.899999999999999), null);


(lib.blueBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#102C52").s().p("EgUgBUiMAAAipCMApBAAAMAAACpCg");
	this.shape.setTransform(150.0142,124.9824,1.1426,0.2311);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueBG, new cjs.Rectangle(0,0,300,250), null);


(lib.mcTargetLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// targetLogo.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D71B32").s().p("Ag4A7QgYgYAAgjQAAgiAYgYQAYgYAiAAQAiAAAYAYQAZAYAAAiQAAAjgZAYQgYAYgiAAQgiAAgYgYgAglgmQgQAQAAAWQAAAXAQARQAQAQAXAAQAWAAARgQQAQgRAAgXQAAgWgQgQQgRgRgWAAQgXAAgQARgAEQAVQgHgJAAgMQAAgNAHgIQAIgJANAAQAJAAAGAGQAHAGABAIIgLAAQgDgJgJAAQgIAAgFAGQgDAFAAAIQAAAIADAFQAFAFAIABQAMAAABgNIgNAAIAAgIIAYAAIAAAeIgIAAIgBgHQgGAIgJAAQgNAAgIgIgAgSAVQgIgJAAgMQAAgLAIgIQAJgJALAAQALAAAJAJQAIAIAAALQAAAMgIAJQgJAHgLABQgLgBgJgHgAmdAUQgHgJAAgLQAAgMAHgJQAHgJANAAQANAAAIAJQAGAJAAAMQAAALgGAJQgIAIgNABQgNgBgHgIgAmYgQQgEAHAAAJQAAAJAEAGQAFAHAKABQAKgBAFgHQAFgGAAgJQAAgJgFgHQgFgHgKAAQgKAAgFAHgAGaAXQAAgFAEABQAEgBAAAFQAAAFgEAAQgEAAAAgFgAGaAXQAAADAEAAQABAAABAAQAAAAABAAQAAgBABAAQAAgBAAgBQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAQgEgBAAAEgAGHAcIAAguIgRAAIAAgLIAvAAIAAALIgRAAIAAAugAFGAcIAAg5IAqAAIAAALIgeAAIAAANIAcAAIAAAIIgcAAIAAAOIAfAAIAAALgAD4AcIgCgHIAAgHQgBgFgCgCQgCgCgFAAIgMAAIAAAXIgNAAIAAg5IAfAAQAHABAFAEQAFAFAAAGQAAALgJADQAHACABALIAAAHQABAEABADgADggDIAOAAQAIAAAAgIQAAgIgIAAIgOAAgADBAcIgEgNIgVAAIgFANIgMAAIAVg5IANAAIAVA5gACrAFIAPAAIgHgTgAB/AcIAAguIgRAAIAAgLIAuAAIAAALIgRAAIAAAugAiFAcIAAgyIgTAAIAAgHIAtAAIAAAHIgSAAIAAAygAiYAcIgHgSIgYAAIgGASIgIAAIAWg5IAJAAIAWA5gAi0AEIATAAIgJgZgAj4AcIAAgYIgWghIAJAAIARAcIARgcIAJAAIgWAhIAAAYgAkrAcIAAg5IAHAAIAAAyIAfAAIAAAHgAlAAcIgdgtIAAAtIgHAAIAAg5IAHAAIAeAtIABAAIAAgtIAHAAIAAA5gAGfAZIAAgBIgBgBIgBAAIAAACIgBAAIAAgEIADAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIgBABIABABIAAABgAGdAXIABAAIABAAIgBgBIgBAAg");
	this.shape.setTransform(66.175,13.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcTargetLogo, new cjs.Rectangle(24.1,4.8,84.19999999999999,16.599999999999998), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0mLyIAA3jMApNAAAIAAXjg");
	mask.setTransform(131.925,75.4);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C41230").s().p("AqwDkIAAnIIVhAAIAAHIgAGCBdQAgAgBAAAQBGAAAjgbQAbgWAAgeQAAgqgvgQQgLgEhLgNQghgGAAgNQAAgSAqgBQAPAAAPAIQAGADAFAGQACAGAAADIBKAAQAAgUgagVQgjgehBAAQgyABgiAUQglAXAAAlQAAAlArATQAXAIA6AIQASAEAHADQALAEAAALQAAAQglAAQgQAAgJgEQgIgDgHgHQgGgGAAgGIhIAAQAAAUAVAUgAldhRQgoAgAAA3QAAA2AoAhQAoAgBBAAQA0AAAggPQAkgRASgoIhMAAQgRAXghAAQgZAAgQgOQgRgPAAgWIC9AAIAAgPQAAgxgkghQgogohDAAQhCAAgnAfgAgHB3IBRAAIBvjgIhCAAIhBCHIgCAFIhHiMIhuAAgADEB2IBdAAIAAjgIhdAAgApjB2IDcAAIAAg+Ih3AAIAAihIhlAAIAAAzQAGgBAGAAQANgBAKAFQALAFAJAHQAKAKADAKQAFAKAAAMQAAAOgFALQgDAJgKAKQgKAKgKADQgKAEgNAAIgMAAgApjA2IAMABQAKAAAKgDQAKgGAGgGQAGgGAEgJQAEgKAAgMQAAgJgEgKQgDgIgHgIQgGgGgKgEQgJgEgLAAQgGAAgGACIAAANIAQAAQAMABAHAFQAFAEAAAMQAAAJgFADQgFAFgIAAIAUAgIgMAAIgTgfIgLAAgApjAAIASAAQADAAADgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQACgCAAgEQAAgEgCgCIgDgDIgFgCIgUgBgAEzhQIAaAAIgNAhIALAAIAdgfIAAgvIg1AAgAkigTQABgSAKgOQANgNAUAAQAWAAANAMQANANAAAUg");
	this.shape.setTransform(134.125,113.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#102C52").s().p("AgqAqQgSgRAAgZQAAgYASgRQASgTAYABIAAAAQAZgBATATQARARAAAYQAAAZgRARQgTASgZAAQgYAAgSgSgAglgmQgQAQAAAWQgBAXARAPQAPAQAWAAQAXAAAQgQQAPgPABgXQgBgWgPgQQgPgQgYAAIAAAAQgVAAgQAQgAAQAeIgPgWIgBAAIgLAAIAAAWIgNAAIAAg+IAYAAIAEAAQAMgBAHAHQAFAGAAAIIAAAAQABANgQAFIARAYgAgLgCIALAAIADAAQANABAAgLQAAgKgNAAIgDAAIgLAAg");
	this.shape_1.setTransform(22.9,51.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AGCHBQgVgUAAgUIBIAAQAAAGAHAGQAGAHAIADQAJAEAQAAQAlAAAAgQQAAgLgLgEQgHgDgSgEQg6gIgXgIQgqgTAAgmQAAglAlgXQAhgUAzgBQBAAAAjAeQAaAVAAAUIhJAAQgBgDgCgGQgFgGgGgDQgPgIgPAAQgqABAAASQAAANAiAGQBKANAMAEQAuARABAqQAAAegbAWQgkAbhGAAQhAAAgggggAlcHBQgpghAAg2QAAg4ApggQAmgfBCAAQBDAAAoAoQAlAhgBAyIAAAPIi9AAQABAWAQAPQAQAOAZAAQAiAAAQgXIBMAAQgRAoglARQgfAPg1AAQhAAAgogggAkXEwQgKAOgBASIBcAAQAAgUgNgNQgNgMgWAAQgUAAgNANgAgHHbIh6jhIBuAAIBHCNIACgFIBCiIIBBAAIhuDhgADEHaIAAjhIBeAAIAADhgApiHaIAAg2IAMAAQAMAAAKgEQAKgDAKgKQAKgKADgJQAFgLAAgOQAAgNgFgKQgDgKgKgKQgJgHgLgFQgKgFgMABQgHAAgFABIAAgzIBlAAIAACiIB2AAIAAA+gApiGaIAAgtIAKAAIAUAfIALAAIgTggQAHAAAFgFQAGgEgBgJQAAgMgFgEQgHgFgMgBIgPAAIAAgNQAFgCAHAAQALAAAIAEQAKAEAGAGQAHAIADAIQAEAKAAAKQAAAMgEAKQgDAJgHAGQgGAGgKAGQgKADgJABIgMgCgApiFkIAAgXIATABIAFACIAEADQABACAAAEQAAAEgCACQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAQgDACgCAAgAFAE0IANghIgZAAIAAgtIA0AAIAAAvIgdAfgAAEAsQAAgZASAAQAUAAgBAZQABAZgUAAQgSAAAAgZgAAMAsQAAAQAKABQAKgBAAgQQAAgRgKAAQgKAAAAARgABeBEIAAgfIgKAfIgHAAIgJgfIAAAfIgJAAIAAgvIALAAIALAfIAJgfIALAAIAAAvgAgUBEIgJgUIgIAAIAAAUIgIAAIAAgvIAQAAQAQAAABANQAAAIgJAEIAKAWgAglApIAHAAQAJgBAAgGQAAgGgJAAIgHAAgAhbBEIAAgvIAdAAIAAAHIgVAAIAAAMIAQAAIAAAHIgQAAIAAAVgACAAyQgFAAAAgGQAAgFAFAAICSAAQAEAAAAAFQAAAGgEAAgAkQAyQgFAAABgGQgBgFAFAAICZAAQAEAAAAAFQAAAGgEAAgAQOgvQgHAAgGgDQgGgFgDgEIinkkQgDgEgDABQgBAAAAAGIAAEeQgBAHgDADQgFAFgGAAIg0AAQgFAAgEgFQgFgDAAgHIAAmVQAAgFAFgEQAEgEAFAAIA/AAQAFAAAGADQAHAEADAFIClEkQAEAGACgCQACgBAAgFIAAkhQAAgFAFgEQADgEAGAAIA0AAQAGAAAEAEQAEAEAAAFIAAGVQAAAHgEADQgEAFgGAAgAHcgvQgGAAgEgFQgEgDAAgHIAAmVQAAgFAEgEQAEgEAGAAIDMAAQAHAAADAEQAFAEAAAFIAAAzQAAAFgFAEQgDAFgHAAIh8AAQgFAAgEAFQgFADABAFIAABIQgBAGAFAEQAEAEAFAAIB2AAQAGAAAFAEQADAFAAAFIAAAzQAAAFgDAFQgFADgGAAIh2AAQgFAAgEAFQgFADABAHIAABHQgBAGAFAEQAEAEAFAAIB8AAQAHAAADAFQAFADAAAGIAAAxQAAAHgFADQgDAFgHAAgACdgvQgFAAgEgFQgFgDAAgHIAAgnQAAgPAHgMICXkGQADgEgCgFQgDgDgGAAIh+AAQgGAAgEgFQgFgEAAgFIAAgzQAAgFAFgEQAEgEAGAAIDeAAQAGAAAEAEQAEAEAAAFIAAAtQAAAPgHAMIiWECQgCAFACAEQACADAFAAICTAAQAGAAAEAFQAEADAAAGIAAAxQAAAHgEADQgEAFgGAAgAAXgvQgGAAgEgFQgEgDAAgHIAAmVQAAgFAEgEQAEgEAGAAIA0AAQAGAAAEAEQAEAEAAAFIAAGVQAAAHgEADQgEAFgGAAgAiFgvQgGAAgHgDQgFgFgEgEIinkkQgDgEgCABQgDAAABAGIAAEeQAAAHgFADQgDAFgHAAIgzAAQgGAAgFgFQgEgDAAgHIAAmVQAAgFAEgEQAFgEAGAAIA9AAQAGAAAHADQAGAEADAFICmEkQADAGADgCQABgBABgFIAAkhQAAgFAEgEQAEgEAFAAIA0AAQAGAAAEAEQAFAEAAAFIAAGVQAAAHgFADQgEAFgGAAgAq2gvQgHAAgEgFQgEgDAAgHIAAmVQAAgFAEgEQAEgEAHAAIDMAAQAFAAAFAEQAFAEAAAFIAAAzQAAAFgFAEQgFAFgFAAIh8AAQgGAAgEAFQgFADABAFIAABIQgBAGAFAEQAEAEAGAAIB1AAQAHAAAEAEQADAFABAFIAAAzQgBAFgDAFQgEADgHAAIh1AAQgGAAgEAFQgFADABAHIAABHQgBAGAFAEQAEAEAGAAIB8AAQAFAAAFAFQAFADAAAGIAAAxQAAAHgFADQgFAFgFAAgAxIgvQgGAAgFgFQgEgDAAgHIAAiNQAZAAATgSQARgRAAgZQAAgagRgRQgTgSgZAAIAAAAIAAiPQAAgFAEgEQAFgEAGAAIBaABIBBAJQBHANAgAbQAiAdAUAvQAUAtAAAvQAAAvgUArQgUAtgiAeQgkAegxALQgjAJg8AAgAwGmFIAAD6QAAAGACAEQADAEAFAAQApAAAYgEQAigHAZgTQAZgSANgcQAOgdAAggQAAgigPgeQgPgfgcgUQgXgPgkgHQgWgDgqAAQgFAAAAANgAxXj/IABAAIAPAVIAOAAIgRgXQAQgGgBgOIAAAAQAAgIgFgFQgHgHgMAAIgEAAIAAgVIAAAAQAYAAAPAQQAPAPABAYQgBAWgPAPQgQARgXAAgAxXkKIAAgVIADAAQANAAAAALQAAAKgNAAg");
	this.shape_2.setTransform(134.1,78.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(16.9,30,228.4,106.6), null);


(lib.mcGirl3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.instance = new lib.DEN_YOUNG_300x250_photo3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcGirl3, new cjs.Rectangle(0,0,300,240), null);


(lib.mcGirl2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.instance = new lib.DEN_YOUNG_300x250_photo2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcGirl2, new cjs.Rectangle(0,0,300,230), null);


(lib.mcDenizenLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// DenizenLogo.ai
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(137.3,74.8,1.0676,1.0676,0,0,0,131.9,75.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcDenizenLogo, new cjs.Rectangle(-3.5,-5.7,281.7,161), null);


// stage content:
(lib.DEN_YOUNG_FALL15_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stroke
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A3bzhMAAAAnDMAu3AAAMAAAgnDg");
	this.shape.setTransform(149.5,124.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(345));

	// TEXT 231 Athletic Fit
	this.instance = new lib.TEXT_231athleticFit_1();
	this.instance.setTransform(181.4,239.05,1,1,0,0,0,53.5,6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(227).to({_off:false},0).to({x:218.9,alpha:1},27,cjs.Ease.get(1)).wait(41).to({y:259.05,alpha:0},7,cjs.Ease.get(-1)).wait(43));

	// TEXT Modern Skinny
	this.instance_1 = new lib.TEXT_modernSkinny();
	this.instance_1.setTransform(190.5,242.1,1,1,0,0,0,41,7.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).to({x:211,alpha:1},34,cjs.Ease.get(1)).wait(56).to({y:252.1,alpha:0},7,cjs.Ease.get(-1)).wait(216));

	// TEXT Curvy Skinny
	this.instance_2 = new lib.TEXT_curvySkinny();
	this.instance_2.setTransform(163.85,241.95,1,1,0,0,0,37.6,7.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(129).to({_off:false},0).to({x:183.85,alpha:1},26,cjs.Ease.get(1)).wait(53).to({y:251.95,alpha:0},7,cjs.Ease.get(-1)).wait(130));

	// find Your Fit MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_322 = new cjs.Graphics().p("AAQThIAAjDIA1AAIAADDg");
	var mask_graphics_323 = new cjs.Graphics().p("AhGThIAAjDIDiAAIAADDg");
	var mask_graphics_324 = new cjs.Graphics().p("AiVThIAAjDIGAAAIAADDg");
	var mask_graphics_325 = new cjs.Graphics().p("AjcThIAAjDIINAAIAADDg");
	var mask_graphics_326 = new cjs.Graphics().p("AkaThIAAjDIKJAAIAADDg");
	var mask_graphics_327 = new cjs.Graphics().p("AlQThIAAjDIL1AAIAADDg");
	var mask_graphics_328 = new cjs.Graphics().p("Al+ThIAAjDINRAAIAADDg");
	var mask_graphics_329 = new cjs.Graphics().p("AmjThIAAjDIObAAIAADDg");
	var mask_graphics_330 = new cjs.Graphics().p("AnAThIAAjDIPVAAIAADDg");
	var mask_graphics_331 = new cjs.Graphics().p("AnVThIAAjDIP/AAIAADDg");
	var mask_graphics_332 = new cjs.Graphics().p("AnhThIAAjDIQYAAIAADDg");
	var mask_graphics_333 = new cjs.Graphics().p("AnlThIAAjDIQgAAIAADDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(322).to({graphics:mask_graphics_322,x:6.8531,y:124.9235}).wait(1).to({graphics:mask_graphics_323,x:15.5713,y:124.9235}).wait(1).to({graphics:mask_graphics_324,x:23.4591,y:124.9235}).wait(1).to({graphics:mask_graphics_325,x:30.5167,y:124.9235}).wait(1).to({graphics:mask_graphics_326,x:36.7439,y:124.9235}).wait(1).to({graphics:mask_graphics_327,x:42.1409,y:124.9235}).wait(1).to({graphics:mask_graphics_328,x:46.7075,y:124.9235}).wait(1).to({graphics:mask_graphics_329,x:50.4439,y:124.9235}).wait(1).to({graphics:mask_graphics_330,x:53.3499,y:124.9235}).wait(1).to({graphics:mask_graphics_331,x:55.4257,y:124.9235}).wait(1).to({graphics:mask_graphics_332,x:56.6711,y:124.9235}).wait(1).to({graphics:mask_graphics_333,x:57.0863,y:124.9235}).wait(12));

	// findYourFit.ai
	this.instance_3 = new lib.findYourFitCTA();
	this.instance_3.setTransform(55.9,242.3,1,1,0,0,0,35.3,5.2);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(322).to({_off:false},0).wait(23));

	// target logo
	this.mcTargetLogo = new lib.mcTargetLogo();
	this.mcTargetLogo.name = "mcTargetLogo";
	this.mcTargetLogo.setTransform(219.75,239.6,0.2,0.2001,0,0,0,66,13);
	this.mcTargetLogo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTargetLogo).wait(325).to({_off:false},0).to({regX:66.1,regY:13.1,scaleX:1.1,scaleY:1.1003},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1.0003},3).wait(8));

	// white overlay
	this.instance_4 = new lib.whiteOverlay();
	this.instance_4.setTransform(150,240,1,1,0,0,0,150,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(345));

	// TEXT To Fit You
	this.instance_5 = new lib.TEXT_toFitYou();
	this.instance_5.setTransform(215.9,157.5,0.2627,0.2627,0,0,0,55.6,12);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(232).to({_off:false},0).to({regX:55.7,scaleX:1.1,scaleY:1.1,x:215.95,alpha:1},10,cjs.Ease.get(-1)).to({regX:55.6,regY:12.1,scaleX:0.9,scaleY:0.9,x:215.9,y:157.55},2).to({scaleX:1,scaleY:1,x:215.85},2).wait(48).to({alpha:0},6,cjs.Ease.get(-1)).wait(45));

	// TEXT Made
	this.instance_6 = new lib.TEXT_made();
	this.instance_6.setTransform(215.3,128.85,0.2341,0.2341,0,0,0,30.1,12.2);
	this.instance_6.alpha = 0;
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(225).to({_off:false},0).to({regX:30.2,scaleX:1.1,scaleY:1.1,x:215.35,y:128.95,alpha:1},8,cjs.Ease.get(-1)).to({regX:30.1,scaleX:0.9,scaleY:0.9,x:215.3},2).to({regX:30.2,regY:12.1,scaleX:1,scaleY:1,x:215.35,y:128.85},2).wait(55).to({alpha:0},6,cjs.Ease.get(-1)).wait(47));

	// strong arm bug
	this.instance_7 = new lib.strongArmBug_1();
	this.instance_7.setTransform(159.95,137.95,1.3676,1.3676,0,0,0,17,17);
	this.instance_7.alpha = 0;
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(322).to({_off:false},0).to({scaleX:0.9117,scaleY:0.9117,alpha:1},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},2).wait(13));

	// TEXT_durability
	this.instance_8 = new lib.TEXT_week();
	this.instance_8.setTransform(220.45,199.7,0.2838,0.2838,0,0,0,61.3,12.2);
	this.instance_8.alpha = 0;
	this.instance_8.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(316).to({_off:false},0).to({regX:61.4,scaleX:1.1,scaleY:1.1,y:199.65,alpha:1},9,cjs.Ease.get(-1)).to({regX:61.5,scaleX:0.9,scaleY:0.9,x:220.55,y:199.7},2).to({regX:61.4,scaleX:1,scaleY:1,x:220.45},2).wait(16));

	// TEXT_strength &
	this.instance_9 = new lib.TEXT_a();
	this.instance_9.setTransform(219.05,170.55,0.2139,0.2139,0,0,0,63.6,12.2);
	this.instance_9.alpha = 0;
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(312).to({_off:false},0).to({regY:12.1,scaleX:1.1,scaleY:1.1,x:219.1,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.9,scaleY:0.9,y:170.6},2).to({scaleX:1,scaleY:1},2).wait(20));

	// TEXT_quality
	this.instance_10 = new lib.TEXT_days();
	this.instance_10.setTransform(220.75,143.2,0.1995,0.1995,0,0,0,44.4,12.8);
	this.instance_10.alpha = 0;
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(308).to({_off:false},0).to({regX:44.3,regY:12.7,scaleX:1.1,scaleY:1.1,alpha:1},9,cjs.Ease.get(-1)).to({regX:44.4,scaleX:0.9,scaleY:0.9,x:220.8},2).to({regX:44.3,scaleX:1,scaleY:1,x:220.75},2).wait(24));

	// TEXT_superior
	this.instance_11 = new lib.TEXT_seven();
	this.instance_11.setTransform(219.8,113.35,0.1364,0.1364,0,0,0,52.8,12.5);
	this.instance_11.alpha = 0;
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(304).to({_off:false},0).to({regX:52.6,regY:12.3,scaleX:1.1,scaleY:1.1,x:219.75,y:113.3,alpha:1},9,cjs.Ease.get(-1)).to({regX:52.7,regY:12.4,scaleX:0.9,scaleY:0.9,x:219.8,y:113.4},2).to({regY:12.3,scaleX:1,scaleY:1,y:113.3},2).wait(28));

	// TEXT With You
	this.instance_12 = new lib.TEXT_withYou();
	this.instance_12.setTransform(216,200.85,0.1159,0.1159,0,0,0,50.1,12.1);
	this.instance_12.alpha = 0;
	this.instance_12.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(144).to({_off:false},0).to({scaleX:1.1008,scaleY:1.1008,x:216.05,y:200.9,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.9,scaleY:0.9,x:216},2).to({scaleX:1,scaleY:1,x:216.05},2).wait(57).to({alpha:0},7,cjs.Ease.get(-1)).wait(124));

	// TEXT Flexes
	this.instance_13 = new lib.TEXT_flexes();
	this.instance_13.setTransform(212.75,171.85,0.1884,0.1884,0,0,0,38.8,12);
	this.instance_13.alpha = 0;
	this.instance_13.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(140).to({_off:false},0).to({regY:12.1,scaleX:1.1,scaleY:1.1,x:212.8,y:171.9,alpha:1},8,cjs.Ease.get(-1)).to({regY:12,scaleX:0.9061,scaleY:0.9061,x:212.75,y:171.8},2).to({regY:12.1,scaleX:1,scaleY:1,y:171.9},2).wait(60).to({alpha:0},7,cjs.Ease.get(-1)).wait(126));

	// TEXT Denim
	this.instance_14 = new lib.TEXT_denim();
	this.instance_14.setTransform(215.65,143.9,0.2158,0.2158,0,0,0,34.8,12.1);
	this.instance_14.alpha = 0;
	this.instance_14.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(136).to({_off:false},0).to({regX:34.7,scaleX:1.1,scaleY:1.1,alpha:1},8,cjs.Ease.get(-1)).to({regY:12,scaleX:0.9,scaleY:0.9,y:143.85},2).to({regY:12.1,scaleX:1,scaleY:1,y:143.9},2).wait(62).to({alpha:0},7,cjs.Ease.get(-1)).wait(128));

	// NEW.ai
	this.instance_15 = new lib.newBug();
	this.instance_15.setTransform(146.45,143.9,0.112,0.112,14.9983,0,0,17.8,11);
	this.instance_15.alpha = 0;
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(136).to({_off:false},0).to({regX:17.6,scaleX:1.1764,scaleY:1.1764,rotation:-4.2354,x:146.55,y:143.95,alpha:1},8).to({regX:17.5,scaleX:1,scaleY:1,rotation:0,x:146.45,y:144},2).wait(68).to({x:150.45,y:123},12,cjs.Ease.get(1)).wait(72).to({x:140.45,y:106},9,cjs.Ease.get(1)).wait(38));

	// TEXT Premium
	this.instance_16 = new lib.TEXTPremium();
	this.instance_16.setTransform(216.2,115.35,0.1324,0.1324,0,0,0,50.2,12.1);
	this.instance_16.alpha = 0;
	this.instance_16.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(132).to({_off:false},0).to({regX:50.3,regY:12.2,scaleX:1.1,scaleY:1.1,x:216.25,y:115.3,alpha:1},8,cjs.Ease.get(-1)).to({regX:50.2,scaleX:0.9,scaleY:0.9,x:216.2,y:115.35},2).to({scaleX:1,scaleY:1,x:216.15},2).wait(64).to({alpha:0},7,cjs.Ease.get(-1)).wait(130));

	// mcDenizenLogo
	this.mcDenizenLogo = new lib.mcDenizenLogo();
	this.mcDenizenLogo.name = "mcDenizenLogo";
	this.mcDenizenLogo.setTransform(80.4,562.55,0.6094,0.6092,0,0,0,131.9,75.5);

	this.timeline.addTween(cjs.Tween.get(this.mcDenizenLogo).wait(32).to({regX:144.2,regY:69.5,x:220.9,y:284.9},0).to({y:36.9},12,cjs.Ease.get(0.77)).to({y:44.9},2).to({y:40.9},2).wait(297));

	// TEXT Style
	this.instance_17 = new lib.TEXT_style();
	this.instance_17.setTransform(219.65,173,0.3125,0.3125,0,0,0,31.4,12);
	this.instance_17.alpha = 0;
	this.instance_17.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(52).to({_off:false},0).to({regX:31.3,scaleX:1.1191,scaleY:1.1191,x:217.95,y:170.9,alpha:1},10).to({regY:12.2,scaleX:0.9849,scaleY:0.9849,x:218.6,y:171.8},2).to({regY:12.1,scaleX:1,scaleY:1,x:218.5,y:171.6},2).wait(58).to({alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(213));

	// TEXT Modern
	this.instance_18 = new lib.TEXT_Modern();
	this.instance_18.setTransform(211.8,150.7,0.1137,0.1137,0,0,0,44.4,11.8);
	this.instance_18.alpha = 0;
	this.instance_18.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(48).to({_off:false},0).to({regX:44.7,regY:12.1,scaleX:1.064,scaleY:1.064,x:219.25,y:143.15,alpha:1},9,cjs.Ease.get(-1)).to({regX:44.6,scaleX:0.93,scaleY:0.93,x:218.05,y:144.4},2).to({scaleX:1,scaleY:1,x:218.55,y:143.85},2).wait(61).to({alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(215));

	// TEXT Authentic
	this.instance_19 = new lib.TEXT_Authentic();
	this.instance_19.setTransform(209.45,116.7,0.114,0.114,0,0,0,54,10.1);
	this.instance_19.alpha = 0;
	this.instance_19.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(44).to({_off:false},0).to({regX:54.1,regY:10.3,scaleX:1.1162,scaleY:1.1162,x:218.9,y:115.35,alpha:1},9,cjs.Ease.get(-1)).to({regX:54,regY:10.4,scaleX:0.9778,scaleY:0.9778,x:217.8,y:115.95},2).to({regY:10.3,scaleX:1,scaleY:1,x:217.95,y:115.8},2).wait(63).to({alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(217));

	// blue LOGO BG
	this.instance_20 = new lib.blueBG();
	this.instance_20.setTransform(285,125,1,1,0,0,0,150,125);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(5).to({_off:false},0).wait(30).to({regX:0,regY:0,x:135,y:-8},0).to({scaleX:0.5566,y:-190},11,cjs.Ease.get(1)).wait(299));

	// BG 3
	this.mcGirl3 = new lib.mcGirl3();
	this.mcGirl3.name = "mcGirl3";
	this.mcGirl3.setTransform(80,239.5,1,1,0,0,0,80,239.5);
	this.mcGirl3.alpha = 0;
	this.mcGirl3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcGirl3).wait(219).to({_off:false},0).to({alpha:1},13).wait(113));

	// BG 2
	this.mcGirl2 = new lib.mcGirl2();
	this.mcGirl2.name = "mcGirl2";
	this.mcGirl2.setTransform(80,239.5,1,1,0,0,0,80,239.5);
	this.mcGirl2.alpha = 0;
	this.mcGirl2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcGirl2).wait(129).to({_off:false},0).to({alpha:1},13).wait(203));

	// girl1 mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_25 = new cjs.Graphics().p("A3bS6MAAAgmqMAu3AAAMAAAAmqg");
	var mask_1_graphics_26 = new cjs.Graphics().p("A3bTfMAAAgnFMAu3AAAMAAAAnFg");
	var mask_1_graphics_27 = new cjs.Graphics().p("A3bUKMAAAgoTMAu3AAAMAAAAoTg");
	var mask_1_graphics_28 = new cjs.Graphics().p("A3bVLMAAAgqVMAu3AAAMAAAAqVg");
	var mask_1_graphics_29 = new cjs.Graphics().p("A3bWnMAAAgtNMAu3AAAMAAAAtNg");
	var mask_1_graphics_30 = new cjs.Graphics().p("A3bYcMAAAgw3MAu3AAAMAAAAw3g");
	var mask_1_graphics_31 = new cjs.Graphics().p("A3basMAAAg1XMAu3AAAMAAAA1Xg");
	var mask_1_graphics_32 = new cjs.Graphics().p("A3bdWMAAAg6rMAu3AAAMAAAA6rg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EgXbAgaMAAAhAzMAu3AAAMAAABAzg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgXbAj5MAAAhHxMAu3AAAMAAABHxg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EgXbAnxMAAAhPhMAu3AAAMAAABPhg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgXbAsEMAAAhYGMAu3AAAMAAABYGg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_1_graphics_25,x:149.9994,y:-126.5}).wait(1).to({graphics:mask_1_graphics_26,x:149.9994,y:-125.4545}).wait(1).to({graphics:mask_1_graphics_27,x:149.9994,y:-115.6559}).wait(1).to({graphics:mask_1_graphics_28,x:149.9994,y:-98.6642}).wait(1).to({graphics:mask_1_graphics_29,x:149.9994,y:-74.8759}).wait(1).to({graphics:mask_1_graphics_30,x:149.9994,y:-44.2908}).wait(1).to({graphics:mask_1_graphics_31,x:149.9994,y:-6.909}).wait(1).to({graphics:mask_1_graphics_32,x:149.9994,y:37.2694}).wait(1).to({graphics:mask_1_graphics_33,x:149.9994,y:88.2445}).wait(1).to({graphics:mask_1_graphics_34,x:149.9994,y:146.0163}).wait(1).to({graphics:mask_1_graphics_35,x:149.9994,y:210.5848}).wait(1).to({graphics:mask_1_graphics_36,x:149.9994,y:281.95}).wait(309));

	// mcGirl1
	this.instance_21 = new lib.DEN_YOUNG_300x250_photo1();
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(25).to({_off:false},0).wait(320));

	// Layer 15
	this.instance_22 = new lib.blueBG();
	this.instance_22.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({_off:true},33).wait(312));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(147.9,-65,287.1,676.1);
// library properties:
lib.properties = {
	id: '3E8F36AA3BA701478EBB9D8D546E80E4',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/DEN_YOUNG_300x250_photo1.jpg", id:"DEN_YOUNG_300x250_photo1"},
		{src:"images/DEN_YOUNG_300x250_photo2.jpg", id:"DEN_YOUNG_300x250_photo2"},
		{src:"images/DEN_YOUNG_300x250_photo3.jpg", id:"DEN_YOUNG_300x250_photo3"},
		{src:"images/strongArmBug.png", id:"strongArmBug"},
		{src:"images/TEXT_216SkinnyFit.png", id:"TEXT_216SkinnyFit"},
		{src:"images/TEXT_216SlimStraightFit.png", id:"TEXT_216SlimStraightFit"},
		{src:"images/TEXT_231athleticFit.png", id:"TEXT_231athleticFit"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3E8F36AA3BA701478EBB9D8D546E80E4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;