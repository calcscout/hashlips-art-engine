//this util is needed just for this collection, since there were no split between layers for different earrings in original ai file

const earringTypes = {
	earth: 'Earth',
	water_gun: 'Water Gun',
	switch: 'Switch',
	smile: 'Smile',
	star: 'Star',
	skull: 'Skull',
	moon: 'Moon',
	cross: 'Cross',
	lightning: 'Lightning',
	banana: 'Banana',
};

const splitterFunction = (_string) => {
	const types = Object.values(earringTypes);

	let splittedMetadata = [];

	for (const type of types) {
		if (_string.includes(type)) {
			const filling = _string.slice(type.length + 1);
			splittedMetadata = [
				{
					trait_type: 'Earring',
					value: type,
				},
				{
					trait_type: 'Texture',
					value: filling,
				},
			];
		}
	}

	return splittedMetadata;
};

module.exports = {
	splitterFunction,
};
