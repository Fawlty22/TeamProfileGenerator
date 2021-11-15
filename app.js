const inquirer = require('inquirer');
const fs = require('fs');

let employeeArray = []; 


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
            name: 'officeNumber',
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
    .then(managerData => {
      //push object to employeeArray
      managerData.type = 'manager'
      employeeArray.push(managerData);

      //generateHTML using this object


      //prompt and log
        promptEmployeeType();
        console.log(managerData);
    })
}

const promptEmployeeType = () => {
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
            promptEngineer()
        } else if(typeData.employeeType === 'Intern'){
            promptIntern()
        } else if (typeData.employeeType === "I don't want to add anymore team members") {
            console.log('HTML file generated!')
            console.log(employeeArray)
        }
    })

}


const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is this engineer's name? (Required)",
            validate: engineerName => {
              if (engineerName) {
                return true;
              } else {
                console.log("Please enter this engineer's name!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'engineerID',
            message: "What is this engineer's ID #? (Required)",
            validate: engineerID => {
              if (engineerID) {
                return true;
              } else {
                console.log("Please enter this engineer's ID #!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'engineerEmail',
            message: "What is this engineer's email? (Required)",
            validate: engineerEmail => {
              if (engineerEmail) {
                return true;
              } else {
                console.log("Please enter this engineer's email!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'engineerGithub',
            message: "What is this engineer's Github username? (Required)",
            validate: engineerGithub => {
              if (engineerGithub) {
                return true;
              } else {
                console.log("Please enter this engineer's Github username!");
                return false;
              }
            }
          },
    ])
    .then(engineerData => {
      //push object to employeeArray
      engineerData.type = 'engineer'
      employeeArray.push(engineerData);

      //generateHTML using this object

      //reprompt and log
        promptEmployeeType();
        console.log(engineerData);
    })
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is this intern's name? (Required)",
            validate: internName => {
              if (internName) {
                return true;
              } else {
                console.log("Please enter this intern's name!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'internID',
            message: "What is this intern's ID #? (Required)",
            validate: internID => {
              if (internID) {
                return true;
              } else {
                console.log("Please enter this intern's ID #!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'internEmail',
            message: "What is this intern's email? (Required)",
            validate: internEmail => {
              if (internEmail) {
                return true;
              } else {
                console.log("Please enter this intern's email!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'internGithub',
            message: "What is this intern's Github username? (Required)",
            validate: internGithub => {
              if (internGithub) {
                return true;
              } else {
                console.log("Please enter this intern's Github username!");
                return false;
              }
            }
          },
    ])
    .then(internData => {
      //push object to employeeArray
      internData.type = 'intern'
      employeeArray.push(internData);
      //generateHTML using this object

      //reprompt and log
        promptEmployeeType();
        console.log(internData);
    })

}





const promptUser = () => {
    promptManager();
}


promptUser();

export {employeeArray}; 