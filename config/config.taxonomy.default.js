"use strict";

var config = require("./config.webgme"),
  validateConfig = require("webgme/config/validator");

// Add/overwrite any additional settings here
// config.server.port = 8090;
config.mongo.uri = 'mongodb://mongo:27017/udcp_taxonomy';

config.plugin.allowServerExecution = true;

config.requirejsPaths.react =
  "./src/visualizers/widgets/TagCreator/lib/react.production.min",
  validateConfig(config);

console.log('CONFIG:\n',JSON.stringify(config, null, 2));
module.exports = config;