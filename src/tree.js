"use strict";

const util = require('./util'),
	Tick = require('./tick')
;

class Tree {

	constructor() {
		this.id = util.generateId();
		this.root = null;
	}

	setRoot(root) {
		this.root = root;
	}

	tick(entity, blackboard) {

		let tick = new Tick(this, entity, blackboard);
		this.root.execute(tick);

		//console.log(tick.blackboard.openNodes);
		// @TODO close all nodes
	}
}

module.exports = Tree;