//here you define which config to use
const mainToUse = './main_races';

const { startCreating, buildSetup, getElements } = require(`${mainToUse}`);

module.exports = {
	startCreating,
	buildSetup,
	getElements,
};
