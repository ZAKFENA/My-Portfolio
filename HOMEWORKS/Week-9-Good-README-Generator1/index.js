const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter steps required to install",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter instructions of use",
    },
    {
      type: "input",
      name: "contribution",
      message: "Please enter instructions of how to contribute",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Choose license",
      choices: ["MIT", "Apache 2.0 ", "Perl"],
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your github username",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email",
    },
  ]);
}

function generateREADME(answers) {
  return `
# ${answers.title}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution 
${answers.contribution}

## License
${answers.license}

## Question
Contact: ${answers.email}
Git Hub Page: ${answers.github}
`;
}

promptUser()
  .then(function (answers) {
    const readme = generateREADME(answers);

    return writeFileAsync("README.md", readme);
  })
  .then(function () {
    console.log("Successfully wrote to README.md");
  })
  .catch(function (err) {
    console.log(err);
  });
