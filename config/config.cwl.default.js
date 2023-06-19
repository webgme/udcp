'use strict';

var config = require('./config.webgme'),
    validateConfig = require('webgme/config/validator');

// Add/overwrite any additional settings here
// config.server.port = 8099;
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
validateConfig(config);
console.log('CONFIG:', config);
module.exports = config;
