const db = require("../db/connection");
// Require console.table
require("console.table");


// department class
class Role {
  constructor(title, salary, department_id) {
    this.title = title;
    this.salary= salary;
    this.department_id = department_id;
  }
// all the methods that get something from the database and don't just change the database are promises because I couldn't get them to work any other way

//   gets all employee roles and puts them in a table
  get = new Promise(function (resolve, reject) {
    resolve(
      db
        .promise()
        .query("SELECT employee_roles.title role, employee_roles.salary, departments.department_name department FROM employee_roles LEFT JOIN departments ON employee_roles.department_id = departments.id")
        .then((rows, fields) => {
          return rows[0];
        })
    );
  });
  


// returns an array of potential employee roles
  getPotentialRoles = new Promise(function (resolve, reject) {
    resolve(
      db
        .promise()
        .query("SELECT title AS name, id as value FROM employee_roles")
        .then((rows, fields) => {
          return rows[0];
        })
    );
  });

//   adds a new role
  post() {
    const sql = `INSERT INTO employee_roles (title, salary, department_id) VALUES (?,?,?)`;
    const params = [this.title, this.salary, this.department_id]
    db.query(sql, params, (err, result) => {
      if (err) {
        throw err;
      }
    });
  }
}
// department = new Role
//  async function imtrying() {
//       test = await department.getPotentialManagers
// console.log( test)
// return;
//  }
//  imtrying()
module.exports = Role;
