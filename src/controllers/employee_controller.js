const employeeService = require("../services/employee_service");
const { StatusCodes } = require("http-status-codes");

/**
 * @description 특정 사원의 현재 정보를 조회 API
 * @param {Express.req} req 사원의 id 를 params로 받는다.
 * @param {Express.res} res statusCode와 사원의 데이터를 반환한다.
 * @return 조회된 사원의 현재 정보
 */
const employeeDetail = async (req, res) => {
  const { id } = req.params;

  const employeeData = await employeeService.employeeDetail(id);

  res.status(StatusCodes.OK).json(employeeData);
};

/**
 * @description 특정 사원의 이력 정보 조회 API
 * @param {Express.req} req 사원의 id를 params로 받는다.
 * @param {Express.res} res statusCode와 사원의 이력 데이터를 반환한다.
 * @return 조회된 사원의 이력 정보
 */
const employeeHistory = async (req, res) => {
  const { id } = req.params;

  const employeeHistory = await employeeService.employeeHistory(id);

  res.status(StatusCodes.OK).json(employeeHistory);
};
module.exports = { employeeDetail, employeeHistory };
