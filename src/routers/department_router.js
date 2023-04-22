const express = require("express");
const departmentController = require("../controllers/department_controller");
const router = express.Router();

router.get("/location/:id", departmentController.departmentLocationController);
router.patch("/salary", departmentController.departmentSalaryController);

module.exports = router;
