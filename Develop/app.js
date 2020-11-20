const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const prompt = require('./prompt')
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const teamData = [];


async function createManager() {

    const managerInput = await inquirer.prompt(prompt.manager)
    const manager = new Manager(
        managerInput.managerName,
        managerInput.managerId,
        managerInput.managerEmail,
        managerInput.managerOfficeNumber
    )
    teamData.push(manager)
    createEmployee();

}


async function createEmployee() {

    const employeeInput = await inquirer.prompt(prompt.employee)
    // console.log(employeeResponse)
        switch (employeeInput.typeOfEmployee) {
            case 'Intern':
                createIntern();
                break;

            case 'Engineer':
                createEngineer();
                break;

            default:

                const renderedTeam = render(teamData)
                fs.writeFile(outputPath, renderedTeam, (err) => {
                    if (err){
                        console.log(err);
                    }
                    console.log('The file is saved.');
                })
                break;
        }
}

createManager();


async function createEngineer() {

    const engineerInput = await inquirer.prompt(prompt.engineer)
    const engineer = new Engineer(
        engineerInput.engineerName,
        engineerInput.engineerId,
        engineerInput.engineerEmail,
        engineerInput.engineerGitHub
    )
    teamData.push(engineer)

createEmployee();
}


async function createIntern() {

    const internInput = await inquirer.prompt(prompt.intern)
    const intern = new Intern(
        internInput.internName,
        internInput.internId,
        internInput.internEmail,
        internInput.internSchool

    )
    teamData.push(intern)

    createEmployee();

}
