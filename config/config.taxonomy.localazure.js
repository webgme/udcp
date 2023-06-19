"use strict";

var config = require("./config.webgme"),
    validateConfig = require("webgme/config/validator");

config.mongo.uri = 'mongodb://mongo:27017/udcp_taxonomy';

config.requirejsPaths.react =
"./src/visualizers/widgets/TagCreator/lib/react.production.min";
validateConfig(config);

//AZURE elements
config.authentication.logInUrl = 'http://taxonomy.localtest/aad';
config.authentication.enable = true;
config.authentication.allowGuests = false;
config.authentication.cookieId = 'udcp_taxonomy_access';
config.authentication.azureActiveDirectory.enable = true;
config.authentication.azureActiveDirectory.clientId = '***';
config.authentication.azureActiveDirectory.authority = '***';
config.authentication.azureActiveDirectory.clientSecret = '***';
config.authentication.azureActiveDirectory.cookieId = 'udcp_taxonomy_aad';
config.plugin.allowServerExecution = true;
config.plugin.suppressRegularNotifications = true;
config.authentication.azureActiveDirectory.redirectUri = 'https://taxonomy.localtest/aad';

console.log('CONFIG:\n', JSON.stringify(config, null, 2));
module.exports = config;