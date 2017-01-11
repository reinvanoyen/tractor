"use strict";

const BaseNode = require('./basenode'),
	states = require('../states')
;

class Log extends BaseNode {

	tick(tick) {

		console.log(tick.entity);
		return states.SUCCESS;
	}
}

module.exports = Log;