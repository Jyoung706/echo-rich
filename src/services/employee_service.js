const employeeDao = require("../models/employee_Dao");

/**
 * @description 조회된 사원 정보 중에 전화번호를 나누는 기호를
 * . 대신 - 로 변경하는 함수
 * @param {object} employeeData 데이터 베이스에서 조회된 사원 정보
 * @returns 변환된 전화번호
 */
const changePhoneDash = (employeeData) => {
  return employeeData.phone_number.replace(/\./g, "-");
};

/**
 * @description 사원 정보 중 date 자료형에서 불필요한 TZ 부분을 잘라내는 함수
 * @param {Date} date 데이터 베이스에서 조회된 사원 정보중 Date자료형
 * @returns string
 */
const changeDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const employeeDetail = async (id) => {
  const data = await employeeDao.getSelectedEmployeeData(id);

  if (!data) {
    const error = new Error(`Not Exist Employee Id : ${id}`);
    error.statusCode = 404;
    throw error;
  }

  data.phone_number = changePhoneDash(data);

  const hireDate = data.hire_date;
  const changeHireDate = changeDate(hireDate);

  data.hire_date = changeHireDate;

  if (data.commission_pct == null) {
    data.commission_pct = 0;
  }

  return data;
};

const employeeHistory = async (id) => {
  let data = await employeeDao.getEmployeeHistory(id);

  if (data.length == 0) {
    const error = new Error(`Not Exist Employee id : ${id} history`);
    error.statusCode = 404;
    throw error;
  }

  data.map((value) => {
    value.phone_number = changePhoneDash(value);
    value.hire_date = changeDate(value.hire_date);
    value.start_date = changeDate(value.start_date);
    value.end_date = changeDate(value.end_date);
  });

  return data;
};

module.exports = { employeeDetail, employeeHistory };
