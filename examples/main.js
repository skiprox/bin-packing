/*jshint -W121, -W018*/
'use strict';

var BinPacking = require( './../bin-packing.js' );

var Main = (function() {

	return {
		init : function() {
			var container = document.querySelector('.container');
			var colors = ['red', 'pink', 'green', 'blue', 'orange'];
			var sizes = [40, 80, 120, 160, 200];
			var sizesLen = sizes.length;
			var blocks = [];
			var i = 0;
			for (i; i < 100; i++) {
				blocks[i] = document.createElement('div');
				blocks[i].setAttribute('class', 'block');
				blocks[i].style.backgroundColor = colors[i % 5];
				blocks[i].style.width = sizes[Math.floor(Math.random() * 5)] + 'px';
				blocks[i].style.height = sizes[Math.floor(Math.random() * 5)] + 'px';
				container.appendChild(blocks[i]);
			}
			var binPacks = new BinPacking('.container', '.block');
			return this;
		}
	};

}());

module.exports = Main.init();
