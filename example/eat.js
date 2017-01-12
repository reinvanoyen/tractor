"use strict";

const BaseNode = require('../src/node/basenode'),
	states = require('../src/states')
;

class Eat extends BaseNode {

	tick(tick) {
		console.log('Eat!');
		tick.entity.hunger = 0;
		return states.SUCCESS;
	}
}

module.exports = Eat;