// TODO: Include packages needed for this application
const inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'input',
        message: 'Enter your project title: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a short description of your project: ',
        name: 'title'  
    }

])
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
