"use strict";

class Tick {

	constructor(tree, entity, blackboard) {

		this.tree = tree;
		this.entity = entity;
		this.blackboard = blackboard;

		this.openNodes = [];
	}

	enterNode(node) {
		this.openNodes.push(node);
	}

	closeNode(node) {
		this.openNodes.pop();
	}
}

module.exports = Tick;