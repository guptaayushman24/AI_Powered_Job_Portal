const express = require('express');
const router = express.Router();
const {alljobsdata} = require('../controller/All_Jobs');
const {signup,signin} = require('../controller/Authentication');
const {userprofile,getprofileskill} = require('../controller/Profile_controller')
const {checkcredential,checkcredentialsignin,checkprofilecredential} = require('../Middleware/middleware')
router.get('/alljobs',alljobsdata);
router.post('/signup',checkcredential,signup);
router.post('/signin',checkcredentialsignin,signin);
router.post('/userprofile',checkprofilecredential,userprofile);
router.post('/userskills',getprofileskill);
module.exports = router