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
const questions = [
    {
        type: 'input',
        message:"What is the project title?",
        name: 'title',
        validate: (value) => { if (value) { return true } else { return 'please enter value to continue' } },
    },


    {
        type: 'input',
        message:" What is the description of project?",
        name: 'description',
        validate: (value) => { if (value) { return true } else { return 'please enter value to continue' } },
    },


    {
        type: 'input',
        message: 'how to install your app?',
        name: 'installation',
        validate: (value) => { if (value) { return true } else { return ' please enter a value to continue' } }
    },

    {
        type: 'input',
        message: 'Who contributed to your project?',
        name: 'Contributing ',
        validate: (value) => { if (value) { return true } else { return ' please enter a value to continue' } }
    },
    
    
    {

        type: 'input',
        message: 'License',
        name: 'License',
        validate: (value) => {
            if (value) { return true } else { return ' please enter a value to continue' }}
        
    },

    {
        type: 'input',
        message: 'E-mail',
        name: 'questions',
        validate: (value) => {
            if (value) { return true } else { return ' please enter a value to continue' }}
        
    },

    {
        type: 'input',
        message: 'Github username',
        name: 'questions',
        validate: (value) => { if (value) { return true } else { return ' please enter a value to continue' } },
    },

    {
        type: 'input',
        message: 'usage',
        name: 'usage',
        validate: (value) => { if (value) { return true } else { return ' please enter a value to continue' } },
    },

    {
        type: 'input',
        message: 'Test',
        name: 'Test',
        validate: (value) => { if (value) { return true } else { return ' please enter a value to continue' } },
    },
]






// TODO: Create a function to write README file

// TODO: Create a function to initialize app


// Function call to initialize app

