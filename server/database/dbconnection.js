const mongoose=require('mongoose');
const config = require('config');
const logger=require('../logging/logger');

mongoose.Promise = global.Promise;

let dbConnection;
const connect = async () => {
  try {
    let connectionOptions = {
      user: process.env.MONGODB_USER,
      pass: process.env.MONGODB_PASSWORD,
      dbName: process.env.MONGODB_DB,
      useNewUrlParser: config.mongodb_settings.use_new_url_parser,
      useCreateIndex: config.mongodb_settings.use_create_index
    };
    // Establish a mongoose connection to mongodb
    dbConnection = await mongoose.connect(
      process.env.MONGODB_URL,
      connectionOptions,
      (error) => {
        if (error) {
          logger.error("Could not establish connection to database", {
            meta: error,
          });
          return;
        }
        logger.info("MongoDB connection was successful");
      }
    );
  } catch (err) {
    logger.error("Error connecting to the database", { meta: err });
  }
  return dbConnection;
};
require("./models/admin");

exports.dbConnection=()=>connect();
