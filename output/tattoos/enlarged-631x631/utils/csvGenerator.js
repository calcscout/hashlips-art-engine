// Import csv-writer
const csvwriter = require('csv-writer');
const fs = require('fs');

// read initial metadata
let rawdata = fs.readFileSync(`../metadata/onchain/_metadata.json`);
let initialMedatada = JSON.parse(rawdata);

var createCsvWriter = csvwriter.createObjectCsvWriter;

// Passing the column names intp the module
const csvWriter = createCsvWriter({
	// Output csv file name is geek_data
	path: '../csv/collectionTraits.csv',
	header: [
		// Title of the columns (column_names)
		{ id: 'trait1', title: 'Trait' },
		{ id: 'value1', title: 'Value' },
		{ id: 'trait2', title: 'Trait' },
		{ id: 'value2', title: 'Value' },
		{ id: 'trait3', title: 'Trait' },
		{ id: 'value3', title: 'Value' },
		{ id: 'hash', title: 'Value' },
	],
});

const generateArrayForCSV = async (_medatada) => {
	let resultingMetadataArray = [];

	for (let i = 0; i < _medatada.length; i++) {
		const attributes = _medatada[i].attributes;

		const trait1 = {
			trait1: attributes[0].trait_type,
			value1: attributes[0].value,
		};
		const trait2 = {
			trait2: attributes[1].trait_type,
			value2: attributes[1].value,
		};
		const trait3 = {
			trait3: attributes[2].trait_type,
			value3: attributes[2].value,
		};

		const traits = {
			...trait1,
			...trait2,
			...trait3,
			hash: _medatada[i].item_hash,
		};

		resultingMetadataArray.push(traits);
	}

	fs.writeFileSync(
		`../csv/collectionTraits.json`,
		JSON.stringify(resultingMetadataArray, null, 2)
	);
	console.log(resultingMetadataArray);

	return resultingMetadataArray;
};

const generate = async () => {
	const arrayResult = await generateArrayForCSV(initialMedatada);
	csvWriter
		.writeRecords(arrayResult)
		.then(() => console.log('Data uploaded into csv successfully'));
};

generate();
