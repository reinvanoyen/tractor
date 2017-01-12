"use strict";

const BaseNode = require('./basenode'),
	states = require('../states')
;

class Selector extends BaseNode {

	tick(tick) {

		let child = this.children[0];

		if (!child) {
			return states.ERROR;
		}

		let state = child.execute(tick);

		if(state == states.SUCCESS) {
			state = states.FAILURE;
		} else if (state == states.FAILURE) {
			state = states.SUCCESS;
		}

		return state;
	}
}

module.exports = Selector;