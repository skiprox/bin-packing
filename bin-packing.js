'use strict';

/**
 * Bin Packing implementation for the browser (trying to sort of be like masonry)
 * Original algorithm concept taken from http://codeincomplete.com/posts/2011/5/7/bin_packing/
 */
function BinPacking(w, h) {
	this.root = {
		x: 0,
		y: 0,
		w: w,
		h: h
	};
}

var proto = BinPacking.prototype;

proto.fit = function(blocks) {
	var n, node, block;
	for (n = 0; n < blocks.length; n++) {
		block = blocks[n];
		if (node = this.findNode(this.root, block.w, block.h)) {
			block.fit = this.splitNode(node, block.w, block.h);
			console.log('The returned block', block);
			block.style.transform = 'translate(' + block.fit.x + 'px, ' + block.fit.y + 'px)';
		}
		else {
			console.log('Didnt fit block', block.fit);
		}
	}
};

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
