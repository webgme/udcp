'use strict';

var config = require('./config.webgme'),
    validateConfig = require('webgme/config/validator');

config.mongo.uri = 'mongodb://mongo:27017/udcp_cwl';

//for the monaco-editor
config.requirejsPaths['vs'] = './node_modules/monaco-editor/min/vs';
config.requirejsPaths['lodash'] = './node_modules/lodash-amd/main';
config.requirejsPaths['ansi-up'] = './node_modules/ansi_up/ansi_up';
config.core.overlayShardSize = 100000;

config.seedProjects.defaultProject = 'cwl_base';

//removing all seeds but CWL related ones
const oldbases = config.seedProjects.basePaths;
config.seedProjects.basePaths = [];
oldbases.forEach(base => {
    if (base.indexOf('/CWL') !== -1) {
        config.seedProjects.basePaths.push(base);
    }
});

//AZURE elements
config.authentication.logInUrl = 'http://cwl.localtest/aad';
config.authentication.enable = true;
config.authentication.allowGuests = false;
config.authentication.cookieId = 'udcp_cwl_access';
config.authentication.azureActiveDirectory.enable = true;
config.authentication.azureActiveDirectory.clientId = '***';
config.authentication.azureActiveDirectory.authority = '***';
config.authentication.azureActiveDirectory.clientSecret = '***';
config.authentication.azureActiveDirectory.cookieId = 'udcp_cwl_aad';
config.plugin.allowServerExecution = true;
config.plugin.suppressRegularNotifications = true;
config.authentication.azureActiveDirectory.redirectUri = 'https://cwl.localtest/aad';

validateConfig(config);
console.log('CONFIG:', config);
module.exports = config;
