// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions =  [
    {
        type: 'input',
        message: 'Enter your name: ',
        name: 'name'
    },
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
        type: 'list',
        message: 'Select a license for this project: ',
        choices: ['MIT License','GNU Public License','Apache License', 'None'],
        name: 'license'  
    },

    {
        type: 'input',
        message: 'Enter contributing details: ',
        name: 'contributing'  
    },
    {
        type: 'input',
        message: 'Enter testing procedures: ',
        name: 'tests'  
    },
    {
        type: 'input',
        message: 'Enter your GitHub username: ',
        name: 'github'  
    },
    {
        type: 'input',
        message: 'Enter your LinkedIn URL: ',
        name: 'linkedin'  
    },
    {
        type: 'input',
        message: 'Enter your contact email for questions: ',
        name: 'email'  
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     
    fs.writeFile(fileName, data, (err) => {
        if(err){
            console.log(err)
        } else {
            console.log('Your README file was successfully generated.')
        }
    })
} 


// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
    .then((data) => {

        const dataInput = generateMarkdown(data)
        writeToFile('README.md', dataInput)

    })
}

// Function call to initialize app
init();
