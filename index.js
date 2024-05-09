const inquirer = require('inquirer');
const shapes = require('./lib/shapes');

const logo_questions = [
    {
        //logo
        type: 'input',
        name: 'logo', 
        message: 'Enter up to three characters for your logo'
    },
    {
        //keyword color 
        type: 'input',
        name: 'key_color',
        message: 'Enter the desired logo color'
    },
    {
        //shape used in logo background
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to use for your logo?',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'Enter the color of the shape'
    }
]

// asks the user questions and prints the answer back
function init() {
    inquirer.prompt(logo_questions)
    .then(function(data){
        console.log(data);
    })
}

// call to initialize 
init();