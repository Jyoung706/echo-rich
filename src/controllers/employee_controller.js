const employeeService = require("../services/employee_service");
const { StatusCodes } = require("http-status-codes");

const employeeDetail = async (req, res) => {
  const { id } = req.params;

  const employeeData = await employeeService.employeeDetail(id);

  res.status(StatusCodes.OK).json(employeeData);
};

const employeeHistory = async (req, res) => {
  const { id } = req.params;

  const employeeHistory = await employeeService.employeeHistory(id);

  res.status(StatusCodes.OK).json(employeeHistory);
};
module.exports = { employeeDetail, employeeHistory };
