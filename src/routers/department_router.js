const express = require("express");
const departmentController = require("../controllers/department_controller");
const router = express.Router();
const errorHandler = require("../middleware/error_handler");

router.get(
  "/location/:id",
  errorHandler(departmentController.departmentLocationController)
);
router.patch("/salary", departmentController.departmentSalaryController);

module.exports = router;
