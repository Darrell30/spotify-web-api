const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const config = require('../core/config');
const logger = require('../core/logger')('app');

// Join the database connection string
const connectionString = new URL(config.database.connection);
connectionString.pathname += config.database.name;

mongoose.connect(`${connectionString.toString()}`);

const db = mongoose.connection;
db.once('open', () => {
  logger.info('Successfully connected to MongoDB');
});

const dbExports = {};
const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(mongoose);
    dbExports[model.modelName] = model;
  });

module.exports = dbExports;
