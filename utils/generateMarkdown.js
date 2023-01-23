// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === 'MIT License'){
       return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]` 
    }
    else if(license === 'GNU Public License'){
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    }
    else if(license === 'Apache License'){
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    }
    else{
        return ''
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === 'MIT License'){
        return `https://opensource.org/licenses/MIT`
    }
    else if(license === 'GNU Public License'){
        return 'https://www.gnu.org/licenses/gpl-3.0'
    }
    else if(license === 'Apache License'){
        return `https://opensource.org/licenses/Apache-2.0`
    }
    else{
        return ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license === 'None'){
        return ''
    }
    else{
        return `## License
        License information for this project: 
        ${renderLicenseBadge(license)}
       (${renderLicenseLink(license)})`
        
    
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ### Created by: ${data.name}
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributing](#contributing)
  -[Tests](#test)
  -[Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  If you have any additional questions please contact me at ${data.email}.
  You can also access my LinkedIn and Github pages through the links below:
  
  ### Linkedin: ${data.linkedin}
  ### GitHub: https://github.com/${data.github}


`;
}

module.exports = generateMarkdown;