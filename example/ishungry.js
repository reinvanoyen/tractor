"use strict";

const BaseNode = require('../src/node/basenode'),
	states = require('../src/states')
;

class IsHungry extends BaseNode {

	tick(tick) {
		if(tick.entity.hunger > 20) {
			return states.SUCCESS;
		}
		return states.FAILURE;
	}
}

module.exports = IsHungry;