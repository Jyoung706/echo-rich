const employeeDao = require("../models/employee_Dao");

const changePhoneDash = (employeeData) => {
  return employeeData.phone_number.replace(/\./g, "-");
};

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
