const inquirer = require("inquirer");
const fs = require("fs");
const { response } = require("express");
const e = require("express");

// const Employee = require('./lib/employeeClass')
const Engineer = require('./lib/engineerClass')
const Intern = require('./lib/internClass')
const Manager = require('./lib/managerClass')

var String = "";
var listOfEmployees = [];

const introQ = [
  {
    type: "input",
    message: "Please enter the Team Manager's name",
    name: "Name",
  },

  {
    type: "input",
    message: "Please enter the Team Manager's ID?",
    name: "ID",
  },

  {
    type: "input",
    message: "Please enter the Team Manager's email",
    name: "Email",
  },

  {
    type: "input",
    message: "Please enter the Team Manager's office number",
    name: "offNum",
  },

  {
    type: "list",
    message: "Please pick one",
    name: "class",
    choices: ["Engineer", "Intern", "Done"],
  },
];

const engineerQ = [
  {
    type: "input",
    message: "Please enter the Engineer's name",
    name: "Name",
  },

  {
    type: "input",
    message: "Please enter the Engineer's ID?",
    name: "ID",
  },

  {
    type: "input",
    message: "Please enter the Engineer's email",
    name: "Email",
  },

  {
    type: "input",
    message: "Please enter the Engineer's Github username?",
    name: "Github",
  },

  {
    type: "list",
    message: "Please pick one",
    name: "class",
    choices: ["Engineer", "Intern", "Done"],
  },
];

const internQ = [
  {
    type: "input",
    message: "Please enter the Intern's name",
    name: "Name",
  },

  {
    type: "input",
    message: "Please enter the Intern's ID?",
    name: "ID",
  },

  {
    type: "input",
    message: "Please enter the Intern's email",
    name: "Email",
  },

  {
    type: "input",
    message: "Please enter the Intern's school?",
    name: "School",
  },

  {
    type: "list",
    message: "Please pick one",
    name: "class",
    choices: ["Engineer", "Intern", "Done"],
  },
];









function init() {
  inquirer.prompt(introQ).then((response) => {
    const newManager = new Manager(response);

    listOfEmployees.push(newManager);

    if (response.class === "Engineer") {
      engineerInit();
    } else if (response.class === "Intern") {
      internInit();
    } else {
      Publish();
    }
  });
}

function engineerInit() {
  inquirer.prompt(engineerQ).then((response) => {
    const newEngineer = new Engineer(response);
    listOfEmployees.push(newEngineer);

    if (response.class === "Engineer") {
      engineerInit();
    } else if (response.class === "Intern") {
      internInit();
    } else {
      Publish();
    }
  });
}

function internInit() {
  inquirer.prompt(internQ).then((response) => {
    const newIntern = new Intern(response);
    listOfEmployees.push(newIntern);

    if (response.class === "Engineer") {
      engineerInit();
    } else if (response.class === "Intern") {
      internInit();
    } else {
      Publish();
    }
  });
}

function Publish() {
  listOfEmployees.forEach((element) => {
    if (element.role === "Manager") {
      employeeData = `
        
            <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${element.role}</h6>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${element.ID}</li>
              <li class="list-group-item">Email: <a href="mailto:${element.email}"> ${element.email} </a></li>
              <li class="list-group-item">Office Number: ${element.officeNumber}</li>
            </ul>
        
            </div>
          </div>
            `;
    } else if (element.role === "Engineer") {
      employeeData = `
        
            <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${element.role}</h6>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${element.ID}</li>
              <li class="list-group-item">Email: <a href="mailto:${element.email}"> ${element.email} </a></li>
              <li class="list-group-item">Github: <a href="https://github.com/${element.github}" target="_blank"> ${element.github}</a></li>
            </ul>
        
            </div>
          </div>
            `;
    } else {
      employeeData = `
        
            <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${element.role}</h6>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${element.ID}</li>
              <li class="list-group-item">Email:<a href="mailto:${element.email}"> ${element.email} </a> </li>
              <li class="list-group-item">School: ${element.school}</li>
            </ul>
        
            </div>
          </div>
            `;
    }

    String += `${employeeData}`;
  });

  const Template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        
    <div class="mt-0 p-5 bg-primary text-white">
    <h1 class="justify-content-center">Employee Database</h1>
  </div>


    <div class = "container">
    <div class="row justify-content-around">
        ${String}
    
    </div>
    </div>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    
        <script src="./index.js"></script>
    </body>
    </html>`;

  fs.writeFile("SAMPLE.html", Template, (err) =>
    err ? console.error(err) : console.log("Done!")
  );
}

init();
