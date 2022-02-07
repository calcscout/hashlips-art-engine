const crypto = require('crypto');
const fs = require('fs');
const { readFile } = require('fs/promises');

const hashFromString = (_string) => {
	let hex;

	try {
		const hashSum = crypto.createHash('sha256');
		hashSum.update(_string);
		hex = hashSum.digest('hex');
	} catch (e) {
		console.log('Error occures in hashFromString function: ', e);
	}
	console.log('Hash from String: ', hex);
	return hex;
};

const stringArrayFromCollection = (_collectionMetadata) => {
	return _collectionMetadata.map((item) => {
		const result = item['item_hash'];
		return result;
	});
};

const hashFromCollection = (_collectionMetadata) => {
	const hashesArray = stringArrayFromCollection(_collectionMetadata);
	console.log('Resulting array: ', hashesArray);
	const jointHashesString = hashesArray.join(' ');
	console.log(
		'Resulting string end (last elements of the collection): ',
		jointHashesString.slice(jointHashesString.length - 200)
	);
	const resultingHash = hashFromString(jointHashesString);
	console.log('Resulting hash of the string: ', resultingHash);
	return resultingHash;
};

// const hashFrom2Strings = (_string1, _string2) => {
// 	let hex1, hex2, hexResult;

// 	try {
// 		const hashSum = crypto.createHash('sha256');
// 		hashSum.update(_string1);
// 		hex1 = hashSum.digest('hex');
// 		console.log('hex from string 1: ', hex1);
// 		hashSum.update(_string2);
// 		hex2 = hashSum.digest('hex');
// 		console.log('hex from string 1 and after result and 2: ', hex2);
// 	} catch (e) {
// 		console.log('Error occures in hashFromString function: ', e);
// 	}
// 	return hex2;
// };

// hashFromString(hashImage1);
// hashFromString(hashImage2);
// hashFromString(hashImage3);
// hashFrom2Strings(hashImage1, hashImage2);

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

//generation of collection hash

// const collectionHash = (_collectionMetadata) => {
// 	let initialHash
// 	for (let i=0; i<_collectionMetadata.length, i++) {
// 		hashFromString(_collectionMetadata[i].hash);
// 	}
// }

module.exports = { hashFromFile, hashFromString, hashFromCollection };
