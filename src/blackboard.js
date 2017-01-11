"use strict";

class Blackboard {

	constructor() {

		this.openNodes = {};
	}

	open(tree, node) {
		if(!this.openNodes[tree.id]) {
			this.openNodes[tree.id] = {};
		}
		if(!this.openNodes[tree.id][node.id]) {
			this.openNodes[tree.id][node.id] = true;
		}
	}

	close(tree, node) {
		if(!this.openNodes[tree.id]) {
			this.openNodes[tree.id] = {};
		}
		if(this.openNodes[tree.id][node.id]) {
			delete this.openNodes[tree.id][node.id];
		}
	}

	isOpen(tree, node) {
		return ( this.openNodes[tree.id] && this.openNodes[tree.id][node.id] );
	}
}

module.exports = Blackboard;