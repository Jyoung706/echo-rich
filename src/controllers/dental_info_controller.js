const dentalService = require("../services/dental_info_service");
const axios = require("axios");
const { StatusCodes } = require("http-status-codes");

/**
 * @description  경기도 치과(병원급) 조회 API
 * @param {Express.req} req  requset 인자 안에 page, size, name를 query로 받는다.
 * @param {Express.res} res statusCode 와 JSON 데이터 응답
 * @return null 값이 제외된 커스터마이징 JSON 데이터를 반환한다.
 */

const dentalInfoController = async (req, res) => {
  const key = process.env.DENTAL_API_KEY;
  const { page, size, name } = req.query;

  const { data } = await axios.get(
    `https://openapi.gg.go.kr/DentistryHospital?KEY=${key}&Type=json&pIndex=${page}&pSize=${size}&SIGUN_NM=${name}`
  );

  const errorCode = {
    "INFO-200": 404,
    "ERROR-290": 401,
    "INFO-300": 403,
    "ERROR-300": 400,
    "ERROR-310": 400,
    "ERROR-333": 400,
    "ERROR-336": 431,
    "ERROR-337": 403,
    "ERROR-500": 400,
    "ERROR-600": 400,
    "ERROR-601": 400,
  };

  if (data.RESULT) {
    const err = new Error(data.RESULT.MESSAGE);
    err.statusCode = errorCode[data.RESULT.CODE];
    throw err;
  }

  const customizedData = dentalService.dentalInfoService(data);

  res.status(StatusCodes.OK).json(customizedData);
};

module.exports = { dentalInfoController };
