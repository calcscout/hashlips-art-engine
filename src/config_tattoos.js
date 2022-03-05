const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

//AM defined modifications
const collectionName = 'OG Tattoos';
const collectionFolder = 'tattoos';
const containRaces = true; //if false, only one race is considered
const suitingMouthNumbers = []; //ignored if there are races

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
const namePrefix = 'OG Tattoo';
const description = 'Collection of NFT tattoos for your Apes and other NFTs';
const baseUri = 'ipfs://[XXX]';

const solanaMetadata = {
	symbol: 'YC',
	seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
	external_url: 'https://www.youtube.com/',
	creators: [
		{
			address: '',
			share: 100,
		},
	],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
	{
		growEditionSizeTo: 100,
		race: 'Broken',
		layersOrder: [{ name: 'Bones' }, { name: 'Broken' }],
	},
	{
		growEditionSizeTo: 200,
		race: 'Dagger',
		layersOrder: [
			{ name: 'Blade' },
			{ name: 'Knife Shield' },
			{ name: 'Handle' },
			{ name: 'Handle Strap' },
			{ name: 'Outline' },
		],
	},
	{
		growEditionSizeTo: 344,
		race: 'Dice',
		layersOrder: [
			{ name: 'Back Dice' },
			{ name: 'Front Dice' },
			{ name: 'Outline' },
		],
	},
	{
		growEditionSizeTo: 424,
		race: 'Eightball',
		layersOrder: [{ name: 'Ball' }, { name: 'Circle' }, { name: 'Eight' }],
	},
	{
		growEditionSizeTo: 524,
		race: 'Knife Heart',
		layersOrder: [
			{ name: 'Sword' },
			{ name: 'Handle' },
			{ name: 'Heart' },
			{ name: 'Outline' },
		],
	},
	{
		growEditionSizeTo: 614,
		race: 'Mom',
		layersOrder: [{ name: 'Heart' }, { name: 'Mom' }],
	},
	{
		growEditionSizeTo: 704,
		race: 'OG Fist',
		layersOrder: [{ name: 'Hair' }, { name: 'Outline' }, { name: 'OG' }],
	},
	{
		growEditionSizeTo: 804,
		race: 'Skull n Bones',
		layersOrder: [{ name: 'Bone' }, { name: 'Skull' }, { name: 'Outline' }],
	},
	{
		growEditionSizeTo: 975,
		race: 'Sword',
		layersOrder: [
			{ name: 'Handle' },
			{ name: 'Sword Fill' },
			{ name: 'Blood Drip' },
			{ name: 'Outline' },
		],
	},
	{
		growEditionSizeTo: 1000,
		race: 'Tear Drop',
		layersOrder: [
			{ name: 'Little Drop' },
			{ name: 'Big Drop' },
			{ name: 'Outline' },
		],
	},
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
	width: 512,
	height: 512,
	smoothing: false,
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

const extraMetadata = {};

const rarityDelimiter = '#';

const uniqueDnaTorrance = 1000000;

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
