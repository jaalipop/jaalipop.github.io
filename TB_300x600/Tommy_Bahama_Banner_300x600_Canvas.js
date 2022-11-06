(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Tommy_Bahama_Banner_300x600_Canvas_atlas_1", frames: [[260,473,107,22],[0,473,184,31],[0,0,300,471],[186,473,72,35]]}
];


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



(lib.Bitmap1 = function() {
	this.initialize(ss["Tommy_Bahama_Banner_300x600_Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.TB_LogoText = function() {
	this.initialize(ss["Tommy_Bahama_Banner_300x600_Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.TB_prod_image_300x600 = function() {
	this.initialize(ss["Tommy_Bahama_Banner_300x600_Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.TB_swordfish = function() {
	this.initialize(ss["Tommy_Bahama_Banner_300x600_Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.TB_Swordfish = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.TB_swordfish();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TB_Swordfish, new cjs.Rectangle(0,0,72,35), null);


(lib.TB_Logo_Text = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.TB_LogoText();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TB_Logo_Text, new cjs.Rectangle(0,0,184,31), null);


(lib.TB_CTA_Shop_Now = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bDFIAAmJMAu3AAAIAAGJg");
	this.shape.setTransform(53.45,13.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TB_CTA_Shop_Now, new cjs.Rectangle(-96.5,-6.6,300,39.4), null);


(lib.scritches = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#601F1A").s().p("A3bBjIAAjFMAu3AAAIAADFg");
	this.shape.setTransform(150,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scritches, new cjs.Rectangle(0,0,300,19.8), null);


(lib.Product_Image = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.TB_prod_image_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Product_Image, new cjs.Rectangle(0,0,300,471), null);


(lib.Overlay = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF00FF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Overlay, new cjs.Rectangle(0,0,300,250), null);


(lib.drop1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape.setTransform(5.1,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drop1, new cjs.Rectangle(0,0,10.2,10.2), null);


// stage content:
(lib.Tommy_Bahama_Banner_300x600_Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,79];
	// timeline functions:
	this.frame_0 = function() {
		/* click_mc.buttonMode = true;
		click_mc.addEventListener(
		  MouseEvent.CLICK,
		  function():void {
		    if (root.loaderInfo.parameters.clickTAG.substr(0,5) == "http:") {
		      navigateToURL(
		        new URLRequest(root.loaderInfo.parameters.clickTAG), "_blank"
		      );
		    }
		  }
		);*/
	}
	this.frame_79 = function() {
		/* stop();
		
		stage.addEventListener( Event.MOUSE_LEAVE, mouseLeave );
		click_mc.addEventListener( MouseEvent.ROLL_OVER, mouseEnter );
		
		function mouseLeave( e :Event ) :void
		{
			cta_btn.gotoAndStop(1);
		}
		
		function mouseEnter( e :MouseEvent ) :void
		{
			cta_btn.gotoAndStop(2);
		} */
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(79).call(this.frame_79).wait(1));

	// CTA Overlay
	this.click_mc = new lib.Overlay();
	this.click_mc.name = "click_mc";
	this.click_mc.setTransform(150,300,1,2.4,0,0,0,150,125);
	this.click_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.click_mc).wait(80));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAXNguyIAKAAIAAgKEAXXguyIAKAAEgXWgu8IAAAKMAujAAAMAAABdbMgujAAAIAAAKEAXNAu9IAAgKIAAgKIAUAAEAXNAuzIAKAAEgXgguyMAAABdb");
	this.shape.setTransform(150.5,300.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

	// CTA
	this.instance = new lib.TB_CTA_Shop_Now();
	this.instance.setTransform(148.95,618.95,1,1,0,0,0,52.4,11.6);
	this.instance._off = true;

	this.cta_btn = new lib.TB_CTA_Shop_Now();
	this.cta_btn.name = "cta_btn";
	this.cta_btn.setTransform(148.95,581.85,1,1,0,0,0,52.4,11.6);
	this.cta_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({_off:true,y:581.85},8,cjs.Ease.get(-1)).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.cta_btn).wait(55).to({_off:false},8,cjs.Ease.get(-1)).to({y:583.6},2).wait(15));

	// swordfish mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("AAoYiIAAqoIO2AAIAAKog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:99.0021,y:157.0155}).wait(42).to({graphics:null,x:0,y:0}).wait(33));

	// TB Swordfish
	this.instance_1 = new lib.TB_Swordfish();
	this.instance_1.setTransform(131.45,320.45,1,1,111.24,0,0,23,66.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({rotation:0},10,cjs.Ease.get(1)).wait(32).to({regX:36,regY:17.5,x:144.45,y:271.45},0).to({y:97.45},13,cjs.Ease.get(-1)).to({y:27.45},7,cjs.Ease.get(1)).wait(13));

	// splash 3
	this.instance_2 = new lib.drop1();
	this.instance_2.setTransform(206.15,311.45,1,1,0,0,0,5.1,5.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({scaleX:0.1863,scaleY:0.1863,guide:{path:[206.2,311.5,202.7,285.9,209.8,278.6]}},6,cjs.Ease.get(1)).to({_off:true},1).wait(68));

	// splash 2
	this.instance_3 = new lib.drop1();
	this.instance_3.setTransform(198.15,311.5,1,1,0,0,0,5.1,5.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({scaleX:0.2745,scaleY:0.2745,guide:{path:[198.1,311.5,196.4,284.8,214,285.9]}},6,cjs.Ease.get(1)).to({_off:true},1).wait(68));

	// splash 1
	this.instance_4 = new lib.drop1();
	this.instance_4.setTransform(189.95,311.5,1,1,0,0,0,5.1,5.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({scaleX:0.3039,scaleY:0.3039,guide:{path:[189.9,311.5,192.2,283.9,198,280]}},6,cjs.Ease.get(1)).to({_off:true},1).wait(68));

	// Layer 11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_2 = new cjs.Graphics().p("Am8Z3ILFmaIC0AAIrFGag");
	var mask_1_graphics_3 = new cjs.Graphics().p("AncZ/IKTm6IEmAAIqTG6g");
	var mask_1_graphics_4 = new cjs.Graphics().p("An9aFIJhnUIGaAAIphHUg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AodaLIIunqIINAAIouHqg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Ao5aPIH7n7IJ/AAIn8H7g");
	var mask_1_graphics_7 = new cjs.Graphics().p("ApDaSIHIoIILyAAInIIIg");
	var mask_1_graphics_8 = new cjs.Graphics().p("ApNaUIGVoQINlAAImVIQg");
	var mask_1_graphics_9 = new cjs.Graphics().p("ApYaVIFkoUIPYAAIlkIUg");
	var mask_1_graphics_10 = new cjs.Graphics().p("ApkaVIEzoUIRLAAIkzIUg");
	var mask_1_graphics_11 = new cjs.Graphics().p("ApxaUIEFoQIS+AAIkFIQg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Ap/aSIDXoIIUxAAIjXIIg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AqPaQICtn+IWkAAIitH+g");
	var mask_1_graphics_14 = new cjs.Graphics().p("AqhaMICFnvIYWAAIiEHvg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Aq1aIIBfneIaKAAIhfHeg");
	var mask_1_graphics_16 = new cjs.Graphics().p("ArLaDIA8nKIb9AAIg8HKg");
	var mask_1_graphics_17 = new cjs.Graphics().p("ArjZ9IAcmzIdwAAIgcGzg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Ar/Z3IAAmaIfjAAIAAGag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_1_graphics_2,x:27.4029,y:165.4756}).wait(1).to({graphics:mask_1_graphics_3,x:35.0414,y:166.258}).wait(1).to({graphics:mask_1_graphics_4,x:42.68,y:166.9236}).wait(1).to({graphics:mask_1_graphics_5,x:50.3185,y:167.4728}).wait(1).to({graphics:mask_1_graphics_6,x:57.6503,y:167.9067}).wait(1).to({graphics:mask_1_graphics_7,x:63.0668,y:168.2272}).wait(1).to({graphics:mask_1_graphics_8,x:68.4974,y:168.4368}).wait(1).to({graphics:mask_1_graphics_9,x:73.951,y:168.5389}).wait(1).to({graphics:mask_1_graphics_10,x:79.4362,y:168.5376}).wait(1).to({graphics:mask_1_graphics_11,x:84.961,y:168.4374}).wait(1).to({graphics:mask_1_graphics_12,x:90.533,y:168.2437}).wait(1).to({graphics:mask_1_graphics_13,x:96.1592,y:167.9622}).wait(1).to({graphics:mask_1_graphics_14,x:101.8462,y:167.5994}).wait(1).to({graphics:mask_1_graphics_15,x:107.5999,y:167.1619}).wait(1).to({graphics:mask_1_graphics_16,x:113.4254,y:166.657}).wait(1).to({graphics:mask_1_graphics_17,x:119.3276,y:166.0923}).wait(1).to({graphics:mask_1_graphics_18,x:125.226,y:165.4756}).wait(29).to({graphics:null,x:0,y:0}).wait(33));

	// TB Logo Text
	this.instance_5 = new lib.TB_Logo_Text();
	this.instance_5.setTransform(149.45,359.45,1,1,0,0,0,92,15.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({y:310.45},16,cjs.Ease.get(1)).wait(29).to({y:136.45},13,cjs.Ease.get(-1)).to({y:66.45},7,cjs.Ease.get(1)).wait(13));

	// Product Mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_53 = new cjs.Graphics().p("EgQtAqRQm7gWAAgfQAAggG7gWQG7gWJyAAQJzAAG7AWQG7AWAAAgQAAAfm7AWQm7AXpzAAQpyAAm7gXg");
	var mask_2_graphics_54 = new cjs.Graphics().p("EgR7ApuQnchNAAhuQAAhuHchOQHbhNKgAAQKhAAHbBNQHcBOAABuQAABuncBNQnbBOqhAAQqgAAnbhOg");
	var mask_2_graphics_55 = new cjs.Graphics().p("EgTKApLQn7iFAAi8QAAi8H7iGQH8iFLOAAQLPAAH8CFQH7CGAAC8QAAC8n7CFQn8CFrPAAQrOAAn8iFg");
	var mask_2_graphics_56 = new cjs.Graphics().p("EgUYAooQoci9AAkKQAAkLIci8QIdi9L7AAQL8AAIdC9QIcC8AAELQAAEKocC9QodC8r8AAQr7AAodi8g");
	var mask_2_graphics_57 = new cjs.Graphics().p("EgVmAoFQo8j0AAlZQAAlZI8j0QI9j0MpAAQMqAAI9D0QI8D0AAFZQAAFZo8D0Qo9D0sqAAQspAAo9j0g");
	var mask_2_graphics_58 = new cjs.Graphics().p("EgW0AniQpdksAAmnQAAmnJdksQJdkrNXAAQNYAAJdErQJdEsAAGnQAAGnpdEsQpdErtYAAQtXAApdkrg");
	var mask_2_graphics_59 = new cjs.Graphics().p("EgYCAm+Qp9liAAn2QAAn2J9ljQJ9ljOFAAQOGAAJ9FjQJ9FjAAH2QAAH2p9FiQp9FjuGAAQuFAAp9ljg");
	var mask_2_graphics_60 = new cjs.Graphics().p("EgZQAmbQqemaAApEQAApEKemaQKembOyAAQOzAAKeGbQKeGaAAJEQAAJEqeGaQqeGauzAAQuyAAqemag");
	var mask_2_graphics_61 = new cjs.Graphics().p("EgaeAl4Qq+nSAAqSQAAqTK+nRQK+nRPgAAQPhAAK+HRQK+HRAAKTQAAKSq+HSQq+HSvhAAQvgAAq+nSg");
	var mask_2_graphics_62 = new cjs.Graphics().p("EgbsAlVQreoJAArhQAArhLeoIQLeoJQOAAQQPAALeIJQLeIIAALhQAALhreIJQreIJwPAAQwOAAreoJg");
	var mask_2_graphics_63 = new cjs.Graphics().p("Egc6AkyQr/pBAAsvQAAsvL/pAQL+pAQ8AAQQ9AAL+JAQL/JAAAMvQAAMvr/JBQr+JAw9AAQw8AAr+pAg");
	var mask_2_graphics_64 = new cjs.Graphics().p("EgeIAkOQsfp4AAt9QAAt9Mfp4QMep4RqAAQRrAAMeJ4QMfJ4AAN9QAAN9sfJ4QseJ4xrAAQxqAAsep4g");
	var mask_2_graphics_65 = new cjs.Graphics().p("EgfWAjrQtAqvAAvMQAAvLNAqvQM/qwSXAAQSYAAM/KwQNAKvAAPLQAAPMtAKvQs/KwyYAAQyXAAs/qwg");
	var mask_2_graphics_66 = new cjs.Graphics().p("EgglAjIQtfrnAAwaQAAwZNfrnQNgrnTFAAQTGAANgLnQNfLnAAQZQAAQatfLnQtgLnzGAAQzFAAtgrng");
	var mask_2_graphics_67 = new cjs.Graphics().p("EghzAilQuAseAAxpQAAxoOAseQOAseTzAAQT0AAOAMeQOAMeAARoQAARpuAMeQuAMez0AAQzzAAuAseg");
	var mask_2_graphics_68 = new cjs.Graphics().p("EgjBAiCQugtWAAy3QAAy2OgtWQOgtVUhAAQUiAAOgNVQOgNWAAS2QAAS3ugNWQugNV0iAAQ0hAAugtVg");
	var mask_2_graphics_69 = new cjs.Graphics().p("EgkPAiSQvAuNAA0FQAA0EPAuNQPBuOVOAAQVPAAPBOOQPAONAAUEQAAUFvAONQvBOO1PAAQ1OAAvBuOg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_2_graphics_53,x:148.6488,y:272.7746}).wait(1).to({graphics:mask_2_graphics_54,x:148.6486,y:274.7987}).wait(1).to({graphics:mask_2_graphics_55,x:148.6483,y:276.8228}).wait(1).to({graphics:mask_2_graphics_56,x:148.6481,y:278.8469}).wait(1).to({graphics:mask_2_graphics_57,x:148.6478,y:280.871}).wait(1).to({graphics:mask_2_graphics_58,x:148.6476,y:282.8951}).wait(1).to({graphics:mask_2_graphics_59,x:148.6473,y:284.9192}).wait(1).to({graphics:mask_2_graphics_60,x:148.6471,y:286.9434}).wait(1).to({graphics:mask_2_graphics_61,x:148.6468,y:288.9675}).wait(1).to({graphics:mask_2_graphics_62,x:148.6466,y:290.9916}).wait(1).to({graphics:mask_2_graphics_63,x:148.6463,y:293.0157}).wait(1).to({graphics:mask_2_graphics_64,x:148.6461,y:295.0398}).wait(1).to({graphics:mask_2_graphics_65,x:148.6458,y:297.0639}).wait(1).to({graphics:mask_2_graphics_66,x:148.6456,y:299.088}).wait(1).to({graphics:mask_2_graphics_67,x:148.6453,y:301.1121}).wait(1).to({graphics:mask_2_graphics_68,x:148.6451,y:303.1362}).wait(1).to({graphics:mask_2_graphics_69,x:148.6448,y:299.9603}).wait(11));

	// Product Image
	this.instance_6 = new lib.Product_Image();
	this.instance_6.setTransform(150,340.5,1,1,0,0,0,150,235.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.TB_prod_image_300x600();
	this.instance_7.setTransform(0,94);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},53).to({state:[{t:this.instance_6}]},16).to({state:[{t:this.instance_7}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(53).to({_off:false},0).to({y:329.5},16,cjs.Ease.get(1)).to({_off:true},10).wait(1));

	// BG
	this.instance_8 = new lib.scritches();
	this.instance_8.setTransform(150,300,1,30.303,0,0,0,150,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(148.1,275.5,154.00000000000003,378.9);
// library properties:
lib.properties = {
	id: '359DCCF28A708448B2058F6C57F4C4EB',
	width: 300,
	height: 600,
	fps: 24,
	color: "#6F0006",
	opacity: 1.00,
	manifest: [
		{src:"images/Tommy_Bahama_Banner_300x600_Canvas_atlas_1.png", id:"Tommy_Bahama_Banner_300x600_Canvas_atlas_1"}
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
an.compositions['359DCCF28A708448B2058F6C57F4C4EB'] = {
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