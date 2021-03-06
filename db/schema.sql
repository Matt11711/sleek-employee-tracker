DROP TABLE IF EXISTS employees;

DROP TABLE IF EXISTS employee_roles;

DROP TABLE IF EXISTS departments;

-- pretty straightforward file, this sets up the database so each of these create statements is a separate table
-- that has specific fields and requirements. Important notes are that employees references itself and employee_roles
-- and employee_roles references departments
CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE employee_roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL UNIQUE,
salary DECIMAL NOT NULL,
department_id INTEGER,
CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
role_id INTEGER NOT NULL,
manager_id INTEGER DEFAULT NULL REFERENCES employees(id) ON DELETE SET NULL,
CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES employee_roles(id) 
);

-- my query for whenever I need it
-- Select a.*, b.first_name FROM employees a LEFT JOIN employees b ON a.manager_id = b.id;