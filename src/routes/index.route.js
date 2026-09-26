const express = require('express');
const router = express.Router();

const toolbarRoutes = require('./toolbox.route.js');

router.use("/tools",toolbarRoutes);

// router.use("/user", userRoutes); //example for other routes

module.exports = router;