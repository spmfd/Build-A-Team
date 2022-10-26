const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Output Directory
const DIST_DIR = path.resolve(__dirname, 'dist');
// Output file path and name
const outputPath = path.join(DIST_DIR, 'team.html');

// Array to input team member selections
const teamMembers = [];

// Function to begin the team Builder
function gatherTeam() {
    addManager();
}

// Adding the Manager for the team
function addManager () {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the team manager's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "officeNumber",
        },
    ])
    .then((response) => {
        const manager = new Manager(
          response.name,
          response.id,
          response.email,
          response.officeNumber
        );
        console.table(manager);
        teamMembers.push(manager);
        addTeamMember();
      });
  }

  // Giving the user the option of choosing additional members for the team, engineers and interns
function addTeamMember() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Add an engineer or intern to the team?",
          choices: ["Engineer", "Intern", "I don't want to add any more team members"],
          name: "teammemberrole",
        },
      ])
      .then((response) => {
        if (response.teammemberrole === "Engineer") {
          addEngineer();
        } else if (response.teammemberrole === "Intern") {
          addIntern();
        } else {
          createFile();
        }
      });
  }

  // Questions for engineer input
  function addEngineer () {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the Engineer's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the Engineer's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the Engineer's Github Username",
            name: "github",
        },
    ])
    .then((response) => {
        const engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response.github
        );
        console.table(engineer);
        teamMembers.push(engineer);
        addTeamMember();
      });
  }
  
  // Questions for intern input
  function addIntern () {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the Intern's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the Intern's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What school does the intern go to?",
            name: "school",
        },
    ])
    .then((response) => {
        const intern = new Intern(
          response.name,
          response.id,
          response.email,
          response.school
        );
        console.table(intern);
        teamMembers.push(intern);
        addTeamMember();
      });
  }


  // function to create the file itself
function createFile(){
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    } else {
        fs.writeFileSync(outputPath, templateHTML(teamMembers), 'utf-8');
        console.log('HTML file created in the dist folder');
    }
}

  gatherTeam();