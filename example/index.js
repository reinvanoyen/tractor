"use strict";

const tractor = require('../src/index'),
	IsHungry = require('./ishungry'),
	IsEnemyNearby = require('./isenemynearby'),
	Eat = require('./eat')
;

let bt = new tractor.Tree();

bt.setRoot( new tractor.Selector(
	new tractor.Sequence(
		new IsEnemyNearby(),
		new tractor.Action('fight')
	),
	new tractor.Sequence(
		new IsHungry(),
		new tractor.Inverter( new IsEnemyNearby() ),
		new Eat()
	),
	new tractor.Action('walk')
) );

let blackboard = new tractor.Blackboard();

let entity = {
	hunger: 0
};

setInterval( () => {
	entity.hunger = entity.hunger + 1;
}, 100 );

setInterval( () => {

	bt.tick( entity, blackboard );
	console.log(entity);
}, 500 );

setTimeout( () => {
	entity.enemyNearby = true;
}, 10000 );

setTimeout( () => {
	entity.enemyNearby = false;
}, 15000 );