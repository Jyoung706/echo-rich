const express = require("express");
const dentalController = require("../controllers/dental_info_controller");
const router = express.Router();

router.get("", dentalController.dentalInfoController);

module.exports = router;
