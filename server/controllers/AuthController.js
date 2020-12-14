const authService=require('../services/AuthService');
const logger=require('../logging/logger');
const login=(req,res)=>{
    
}
const register= async(req, res, next)=>{
   let response;
   try {
       response = await authService.signup(req.body);
       return res.status(response.httpStatus).send(response);
   }
   catch(err) {
       logger.error("Error in signup Controller", {meta: err});
       return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({httpStatus: httpStatus.INTERNAL_SERVER_ERROR, status: "failed", errorDetails: err});
   }
};
module.exports={
   login,
   register
}