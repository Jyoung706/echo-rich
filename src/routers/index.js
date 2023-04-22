const express = require("express");
const router = express.Router();
const employeeRouter = require("./employee_router");
const deparmentRouter = require("./department_router");

router.use("/employees", employeeRouter);
router.use("/departments", deparmentRouter);

module.exports = router;
