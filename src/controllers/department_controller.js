const pool = require("../../db_connection");
const departmentService = require("../services/department_service");
const { StatusCodes } = require("http-status-codes");

const departmentLocationController = async (req, res) => {
  const { id } = req.params;

  const departmentData = await departmentService.departmentLocationService(id);

  res.status(StatusCodes.OK).json(departmentData);
};

const departmentSalaryController = async (req, res) => {
  const { id, rate } = req.body;
  const conn = pool.getConnection();

  try {
    (await conn).beginTransaction();
    await departmentService.departmentSalaryService(id, rate, conn);
    (await conn).commit();
    res.status(StatusCodes.CREATED).json("request complete");
  } catch (error) {
    console.log(error);
    res.status(error.statusCode).json(error.message);
    (await conn).rollback();
  } finally {
    (await conn).release();
  }
};

module.exports = { departmentLocationController, departmentSalaryController };
