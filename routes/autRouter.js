const router = require('express').Router();
const { model } = require('mongoose');
const autControl = require('../controllers/autController');

router.post('/register', autControl.register)

router.post('/login', autControl.login)

router.post('/logout', autControl.logout)

router.post('/reflesh_token', autControl.generateAccessToken)

module.exports = router