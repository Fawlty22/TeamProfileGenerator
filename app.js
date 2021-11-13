const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');



const promptManager = () => {
    console.log('Please build your team:')
    return inquirer.prompt([
        //Ask manager questions
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name? (Required)",
            validate: managerNameInput => {
              if (managerNameInput) {
                return true;
              } else {
                console.log('Please enter your team managers name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'managerID',
            message: "What is the team manager's ID #? (Required)",
            validate: managerIDInput => {
              if (managerIDInput) {
                return true;
              } else {
                console.log('Please enter your team managers ID #!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email? (Required)",
            validate: managerEmailInput => {
              if (managerEmailInput) {
                return true;
              } else {
                console.log('Please enter your team managers email!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's office number? (Required)",
            validate: managerOfficeInput => {
              if (managerOfficeInput) {
                return true;
              } else {
                console.log('Please enter your team managers office number!');
                return false;
              }
            }
          },
    ])
}

const promptEmployeeType = managerData => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: "What kind of team member would you like to add? (Required)",
            choices: ['Engineer', 'Intern', "I don't want to add anymore team members"],
            validate: employeeTypeInput => {
              if (employeeTypeInput) {
                return true;
              } else {
                console.log('Please enter an employee type!');
                return false;
              }
            }
          },
    ])
    .then(typeData => {
        if (typeData.employeeType === 'Engineer'){
            promptEngineer(managerData)
        } else if(typeData.employeeType === 'Intern'){
            promptIntern(managerData)
        }
    })

}

const promptEngineer = () => {

}

const promptIntern = () => {
    
}





const promptUser = () => {
    promptManager()
    .then(promptEmployeeType)
}


promptUser();