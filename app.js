const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
async function generator() {
    console.log('Starting a new descriptive adventure!');

    inquirer.prompt([
            {
                name: 'memberInfo',
                type: 'list',
                choices: ['Manager', 'Engineer', 'Intern'],
                message: 'What are you?'
            },
            {
                type: 'input',
                message: 'What is your Email',
                name: 'memberEmail'
            },
    ]).then(answer => {
            console.log(answer);
            switch (answer.memberInfo) {
                case 'Manager':
                    managerMenu();
                    break;
                case 'Engineer':
                    engineerMenu();
                    break;
                case 'Intern':
                    internMenu();
                    break;
                default:
                    return;
            }
        })
}

const managerMenu = () => {
    console.log('Manager Menu Work');
    inquirer.prompt([
        {
            name: 'managerAction',
            type: 'list',
            choices: ['Create Manager'],
            message: 'Choose Manager Action'
        }
    ]).then(answer => {
        switch (answer.managerAction) {
            case 'Create Manager':
                createManager();

        }
    })
};

const createManager = () => inquirer.prompt([
    {
        type: 'input',
        message: 'What is your Name',
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'What is your id',
        name: 'managerId'
    },
    {
        type: 'input',
        message: 'What is your Email',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'What is your Office Number',
        name: 'managerOfficeNumber'
    },
]).then(answer => {
    const newManager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber)

    team.push(newManager)

    console.log(newManager);
    }
)

generator();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
