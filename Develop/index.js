// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title of your project?",
    },
    {
        name: "description",
        type: "input",
        message: "Please describe your project.",
    },{
        name: "installation",
        type: "input",
        message: "How do you install your project?",
    }, {
        name: "usage",
        type: "input",
        message: "How do you use your project?",
    }, {
        type: 'list',
        name: 'license',
        message: 'Choose a License',
        choices: [
         'MIT License',
           'Mozilla Public License 2.0',
           'Eclipse Public License',
           'The Perl License',
           'Open Database License',
           'None'
        ],
        initial: 1
      }, {
        name: "contributing",
        type: "input",
        message: "How can others contribute to your project?",
    }, {
        name: "tests",
        type: "input",
        message: "Please provide examples on how to test your project.",
    }, {
        name: "github",
        type: "input",
        message: "What is your github username?",
    },
    {
        name: "email",
        type: "input",
        message: "What is your email?",
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
