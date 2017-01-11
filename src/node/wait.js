"use strict";

const BaseNode = require('./basenode'),
	states = require('../states')
;

class Wait extends BaseNode {

	constructor(time) {
		super();
		this.time = time;
	}

	open(tick) {
		super.open(tick);
		tick.blackboard.startTime = (new Date()).getTime();
	}

	tick(tick) {

		let currTime = (new Date()).getTime(),
			startTime = tick.blackboard.startTime
		;

		if (currTime - startTime > this.time) {
			return states.SUCCESS;
		}

		return states.RUNNING;
	}
}

module.exports = Wait;