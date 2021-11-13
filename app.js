const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
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
    ])
}

promptUser();