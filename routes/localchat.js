const express = require('express');
const router = express.Router();
const Msg = require('../models/Messages');
const User = require('../models/user');

router.get('/', function(req, res, next){
	res.render('localchat');
});


router.get('/getall', function(req, res, next){
	var user = req.session.user
	Msg.findmessages()
	.then((msgs) => {
		res.send(200, msgs)
	});
});
module.exports = router;