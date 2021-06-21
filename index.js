/** @format */

// TODO: Include packages needed for this application
const inquirer = require("inquirer");

//const fs = require('fs');
//const generatePage = require('./src/page-template');

//const pageHTML = generatePage(name, github);

//fs.writeFile('./index.html', pageHTML, err => {
//if (err) throw err;

//console.log('ReadMe complete! Check out index.html to see the output!');
//});

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project title?",
    },

    {
      type: "input",
      name: "questions",
      message: "What is your E-mail address?",
    },

    {
      type: "input",
      name: "questions",
      message: " please enetr your Git Hub username",
    },

    {
      type: "input",
      name: "installation",
      message: "how to install your project",
    },

    {
      type: "input",
      name: "description",
      message: "What is the description of project?",
    },

    {
      type: "input",
      name: "contributing",
      message: "who contributed to your project",
    },

    {
      type: "input",
      name: "usage",
      message:
        "Provide instructions and examples of your project in use for the Usage section",
    },

    {
      type: "input",
      name: "test",
      message:
        "Provide tests for your application and provide examples on how to run them.",
    },

    {
      type: "list",
      message: "Choose a license for your project.",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
      ],
      name: "license",
    },
  ]);
};
promptUser().then((answers) => console.log(answers));

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
