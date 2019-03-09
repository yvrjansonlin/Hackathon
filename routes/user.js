const express = require('express');
const router = express.Router();
const User = require('../models/user');

// BELOW IS REGISTER 

router.get('/register', function (req, res, next){
  res.render('register');
});

router.post('/register', function (req, res, next){
  User.findOne(req.body)
  .then((user) => {
    if (user) { 
        res.sendStatus(400, {err:'Sorry that Username already exists!'});
    } else {
        return User.create(req.body);
    } 

  })
  .then((user) => {
    req.session.user = req.body
    res.redirect('login'); 
  }) 
  .catch((err) => {
    res.send(500, err);
  });
});

// BELOW IS LOGIN


router.get('/login', function(req, res, next){
  res.render('login');
});

router.post('/login', function (req, res, next) {
  //expect username password
  User.findOne(req.body)
  .then((user) => {
    if (user) {
      if (req.body.password === user.password) {
        req.session.user = req.body
        res.redirect('/localchat');
      } else {
        res.send(400, {err: 'Incorrect password'});
      }
    }
  })
  .catch((err) => {
    res.send(500, err);
  });
});


// Wildcard route
router.get('/*', function(req, res, next) {
  res.render('login', { title: 'SFUapp' });
});

module.exports = router;