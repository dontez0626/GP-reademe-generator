// TODO: Include packages needed for this application
const inquirer = require('inquirer');

//const fs = require('fs');
//const generatePage = require('./src/page-template');

//const pageHTML = generatePage(name, github);

//fs.writeFile('./index.html', pageHTML, err => {
  //if (err) throw err;

  //console.log('ReadMe complete! Check out index.html to see the output!');
//});


// TODO: Create an array of questions for user input
inquirer
  .prompt([
    { type: "input", message: "What is the project title?", name: "title" },
  ])
  .then((answers) => console.log(answers));







// TODO: Create a function to write README file

// TODO: Create a function to initialize app


// Function call to initialize app

