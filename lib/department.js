const db = require("../db/connection");
// Require console.table
require("console.table");

class Department {
  constructor(name) {
    this.department_name = name;
  }
  get() {
    db.query("SELECT * FROM departments", (err, res) => {
      if (err) throw err;
      console.table(res);
      console.log(res);
    });
  }

  



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
  post() {
    const sql = `INSERT INTO departments (department_name) VALUES (?)`;
    db.query(sql, this.department_name, (err, result) => {
      if (err) {
        throw err;
      }
    });
  }
}
department = new Department
 async function imtrying() {
      test = await department.getPotentialManagers
console.log( test)
return;
 }
 imtrying()
module.exports = Department;
