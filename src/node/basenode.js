"use strict";

const util = require('../util'),
	states = require('../states')
;

class BaseNode {

	constructor(...children) {
		this.id = util.generateId();
		this.children = children;
	}

	execute(tick) {

		this.enter(tick);

		if(!tick.blackboard.isOpen(tick.tree, this)) {
			this.open(tick);
		}

		let state = this.tick(tick);

		if(state !== states.RUNNING) {
			this.close(tick);
		}

		this.exit();

		return state;
	}

	enter(tick) {
		tick.enterNode(this);
	}

	open(tick) {
		tick.blackboard.open(tick.tree, this);
	}

	close(tick) {
		tick.closeNode(tick);
		tick.blackboard.close(tick.tree, this);
	}

	tick(tick) {}
	exit(tick) {}
}

module.exports = BaseNode;