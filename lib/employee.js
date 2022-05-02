const db = require('../db/connection');
// Require console.table
require("console.table");

class Employee{
constructor(first_name, last_name, role_id, manager_id) {
this.first_name = first_name;
this.last_name = last_name;
this.role_id = role_id;
this.manager_id = manager_id;
} 
getEmployees() {
     db.query("SELECT * FROM employees", (err, res) => {
        if (err) throw err;
        console.table(res);
      });
    }

 getPotentialManagers() {
return  db.query("SELECT CONCAT (first_name,' ',last_name) AS name, id AS value FROM employees", (err, res) => {
        if (err) throw err;
        return res
      });
}
// async getPotentialManagers() {
//      return db.promise().query("SELECT CONCAT (first_name,' ',last_name) AS name, id AS value FROM employees").then(([rows,fields]) => {
//          return rows;
//      }).catch(console.log).then(()=> db.end());
//  }

post() {
    const sql = `INSERT INTO departments (department_name) VALUES (?)`;
    db.query(sql, this.department_name, (err, result) => {
        if (err) {
          throw err;
        }
        console.table(result);
        
      });
}
}
      module.exports = Employee