const express = require("express");
const router = express.Router();
const employeeRouter = require("./employee_router");
const deparmentRouter = require("./department_router");
const dentalRouter = require("./dental_router");

router.use("/employees", employeeRouter);
router.use("/departments", deparmentRouter);
router.use("/dental-info", dentalRouter);

module.exports = router;
