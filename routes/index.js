//this is the index for the routes and homeroutes

const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeroutes");


router.use("/api", apiRoutes);
router.use("/", homeRoutes);


module.exports = router;