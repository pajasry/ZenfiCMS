const fs = require('fs');
const path = require('path');

module.exports.page = fs.readFileSync(path.join(__dirname, 'page.gql'), 'utf8');
module.exports.pages = fs.readFileSync(path.join(__dirname, 'pages.gql'), 'utf8');
