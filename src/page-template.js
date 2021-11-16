
const generateCards = employeeArray => {
    let employeesArray = Object.values(employeeArray)
    console.log('generated array', employeesArray)

}












module.exports = templateData => {
//destructure parameter object
// const { name, type } = templateData;  
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
            ${generateCards(templateData)}
        </main>
    </body>
    
    </html>
    `
}