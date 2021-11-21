// const generateCardSection = employeeArray => {
//     const cardSectionArray = generateCardSectionArray(employeeArray);
// //for each index of the generateCardSectionArray, add it to 
//     string = ''
//     console.log('1234567908', cardSectionArray)
    
    
// }

const generateCardSection = async employeeArray => {
    //this is an array of all of the html for each employee card
    const cardArrayMap = employeeArray.map(async employee => {
        const mappedCardArray = await generateCard(employee); 
        return mappedCardArray
    })

    return Promise.all(cardArrayMap).then(data => {
       return data
    })
    
}

//make each card and return the html
    const generateCard = async employee => {
        const employeeNow = await githubSchoolOffice(employee)
        return `
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${employee.getName()}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                  <a href="mailto:${employee.getEmail()}" class="card-link">${employee.getEmail()}</a>
                  </br>
                  ${employeeNow}
                </div>
        </div>
        `
    }

  // check which property this object has, since it could be any employee type, and return the appropriate html.
    const githubSchoolOffice = async employee => {
        if(employee.school) {
            return `<a href="#" class="card-link">Attended: ${employee.getSchool()}</a>`
        } else if (employee.github) {
            return `<a href="https://${employee.getGithub()}.github.io" class="card-link">GitHub: ${employee.getGithub()}</a>`
        } else if (employee.officeNumber) {
            return `<p class="card-link">Office Number: ${employee.officeNumber}</p>`
        }
    }

async function generatePage(employeeArray) { 
//html return
const htmlArray = await generateCardSection(employeeArray)
const htmlString = htmlArray.join(" ");

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
        
        <main class='d-flex justify-content-around mt-5'>
            ${htmlString}
        </main>
    </body>
    
    </html>
    `
}

module.exports = generatePage;