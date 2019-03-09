const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
	res.send("Hello, this is the homepage of SFU's secret chatapp");
}); 

module.exports = router;