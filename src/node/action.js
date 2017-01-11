"use strict";

const BaseNode = require('./basenode'),
	states = require('../states')
;

class Action extends BaseNode {

	constructor(name) {
		super();
		this.name = name;
	}

	tick(tick) {

		tick.entity.state = this.name;
		return states.SUCCESS;
	}
}

module.exports = Action;