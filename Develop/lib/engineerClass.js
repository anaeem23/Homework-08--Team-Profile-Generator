const Employee = require('employeeClass')

class Engineer extends Employee {
    constructor(response) {
      super(response);
      this.github = response.Github;
      this.role = "Engineer";
    }
  
    getGithub() {
      console.log(this.github);
      return this.github
    }
  }

  module.exports = Engineer