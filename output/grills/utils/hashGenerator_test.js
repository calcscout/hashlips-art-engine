const fs = require('fs');
const { readFile } = require('fs/promises');
const { hashFromCollection } = require('./hashGenerator');

// read initial metadata
let rawdata = fs.readFileSync('../metadata/onchain/_metadata.json');
let onchainMetadata = JSON.parse(rawdata);

hashFromCollection(onchainMetadata);
