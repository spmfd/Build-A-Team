

const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
              ${manager.name}
              <br>
              <i class="fa-solid fa-mug-hot"></i>${manager.title}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
              <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
          </div>
        `;
    };

    const generateEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
              ${engineer.name}
              <br>
              <i class="fa-sharp fa-solid fa-glasses"></i> ${engineer.title}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</li>
              <li class="list-group-item">Github: ${engineer.github}</li>
            </ul>
          </div>
        `;
    };

    const generateIntern = intern => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
          ${intern.name}
          <br>
          <i class="fa-solid fa-graduation-cap"></i> ${intern.title}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </div>
        `;
    };

    const html = [];

    html.push(team.filter(employee => employee.title === "Manager").map(manager => generateManager(manager)));
    html.push(team.filter(employee => employee.title === "Engineer").map(engineer => generateEngineer(engineer)).join(""));
    html.push(team.filter(employee => employee.title === "Intern").map(intern => generateIntern(intern)).join(""));

    return html.join("");
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>    
        </header>
        <div class="flex-container">
        ${generateTeam(team)}
        </div>
    
        <script src="https://kit.fontawesome.com/537db1d34d.js" crossorigin="anonymous"></script>
    </body>
    </html>
    `

}