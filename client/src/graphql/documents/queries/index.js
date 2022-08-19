const fs = require('fs');
const path = require('path');

module.exports.clientPage = fs.readFileSync(path.join(__dirname, 'clientPage.gql'), 'utf8');
module.exports.me = fs.readFileSync(path.join(__dirname, 'me.gql'), 'utf8');
module.exports.page = fs.readFileSync(path.join(__dirname, 'page.gql'), 'utf8');
module.exports.pageStatuses = fs.readFileSync(path.join(__dirname, 'pageStatuses.gql'), 'utf8');
module.exports.pages = fs.readFileSync(path.join(__dirname, 'pages.gql'), 'utf8');
module.exports.user = fs.readFileSync(path.join(__dirname, 'user.gql'), 'utf8');
module.exports.users = fs.readFileSync(path.join(__dirname, 'users.gql'), 'utf8');
