const crypto = require("crypto");
const bCrypt = require("bcryptjs");

const generateRandomToken = () => {
  return new Promise((resolve, reject) => {
    // generate reset token
    crypto.randomBytes(20, (err, buf) => {
      if (err) {
        return reject(err);
      }
      const token = buf.toString("hex");
      resolve(token);
    });
  });
};

const generateFriendlyToken = (length = 4) => {
  return new Promise((resolve, reject) => {
    // generate reset token
    crypto.randomBytes(length, (err, buf) => {
      if (err) {
        return reject(err);
      }
      const token = buf.toString("hex");
      resolve(token);
    });
  });
};

const createPasswordHash = (password) => {
  return bCrypt.hashSync(password,bCrypt.genSaltSync(10));
  //return bCrypt.hashSync(password, bCrypt.genSalt(10), null);
};

module.exports={generateFriendlyToken,generateRandomToken,createPasswordHash};
