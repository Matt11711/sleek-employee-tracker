const db = require('./db/connection');
const inquirer = require("inquirer")
const Department = require("./lib/department");
const Role = require("./lib/role")
const Employee = require("./lib/employee")
const ExpandPrompt = require('inquirer/lib/prompts/expand');
const department = new Department
const role = new Role
const employee = new Employee


// prompt for user to choose their actions
const prompt = async () => {
 inquirer.prompt(
        {
          type: "list",
          name: "choice",
          message: "What would you like to do?",
          choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role","quit"],
        }).then(async (choice) => {
            if (choice.choice==="view all departments") {
                // show the departments then prompt again
                 department.get()
                prompt()
            }
            if (choice.choice==="view all roles") {
                role.get()
            }
            if (choice.choice==="view all employees") {
                const employeesTable = await employee.get
                console.table(employeesTable)
                prompt()
            }
            if (choice.choice==="add a department") {
                department.get()
            }
            if (choice.choice==="add a role") {
                department.get()
            }
            if (choice.choice==="add an employee") {
             addEmployee()
            }
            if (choice.choice==="update an employee role") {
                department.get()
            }
            if (choice.choice==="quit") {
                console.log("Ending app instance.");
                process.kill(process.pid, 'SIGTERM');
            }

        }) }

// department.get()

function addEmployee() {
    
}

prompt();










