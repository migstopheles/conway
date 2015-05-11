var conway = require('../src/conway').conway;
var grid = require('../src/conway').grid;

describe('conway', function() {
	it('should play the game of life', function() {
		conway();
		expect(grid()).toEqual([
			[0, 1, 1, 1, 0, 0],
			[1, 0, 0, 0, 0, 1],
			[1, 0, 0, 1, 1, 0],
			[1, 0, 0, 0, 0, 1],
			[1, 1, 1, 0, 1, 0],
			[0, 1, 1, 1, 1, 0]
		]);
		
		conway();
		expect(grid()).toEqual([
			[0, 1, 1, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 1, 0, 0, 1, 1],
			[1, 0, 1, 0, 0, 1],
			[1, 0, 0, 0, 1, 1],
			[1, 0, 0, 0, 1, 0]
		]);
		
		conway();
		expect(grid()).toEqual([
			[0, 1, 0, 0, 0, 0],
			[1, 0, 1, 0, 0, 0],
			[1, 0, 0, 0, 1, 1],
			[1, 0, 0, 1, 0, 0],
			[1, 0, 0, 1, 1, 1],
			[0, 0, 0, 0, 1, 1]
		]);
	});
})