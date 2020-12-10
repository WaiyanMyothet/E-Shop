const express=require('express');
const router=express.Router();
const {login}=require('../controllers/AuthController');

/**
 * @description POST /login
 * @access public
 */
router.route('/login').post(login);

module.exports=router;