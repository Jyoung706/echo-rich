const express = require("express");
const router = express.Router();
const employeeRouter = require("./employee_router");

router.use("/employees", employeeRouter);

module.exports = router;
