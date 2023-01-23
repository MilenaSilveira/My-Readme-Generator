// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')


// TODO: Create an array of questions for user input
const questions =  [
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
        choices: ['None','MIT License','GNU Public License v3.0','Apache License 2.0'],
        name: 'license'  
    },

    {
        type: 'input',
        message: 'Enter contribution specifications: ',
        name: 'contributing'  
    },
    {
        type: 'input',
        message: 'Enter testing procedures: ',
        name: 'test'  
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
