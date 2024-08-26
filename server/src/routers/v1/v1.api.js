const router = require('express').Router();
const testr = require('./test.api')
router.use('/test', testr)

module.exports = router;
