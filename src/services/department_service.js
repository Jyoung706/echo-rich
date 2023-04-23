const departmentDao = require("../models/department_Dao");

const departmentLocationService = async (id) => {
  if (10 <= id) {
    const departmentData = await departmentDao.getDepartmentLocation(id);

    if (departmentData.length == 0) {
      const error = new Error(`Not Exist Department Id : ${id}`);
      error.statusCode = 404;
      throw error;
    }

    return departmentData;
  } else if (0 == id) {
    return await departmentDao.getAllDepartmentLocation();
  }
};

const departmentSalaryService = async (id, rate, conn) => {
  await departmentDao.updateDepartmentSalary(id, rate, conn);
};

module.exports = { departmentLocationService, departmentSalaryService };
