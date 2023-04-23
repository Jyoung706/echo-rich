const dentalService = require("../services/dental_info_service");
const axios = require("axios");
const { StatusCodes } = require("http-status-codes");

const dentalInfoController = async (req, res) => {
  const key = process.env.DENTAL_API_KEY;
  const { page, size, name } = req.query;

  const { data } = await axios.get(
    `https://openapi.gg.go.kr/DentistryHospital?KEY=${key}&Type=json&pIndex=${page}&pSize=${size}&SIGUN_NM=${name}`
  );

  const customizedData = dentalService.dentalInfoService(data);

  res.status(StatusCodes.OK).json(customizedData);
};

module.exports = { dentalInfoController };
