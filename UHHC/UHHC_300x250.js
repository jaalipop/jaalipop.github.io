(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.CTA_directiondBtn = function() {
	this.initialize(img.CTA_directiondBtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,25);


(lib.slipAni1_300x250_fr1 = function() {
	this.initialize(img.slipAni1_300x250_fr1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.slipAni1_300x250_fr2 = function() {
	this.initialize(img.slipAni1_300x250_fr2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.slipAni1_300x250_fr3 = function() {
	this.initialize(img.slipAni1_300x250_fr3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.slipAni1_300x250_fr4 = function() {
	this.initialize(img.slipAni1_300x250_fr4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.slipAni1_300x250_fr5 = function() {
	this.initialize(img.slipAni1_300x250_fr5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.slipAni1_300x250_fr6 = function() {
	this.initialize(img.slipAni1_300x250_fr6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.slipAni1_300x250_fr7 = function() {
	this.initialize(img.slipAni1_300x250_fr7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.slipAni1_300x250_fr8 = function() {
	this.initialize(img.slipAni1_300x250_fr8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.slipAni1_300x250_fr9 = function() {
	this.initialize(img.slipAni1_300x250_fr9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.slipAni1_300x250_frPre6 = function() {
	this.initialize(img.slipAni1_300x250_frPre6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.slipAni1_300x250_frPre7 = function() {
	this.initialize(img.slipAni1_300x250_frPre7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.slipAni1_300x250_frPre8 = function() {
	this.initialize(img.slipAni1_300x250_frPre8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.slipAni1_300x250_frPre9 = function() {
	this.initialize(img.slipAni1_300x250_frPre9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.TEXT_locationInfo_greenwood_300x250 = function() {
	this.initialize(img.TEXT_locationInfo_greenwood_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,53);


(lib.TEXT_slipHappens_solo_300x250 = function() {
	this.initialize(img.TEXT_slipHappens_solo_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,22);


(lib.TEXT_urgentCare_300x250 = function() {
	this.initialize(img.TEXT_urgentCare_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,16);


(lib.UHHCLogo = function() {
	this.initialize(img.UHHCLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,37);


(lib.UHHC_Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.UHHCLogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,37);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TEXT_urgentCare_300x250();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-8,165,16);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TEXT_urgentCare_300x250();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-8,165,16);


(lib.TEXT_slipHappens = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TEXT_slipHappens_solo_300x250();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142,22);


(lib.TEXT_locationInfo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TEXT_locationInfo_greenwood_300x250();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157,53);


(lib.sideStrip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AgiTiMAAAgnDIBFAAMAAAAnDg");
	this.shape.setTransform(3.5,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,250);


(lib.lineSep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D07982").ss(1,1,1).p("Ar3AAIXvAA");
	this.shape.setTransform(76,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,154,2);


(lib.gradBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#E5E6E6"],[0,1],-101.5,0,101.5,0).s().p("Av2TiMAAAgnDIftAAMAAAAnDg");
	this.shape.setTransform(101.5,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203,250);


(lib.CTA_Btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CTA_directiondBtn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,25);


(lib.leftRedStrip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sideStrip("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,125,1,1,0,0,0,3.5,125);
	this.instance.alpha = 0.75;

	this.instance_1 = new lib.gradBG("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(108.5,125,1,1,0,0,0,101.5,125);
	this.instance_1.alpha = 0.852;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,250);


// stage content:
(lib.UHHC_Greenwood_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_212 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==2){
		this.stop();
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(212).call(this.frame_212).wait(1));

	// stroke
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(213));

	// UHHC_Logo
	this.instance = new lib.UHHC_Logo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(148.5,430.5,1,1,0,0,0,72.5,18.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(108).to({_off:false},0).to({y:220.5},10,cjs.Ease.get(1)).wait(95));

	// lineSep
	this.instance_1 = new lib.lineSep("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(148.3,403.5,1,1,0,0,0,76,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(108).to({_off:false},0).to({y:193.5},10,cjs.Ease.get(1)).wait(95));

	// CTA_Btn
	this.instance_2 = new lib.CTA_Btn("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.5,376.5,1,1,0,0,0,32.5,12.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(107).to({_off:false},0).to({y:166.5},10,cjs.Ease.get(1)).wait(96));

	// locationInfo
	this.instance_3 = new lib.TEXT_locationInfo("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,307.5,1,1,0,0,0,83,26.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(106).to({_off:false},0).to({y:97.5},10,cjs.Ease.get(1)).wait(97));

	// TEXT_urgentCare
	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(151.5,260);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(151.5,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},105).to({state:[{t:this.instance_5}]},10).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(105).to({_off:false},0).to({_off:true,y:50},10,cjs.Ease.get(1)).wait(98));

	// TEXT_slipHappens
	this.instance_6 = new lib.TEXT_slipHappens("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(151,-28.5,1,1,0,0,0,83,20.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).to({y:135.5},11,cjs.Ease.get(-1)).to({y:130.5},2,cjs.Ease.get(0.55)).to({y:135.5},2,cjs.Ease.get(-0.51)).wait(39).to({startPosition:0},0).wait(1).to({regX:71,regY:11,x:139,y:118.7},0).wait(1).to({y:109.6},0).wait(1).to({y:98.7},0).wait(1).to({y:86.1},0).wait(1).to({y:72.5},0).wait(1).to({y:58.8},0).wait(1).to({y:46.3},0).wait(1).to({y:36.3},0).wait(1).to({y:30.1},0).wait(1).to({regX:83,regY:20.5,x:151,y:37.5},0).wait(104));

	// gradBackMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_45 = new cjs.Graphics().p("AtHTdMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_46 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_47 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_48 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_49 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_50 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_51 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_52 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_53 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_54 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_55 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_56 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_57 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_58 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_59 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");
	var mask_graphics_60 = new cjs.Graphics().p("AtHTiMAAAgnDMAgzAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_graphics_45,x:126,y:-125.5}).wait(1).to({graphics:mask_graphics_46,x:126,y:-125}).wait(1).to({graphics:mask_graphics_47,x:126,y:-121.8}).wait(1).to({graphics:mask_graphics_48,x:126,y:-115.6}).wait(1).to({graphics:mask_graphics_49,x:126,y:-105.5}).wait(1).to({graphics:mask_graphics_50,x:126,y:-89.5}).wait(1).to({graphics:mask_graphics_51,x:126,y:-64.6}).wait(1).to({graphics:mask_graphics_52,x:126,y:-24.1}).wait(1).to({graphics:mask_graphics_53,x:126,y:38.2}).wait(1).to({graphics:mask_graphics_54,x:126,y:91.9}).wait(1).to({graphics:mask_graphics_55,x:126,y:116.6}).wait(1).to({graphics:mask_graphics_56,x:126,y:125}).wait(1).to({graphics:mask_graphics_57,x:126,y:118.8}).wait(1).to({graphics:mask_graphics_58,x:126,y:115}).wait(1).to({graphics:mask_graphics_59,x:126,y:118.8}).wait(1).to({graphics:mask_graphics_60,x:126,y:125}).wait(153));

	// gradBGCon
	this.instance_7 = new lib.leftRedStrip("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(45.5,125,1,1,0,0,0,3.5,125);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({_off:false},0).wait(168));

	// Layer 22
	this.instance_8 = new lib.slipAni1_300x250_frPre6();
	this.instance_8.parent = this;

	this.instance_9 = new lib.slipAni1_300x250_frPre7();
	this.instance_9.parent = this;

	this.instance_10 = new lib.slipAni1_300x250_frPre8();
	this.instance_10.parent = this;

	this.instance_11 = new lib.slipAni1_300x250_frPre9();
	this.instance_11.parent = this;

	this.instance_12 = new lib.slipAni1_300x250_fr1();
	this.instance_12.parent = this;

	this.instance_13 = new lib.slipAni1_300x250_fr2();
	this.instance_13.parent = this;

	this.instance_14 = new lib.slipAni1_300x250_fr3();
	this.instance_14.parent = this;

	this.instance_15 = new lib.slipAni1_300x250_fr4();
	this.instance_15.parent = this;

	this.instance_16 = new lib.slipAni1_300x250_fr5();
	this.instance_16.parent = this;

	this.instance_17 = new lib.slipAni1_300x250_fr6();
	this.instance_17.parent = this;

	this.instance_18 = new lib.slipAni1_300x250_fr7();
	this.instance_18.parent = this;

	this.instance_19 = new lib.slipAni1_300x250_fr8();
	this.instance_19.parent = this;

	this.instance_20 = new lib.slipAni1_300x250_fr9();
	this.instance_20.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).wait(189));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,302,252);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CTA_directiondBtn.png", id:"CTA_directiondBtn"},
		{src:"images/slipAni1_300x250_fr1.jpg", id:"slipAni1_300x250_fr1"},
		{src:"images/slipAni1_300x250_fr2.jpg", id:"slipAni1_300x250_fr2"},
		{src:"images/slipAni1_300x250_fr3.jpg", id:"slipAni1_300x250_fr3"},
		{src:"images/slipAni1_300x250_fr4.jpg", id:"slipAni1_300x250_fr4"},
		{src:"images/slipAni1_300x250_fr5.jpg", id:"slipAni1_300x250_fr5"},
		{src:"images/slipAni1_300x250_fr6.jpg", id:"slipAni1_300x250_fr6"},
		{src:"images/slipAni1_300x250_fr7.jpg", id:"slipAni1_300x250_fr7"},
		{src:"images/slipAni1_300x250_fr8.jpg", id:"slipAni1_300x250_fr8"},
		{src:"images/slipAni1_300x250_fr9.jpg", id:"slipAni1_300x250_fr9"},
		{src:"images/slipAni1_300x250_frPre6.jpg", id:"slipAni1_300x250_frPre6"},
		{src:"images/slipAni1_300x250_frPre7.jpg", id:"slipAni1_300x250_frPre7"},
		{src:"images/slipAni1_300x250_frPre8.jpg", id:"slipAni1_300x250_frPre8"},
		{src:"images/slipAni1_300x250_frPre9.jpg", id:"slipAni1_300x250_frPre9"},
		{src:"images/TEXT_locationInfo_greenwood_300x250.png", id:"TEXT_locationInfo_greenwood_300x250"},
		{src:"images/TEXT_slipHappens_solo_300x250.png", id:"TEXT_slipHappens_solo_300x250"},
		{src:"images/TEXT_urgentCare_300x250.png", id:"TEXT_urgentCare_300x250"},
		{src:"images/UHHCLogo.png", id:"UHHCLogo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;