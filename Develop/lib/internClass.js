const Employee = require('employeeClass')

class Intern extends Employee {
    constructor(response) {
      super(response);
      this.school = response.School;
      this.role = "Intern";
    }
  
    getSchool() {
      console.log(this.school);
      return this.school
    }
  }

  module.exports = Intern