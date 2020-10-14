//require statements
const inquirer = require('inquirer');
const mysql = require('mysql');
const logo = require('asciiart-logo');
const choice = require('inquirer/lib/objects/choice');
const { start } = require('repl');
var express = require('express');
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Candolio94*",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    init();

});

//function init()
function init() {
    const logoText = logo({ name: "Employee Manager" }).render();
    console.log(logoText);

    //load our prompts
    loadPrompts();
}

function loadPrompts(answer) {
    inquirer.prompt
        ([
            {
                type: 'list',
                name: 'toDo',
                message: 'What would you like to do?',
                choices: [
                    'View All Employees', 'View By Department', 'View By Role', 'Add Employee', 'Add Department', 'Add Role', 'Update an Employee Role',]
            },
        ])

        .then(answers => {

            if (answers.toDo === 'View All Employees') {
                viewAllEmployees();
            }
            if (answers.toDo === 'View By Department') {
                viewByDepartment();
            }
            if (answers.toDo === 'View By Role') {
                viewByRole();
            }
            if (answers.toDo === 'Add Employee') {
                newEmployee();
            }
            if (answers.toDo === 'Add Department') {
                newDepartment();
            }
            if (answers.toDo === 'Add Role') {
                newRole();
            }
            if (answers.toDo === 'Update an Employee Role') {
                updateRole();
            }
        })
}

function viewAllEmployees() {
    let query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name FROM employee INNER JOIN role ON (employee.role_id = role.id) INNER JOIN department ON (role.department_id = department.id)";
    connection.query(query, function(err, res){
        if (err) throw err;
        console.log("\nHere are all employees\n\n==============\n");
        console.table(res);
        console.log("\n==============\n");
        loadPrompts();
    });
}
    


function viewByDepartment() {
    //function that renders all departments and which employees belong to which within a table (console.table)
}

function viewByRole() {
    //function that renders all roles and which employees belong to which within a table (console.table)
}

//funcion that creates a new employee with the input data
function newEmployee(answers) {
    inquirer.prompt([
        {
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "manager_id",
            message: "Who is the employee's manager?",
            choices: ['Mike Chan', 'Kevin Tupik', 'Malia Brown', 'Tom Allen']
        },
        {
            type: "list",
            name: "role_id",
            message: "What is the employee's role?",
            choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
        }
    ])
        .then(answers => {
            console.log(answers);
        });
    //push answers into employee db, and have them immediately return within the view employees table  using db functions.
}

function newDepartment() {
//function that creates a new department and add it into the database using db functions
}

function newRole() {
//function that creates a new role and adds it into the database  using db functions
}

function updateRole() {
//function that deleted an employee's current role assignment and replaced it with an updated one  using db functions
}



