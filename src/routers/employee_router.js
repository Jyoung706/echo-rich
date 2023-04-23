const express = require("express");
const employeeController = require("../controllers/employee_controller");
const router = express.Router();
const errorHandler = require("../middleware/error_handler");

router.get("/detail/:id", errorHandler(employeeController.employeeDetail));

router.get("/history/:id", errorHandler(employeeController.employeeHistory));

module.exports = router;
