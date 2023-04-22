const express = require("express");
const dentalInfoController = require("../controllers/dental_info_controller");
const router = express.Router();

router.get("", dentalInfoController);

module.exports = router;
