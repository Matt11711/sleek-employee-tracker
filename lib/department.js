const db = require("../db/connection");
// Require console.table
require("console.table");


// department class
class Department {
  constructor(name) {
    this.department_name = name;
  }
// all the methods that get something from the database and don't just change the database are promises because I couldn't get them to work any other way

//   gets all departments and puts them in a table
  
  get = new Promise(function (resolve, reject) {
    resolve(
      db
        .promise()
        .query("SELECT * FROM departments")
        .then((rows, fields) => {
          return rows[0];
        })
    );
  });


// returns an array of potential departments
  getPotentialDepartments = new Promise(function (resolve, reject) {
    resolve(
      db
        .promise()
        .query("SELECT department_name AS name, id as value FROM departments")
        .then((rows, fields) => {
          return rows[0];
        })
    );
  });

//   adds a new department
  post() {
      console.log(this.department_name)
    const sql = `INSERT INTO departments (department_name) VALUES (?)`;
    db.query(sql, this.department_name, (err, result) => {
      if (err) {
        throw err;
      }
    });
  }
}
// department = new Department
//  async function imtrying() {
//       test = await department.getPotentialManagers
// console.log( test)
// return;
//  }
//  imtrying()
module.exports = Department;
