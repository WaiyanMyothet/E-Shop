const express=require('express');
const router=express.Router();
const {login,register}=require('../controllers/AuthController');

/**
 * @description POST /login
 * @access public
 */
router.route('/login').post(login);

/**
 * @description POST /register
 * @access public
 */

router.route('/register').post(register);


module.exports=router;