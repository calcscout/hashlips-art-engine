const crypto = require('crypto');
const fs = require('fs');
const { readFile } = require('fs/promises');

//hash calculation
const hashFromFile = async (_filePath) => {
	let hex;

	try {
		const fileBuffer = await readFile(_filePath);
		const hashSum = crypto.createHash('sha256');
		hashSum.update(fileBuffer);
		hex = hashSum.digest('hex');
	} catch (e) {
		console.log('Error occures in hashFromFile function: ', e);
	}
	console.log(hex);
	return hex;
};

const generateObjects = async (_numberOfObjects) => {
	for (let i = 0; i < _numberOfObjects; i++) {
		const hash = await hashFromFile(i + 1);

		const resultingObject = {
			name: 'Test',
			hash,
		};
		fs.writeFileSync(
			`./Test/${i}.json`,
			JSON.stringify(resultingObject, null, 2)
		);
		console.log(hash);
	}
};

// generateObjects(10);

module.exports = { hashFromFile };
