'use strict';

/**
 * Bin Packing implementation for the browser (trying to sort of be like masonry)
 * Original algorithm concept taken from http://codeincomplete.com/posts/2011/5/7/bin_packing/
 * Basically, what we do is we sort the blocks, and then start looping through all of them,
 * placing them into bins. When we place a block into a bin, we split the bin into 2 new bins
 * (right and down nodes), which can then be used to put additional blocks into.
 *
 * @param {String} - containerEl: The query string for the container element
 * @param {String} - blocksEl: The query string for the blocks to pack
 */
function BinPacking(containerEl, blocksEl) {
	this.container = document.querySelector(containerEl);
	this.blocks = [].slice.call(document.querySelectorAll(blocksEl));
	this.root = {};
	// Bindings
	this._onResize = this._onResize.bind(this);
	// Get up and go
	this._updateBinValues();
	this._sortBlocks();
	this._addListeners();
	this.fit();
}

var proto = BinPacking.prototype;

/**
 * Update the info about the elements
 */
proto._updateBinValues = function() {
	this.root = {
		x: 0,
		y: 0,
		w: this.container.clientWidth,
		h: 100000000 // This is obviously bad. need to fix
	};
	var blocksLen = this.blocks.length;
	while (blocksLen--) {
		this.blocks[blocksLen].style.position = 'absolute';
		this.blocks[blocksLen].style.top = '0';
		this.blocks[blocksLen].style.left = '0';
		this.blocks[blocksLen].w = this.blocks[blocksLen].clientWidth;
		this.blocks[blocksLen].h = this.blocks[blocksLen].clientHeight;
	}
};

/**
 * Sort the blocks into order based on height
 * since our packing algorithm works best this way
 */
proto._sortBlocks = function() {
	this.blocks.sort(function(a, b) {
		return b.h - a.h;
	});
};

/**
 * Add listeners for resizing (or other triggers if ya want em)
 */
proto._addListeners = function() {
	window.addEventListener('resize', this._onResize);
};

/**
 * On resize, if the container size has changed,
 * we update bin values, resort the blocks, and fit everything together
 * @param  {Event} e [The resize event]
 */
proto._onResize = function(e) {
	if (this.container.clientWidth !== this.root.w) {
		this._updateBinValues();
		this._sortBlocks();
		this.fit();
	}
};

/**
 * The fit function
 * We iterate through the blocks one by one,
 * and we pack them based on where they will fit
 */
proto.fit = function() {
	var n, node, block;
	for (n = 0; n < this.blocks.length; n++) {
		block = this.blocks[n];
		if (node = this.findNode(this.root, block.w, block.h)) {
			block.fit = this.splitNode(node, block.w, block.h);
			block.style.transform = 'translate(' + block.fit.x + 'px, ' + block.fit.y + 'px)';
		}
		else {
			console.log('Didnt fit block', block.fit);
		}
	}
};

/**
 * Find node function, to find a bin to put a block into
 * @param  {Object} root [The bin we're currently dealing with]
 * @param  {Float} w    [The width of the block]
 * @param  {Float} h    [The height of the block]
 */
proto.findNode = function(root, w, h) {
	if (root.used) {
		return this.findNode(root.right, w, h) || this.findNode(root.down, w, h);
	}
	else if (w <= root.w && h <= root.h) {
		return root;
	}
	else {
		return null;
	}
};

/**
 * Split a node after we successfully put a block into it
 * @param  {Object} node [A bin]
 * @param  {Float} w    [width of the block]
 * @param  {Float} h    [height of the block]
 */
proto.splitNode = function(node, w, h) {
	node.used = true;
	node.down = {
		x: node.x,
		y: node.y + h,
		w: node.w,
		h: node.h - h
	};
	node.right = {
		x: node.x + w,
		y: node.y,
		w: node.w - w,
		h: h
	};
	return node;
};

module.exports = BinPacking;
