const router = require('express').Router();
const postroutes = require("./postroutes");
const userRoutes = require("./userRoutes");

router.use('/postroutes', postroutes);
router.use('/users', userRoutes)

module.exports = router;