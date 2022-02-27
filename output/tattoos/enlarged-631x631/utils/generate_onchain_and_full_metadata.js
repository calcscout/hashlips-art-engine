const basePath = process.cwd();
const crypto = require('crypto');
const fs = require('fs');
const { readFile } = require('fs/promises');
const {
	hashFromFile,
	hashFromCollection,
} = require('../../utils_common/hashGenerator');

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
const collection = 'OG Tattoos';
const namePrefix = 'OG Tattos #';
const description = 'Collection of OG Tattoos for your Apes and other NFTs';
const artist = 'Apecessories';
const productionLab = 'AK47 Studio';
const productionDate = 'Feb 2022';
const info = ['https://apecessories.com', 'https://apecessories.store'];
const totalIssued = initialMedatada.length;
const imageIPFSCID = 'QmS3QzS8yqVUAHXBMFzcEKUHzPAnZos712GuHguPJvT3xC';

//data for full metadata (in addition to onchain fields)
const collectionPath = 'tattoos';
const fittingApeCollections = ['bayc']; //to be aligned with frontend codes
const fittingApes = [0]; // zero if it fits all apes

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
		// dna: _initialMetadataObject.dna,

		description,
		image: `ipfs://${imageIPFSCID}/${_initialMetadataObject.edition}.png`,
		date_generation: _initialMetadataObject.date,
		date_in_store: productionDate,
		info,
		production_lab: productionLab,
		item_hash: hash,
		collection_hash: _hashOfCollection,
		attributes: [
			{
				trait_type: 'Tattoo',
				value: `${_initialMetadataObject.race}`,
			},
			..._initialMetadataObject.attributes,
		],
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
		const item = _initialMedatada[i];
		const resultingMetadataObject =
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
