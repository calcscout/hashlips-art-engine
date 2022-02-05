const basePath = process.cwd();
const crypto = require('crypto');
const fs = require('fs');
const { readFile } = require('fs/promises');
const { hashFromFile } = require('./hashGenerator');
const { grillsMapping } = require('./supporting');

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
const collection = 'OG Grills';
const namePrefix = 'OG Grill #';
const description = 'Collection of OG Grills for your Apes';
const artist = 'Apecessories';
const productionLab = 'web4 OG';
const productionDate = 'Feb 2022';
const info = ['https://apecessories.com', 'https://apecessories.store'];
const totalIssued = initialMedatada.length;

//data for full metadata (in addition to onchain fields)
const collectionPath = 'grills';
const fittingApeCollections = ['bayc']; //to be aligned with frontend codes
const fittingMouthNumbers = (item) => {
	const race = item.attributes.find(
		(attribute) => attribute.trait_type === 'Outline'
	).value;
	const fittingNumbersArray = grillsMapping.find(
		(mouth) => mouth.mouthType === race
	).apes;
	if (!fittingNumbersArray) {
		console.log(
			'Please check function which search fitting mouth numbers, no result found!!!'
		);
	}
	return fittingNumbersArray;
}; // zero if it fits all apes

//shape of onchain metadata object

const generateOnchainMetadataObject = async (_initialMetadataObject) => {
	const hash = await hashFromFile(
		`../img/${_initialMetadataObject.edition}.png`
	);

	return {
		collection,
		artist,
		id: _initialMetadataObject.edition,
		total_issued: totalIssued,
		name: `${namePrefix}${_initialMetadataObject.edition}`,
		hash,
		description,
		image: _initialMetadataObject.image,
		date_generation: _initialMetadataObject.date,
		date_in_store: productionDate,
		info,
		production_lab: productionLab,
		attributes: _initialMetadataObject.attributes,
	};
};

const generateFullMetadataObject = async (_initialMetadataObject) => {
	const onChainMetadata = await generateOnchainMetadataObject(
		_initialMetadataObject
	);
	const fittingApes = fittingMouthNumbers(_initialMetadataObject);
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
