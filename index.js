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
let prompt = async () => {
 inquirer.prompt(
        {
          type: "list",
          name: "choice",
          message: "What would you like to do?",
          choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role","quit"]
        }).then(async (choice) => {
            if (choice.choice==="view all departments") {
                // show the departments then prompt again
                 let departmentsTable = await department.get
                 console.table(await department.get)
                prompt()
            }
            if (choice.choice==="view all roles") {
               let rolesTable = await role.get
               console.table(rolesTable)
                prompt()
            }
            if (choice.choice==="view all employees") {
                let employeesTable = await employee.get
                console.table(employeesTable)
                prompt()
            }
            if (choice.choice==="add a department") {
                addDepartment()
            }
            if (choice.choice==="add a role") {
                addRole()
            }
            if (choice.choice==="add an employee") {
             addEmployee()
            }
            if (choice.choice==="update an employee role") {
                updateRole()
            }
            if (choice.choice==="quit") {
                console.log("Ending app instance.");
                process.kill(process.pid, 'SIGTERM');
            }

        }) }

function addDepartment() {
    inquirer.prompt({ 
        type: "input",
    name: "department_name",
    message: "What is the new department?",
    validate: (answers) => {
        if (answers) {
          return true;
        } else {
          console.log("Please enter some text!");
          return false;
        }
      }})
      // makes a new department and then sends that department to the database
      .then(response => {
        console.log(response)
          let newDepartment = new Department(response.department_name)
      newDepartment.post()
      console.log("Department added!")
      prompt()
      }
          )
}

// adds an employee 
async function addEmployee() {
    // gets list of current employees
potentialManagers = await employee.getEmployeeList
potentialManagers.push({name:"No Manager", value: null})
// gets list of current roles
potentialRoles = await role.getPotentialRoles
// prompts for the 4 parameters that go into the employee table
inquirer.prompt([{
    type: "input",
    name: "first_name",
    message: "What is the employee's first name?",
    validate: (answers) => {
        if (answers) {
          return true;
        } else {
          console.log("Please enter some text!");
          return false;
        }
      }
},
{
    type: "input",
    name: "last_name",
    message: "What is the employee's last name?",
    validate: (answers) => {
        if (answers) {
          return true;
        } else {
          console.log("Please enter some text!");
          return false;
        }
      }
},
{ 
    type: "list",
    name: "role_id",
    message: "What is this employee's role?",
    choices: potentialRoles
},{ 
    type: "list",
    name: "manager_id",
    message: "Who is this employee's manager?",
    choices: potentialManagers
}])
// makes a new employee and then sends that employee to the database
.then(response => {
    let newEmployee = new Employee(response.first_name,response.last_name,response.role_id,response.manager_id)
newEmployee.post()
prompt()
}
    )
}

prompt();










