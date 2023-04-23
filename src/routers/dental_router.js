const express = require("express");
const dentalController = require("../controllers/dental_info_controller");
const router = express.Router();
const errorHandler = require("../middleware/error_handler");

router.get("", errorHandler(dentalController.dentalInfoController));

module.exports = router;
