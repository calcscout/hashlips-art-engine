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
		{ id: 'trait4', title: 'Trait' },
		{ id: 'value4', title: 'Value' },
		{ id: 'trait5', title: 'Trait' },
		{ id: 'value5', title: 'Value' },
		{ id: 'trait6', title: 'Trait' },
		{ id: 'value6', title: 'Value' },
		{ id: 'trait7', title: 'Trait' },
		{ id: 'value7', title: 'Value' },
		{ id: 'hash', title: 'Value' },
	],
});

const generateArrayForCSV = async (_medatada) => {
	let resultingMetadataArray = [];

	for (let i = 0; i < _medatada.length; i++) {
		const attributes = _medatada[i].attributes;
		const length = _medatada[i].attributes.length;

		let traitsArray = [
			{ trait1: '', value1: '' },
			{ trait2: '', value2: '' },
			{ trait3: '', value3: '' },
			{ trait4: '', value4: '' },
			{ trait5: '', value5: '' },
			{ trait6: '', value6: '' },
			{ trait7: '', value7: '' },
		];

		for (let j = 0; j < length; j++) {
			traitsArray[j][Object.keys(traitsArray[j])[0]] = attributes[j].trait_type;

			traitsArray[j][Object.keys(traitsArray[j])[1]] = attributes[j].value;
		}

		const traits = {
			...traitsArray[0],
			...traitsArray[1],
			...traitsArray[2],
			...traitsArray[3],
			...traitsArray[4],
			...traitsArray[5],
			...traitsArray[6],
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
