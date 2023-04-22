const departmentDao = require("../models/department_Dao");

const departmentLocationService = async (id) => {
  if (10 <= id) {
    return await departmentDao.getDepartmentLocation(id);
  } else if (0 == id) {
    return await departmentDao.getAllDepartmentLocation(id);
  }
};

module.exports = { departmentLocationService };
