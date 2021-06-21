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
      message: "What is the project title? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Enter project title to continue!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "questions",
      message: "What is your E-mail address? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Enter E-mail to continue!");
          return false;
        }
      },
    },
  ]);
};

const promptProject = () => {
  console.log(`
=================
Add a New Project
=================
  `);
  return inquirer.prompt([
    {
      type: "input",
      name: "link",
      message: "What is your Git Hub link? (required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Enter Git Hub link to continue!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "installation",
      message: "how to install your project.",
    },

    {
      type: "input",
      name: "description",
      message: "What is the description of project?",
    },

    {
      type: "input",
      name: "contributing",
      message: "who contributed to your project?",
    },

    {
      type: "input",
      name: "usage",
      message:
        "Provide instructions and examples of your project in use for the Usage section.",
    },

    {
      type: "input",
      name: "test",
      message:
        "Provide tests for your application and provide examples on how to run them.",
    },

    {
      type: "checkbox",
      name: "license",
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
    },
  ]);
};
promptUser()
  .then((answers) => console.log(answers))
  .then(promptProject)
  .then((projectAnswers) => console.log(projectAnswers));

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
