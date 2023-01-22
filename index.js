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
        name: 'description'  
    },
    {
        type: 'input',
        message: 'Enter installation instructions: ',
        name: 'installation'  
    },
    {
        type: 'input',
        message: 'Enter usage information: ',
        name: 'usage'  
    },
    {
        type: 'input',
        message: 'Enter credits to collaborators: ',
        name: 'credits'  
    },
    {
        type: 'list',
        choices: ['None','MIT License','GNU Public License v3.0','Apache License 2.0'],
        name: 'license'  
    },



])
// TODO: Create an array of questions for user input
// const questions = [];

.then(async response => {
    data.title = response.title;
    data.description = response.description;
    data.installation = response.installation;
    data.usage = response.usage;
    data.credits = response.credits;
    data.license = response.license;
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
