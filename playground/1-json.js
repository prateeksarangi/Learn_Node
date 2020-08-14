const fs = require('fs');

const data = JSON.parse(fs.readFileSync('1-json.json').toString());
// console.log(data);

data.name = 'Prateek';
data.age = 21;

const dataJSON = JSON.stringify(data);
// console.log(dataJSON);
fs.writeFileSync('1-json.json', dataJSON);
