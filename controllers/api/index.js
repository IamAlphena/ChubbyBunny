const router = require('express').Router();
const postroutes = require("./postroutes");

router.use('/postroutes', postroutes);

module.exports = router;