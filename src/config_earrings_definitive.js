const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

//AM defined modifications
const collectionName = 'OG Earrings';
const collectionFolder = 'earrings_definitive';
const containRaces = false; //if false, only one race is considered
const suitingMouthNumbers = [0]; //zero means that is suits to all apes

const mouthNumbers = {
	bored: 1,
	boredUnshaven: 2,
	grin: 3,
	boredCigarette: 4,
	dumbfounded: 5,
	boredUnshavenCigarette: 6,
	phonemeVuh: 7,
	jovial: 8,
	smallGrin: 9,
	rage: 10,
	phonemeOoo: 11,
	phonemeL: 12,
	phonemeOh: 13,
	discomfort: 14,
	tongueOut: 15,
	phonemeWah: 16,
	boredPipe: 17,
	boredCigar: 18,
	boredBubblegum: 19,
	grinMulticolored: 20,
	boredUnshavenPipe: 21,
	boredUnshavenCigar: 22,
	grinGoldGrill: 23,
	boredPartyHorn: 24,
	grinDiamondGrill: 25,
	boredKazoo: 26,
	boredUnshavenBubblegum: 27,
	boredUnshavenKazoo: 28,
	boredPizza: 29,
	boredDagger: 30,
	boredUnshavenPartyHorn: 31,
	boredUnshavenDagger: 32,
	boredUnshavenPizza: 33,
};

// General metadata for Ethereum
const namePrefix = 'Earring';
const description =
	'NFT Earrings for your Apes and other NFTs in your collection. You decide how to use it.';
//to be updated after generation and upload
const baseUri = 'ipfs://QmZVzDfSWLpccLCMLwqzaASo15PPEmZs6GNTWKMm8Z2Dpt';

const extraMetadata = {
	artist: 'Apecessories',
	year: 2022,
	info: ['https://apecessories.com', 'https://apecessories.store'],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
	{
		growEditionSizeTo: 1000,
		layersOrder: [{ name: 'Chain' }, { name: 'Earring' }],
	},
];

//not used not
const solanaMetadata = {
	// symbol: 'YC',
	// seller_fee_basis_points: 100, // Define how much % you want from secondary market sales 1000 = 10%
	// external_url: 'https://www.youtube.com/c/hashlipsnft',
	// creators: [
	// 	{
	// 		address: '7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC',
	// 		share: 100,
	// 	},
	// ],
};

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
	width: 512,
	height: 512,
	smoothing: true,
};

const gif = {
	export: false,
	repeat: 0,
	quality: 100,
	delay: 500,
};

const text = {
	only: false,
	color: '#ffffff',
	size: 20,
	xGap: 40,
	yGap: 40,
	align: 'left',
	baseline: 'top',
	weight: 'regular',
	family: 'Courier',
	spacer: ' => ',
};

const pixelFormat = {
	ratio: 2 / 128,
};

const background = {
	generate: false,
	brightness: '80%',
	static: false,
	default: '#000000',
};

const rarityDelimiter = '#';

const uniqueDnaTorrance = 10000;

const preview = {
	thumbPerRow: 5,
	thumbWidth: 50,
	imageRatio: format.height / format.width,
	imageName: 'preview.png',
};

const preview_gif = {
	numberOfImages: 5,
	order: 'ASC', // ASC, DESC, MIXED
	repeat: 0,
	quality: 100,
	delay: 500,
	imageName: 'preview.gif',
};

module.exports = {
	format,
	baseUri,
	description,
	background,
	uniqueDnaTorrance,
	layerConfigurations,
	rarityDelimiter,
	preview,
	shuffleLayerConfigurations,
	debugLogs,
	extraMetadata,
	pixelFormat,
	text,
	namePrefix,
	network,
	solanaMetadata,
	gif,
	preview_gif,
	collectionName,
	collectionFolder,
	containRaces,
	suitingMouthNumbers,
};
