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
const generator = () => {
    console.log('Adding Team Member Info');
    inquirer.prompt([
            {
                name: 'memberInfo',
                type: 'list',
                choices: ['Manager', 'Engineer', 'Intern'],
                message: 'What are you?'
            },
    ]).then(answer => {
            // console.log(answer);
            switch (answer.memberInfo) {
                case 'Manager':
                    confirmManager();
                    break;
                case 'Engineer':
                    confirmEngineer();
                    break;
                case 'Intern':
                    confirmIntern();
                    break;
                default:
                    return;
            }
        })
}

const confirmManager = () => {
    console.log('Manager Menu');
    inquirer.prompt([
        {
            name: 'managerAction',
            type: 'list',
            choices: ['Yes', 'No'],
            message: 'What are you?'
        }
    ]).then(answer => {
        console.log(answer.managerAction);
        switch (answer.managerAction) {
            case 'Yes':
                createManager();
                break;
            default:
                generator();
        };
    });
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
    team.push(newManager);
    // console.log(newManager);
    // console.log(team);
    }
)

const confirmEngineer = () => {
    console.log('Engineer Menu');
    inquirer.prompt([
        {
            name: 'engineerAction',
            type: 'list',
            choices: ['Yes', 'No'],
            message: 'Create Engineer?'
        }
    ]).then(answer => {
        switch (answer.engineerAction) {
            case 'Yes':
                createEngineer();
                break;
            default:
                generator();
        }
    })
};

const createEngineer = () => inquirer.prompt([
    {
        type: 'input',
        message: 'What is your Name',
        name: 'engineerName'
    },
    {
        type: 'input',
        message: 'What is your id',
        name: 'engineerId'
    },
    {
        type: 'input',
        message: 'What is your Email',
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: 'What is your Git Hub User Name',
        name: 'gitHubUser'
    },
]).then(answer => {
    const newEngineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.gitHubUser)
    team.push(newEngineer);
    // console.log(newManager);
}
)

const confirmIntern = () => {
    console.log('Intern Menu');
    inquirer.prompt([
        {
            name: 'internAction',
            type: 'list',
            choices: ['Yes', 'No'],
            message: 'Create intern?'
        }
    ]).then(answer => {
        switch (answer.internAction) {
            case 'Yes':
                createIntern();
                break;
            default:
                generator();
        }
    })
};

const createIntern = () => inquirer.prompt([
    {
        type: 'input',
        message: 'What is your Name',
        name: 'internName'
    },
    {
        type: 'input',
        message: 'What is your id',
        name: 'internId'
    },
    {
        type: 'input',
        message: 'What is your Email',
        name: 'internEmail'
    },
    {
        type: 'input',
        message: 'What school did you attend',
        name: 'internSchool'
    },
]).then(answer => {
    const newIntern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool)
    team.push(newIntern);
    // console.log(newManager);
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
