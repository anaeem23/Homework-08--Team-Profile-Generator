const inquirer = require("inquirer");
const fs = require("fs");



var Engineer = []
var String = "Test"


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

class EngineerClass {
    constructor(response) {
        this.name = response.eName;
        this.ID = response.eID;
        this.email = response.email;
        this.github = response.eGithub;
        this.role = 'Engineer';
    }
        display() {

        //     // const head = $('<div class="card" style="width: 18rem;">')
        //     // const body = $('<div class="card-body">')
        //     // const title = $(' <h5 class="card-title">')
        //     // title.text(this.name)
        //     // const subtitle = $('<h6 class="card-subtitle mb-2 text-muted">')
        //     // subtitle.text('Engineer')
        //     // const content = $('<ul class="list-group list-group-flush">')
        //     // const list = $('<li class="list-group-item">')

        //     // $('body').append(head).append(body).append(title).append(subtitle).append(content)

        //     // content.append(list).append(this.name)
        //     // content.append(list).append(this.ID)

        //     const head = document.createElement('div')
        //     head.classList.add('card')
        //     const body1 = document.createElement('div')
        //     body.classList.add('card-body')
        //     const title = document.createElement('h5')
        //     title.classList.add('card-title')
        //     title.textContent(this.name)
        //     const subtitle = document.createElement('h6')
        //     subtitle.classList.add('card-subtitle')
        //     subtitle.textContent('Engineer')
        //     const content = document.createElement('ul')
        //     content.classList.add('list-group')
        //     const list = document.createElement(li)
        //     list.classList.add('list-group-item')
            

        //     document.body.appendChild(head)
        //     head.appendChild(body1)
        //     body1.appendChild(title)
        //     title.appendChild(subtitle)
        //     subtitle.appendChild(content)
        //     list.textContent(this.name)
        //     content.appendChild(list)
        //     list.textContent(this.ID)
        //     content.appendChild(list)


        // };
        
    };

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
    inquirer.prompt(EngineerQ).then(response => {
        console.log(response)
        const EngineerEmp = new EngineerClass(response)
        // Engineer.display()
        Engineer.push(EngineerEmp)
        if (response.class === 'Engineer') {
            Engineer1()
        } else {console.log('done')
        console.log(Engineer)
        Write(Engineer)
    }

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


function Write(Label) {
    console.log(Label)
    Label.forEach(element => {

        text1 = `
        
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${element.role}</h6>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">${element.ID}</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
       
        </div>
      </div>`

      String += ` 
      
      ${text1}`;
      
    });
    const Template = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    


    ${String}


    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <script src="./index.js"></script>
</body>
</html>
`
    fs.writeFile('sampleTest.html', Template, (err) =>
    err ? console.error(err) : console.log("Commit logged!")
  )
}