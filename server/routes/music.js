//all the routes will be added to routes

const express = require("express");
const router = express.Router();
const {music} = require('../controllers/music');



router.get('/music', music);

module.exports=router;