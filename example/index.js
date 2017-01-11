"use strict";

const tractor = require('../src/index');

let bt = new tractor.Tree();

bt.setRoot( new tractor.Selector(
	new tractor.Sequence(
		new tractor.IsEnemyNearby(),
		new tractor.Action('fight')
	),
	new tractor.Action('walk')
) );

let blackboard = new tractor.Blackboard();

let entity = {};

setInterval( () => {


	bt.tick( entity, blackboard );

	console.log(entity);

}, 500 );

setTimeout( () => entity.enemyNearby = true, 5000 );
setTimeout( () => entity.enemyNearby = false, 10000 );