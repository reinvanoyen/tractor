"use strict";

const BaseNode = require('./basenode'),
	states = require('../states')
;

class Sequence extends BaseNode {

	tick(tick) {

		for( let i = 0; i < this.children.length; i++ ) {

			let state = this.children[i].execute(tick);

			if( state !== states.SUCCESS ) {
				return state;
			}
		}

		return states.SUCCESS;
	}
}

module.exports = Sequence;