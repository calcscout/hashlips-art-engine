const basePath = process.cwd();
const fs = require('fs');

// read initial metadata
let rawdata = fs.readFileSync(`../metadata/initial/_metadata.json`);
let initialMedatada = JSON.parse(rawdata);

const option = {
	onchain: 'onchain', //updated based on initial metadata
	full: 'full', //updated based on initial metadata
	initial: 'initial',
};

//Please choose your update option
const updateOption = option.onchain;

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

const generateOnchainMetadataObject = (_initialMetadataObject) => {
	return {
		collection,
		id: _initialMetadataObject.edition,
		total_issued: totalIssued,
		name: `${namePrefix}${_initialMetadataObject.edition}`,
		dna: _initialMetadataObject.dna,
		description,
		image: _initialMetadataObject.image,
		date_generation: _initialMetadataObject.date,
		date_market: productionDate,
		info,
		productionLab,
	};
};

const generateFullMetadataObject = (_initialMetadataObject) => {
	const onChainMetadata = generateOnchainMetadataObject(_initialMetadataObject);
	return {
		...onChainMetadata,
		collectionPath,
		fittingApeCollections,
		fittingApes,
	};
};

let resultingMetadataArray = [];

initialMedatada.forEach((item) => {
	let resultingMetadataObject;

	resultingMetadataObject =
		updateOption === option.onchain
			? generateOnchainMetadataObject(item)
			: generateFullMetadataObject(item);
	fs.writeFileSync(
		`../metadata/${updateOption}/${item.edition}.json`,
		JSON.stringify(resultingMetadataObject, null, 2)
	);
	resultingMetadataArray.push(resultingMetadataObject);
});

fs.writeFileSync(
	`../metadata/${updateOption}/_metadata.json`,
	JSON.stringify(resultingMetadataArray, null, 2)
);
