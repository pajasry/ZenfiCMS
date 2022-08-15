const fs = require('fs');
const path = require('path');

module.exports.createPage = fs.readFileSync(path.join(__dirname, 'createPage.gql'), 'utf8');
module.exports.createPassword = fs.readFileSync(path.join(__dirname, 'createPassword.gql'), 'utf8');
module.exports.createUser = fs.readFileSync(path.join(__dirname, 'createUser.gql'), 'utf8');
module.exports.deletePage = fs.readFileSync(path.join(__dirname, 'deletePage.gql'), 'utf8');
module.exports.login = fs.readFileSync(path.join(__dirname, 'login.gql'), 'utf8');
module.exports.resetPassword = fs.readFileSync(path.join(__dirname, 'resetPassword.gql'), 'utf8');
module.exports.updatePage = fs.readFileSync(path.join(__dirname, 'updatePage.gql'), 'utf8');
