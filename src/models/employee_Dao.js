const pool = require("../../db_connection");

const getSelectedEmployeeData = async (id) => {
  const [data] = await pool.query(
    `SELECT employees.employee_id, emp_details_view.first_name, 
            emp_details_view.last_name, email, phone_number, 
            hire_date,emp_details_view.salary, emp_details_view.commission_pct, 
            department_name, job_title, city, state_province, country_name, region_name
     FROM hr.emp_details_view
     JOIN employees ON employees.employee_id = emp_details_view.employee_id
     WHERE emp_details_view.employee_id = ?;
    `,
    [id]
  );

  return data[0];
};

/**
 * @desc 특정 직원의 id, 근무 시작 날짜, 근무 종료 날짜를 가져오는 함수
 * @param {number} id
 */
const getEmployeeWorkingDate = async (id) => {
  const [data] = await pool.query(
    `SELECT employee_id, start_date, end_date 
         FROM job_history 
         WHERE employee_id = ?;
        `,
    [id]
  );

  return data;
};

module.exports = { getSelectedEmployeeData, getEmployeeWorkingDate };
