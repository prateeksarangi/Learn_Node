const fs = require('fs');
fs.appendFileSync('notes.txt', "Data to be appended!!\n", 'utf-8');
