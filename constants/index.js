const grillsMapping = [
	{
		mouthType: 'Bored',
		apes: [1, 2, 4, 6, 17, 18, 19, 21, 22, 24, 26, 27, 28, 29, 30, 31, 32, 33],
	},
	{
		mouthType: 'Discomfort',
		apes: [14],
	},
	{
		mouthType: 'Dumbfounded',
		apes: [5],
	},
	{
		mouthType: 'Grin',
		apes: [3, 20, 23, 25],
	},
	{
		mouthType: 'Jovial',
		apes: [8],
	},
	{
		mouthType: 'Phoneme Vuh',
		apes: [7],
	},
	{
		mouthType: 'Small Grin',
		apes: [9],
	},
	{
		mouthType: 'Rage',
		apes: [10],
	},
	{
		mouthType: 'Phoneme ooo',
		apes: [11],
	},
	{
		mouthType: 'Phoneme L',
		apes: [12],
	},
	{
		mouthType: 'Phoneme Oh',
		apes: [13],
	},
	{
		mouthType: 'Tongue Out',
		apes: [15],
	},
	{
		mouthType: 'Phoneme Wah',
		apes: [16],
	},
];

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

const mouthKeys = {
	bored: 'bored',
	boredUnshaven: 'boredUnshaven',
	grin: 'grin',
	boredCigarette: 'boredCigarette',
	dumbfounded: 'dumbfounded',
	boredUnshavenCigarette: 'boredUnshavenCigarette',
	phonemeVuh: 'phonemeVuh',
	jovial: 'jovial',
	smallGrin: 'smallGrin',
	rage: 'rage',
	phonemeOoo: 'phonemeOoo',
	phonemeL: 'phonemeL',
	phonemeOh: 'phonemeOh',
	discomfort: 'discomfort',
	tongueOut: 'tongueOut',
	phonemeWah: 'phonemeWah',
	boredPipe: 'boredPipe',
	boredCigar: 'boredCigar',
	boredBubblegum: 'boredBubblegum',
	grinMulticolored: 'grinMulticolored',
	boredUnshavenPipe: 'boredUnshavenPipe',
	boredUnshavenCigar: 'boredUnshavenCigar',
	grinGoldGrill: 'grinGoldGrill',
	boredPartyHorn: 'boredPartyHorn',
	grinDiamondGrill: 'grinDiamondGrill',
	boredKazoo: 'boredKazoo',
	boredUnshavenBubblegum: 'boredUnshavenBubblegum',
	boredUnshavenKazoo: 'boredUnshavenKazoo',
	boredPizza: 'boredPizza',
	boredDagger: 'boredDagger',
	boredUnshavenPartyHorn: 'boredUnshavenPartyHorn',
	boredUnshavenDagger: 'boredUnshavenDagger',
	boredUnshavenPizza: 'boredUnshavenPizza',
};

const relatedProjectCodes = {
	bayc: 1,
};

const mouthNames = {
	bored: 'Bored',
	boredUnshaven: 'Bored Unshaven',
	grin: 'Grin',
	boredCigarette: 'Bored Cigarette',
	dumbfounded: 'Dumbfounded',
	boredUnshavenCigarette: 'Bored Unshaven Cigarette',
	phonemeVuh: 'Phoneme Vuh',
	jovial: 'Jovial',
	smallGrin: 'Small Grin',
	rage: 'Rage',
	phonemeOoo: 'Phoneme ooo',
	phonemeL: 'Phoneme L',
	phonemeOh: 'Phoneme Oh',
	discomfort: 'Discomfort',
	tongueOut: 'Tongue Out',
	phonemeWah: 'Phoneme Wah',
	boredPipe: 'Bored Pipe',
	boredCigar: 'Bored Cigar',
	boredBubblegum: 'Bored Bubblegum',
	grinMulticolored: 'Grin Multicolored',
	boredUnshavenPipe: 'Bored Unshaven Pipe',
	boredUnshavenCigar: 'Bored Unshaven Cigar',
	grinGoldGrill: 'Grin Gold Grill',
	boredPartyHorn: 'Bored Party Horn',
	grinDiamondGrill: 'Grin Diamond Grill',
	boredKazoo: 'Bored Kazoo',
	boredUnshavenBubblegum: 'Bored Unshaven Bubblegum',
	boredUnshavenKazoo: 'Bored Unshaven Kazoo',
	boredPizza: 'Bored Pizza',
	boredDagger: 'Bored Dagger',
	boredUnshavenPartyHorn: 'Bored Unshaven Party horn',
	boredUnshavenDagger: 'Bored Unshaven Dagger',
	boredUnshavenPizza: 'Bored Unshaven Pizza',
};

module.exports = {
	mouthNames,
	relatedProjectCodes,
	mouthKeys,
	mouthNumbers,
	grillsMapping,
};
