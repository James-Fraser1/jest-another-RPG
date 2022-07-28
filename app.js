// Nailed down the implementation of two key pieces of the RPG without writing a single line of Game logic. This allowed you to think of some of the important implementation details for each object without having to worry about additional libraries we might need, such as Inquirer.

// Wrote tests that checked multiple outputs based on changes to the data.

// Used array prototype methods like push and splice and learned where they actually come from.

const Game = require('./lib/Game');

new Game().initializeGame();
