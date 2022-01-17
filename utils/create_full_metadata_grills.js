const basePath = process.cwd();
const fs = require("fs");

const { grillsMapping } = require("../constants/index.js");

//please set correct path for the folder where metadata should be updated
const metadataPath = `${basePath}/output/grills/metadata/full`;

// read json data
let rawdata = fs.readFileSync(`${metadataPath}/_metadata.json`);
let data = JSON.parse(rawdata);

//additional metadata to be added to all items
const extraMetadata = {
  artist: "Apecessories",
  season: "Winter 2022",
  pieces: 555,
};

const fullMetadata = data.map((item) => {
  // const result = grillsMapping.filter((mouth) => {
  // 	return mouth.mouthType === item.attributes[0].value;
  // });

  const apesArray = grillsMapping.filter(
    (mouth) => mouth.mouthType === item.attributes[0].value
  )[0].apes;

  console.log("apesArray: ", apesArray);

  const fullItemMetadata = {
    ...extraMetadata,
    ...item,
    apes: apesArray,
  };

  fs.writeFileSync(
    `${metadataPath}/${item.edition}.json`,
    JSON.stringify(fullItemMetadata, null, 2)
  );
  return fullItemMetadata;
});

fs.writeFileSync(
  `${metadataPath}/_metadata.json`,
  JSON.stringify(fullMetadata, null, 2)
);
