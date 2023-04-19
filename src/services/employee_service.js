const employeeDao = require("../models/employee_Dao");

const employeeDetail = async (id) => {
  const data = await employeeDao.getSelectedEmployeeData(id);

  const changePhoneDash = data.phone_number.replace(/\./g, "-");

  data.phone_number = changePhoneDash;

  const hireDate = data.hire_date;
  const changeHireDate = hireDate.toISOString().slice(0, 10);

  data.hire_date = changeHireDate;

  if (data.commission_pct == null) {
    data.commission_pct = 0;
  }

  return data;
};

const employeeHistory = async (id) => {
  let date = await employeeDao.getEmployeeWorkingDate(id);

  if (date.length > 1) {
    date.map((value) => {
      value.date = { start_date: value.start_date, end_date: value.end_date };
    });
  }

  console.log(date);
};

module.exports = { employeeDetail, employeeHistory };
