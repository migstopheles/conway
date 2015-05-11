var a, b, c, d, n, g;
var grid = [
	[0, 1, 1, 0, 1, 1],
	[0, 1, 1, 0, 0, 0],
	[1, 0, 1, 1, 0, 1],
	[1, 0, 0, 1, 0, 0],
	[0, 1, 1, 0, 1, 1],
	[1, 0, 0, 1, 0, 0]
];

function init() {
	var o = '';
	g = [];
	for(a = 0; a < grid.length; a++) {
		g[a] = [];
		for(b = 0; b < grid[a].length; b++) {
			g[a][b] = grid[a][b];
			n = 0;
			for(c = a - 1; c < a + 2; c++/*lol!!*/) {
				for(d = b - 1; d < b + 2; d++) {
					if(c < 0 || d < 0 || (c === a && d === b) || c >= grid.length || d >= grid[c].length)
						continue;
					if(grid[c][d])
						n++;
				}
			}
			if(n > 3) {
				g[a][b] = 0;
			} else if (n == 3) {
				g[a][b] = 1;
			} else if (n == 2) {
				g[a][b] = g[a][b];
			} else if (n < 2) {
				g[a][b] = 0;
			} else {
				
			}
			o += g[a][b];
		}
		o += '\n';
	}
	console.log(o);
	grid = g;
	return init;
}

module.exports = {
	conway: init,
	grid: function() { return grid; }
}
