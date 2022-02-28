// Import csv-writer
const fs = require('fs');

// read initial metadata
let rawdata = fs.readFileSync(`../metadata/full/_metadata.json`);
let initialMedatada = JSON.parse(rawdata);

//constants to modify
let secretFolder = '../img-secret';
startPosition = 27;
endPosition = 37;

const renameWithHash = async (_medatada) => {
	for (let i = 0; i < _medatada.length; i++) {
		const hash = _medatada[i].item_hash;
		const hashPart = hash.slice(startPosition, endPosition);
		const initialName = `${i + 1}.png`;
		const secretName = `${hashPart}.png`;

		fs.renameSync(
			`${secretFolder}/${initialName}`,
			`${secretFolder}/${secretName}`
		);

		console.log(`File ${initialName}.png renamed to ${secretName}.png`);
	}
};

const execute = async () => {
	await renameWithHash(initialMedatada);
};

execute();
