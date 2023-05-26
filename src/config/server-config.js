const dotenv = require("dotenv");

// After calling config() method of dotenv object, all the .env variables are stored into the env object which is inside the global object "process" -> process.env.VARIABLE_NAME
dotenv.config();

// We will export all the env variables from this file and import wherever they are needed. For now we are exporting PORT variable.
module.exports = {
  PORT: process.env.PORT,
};

/*
* Winston - Whenever we will be having some coding implementation, definately there will be some bugs and we would like to have good logging information coming out of bugs, so that we will be able to debug it well, inorder to that there is package called as winston.
 */