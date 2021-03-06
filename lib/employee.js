const db = require("../db/connection");
// Require console.table
require("console.table");
// employee class
class Employee {
  constructor(first_name, last_name, role_id, manager_id) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.role_id = role_id;
    this.manager_id = manager_id;
  }
  // all the methods that get something from the database and don't just change the database are promises because I couldn't get them to work any other way
  // shows all employees in a table
  get() {
    return new Promise(function (resolve, reject) {
      resolve(
        db
          .promise()
          .query(
            "SELECT employees.id,employees.first_name, employees.last_name, departments.department_name AS 'department', employee_roles.title AS 'role', employee_roles.salary, CONCAT (manager.first_name, ' ', manager.last_name) AS 'manager'  FROM employees LEFT JOIN employee_roles ON employees.role_id = employee_roles.id LEFT JOIN departments ON employee_roles.department_id = departments.id LEFT JOIN employees manager ON manager.id = employees.manager_id"
          )
          .then((rows, fields) => {
            return rows[0];
          })
          .catch((err) => {
            throw err;
          })
      );
    });
  }
  // returns an array of all potential employees for the inquirer prompt
  getEmployeeList() {
    return new Promise(function (resolve, reject) {
      resolve(
        db
          .promise()
          .query(
            "SELECT CONCAT (first_name,' ',last_name) AS name, id AS value FROM employees"
          )
          .then((rows, fields) => {
            return rows[0];
          })
          .catch((err) => {
            throw err;
          })
      );
    });
  }

  // adds an employee, given the necessary parameters
  post() {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    const params = [
      this.first_name,
      this.last_name,
      this.role_id,
      this.manager_id,
    ];
    db.query(sql, params, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(`Employee added!`);
    });
  }

  // updates the role of an employee based on its id and the new role id
  update(roleId, id) {
    const sql = "UPDATE employees SET role_id = ? WHERE id = ?";
    const params = [roleId, id];
    db.query(sql, params, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(`Employee role updated!`);
    });
  }
}

module.exports = Employee;
