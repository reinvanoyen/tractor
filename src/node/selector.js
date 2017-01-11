"use strict";

const BaseNode = require('./basenode'),
	states = require('../states')
;

class Selector extends BaseNode {

	tick(tick) {

		for( let i = 0; i < this.children.length; i++ ) {

			let state = this.children[i].execute(tick);

			if( state !== states.FAILURE ) {
				return state;
			}
		}

		return states.FAILURE;
	}
}

module.exports = Selector;