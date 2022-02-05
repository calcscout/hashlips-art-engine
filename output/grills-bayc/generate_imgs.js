const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const basePath = process.cwd();
const buildDir = `./img`;
const layersDir = `./layers`;

const format = {
	width: 631,
	height: 631,
	smoothing: true,
};

const console = require('console');
const canvas = createCanvas(format.width, format.height);
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = format.smoothing;

const buildSetup = () => {
	if (fs.existsSync(buildDir)) {
		fs.rmdirSync(buildDir, { recursive: true });
	}
	fs.mkdirSync(buildDir);
};

const outlineToFolder = {
	Discomfort: 'Discomfort',
	Dumbfounded: 'Dumbfounded',
	Grin: 'Grin',
	Jovial: 'Jovial',
	'Phoneme L': 'Phoneme L',
	'Phoneme Oh': 'Phoneme Oh',
	'Phoneme Vuh': 'Phoneme Vuh',
	Rage: 'Rage',
	'Small Grin': 'Small Grin',
};

// read json data
let rawdata = fs.readFileSync(`./metadata/initial/_metadata.json`);
let data = JSON.parse(rawdata);

const traitsData = data.map((item) => {
	return item.attributes;
});

// console.log(traitsData.length);
const getImages = (_dir) => {
	try {
		return fs
			.readdirSync(_dir)
			.filter((item) => {
				let extension = path.extname(`${_dir}${item}`);
				if (extension == '.png' || extension == '.jpg') {
					return item;
				}
			})
			.map((i) => {
				return {
					filename: i,
					path: `${_dir}/${i}`,
				};
			});
	} catch {
		return null;
	}
};

const images = getImages(layersDir);
// console.log()

const loadImgData = async (_imgPath) => {
	return new Promise(async (resolve) => {
		const image = await loadImage(`${_imgPath}`);
		// console.log({ _imgPath, loadedImage: image });
		resolve({ imgPath: _imgPath, loadedImage: image });
	});
};

const draw = (_imgData) => {
	// let size = pixelFormat.ratio;
	let w = canvas.width;
	let h = canvas.height;
	ctx.imageSmoothingEnabled = false;
	// console.log('Here: ', _imgData.loadedImage);
	ctx.drawImage(_imgData.loadedImage, 0, 0, w, h);
};

const saveImage = (_filePath) => {
	fs.writeFileSync(`${_filePath}`, canvas.toBuffer('image/png'));
};

// console.log(Object.entries(traitsData));

const startCreating = async () => {
	let itemNum = 0;

	for (let j = 0; j < traitsData.length; j++) {
		let item = traitsData[j];
		let race = traitsData[j].find(
			(item) => item.trait_type === 'Outline'
		).value;
		let imageNum = data[j].edition;

		ctx.clearRect(0, 0, format.width, format.height);
		// console.log(`Canvas cleared`);
		itemNum++;

		for (let i = 0; i < item.length; i++) {
			const layer = item[i];
			const imagePath = `${layersDir}/${race}/${layer.trait_type}/${layer.value}.png`;
			const imgData = await loadImgData(imagePath);
			// console.log('Before drawing', imgData);
			await draw(imgData);
			// console.log('After drawing');
		}
		console.log(`Image ${imageNum} created!`);
		const filePath = `${buildDir}/${imageNum}.png`;
		// console.log(`File path ${filePath}`);
		await saveImage(filePath);
		console.log(`File ${itemNum} saved`);
	}
};

buildSetup();
startCreating();
