//FIRST run creaate_full_metadata!!!

const basePath = process.cwd();
const fs = require("fs");

//please set correct path for the folder where FULL metadata should be taken from
const metadataPathFull = `${basePath}/output/grills/metadata/full`;
const metadataPathOnChain = `${basePath}/output/grills/metadata/onchain`;

// read json data
let rawdata = fs.readFileSync(`${metadataPathFull}/_metadata.json`);
let data = JSON.parse(rawdata);

const onChainData = data.map((item) => {
  const onchainItemMetadata = {
    artist: item.artist,
    season: item.season,
    collection: item.collection,
    pieces: item.pieces,
    id: item.edition,
    name: item.name,
    dna: item.dna,
    description: item.description,
    image: item.image,
    date: item.date,
    attributes: item.attributes,
  };

  fs.writeFileSync(
    `${metadataPathOnChain}/${item.edition}.json`,
    JSON.stringify(onchainItemMetadata, null, 2)
  );
  return onchainItemMetadata;
});

fs.writeFileSync(
  `${metadataPathOnChain}/_metadata.json`,
  JSON.stringify(onChainData, null, 2)
);
