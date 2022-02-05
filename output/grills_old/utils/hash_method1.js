//https://www.npmjs.com/package/imghash
const { imageHash } = require('image-hash');

//local file
imageHash('../img/1.png', 16, true, (error, data) => {
	if (error) throw error;
	console.log(data);
});

// // remote file simple
// imageHash(
// 	'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/7F76/production/_95703623_mediaitem95703620.jpg',
// 	16,
// 	true,
// 	(error, data) => {
// 		if (error) throw error;
// 		console.log(data);
// 		// 0773063f063f36070e070a070f378e7f1f000fff0fff020103f00ffb0f810ff0
// 	}
// );

// // remote file with requestjs config object
// const config = {
// 	uri: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/7F76/production/_95703623_mediaitem95703620.jpg',
// };

// imageHash(config, 16, true, (error, data) => {
// 	if (error) throw error;
// 	console.log(data);
// 	// 0773063f063f36070e070a070f378e7f1f000fff0fff020103f00ffb0f810ff0
// });

//Buffer
// const fBuffer = fs.readFileSync(
// 	__dirname + '/example/_95695591_tv039055678.jpeg'
// );
// imageHash(
// 	{
// 		ext: 'image/jpeg',
// 		data: fBuffer,
// 	},
// 	16,
// 	true,
// 	(error, data) => {
// 		if (error) throw error;
// 		console.log(data);
// 		// 0773063f063f36070e070a070f378e7f1f000fff0fff020103f00ffb0f810ff0
// 	}
// );

//Buffer, without ext arg
// const fBuffer = fs.readFileSync(
// 	__dirname + '/example/_95695591_tv039055678.jpeg'
// );
// imageHash(
// 	{
// 		data: fBuffer,
// 	},
// 	16,
// 	true,
// 	(error, data) => {
// 		if (error) throw error;
// 		console.log(data);
// 		// 0773063f063f36070e070a070f378e7f1f000fff0fff020103f00ffb0f810ff0
// 	}
// );
