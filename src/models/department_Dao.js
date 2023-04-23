const pool = require("../../db_connection");

const getDepartmentLocation = async (departmentId) => {
  const [departmentData] = await pool.query(
    `SELECT dp.department_id,dp.department_name, lc.street_address, 
                lc.postal_code, lc.city, lc.state_province,
                cr.country_name, rg.region_name
         FROM departments dp
         JOIN locations lc ON dp.location_id = lc.location_id
         JOIN countries cr ON lc.country_id = cr.country_id
         JOIN regions rg ON cr.region_id = rg.region_id
         WHERE dp.department_id = ?;
        `,
    [departmentId]
  );
  return departmentData;
};

const getAllDepartmentLocation = async () => {
  const [departmentData] = await pool.query(
    `SELECT dp.department_id,dp.department_name, lc.street_address, 
                lc.postal_code, lc.city, lc.state_province,
                cr.country_name, rg.region_name
         FROM departments dp
         JOIN locations lc ON dp.location_id = lc.location_id
         JOIN countries cr ON lc.country_id = cr.country_id
         JOIN regions rg ON cr.region_id = rg.region_id;
        `
  );
  return departmentData;
};

const updateDepartmentSalary = async (departmentId, rate, conn) => {
  const [department] = await (
    await conn
  ).query(
    `SELECT department_id FROM departments WHERE department_id = ?;
      `,
    [departmentId]
  );

  if (!department.length) {
    const error = new Error("Not Exist Department Id");
    error.statusCode = 404;
    throw error;
  }

  (await conn).query(
    `UPDATE employees 
                    SET salary = salary + (salary * ?/100)
                    WHERE department_id = ?;
                `,
    [rate, departmentId]
  );

  if (rate > 100) {
    const error = new Error("rate can't exceed 100");
    error.statusCode = 403;
    throw error;
  }
};
module.exports = {
  getDepartmentLocation,
  getAllDepartmentLocation,
  updateDepartmentSalary,
};
