const statisticss = require('./processStatistics');
const express = require("express");
const router = express.Router();
router.route('/getStats').put( statisticss.getStatistics);

module.exports = router;