const basePath = process.cwd();
const crypto = require('crypto');
const fs = require('fs');
const { readFile } = require('fs/promises');
const {
	hashFromFile,
	hashFromCollection,
} = require('../../../utils_common/hashGenerator');
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
const description = 'Collection of OG Grills for your Apes and other NFTs';
const artist = 'Apecessories';
const productionLab = 'AK47 Studio';
const productionDate = 'Mar 2022';
const info = ['https://apecessories.com', 'https://apecessories.store'];
const totalIssued = initialMedatada.length;
const imageIPFSCID = 'XXX';

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

const generateOnchainMetadataObject = async (
	_initialMetadataObject,
	_hashOfCollection
) => {
	const hash = await hashFromFile(
		`../img/${_initialMetadataObject.edition}.png`
	);

	return {
		collection,
		artist,
		id: _initialMetadataObject.edition,
		total_issued: totalIssued,
		name: `${namePrefix}${_initialMetadataObject.edition}`,
		description,
		image: `ipfs://${imageIPFSCID}/${_initialMetadataObject.edition}.png`,
		date_generation: _initialMetadataObject.date,
		date_in_store: productionDate,
		info,
		production_lab: productionLab,
		item_hash: hash,
		collection_hash: _hashOfCollection,
		attributes: _initialMetadataObject.attributes,
	};
};

const generateFullMetadataObject = async (
	_initialMetadataObject,
	_hashOfCollection
) => {
	const onChainMetadata = await generateOnchainMetadataObject(
		_initialMetadataObject,
		_hashOfCollection
	);
	const fittingApes = fittingMouthNumbers(_initialMetadataObject);
	return {
		...onChainMetadata,
		collectionPath,
		fittingApeCollections,
		fittingApes,
	};
};

const generate = async (_initialMedatada, _hashOfCollection) => {
	let resultingMetadataArray = [];

	for (let i = 0; i < initialMedatada.length; i++) {
		let item = _initialMedatada[i];
		let resultingMetadataObject =
			updateOption === option.onchain
				? await generateOnchainMetadataObject(item, _hashOfCollection)
				: await generateFullMetadataObject(item, _hashOfCollection);
		fs.writeFileSync(
			`../metadata/${updateOption}/${item.edition}.json`,
			JSON.stringify(resultingMetadataObject, null, 2)
		);
		resultingMetadataArray.push(resultingMetadataObject);
	}

	const hashOfCollection = hashFromCollection(resultingMetadataArray);

	fs.writeFileSync(
		`../metadata/${updateOption}/_metadata.json`,
		JSON.stringify(resultingMetadataArray, null, 2)
	);

	return hashOfCollection;
};

const generateWithCollectionHash = async () => {
	const hashInitial = '';
	const hashNew = await generate(initialMedatada, hashInitial);
	await generate(initialMedatada, hashNew);
};

generateWithCollectionHash();
