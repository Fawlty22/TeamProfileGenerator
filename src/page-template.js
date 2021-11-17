

const generateCardSection = employeeArray => {

    //this is an array of all of the html for each employee card
    const cardArray = employeeArray.map(employee => {
        generateCard(employee)
    })

    console.log('cardArray', cardArray)
    //return the html for each card as one big string.
    // return cardArray.join('')
    //****FOR NEXT SESSION */
    //cardarray is coming back as undefined and i think it is because of 

}

//make each card and return the html
    const generateCard = employee => {
        return `
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${employee.getName()}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                  <a href="#" class="card-link">${employee.getEmail()}</a>
                  ${githubSchoolOffice(employee)}
                </div>
        </div>
        `
    }

  // check which property this object has, since it could be any employee type, and return the appropriate html.
    const githubSchoolOffice = employee => {
        if(employee.school) {
            return `<a href="#" class="card-link">${employee.getSchool()}</a>`
        } else if (employee.github) {
            return `<a href="#" class="card-link">${employee.getGithub()}</a>`
        } else if (employee.officeNumber) {
            return `<a href="#" class="card-link">${employee.officeNumber}</a>`
        }
    }

module.exports = employeeArray => { 
//html return
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
    </head>
    
    <body class='bg-dark'>
        <header class="bg-light d-flex justify-content-center">
            <div class="container-md">
              <p class="fs-1 text-center" href="#">My Team</p>
            </div>
        </header>
        
        <main class='d-flex justify-content-center'>
            ${generateCardSection(employeeArray)}
        </main>
    </body>
    
    </html>
    `
}

