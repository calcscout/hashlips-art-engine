const basePath = process.cwd();
const fs = require('fs');

const {
	baseUri,
	description,
	namePrefix,
	network,
	solanaMetadata,
	collectionName,
	suitingMouthNumbers,
	collectionFolder,
} = require(`${basePath}/src/config.js`);

// read json data
let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);

const onChainData = data.map((item) => {
	const onchainItemMetadata = {
		collection: item.collection,
		edition: item.edition,
		name: item.name,
		dna: item.dna,
		description: item.description,
		image: item.image,
		date: item.date,
		attributes: item.attributes,
		// apes: item.apes,
		// folder: item.folder,
		// id: item.id,
	};

	// item = onchainItemMetadata;

	// fs.writeFile(
	//   `${basePath}/build/json/onChain/${item.edition}.json`,
	//   "",
	//   function (err) {
	//     if (err) throw err;
	//     console.log("File is created successfully.");
	//   }
	// );

	fs.writeFileSync(
		`${basePath}/build/json/onChain/${item.edition}.json`,
		JSON.stringify(onchainItemMetadata, null, 2)
	);
	return onchainItemMetadata;
});

// fs.writeFile(
//   `${basePath}/build/json/onChain/_metadata.json`,
//   "",
//   function (err) {
//     if (err) throw err;
//     console.log("File is created successfully.");
//   }
// );

fs.writeFileSync(
	`${basePath}/build/json/onChain/_metadata.json`,
	JSON.stringify(onChainData, null, 2)
);
