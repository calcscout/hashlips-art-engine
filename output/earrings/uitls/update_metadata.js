const basePath = process.cwd();
const crypto = require('crypto');
const fs = require('fs');
const { readFile } = require('fs/promises');
const { hashFromFile } = require('./hashGenerator');

// read initial metadata
let rawdata = fs.readFileSync(`../metadata/initial/_metadata.json`);
let initialMedatada = JSON.parse(rawdata);

const option = {
	onchain: 'onchain', //updated based on initial metadata
	full: 'full', //updated based on initial metadata
	// initial: 'initial',
};

//Please choose your update option
const updateOption = process.argv[2] ? process.argv[2] : option.onchain;

//data for onchain metadata
const collection = 'OG Earrings';
const namePrefix = 'OG Earring #';
const description = 'Collection of OG Earrings for your Apes';
const totalIssued = 1000;
const artist = 'Apecessories';
const productionLab = 'web4 OG';
const productionDate = 'February 2022';
const info = ['https://apecessories.com', 'https://apecessories.store'];

//data for full metadata (in addition to onchain fields)
const collectionPath = 'earrings';
const fittingApeCollections = ['bayc']; //to be aligned with frontend codes
const fittingApes = [0]; // zero if it fits all apes

//shape of onchain metadata object

const generateOnchainMetadataObject = async (_initialMetadataObject) => {
	const hash = await hashFromFile(
		`../img/${_initialMetadataObject.edition}.png`
	);

	return {
		collection,
		id: _initialMetadataObject.edition,
		total_issued: totalIssued,
		name: `${namePrefix}${_initialMetadataObject.edition}`,
		// dna: _initialMetadataObject.dna,
		hash,
		description,
		image: _initialMetadataObject.image,
		date_generation: _initialMetadataObject.date,
		date_in_store: productionDate,
		info,
		productionLab,
	};
};

// const generate = async () => {
// 	const iterations = initialMetadataObject.length;
// 	for (let i = 0; i < iterations; i++) {
// 		const metadata = await generateOnchainMetadataObject(initialMedatada[i]);
// 		fs.writeFileSync(`./Test/${i}.json`, JSON.stringify(metadata, null, 2));
// 	}
// };

const generateFullMetadataObject = async (_initialMetadataObject) => {
	const onChainMetadata = await generateOnchainMetadataObject(
		_initialMetadataObject
	);
	return {
		...onChainMetadata,
		collectionPath,
		fittingApeCollections,
		fittingApes,
	};
};

const generate = async (_initialMedatada) => {
	let resultingMetadataArray = [];

	for (let i = 0; i < initialMedatada.length; i++) {
		const item = _initialMedatada[i];
		const resultingMetadataObject =
			updateOption === option.onchain
				? await generateOnchainMetadataObject(item)
				: await generateFullMetadataObject(item);
		fs.writeFileSync(
			`../metadata/${updateOption}/${item.edition}.json`,
			JSON.stringify(resultingMetadataObject, null, 2)
		);
		resultingMetadataArray.push(resultingMetadataObject);
	}

	fs.writeFileSync(
		`../metadata/${updateOption}/_metadata.json`,
		JSON.stringify(resultingMetadataArray, null, 2)
	);
};

generate(initialMedatada);
