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
const getEmployeeHistory = async (id) => {
  const [data] = await pool.query(
    `SELECT jh.employee_id,em.first_name, em.last_name,em.hire_date ,jh.start_date,
            jh.end_date, em.first_name, em.last_name, em.email, em.phone_number,
            j.job_title, d.department_name, l.street_address, l.postal_code, 
            l.city, l.state_province, c.country_name, r.region_name
    FROM job_history jh
    JOIN employees em ON em.employee_id = jh.employee_id
    JOIN jobs j ON jh.job_id = j.job_id
    JOIN departments d ON jh.department_id = d.department_id
    JOIN locations l ON d.location_id = l.location_id
    JOIN countries c ON l.country_id = c.country_id
    JOIN regions r ON c.region_id = r.region_id
    WHERE jh.employee_id = ?;
        `,
    [id]
  );

  return data;
};

module.exports = { getSelectedEmployeeData, getEmployeeHistory };
