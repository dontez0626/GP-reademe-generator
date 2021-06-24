/** @format */

// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const { generateMarkdown } = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
  inquirer
    .prompt([
      {
        name: "Title",
        message: "What is the title of your project?",
        type: "input",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "please enter value to continue";
          }
        },
      },
      {
        type: "input",
        name: "Description",
        message: "Give a short description of your project",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "please enter value to continue";
          }
        },
      },
      {
        type: "input",
        name: "Installation",
        message:
          "What instructions should users follow to install your application?",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "please enter value to continue";
          }
        },
      },
      {
        type: "input",
        name: "Usage",
        message: "How to use this applicaiton?",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "please enter value to continue";
          }
        },
      },
      {
        type: "list",
        message: "What is the license for this project?",
        name: "License",
        choices: [
          "ISC [![License: (https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
          "MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
          "APACHE 2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
          "artistic-2.0 [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
          "GPL [![License: (https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
          "None",
        ],
      },
      {
        type: "input",
        name: "Contributing",
        message: "How can users contribute to this project?",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "please enter value to continue.";
          }
        },
      },
      {
        type: "input",
        name: "Tests",
        message: "Provide test instructions",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "please enter value to continue";
          }
        },
      },
      {
        type: "input",
        name: "Questions",
        message: "Enter your github username.",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "please enter value to continue";
          }
        },
      },

      {
        type: "input",
        name: "Email",
        message: "Enter your Email address",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "please enter value to continue";
          }
        },
      },
    ])
    // TODO: Create a function to write README file
    .then((answers) => {
      writeToFile(answers);
      console.log("README.md is now created!");
    })
    .catch((err) => console.error(err));
};

const writeToFile = (answers) => {
  writeFileAsync("README.md", generateMarkdown(answers));
};
// Function call to initialize app!
promptUser();
