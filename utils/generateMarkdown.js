// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(license === 'MIT License'){
    return' ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Mozilla Public License 2.0'){
    return ' ![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  }else if (license === 'Eclipse Public License'){
    return ' ![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)'
  }else if(license === 'The Perl License'){
    return ' ![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)'
  }else if(license === 'Open Database License'){
    return ' ![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)'
  }else{
    return ' '
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None'){
    return `* [License](#license)`
  }else{
    return ' '
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
    return`## License\nThis project is licensed under the ${license} license.`
  }else{
    return ' '
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`# ${data.title}   
  ${renderLicenseBadge(data.license)}
## Description

${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions please contact me through the methods below:

  Github: [${data.github}](https://github.com/${data.github})

  Email: [${data.email}](mailto:${data.email})

`;

}

module.exports = generateMarkdown;