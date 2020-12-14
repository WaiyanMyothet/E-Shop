const User = require("../database/models/user");
//const config = require("config");
const jwt=require('jsonwebtoken');
const logger=require('../logging/logger');
const httpStatus=require('http-status-codes');
const cryptoGen=require('../authentication/cryptoGen');

const signup = async (userObj) => {
  let result = {};
  //console.log(cryptoGen.createPasswordHash(userObj.password))
  try {
    let user = new User({
      email: userObj.email,
      password: cryptoGen.createPasswordHash(userObj.password),
      name: userObj.name,
      //emailConfirmationToken: await cryptoGen.generateRandomToken(),
      //referral_token: await cryptoGen.generateFriendlyToken(4),
    });

    user = await user.save();
    if (!user) {
      result = {
        httpStatus: httpStatus.StatusCodes.BAD_REQUEST,
        status: "failed",
        errorDetails: httpStatus.getStatusText(httpStatus.BAD_REQUEST),
      };
      return result;
    }

    // If we have gotten here, the request must be successful, so respond accordingly
    logger.info("A new user has signed up", { meta: user });
    // emailService.emailEmailConfirmationInstructions(
    //   user.email,
    //   user.name,
    //   user.emailConfirmationToken
    // );
    let responseObj = { email: user.email, name: user.name };
    const token = jwt.sign(responseObj, process.env.JWT_SECRET, {
        expiresIn: 18000
    });
    result = {
      httpStatus: httpStatus.StatusCodes.OK,
      token:`Bearer ${token}`,
      responseData: responseObj,
    };
    return result;
  } catch (err) {
    logger.error("Error in signup Service", { meta: err });
    result = {
      httpStatus: httpStatus.StatusCodes.BAD_REQUEST,
      status: "failed",
      errorDetails: err,
    };
    return result;
  }
};
module.exports = { signup };
