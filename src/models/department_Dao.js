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

const updateDepartmentSalary = (departmentId) => {
  pool.query(
    `UPDATE employees 
            SET salary = salary + (salary * 10/100)
            WHERE department_id = ?;
        `,
    [departmentId]
  );
};
module.exports = {
  getDepartmentLocation,
  getAllDepartmentLocation,
  updateDepartmentSalary,
};
