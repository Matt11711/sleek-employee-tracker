
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
        console.log(res)
      });
    }

    // async getPotentialManagers() {
    //     return db.promise().query("SELECT CONCAT (first_name,' ',last_name) AS name, id AS value FROM employees").then(([rows,fields]) => {
    //         return rows;
    //     }).catch(console.log).then(()=> db.end());
    // }

getPotentialDepartments = new Promise(function(resolve,reject) {
//    let promiseTest = 


   resolve(db.promise().query("SELECT department_name AS name, id as value FROM departments").then((rows,fields) => {
        // console.log(rows[0]) 
        return rows[0]
     }))
    //  return promiseTest
//       {
//     if (err) {
//         throw err;
//       }
//       console.log(res)
//       potentialDepartments = res.rows
//    })
// await potentialDepartments
//    return potentialDepartments
})
post() {
    const sql = `INSERT INTO departments (department_name) VALUES (?)`;
    db.query(sql, this.department_name, (err, result) => {
        if (err) {
          throw err;
        }
        // console.table(result);
        
      });
}
}
department = new Department
 async function imtrying() {
      test = await department.getPotentialDepartments
console.log( test)
return;
 }
 imtrying()
      module.exports = Department