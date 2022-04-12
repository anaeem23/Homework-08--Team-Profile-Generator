const inquirer = require("inquirer");
const fs = require("fs");

const quesctions = [
  {
    type: "input",
    message: "What is then name of your Project?",
    name: "projectTitle",
  },

  {
    type: "list",
    message: "Please choose the license for your project",
    name: "licence",
    choices: [
      "Mit-License",
      "GNU-GPLv3",
      "Apache",
      "Cloud_Native_Computing_Foundation",
      "GNU",
      "npm-packages",
      "OpenBSD",
      "Rust",
      "WordPress",
    ],
  },
];

const classes = [
  {
    type: "list",
    message: "What are you",
    name: "class",
    choices: ["Employee", "Manager", "Engineer", "Intern"],
  },
];

const EngineerQ = [
  {
    type: "input",
    message: "Please enter the Engineer's name",
    name: "eName",
  },

  {
    type: "input",
    message: "Please enter the Engineer's ID?",
    name: "eID",
  },

  {
    type: "input",
    message: "Please enter the Engineer's email",
    name: "eEmail",
  },

  {
    type: "input",
    message: "Please enter the Engineer's Github username?",
    name: "eGithub",
  },

  {
    type: "list",
    message: "What are you",
    name: "class",
    choices: ["Employee", "Manager", "Engineer", "Intern"],
  },
];

class Engineer {
    constructor(response) {
        this.name = response.eName
        this.ID = response.eID
        this.email = response.email
        
    }

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(classes).then((response) => {
    console.log(response);

    if (response.class ==='Engineer') {
        Engineer1()
    }
    // TeamMembers(response.class);
  });
}


function Engineer1() {
    inquirer.prompt(Engineer).then(response => {
        console.log(response)
        if (response.class === 'Engineer') {
            Engineer1()
        } else {console.log('done')}
    })
}

// Function call to initialize app
init();

function TeamMembers(response) {
   let ID = response
  while (ID != "Done") {
    if (ID === "Engineer") {
      inquirer.prompt(Engineer).then((response) => {
        ID = response.class;
        return ID
      });
    } else {
      console.log("Done");
    }

    console.log(ID);
  }
}
