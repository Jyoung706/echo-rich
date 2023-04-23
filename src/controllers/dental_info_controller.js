const axios = require("axios");
const { StatusCodes } = require("http-status-codes");

const dentalInfo = async (req, res) => {
  const key = process.env.DENTAL_API_KEY;
  const { page, size, name } = req.query;

  console.log(page, size, name);

  const { data } = await axios.get(
    `https://openapi.gg.go.kr/DentistryHospital?KEY=${key}&Type=json&pIndex=${page}&pSize=${size}&SIGUN_NM=${name}`
  );

  console.log(data);
  //console.log("수원시 병원 데이터 : ", data);

  res.status(StatusCodes.OK).json(data);
};

module.exports = { dentalInfo };
