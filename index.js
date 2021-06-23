/** @format */
const inquirer = require("inquirer");

//const fs = require("fs");
//const generatePage = require("./src/page-template.js");
//const pageHTML = generatePage(name, github);







//fs.writeFile('./index.html', generatePage(name, github), (err) => {
 // if (err) throw new Error(err);

 // console.log("ReadMe complete! Check out index.html to see the final product!");
//});

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "please enter project title to continue";
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of your project.",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "please enter description to continue";
        }
      },
    },

    {
      type: "input",
      name: "installation",
      message: "How do you install your project?",
    },

    {
      type: "input",
      name: "usage",
      message: "What is this product used for?",
    },

    {
      type: "input",
      name: "contributing",
      message: "Who contributed to this project?",
    },

    {
      type: "input",
      name: "license",
      message: "choose a license for this project",
      choices: ["GNU", "ISC", "MIT", "Mozilla", "Academic", "Apache"],
    },

    {
      type: "input",
      name: "questions",
      message: "Any issues?",
    },

    {
      type: "input",
      name: "tests",
      message: "Provide test (optional)",
    },

    {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username.",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "please enter username to continue";
        }
      },
    },

    {
      type: "input",
      name: "email",
      message: "Please enter your E-mail address.",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "please enter E-mail to continue";
        }
      },
    },
  ]);


};

promptUser().then((answers) => console.log(answers));

















