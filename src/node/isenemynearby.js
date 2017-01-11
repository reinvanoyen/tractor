"use strict";

const BaseNode = require('./basenode'),
	states = require('../states')
;

class IsEnemyNearby extends BaseNode {

	tick(tick) {
		if(tick.entity.enemyNearby) {
			return states.SUCCESS;
		}
		return states.FAILURE;
	}
}

module.exports = IsEnemyNearby;