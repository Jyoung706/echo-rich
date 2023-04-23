const pool = require("../../db_connection");
const departmentService = require("../services/department_service");
const { StatusCodes } = require("http-status-codes");

/**
 * @description 부서 및 위치 정보 조회 API
 * @param {Express.req} req req 인자안에 부서의 id를 params 로 받는다.
 * @param {Express.res} res statusCode 와 JSON 데이터 반환
 * @return 부서의 정보가 담긴 JSON 데이터를 반환
 *                 /id가 0일 경우 모든 부서의 데이터 반환
 */
const departmentLocationController = async (req, res) => {
  const { id } = req.params;

  const departmentData = await departmentService.departmentLocationService(id);

  res.status(StatusCodes.OK).json(departmentData);
};

/**
 * @description 특정 부서의 급여를 특정 비율로 인상 및 사원 정보 업데이트 API
 * @param {Express.req} req 부서의 id와 rate(인상 비율)를 body로 받는다.
 * @param {Express.res} res statusCode와 요청 성공 여부 메세지 반환
 * @return 요청 성공 여부 메세지
 */
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
