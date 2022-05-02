-- Used with permission from Christina

-- Set up seed data for deparments
INSERT INTO
  departments (department_name)
VALUES
  ("Marketing"),
  ("Legal"),
  ("Technology"),
  ("DEI"),
  ("HR"),
  ("Finance");
-- Set up seed data for role
INSERT INTO
  employee_roles (title, salary, department_id)
VALUES
  ("Broker", 55000, 6),
  ("Lawyer", 100000, 2),
  ("HR Manager", 62000, 5),
  ("Chief Diversity Officer", 120000, 4),
  ("Intern", 1000, 1);
-- Set up seed data for employee details
INSERT INTO
  employees (first_name, last_name, role_id, manager_id)
VALUES
  ("Kyle", "Barker", 1, NULL),
  ("Maxine", "Shaw", 2, NULL),
  ("Synclaire", "Jones", 3, 4),
  ("Khadijah", "James", 4, NULL),
  ("Ivan", "Ennis", 5, 4);