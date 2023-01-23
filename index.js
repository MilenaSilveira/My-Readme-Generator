// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./generateMarkdown')


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
    let dataInput = genMarkdown(data);
    
    fs.writeFileSync(fileName, dataInput, err =>{
        if (err) {
            return console.log(err)
        }
    })
}


// TODO: Create a function to initialize app
async function init() {
    inquirer.createPromptModule(questions)
    .then(data => {
        writeToFile('README.md', data);
    })
}

// Function call to initialize app
init();
