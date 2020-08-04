// Create multiple route files and import functions from controllers

const express = require('express'),
	router = express.Router(),
	controller = require('../app/controllers/controller');
	
// @route		GET /routes/test
// @desc		test route
// @params	none
// @return	-
// @permission	all
// TODO			-
router.get("/test", controller.test);
router.post('/login', controller.login);
router.post('/signup', controller.signup);
router.post('/changePassword', controller.changePassword);
router.get('/getUser', controller.getUser);
router.post('/updateUser', controller.updateUser);
router.get('/getUsers', controller.getUsers);
router.get('/about', controller.about);
module.exports = router;