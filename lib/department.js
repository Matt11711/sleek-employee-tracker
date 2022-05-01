
const db = require('../db/connection');
// Require console.table
require("console.table");

class Department{
constructor(name) {
this.department_name =name
} 
get() {
    db.query("SELECT * FROM departments", (err, res) => {
        if (err) throw err;
        console.table(res);
      });
    }

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
      module.exports = Department