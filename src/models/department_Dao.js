const pool = require("../../db_connection");

const getDepartmentLocation = async (id) => {
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
    [id]
  );
  return departmentData;
};

const getAllDepartmentLocation = async (id) => {
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

module.exports = { getDepartmentLocation, getAllDepartmentLocation };
