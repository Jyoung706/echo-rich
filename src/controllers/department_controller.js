const departmentService = require("../services/department_service");
const { StatusCodes } = require("http-status-codes");

const departmentLocationController = async (req, res) => {
  const { id } = req.params;

  const departmentData = await departmentService.departmentLocationService(id);

  res.status(StatusCodes.OK).json(departmentData);
};

module.exports = { departmentLocationController };
