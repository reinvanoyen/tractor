"use strict";

const BaseNode = require('../src/node/basenode'),
	states = require('../src/states')
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