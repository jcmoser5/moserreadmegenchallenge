const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [

    // Title

    {
        name: 'title',
        message: 'What is the title of your project?',
        type: 'input',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title for your project');
                return false;
            }
        }
    },

    // Contributions

    {
        name: 'contributions',
        message: 'Enter the names of everyone that contributed to the project',
        type: 'input',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('Please enter the names for those that contributed')
            }
        }
    },

    // Questions

    {
        name: 'github',
        message: 'What is your GitHub username?',
        type: 'input',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username')
            }
        }
    },

    {
        name: 'email',
        message: 'What is your email address?',
        type: 'input',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter email address')
            }
        }
    },

    // Description

    {
        name: 'description',
        message: 'Enter a description of your project',
        type: 'input',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project');
                return false;
            }
        }
    },

    // Installation

    {
        name: 'installation',
        message: 'What steps are required to install your project?',
        type: 'input'
    },

    // Usage

    {
        name: 'usage',
        message: 'How is your project used?',
        type: 'input',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please describe how your project is used')
            }
        }
    },

    // License

    {
        name: 'license',
        message: 'Enter a license for your project.',
        type: 'list',
        choices: ['MIT', 'ISC', 'GNU GPLv3'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please enter a license for your project');
                return false;
            }
        }
    },

    // Contributing

    {
        name: 'contributing',
        message: 'How can others contribute to your project?',
        type: 'input'
    },

    // Tests

    {
        name: 'tests',
        message: 'How do users run tests?',
        type: 'input'
    }
];

const mockAnswers = {
    title: 'Readme Generator',
    contributions: 'Jonathan Moser',
    github: 'jcmoser5',
    email: 'jonathancmoser@gmail.com',
    description: 'Generates Readme files for your projects.',
    installation: 'Clone repo, install dependencies using node.',
    usage: 'Run index with node and answer the questions to generate a readme.',
    license: 'MIT',
    contributing: 'contact me if you wish to contribute',
    tests: 'Tests can be run at user discretion.'
};

// function to write readme

function writeToFile(fileName, markdown) {
    fs.promises.writeFile(`./output/${fileName}.md`, markdown);
}

(async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const fileName = answers.title;
        const markdown = generateMarkdown(answers);
        writeToFile(fileName, markdown);
        console.log('Readme successfully generated in output folder!');
    } catch (err) {
        console.log(err);
    }
})();