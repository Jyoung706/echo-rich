const express = require("express");
const employeeController = require("../controllers/employee_controller");
const router = express.Router();

router.get("/detail/:id", employeeController.employeeDetail);

router.get("/history/:id", employeeController.employeeHistory);

module.exports = router;
