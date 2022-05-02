const db = require('./db/connection');
const inquirer = require("inquirer")
const Department = require("./lib/department")
const department = new Department


// new Department("testing").post()

const test = () => {
 inquirer.prompt(
        {
          type: "list",
          name: "choice",
          message: "What would you like to do?",
          choices: ["See Departments", "Intern", "No one else"],
        }).then((choice) => {
            if (choice.choice==="See Departments") {
                department.get()
            }
        }) }

// department.get()

test();










