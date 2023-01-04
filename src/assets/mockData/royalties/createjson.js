//import sales from './July2022.csv';

let csvToJson = require('convert-csv-to-json');

let fileInputName = 'July2022.csv'
let fileOutputName = 'July2022sales.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);