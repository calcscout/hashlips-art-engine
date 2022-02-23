var XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('../xlsx/opensea_scraping_ids.xlsx');

const worksheet = workbook.Sheets['Result'];
var jsa = XLSX.utils.sheet_to_json(worksheet);

fs.writeFileSync(`../json/opensea_ids.json`, JSON.stringify(jsa, null, 2));
