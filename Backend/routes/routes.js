const express = require('express');
const router = express.Router();
const {alljobsdata} = require('../controller/All_Jobs');
const {signup,signin} = require('../controller/Authentication');
const {checkcredential,checkcredentialsignin} = require('../Middleware/middleware')
router.get('/alljobs',alljobsdata);
router.post('/signup',checkcredential,signup);
router.post('/signin',checkcredentialsignin,signin);
module.exports = router