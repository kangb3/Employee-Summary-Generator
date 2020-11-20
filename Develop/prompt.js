/// Holds the questions used for user prompt in CLI


module.exports = {

    employee: [
        {
            type: 'list',
            name: 'typeOfEmployee',
            message: 'Do you want to add an Engineer, Intern, or complete the team?',
            choices:['Engineer', 'Intern', 'Complete team'],
            default: 'Complete team'
        }
    ],

    manager: [
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the Manager\'s name?:'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the Manager\'s ID?:'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the Manager\'s email:'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the Manager\'s office number?:'
        }
    ],

    intern: [
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern\'s name?:'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the intern\'s ID?:'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern\'s email?:'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the intern\'s school name?:'
        }
    ],



    engineer: [
        {
            type: 'input',
            name: 'engineerName',
            message: 'Enter engineer name:'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Enter engineer ID:'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Enter engineer email:'
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: 'Engineer GitHub username:'
        }
    ]

}