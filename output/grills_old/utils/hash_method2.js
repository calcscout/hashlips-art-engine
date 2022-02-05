//https://github.com/pwlmaciejewski/imghash

const imghash = require('imghash');

const hash1 = imghash.hash('../img/1.png').then((data) => console.log(data));
console.log(hash1); // "f884c4d8d1193c07"

// Custom hex length and result in binary
const hash2 = imghash
	.hash('../img/1.png', 4, 'binary')
	.then((data) => console.log(data));
console.log(hash2); // "1000100010000010"
