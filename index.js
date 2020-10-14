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
                    'View All Employees', 'View By Department', 'View By Role', 'View By Role', 'Add Employee', 'Add Department', 'Add Role', 'Update an Employee Role',],
            },
        ])

        .then(answers => {

            if (answers.toDo === 'Add Employee') {
                newEmployee();
            }
        })
}



function newEmployee() {
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
            name: "manager_id",
            message: "What is the employee's manager?"
        },
        {
            name: "role_id",
            message: "What is the employee's role?"
        }
    ])
        .then(answers => {
            console.log(answers.first_name);
        });

}





