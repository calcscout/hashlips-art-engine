const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = 'Grill';
const description = 'Collection of NFT grills for your Apes';
const baseUri = 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q';

const solanaMetadata = {
	symbol: 'YC',
	seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
	external_url: 'https://www.youtube.com/c/hashlipsnft',
	creators: [
		{
			address: '7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC',
			share: 100,
		},
	],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
	{
		growEditionSizeTo: 50,
		race: 'Discomfort',
		layersOrder: [
			{ name: 'Outline' },
			{ name: 'Grill' },
			{ name: 'Inner fill' },
			{ name: 'Outer fill' },
		],
	},
	{
		growEditionSizeTo: 100,
		race: 'Dumbfounded',
		layersOrder: [
			{ name: 'Outline' },
			{ name: 'Grill' },
			{ name: 'Inner fill' },
			{ name: 'Outer fill' },
		],
	},
	{
		growEditionSizeTo: 150,
		race: 'Grin',
		layersOrder: [
			{ name: 'Outline' },
			{ name: 'Grill' },
			{ name: 'Inner fill' },
			{ name: 'Outer fill' },
		],
	},
	{
		growEditionSizeTo: 200,
		race: 'Jovial',
		layersOrder: [
			{ name: 'Outline' },
			{ name: 'Grill' },
			{ name: 'Inner fill' },
			{ name: 'Outer fill' },
		],
	},
	{
		growEditionSizeTo: 250,
		race: 'Phoneme Vuh',
		layersOrder: [
			{ name: 'Outline' },
			{ name: 'Grill' },
			{ name: 'Inner fill' },
			{ name: 'Outer fill' },
		],
	},
	{
		growEditionSizeTo: 300,
		race: 'Rage',
		layersOrder: [
			{ name: 'Outline' },
			{ name: 'Grill' },
			{ name: 'Inner fill' },
			{ name: 'Outer fill' },
		],
	},
	{
		growEditionSizeTo: 350,
		race: 'Small Grin',
		layersOrder: [
			{ name: 'Outline' },
			{ name: 'Grill' },
			{ name: 'Inner fill' },
			{ name: 'Outer fill' },
		],
	},
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
	width: 631,
	height: 631,
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
};
