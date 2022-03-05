const fs = require('fs');

const generate = () => {
	let _metadata = [];
	for (let i = 0; i < 1000; i++) {
		// read initial metadata
		let rawdata = fs.readFileSync(`./${i + 1}.json`);
		let data = JSON.parse(rawdata);
		_metadata.push(data);
	}

	fs.writeFileSync(`./_metadata.json`, JSON.stringify(_metadata, null, 2));
};

generate();
