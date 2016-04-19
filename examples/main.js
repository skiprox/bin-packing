/*jshint -W121, -W018*/
'use strict';

var BinPacking = require( './../bin-packing.js' );

var Main = (function() {

	return {
		init : function() {
			console.log(document.querySelectorAll('.block'));
			var blocks = document.querySelectorAll('.block');
			var n = blocks.length;
			while (n--) {
				blocks[n].style.position = 'absolute';
				blocks[n].style.top = '0';
				blocks[n].style.left = '0';
				blocks[n].w = blocks[n].clientWidth;
				blocks[n].h = blocks[n].clientHeight;
			}
			var binPacks = new BinPacking(500, 500);
			binPacks.fit(blocks);
			return this;
		}
	};

}());

module.exports = Main.init();
